import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../models/index';

import {AppSettings} from '../app/globalconstants';

@Injectable()

export class UserService {

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(AppSettings.RESTDB_URL + 'fusers' , AppSettings.httpOptions);
    }

    create(user: User) {
        return this.http.post(AppSettings.RESTDB_URL + 'fusers', user);
    }
}
