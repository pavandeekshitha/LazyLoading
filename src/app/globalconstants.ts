import {HttpHeaders} from '@angular/common/http';

export class AppSettings {
    public static RESTDB_URL = 'https://farmerconnect-a968.restdb.io/rest/';
    public static  httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'x-apikey': '5ab78b55f0a7555103cea78d'
        })
    };
 }
