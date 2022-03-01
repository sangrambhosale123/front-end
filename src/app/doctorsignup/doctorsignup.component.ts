import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { doctor_signupService } from '../services/doctor_signup.service';

@Component({
  selector: 'app-doctorsignup',
  templateUrl: './doctorsignup.component.html',
  styleUrls: ['./doctorsignup.component.css']
})
export class DoctorsignupComponent implements OnInit {

  exform!: FormGroup;

  constructor(private router:Router, private doctor_signupService:doctor_signupService) { }

  ngOnInit(): void {

    this.exform = new FormGroup({
      'name' : new FormControl(null, Validators.required),
      'password' : new FormControl(null, Validators.required),
      'gender' : new FormControl(null, Validators.required),
      'username' : new FormControl(null, Validators.required),
      'contact' : new FormControl(null, Validators.required),
      'specilisation' : new FormControl(null, Validators.required)


    })
  }
  onSubmit(form:NgForm){
    console.log(form.value);
    this.doctor_signupService.doctor_signup(form.value.d_name,form.value.d_contact_no,form.value.d_gender,form.value.d_password,form.value.d_username,form.value.specilisation).subscribe((res)=>{
      console.log(res);
      alert("Thank you for singup");
      this.router.navigateByUrl('Doctor');
    })
   
  }
}
