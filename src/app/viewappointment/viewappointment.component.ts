import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewappointmentService } from '../services/view_appointment.service';


@Component({
  selector: 'app-viewappointment',
  templateUrl: './viewappointment.component.html',
  styleUrls: ['./viewappointment.component.css']
})
export class ViewappointmentComponent implements OnInit {

  appoinmentlist:any;

  constructor(private viewappoinmentservice:ViewappointmentService,private router:Router) { 
    this.getappoinmentlist();
  }
  ngOnInit(): void {
    let user = localStorage.getItem('user');
    if(!user){
      alert('Please Login First');
      this.router.navigateByUrl('');
    }
    throw new Error('Method not implemented.');
  }


  getappoinmentlist(){
    this.viewappoinmentservice.getappointment().subscribe(
      (resp) => {
        console.log(resp);
        this.appoinmentlist =resp;
      },
      (err) => {
        console.log(err);
      }
    )
  }

  deleteappoinment(appointment:any){
    this.viewappoinmentservice.deleteappoinment(appointment.ap_id).subscribe(
      (resp) =>{
        console.log(resp);
        this.getappoinmentlist();
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
