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
    return JSON.parse(decrypted) as DecodedQRData;
  } catch (error) {
    console.error("Failed to decrypt hash:", error);
    return null;
  }
}
