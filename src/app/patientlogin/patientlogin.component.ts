import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patientlogin',
  templateUrl: './patientlogin.component.html',
  styleUrls: ['./patientlogin.component.css']
})
export class PatientloginComponent implements OnInit {

  user: Patient = new Patient();
  submitted = false;
  message!: string;
  hasLoginFailed!: boolean;
 
  

  ngOnInit(): void {
  }

  newUser(): void {
    this.submitted = false;
    this.user = new Patient();
  }
  constructor(private patientService: PatientService, private router: Router) { }

  onSubmit() {
    this.submitted = true;
    this.validate();    
  }

  validate() {
   // alert(this.user.username);
    this.patientService.validatePatient(this.user).subscribe(data => {
   
     //console.log(data+" "+this.user)
    if(data!=null)
    {
    
    this.router.navigate(['/patient']);
    sessionStorage.setItem("username", this.user.p_username);
    sessionStorage.setItem("name", this.user.p_Name);
    sessionStorage.setItem("patientlogin","success");
    this.hasLoginFailed=false;
    }
    else
    {
    this.router.navigate(['/patientlogin']);
    this.message="Invalid Credentials....Try again!";
    this.hasLoginFailed=true;
    sessionStorage.setItem("patientlogin","failed");
    this.user = new Patient();
    }
    },
   error => console.log(error)
   
   );
  }

}
