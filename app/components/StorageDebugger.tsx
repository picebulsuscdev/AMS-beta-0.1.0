"use client";
import React, { useState, useEffect, useCallback } from "react";
import { formatBytes } from "@/utils/formatBytes";

const StorageDebugger = () => {
  const [storageSize, setStorageSize] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  const calculateStorageSize = useCallback(async () => {
    try {
      let totalSize = 0;
      const dbNames = await indexedDB.databases();

      for (const dbInfo of dbNames) {
        const dbName = dbInfo.name;

        if (dbName) {
          const request = indexedDB.open(dbName);
          request.onsuccess = (event) => {
            const db = (event.target as IDBOpenDBRequest).result as IDBDatabase;

            const transaction = db.transaction(db.objectStoreNames, "readonly");

            for (const storeName of db.objectStoreNames) {
              const store = transaction.objectStore(storeName);
              const getAllKeys = store.getAllKeys();

              getAllKeys.onsuccess = (event) => {
                const keys = (event.target as IDBRequest).result as IDBValidKey[];

                keys.forEach((key) => {
                  const getRequest = store.get(key);
                  getRequest.onsuccess = (event) => {
                    const item = (event.target as IDBRequest).result;
                    if (item) {
                      totalSize += JSON.stringify(item).length;
                      setStorageSize(formatBytes(totalSize));
                    }
                  };
                });
              };
            }
          };
          request.onerror = (event) => {
            console.error(
              "Error opening database for storage calculation",
              event,
            );
          };
        }
      }
    } catch (error) {
      console.error("Error calculating storage size:", error);
      setStorageSize(null);
    }
  }, []);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    calculateStorageSize();
    const handleStorageChange = () => {
      calculateStorageSize();
    };

    window.addEventListener("message", (event) => {
      if (event.data && event.data.type === "indexedDB_change") {
        handleStorageChange();
      }
    });

    return () => {
      window.removeEventListener("message", (event) => {
        if (event.data && event.data.type === "indexedDB_change") {
          handleStorageChange();
        }
      });
    };
  }, [isClient, calculateStorageSize]);

  return (
    <div className="fixed bottom-0 left-0 p-2 bg-gray-700 text-white text-xs z-50">
      Storage Used: {storageSize ? storageSize : "Loading..."}
    </div>
  );
};

export default StorageDebugger;