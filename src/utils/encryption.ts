
import CryptoJS from 'crypto-js';

const SECRET_KEY = 'gv-software-secure-key-2024';

export class EncryptionService {
  static encrypt(data: any): string {
    try {
      const jsonString = JSON.stringify(data);
      const encrypted = CryptoJS.AES.encrypt(jsonString, SECRET_KEY).toString();
      return encrypted;
    } catch (error) {
      console.error('Erro ao criptografar dados:', error);
      return '';
    }
  }

  static decrypt(encryptedData: string): any {
    try {
      const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
      const decryptedString = bytes.toString(CryptoJS.enc.Utf8);
      return JSON.parse(decryptedString);
    } catch (error) {
      console.error('Erro ao descriptografar dados:', error);
      return null;
    }
  }

  static encryptLocalStorage(key: string, data: any): void {
    const encrypted = this.encrypt(data);
    localStorage.setItem(key, encrypted);
  }

  static decryptLocalStorage(key: string): any {
    const encrypted = localStorage.getItem(key);
    if (!encrypted) return null;
    return this.decrypt(encrypted);
  }

  static encryptSessionStorage(key: string, data: any): void {
    const encrypted = this.encrypt(data);
    sessionStorage.setItem(key, encrypted);
  }

  static decryptSessionStorage(key: string): any {
    const encrypted = sessionStorage.getItem(key);
    if (!encrypted) return null;
    return this.decrypt(encrypted);
  }
}
