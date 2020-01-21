import { Component, OnInit } from '@angular/core';
import {CommonService} from '../services/common.service'
import { HttpEvent, HttpResponse } from '@angular/common/http';
import {FormControl, FormBuilder, FormGroup,Validators } from "@angular/forms";
import {ngxLoadingAnimationTypes } from 'ngx-loading';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
const PrimaryWhite = '#dd0031';
const SecondaryGrey = '#006ddd';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:any;
  password:any;
  myGroup:any;
  constructor(private commonService:CommonService,private router: Router) { }
 
  ngOnInit() {
    this.myGroup = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
   });
  }


  submitLogin() 
  {
   let value={
      email:this.email,
      password:this.password
    }
    alert(value)
    console.log('login',value);
    // let TokenHeader={token:"sdfcsg"}
    this.commonService.callingpostapi("api/users/login", value )
    .subscribe((resp) => {
      console.log('resp get',resp)
      localStorage.setItem('token',resp.user.token);
      this.router.navigate(['/dashboard']);
    });
  }
}
