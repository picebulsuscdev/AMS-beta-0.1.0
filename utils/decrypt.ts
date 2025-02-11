import CryptoJS from "crypto-js";

export interface DecodedQRData {
  userID: string;
  name: string;
  section: string;
}

export function decryptHash(hash: string): DecodedQRData | null {
  try {
    const key = "pice-bulsu-ams";
    const decrypted = CryptoJS.AES.decrypt(hash, key).toString(
      CryptoJS.enc.Utf8,
    );
    //console.log("Decrypted string:", decrypted); // Add logging
    const parsedData = JSON.parse(decrypted);
    parsedData.userID = parsedData.userId; // Rename userId to userID
    delete parsedData.userId; // Remove the original userId key
    return parsedData as DecodedQRData;
  } catch (error) {
    console.error("Failed to decrypt hash:", error);
    return null;
  }
}
