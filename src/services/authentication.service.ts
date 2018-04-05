import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { User } from '../models';
import { AppSettings } from '../app/globalconstants';
import * as auth0 from 'auth0-js';
@Injectable()

export class AuthenticationService {
    user: User; 
    constructor(private http: HttpClient){ }

    auth0 = new auth0.WebAuth({
        clientID: 'RYxiswgrEAOpBpTUJik6kxTr_a_gtpON',
        domain: 'authenticateall.auth0.com',
        responseType: 'token id_token',
        audience: 'https://authenticateall.auth0.com/userinfo',
        redirectUri: 'http://localhost:4201/callback',
        scope: 'openid'
    })
    // login(username:string , password:string){

    //     return this.http.get<User[]>(AppSettings.RESTDB_URL + 'fusers?q={"username": "Puri"}' , AppSettings.httpOptions)
    //     .map(user => {
    //         if(user.)
    //     })
      
    // }
}