import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewpatientService } from '../viewpatient.service';

@Component({
  selector: 'app-viewpatient',
  templateUrl: './viewpatient.component.html',
  styleUrls: ['./viewpatient.component.css']
})
export class ViewpatientComponent implements OnInit {

  patientlist:any;


  constructor(private _service:ViewpatientService,private router:Router) { 
    this.getpatientdetails();
  }
  ngOnInit(): void {
    let user = localStorage.getItem('user');
    if(!user){
      alert('Please Login First');
      this.router.navigateByUrl('');
    }
    throw new Error('Method not implemented.');
  }


  getpatientdetails(){
    this._service.getpatients().subscribe(
      (resp)=>{
        console.log(resp);
        this.patientlist = resp;
      },
      (err) =>{
        console.log(err);
      }
    );
  }
}