import { Injectable } from '@angular/core';

import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class CipherService {

  private secretKey: string = '9cfb3aee-c278-412d-b3bc-1e173484ae6b';

  constructor() {
  }

  encryptJson(json: any) {
    return CryptoJS.AES.encrypt(JSON.stringify(json), this.secretKey).toString();
  }

  decryptJson(cipherJson: string) {
    const bytes = CryptoJS.AES.decrypt(cipherJson, this.secretKey);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  }
}
