import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewappoinmentService {

  constructor(private httpClient:HttpClient) { }

  API = "http://localhost:9001/api/v1"

  public getappointment(){
    return this.httpClient.get(this.API + '/appointments');
  }
  

  public deleteappoinment(ap_id:any){
    return this.httpClient.delete(this.API + '/appointment/{AP_ID}' + ap_id);
  }

}
