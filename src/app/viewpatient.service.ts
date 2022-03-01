import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewpatientService {

  constructor(private httpClient:HttpClient) { }

  API = "http://localhost:9001/api/v4"

    public getpatients(){
      return this.httpClient.get(this.API + '/patients');
    }
}
