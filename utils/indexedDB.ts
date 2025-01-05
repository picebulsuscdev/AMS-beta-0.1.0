const DB_NAME = "attendance_tracker_db";
const DB_VERSION = 1;

let db: IDBDatabase | null = null;

export async function initDB(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (db) {
      resolve();
      return;
    }

    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = (event) => {
      console.error("IndexedDB error:", event);
      reject("Failed to open IndexedDB");
    };

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains("trackerInfo")) {
        db.createObjectStore("trackerInfo", { keyPath: "id" });
      }
      if (!db.objectStoreNames.contains("scans")) {
        db.createObjectStore("scans", { keyPath: "id" });
      }
      if (!db.objectStoreNames.contains("attendance")) {
        db.createObjectStore("attendance", { keyPath: "id" });
      }
    };

    request.onsuccess = (event) => {
      db = (event.target as IDBOpenDBRequest).result;
      console.log("IndexedDB initialized successfully");
      resolve();
    };
  });
}

export async function addItem(storeName: string, data: any): Promise<void> {
  return new Promise((resolve, reject) => {
    if (!db) {
      reject("Database not initialized");
      return;
    }

    const transaction = db.transaction(storeName, "readwrite");
    const store = transaction.objectStore(storeName);

    // Ensure the data has an 'id' field
    if (!data.id) {
      data.id = Date.now().toString();
    }

    const request = store.put(data);

    request.onsuccess = () => {
      console.log("Data successfully added to IndexedDB:", data);
      window.postMessage({ type: "indexedDB_change" }, window.location.origin);
      resolve();
    };
    request.onerror = (event) => {
      console.error(`Error adding item to ${storeName}:`, event);
      reject(`Failed to add item to ${storeName}`);
    };
  });
}

export async function getAllItems(storeName: string): Promise<any[]> {
  return new Promise((resolve, reject) => {
    if (!db) {
      reject("Database not initialized");
      return;
    }

    const transaction = db.transaction(storeName, "readonly");
    const store = transaction.objectStore(storeName);
    const request = store.getAll();

    request.onsuccess = (event) => {
      const result = (event.target as IDBRequest).result;
      resolve(result);
    };

    request.onerror = (event) => {
      console.error(`Error getting items from ${storeName}:`, event);
      reject(`Failed to get items from ${storeName}`);
    };
  });
}

export async function deleteDatabase(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (!db) {
      reject("Database not initialized");
      return;
    }

    db.close();
    const request = indexedDB.deleteDatabase(DB_NAME);

    request.onsuccess = () => {
      db = null;
      resolve();
    };
    request.onerror = (event) => {
      console.error("Error deleting database:", event);
      reject("Failed to delete database");
    };
  });
}
