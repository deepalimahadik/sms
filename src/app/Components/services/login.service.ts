import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment'
//import * as CryptoJS from 'crypto-js';
//import {EncryptService} from '../services/encrypt.service';

@Injectable()
export class LoginService {
  EncryptedData = {
    'FormData' : '',
  };
  //private apiLogin =  environment.apiUrl+ "ApplicationForm/AdminLogin"; //HRML Login Url
  //private apiLogin =  environment.apiUrl+ "Login/AdminLogin"; //TODO Login Url

  

  constructor(private _http:Http) { }

//  login(obj){
//   let headers = new Headers({ 'Content-Type': 'application/json' });
//   let options = new RequestOptions({ headers: headers });
//   return this._http.post(this.apiLogin, obj, options ).map((res: Response) => res.json())
// }

// validateUser(user){
//     let UserData = {
//         "UserID": user.username,
//         "Password":user.password,
//         "ProjectID": "4"//"2"
//       }
//     const sectkey = 'PBCPBCPB12345678';
//       const key = CryptoJS.enc.Utf8.parse(sectkey);
//       const iv = CryptoJS.enc.Utf8.parse(sectkey);
//       const encryptData = CryptoJS.AES.encrypt(JSON.stringify(UserData), key, {
//         keySize: 128 / 8,
//         iv: iv,
//         mode: CryptoJS.mode.CBC,
//         padding: CryptoJS.pad.Pkcs7
//       }).toString();
      
//       this.EncryptedData['FormData'] = encryptData;
//   let headers = new Headers({ 'Content-Type': 'application/json' });
//   let options = new RequestOptions({ headers: headers });
//   return this._http.post(this.apiLogin, this.EncryptedData, options ).map((res: Response) => res.json())
// }

public isAuthenticated(): boolean{
  return this.getToken() !== null;
}

storeToken(token:string){
  console.log('token ', token);
  sessionStorage.setItem('token', token);
}

getToken(){
  return sessionStorage.getItem('token');
}

removeToken(){
  return sessionStorage.removeItem('token');
}

}
