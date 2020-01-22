import { Component, OnInit } from '@angular/core';
import {CommonService} from '../services/common.service'
import { HttpEvent, HttpResponse } from '@angular/common/http';
import {FormControl, FormBuilder, FormGroup,Validators } from "@angular/forms";
import {ngxLoadingAnimationTypes } from 'ngx-loading';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email:any;
  password:any;
  userName:any;
  myGroup:any;
  constructor(private commonService:CommonService,private router: Router) { }

  ngOnInit() {
    this.myGroup = new FormGroup({
      userName: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
   });
  }
  submitRegister() 
  {
   let value={
      email:this.email,
      password:this.password,
      userName:this.userName,
    }
    console.log('register',value);
    // let TokenHeader={token:"sdfcsg"}
    this.commonService.callingpostapi("api/users/register", value )
    .subscribe((resp) => {
      console.log('resp get',resp)
      // localStorage.setItem('token',resp.user.token);
      this.router.navigate(['/login']);
    });
  }
}
