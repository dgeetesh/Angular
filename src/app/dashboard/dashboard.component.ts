import { Component, OnInit } from '@angular/core';
import { HttpEvent, HttpResponse } from '@angular/common/http';
import {FormControl, FormBuilder, FormGroup,Validators } from "@angular/forms";
import {ngxLoadingAnimationTypes } from 'ngx-loading';
import { Location } from '@angular/common';
import {CommonService} from '../services/common.service'
const PrimaryWhite = '#dd0031';
const SecondaryGrey = '#006ddd';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private commonService:CommonService) { }

  ngOnInit() {
    this.first();
  }
  first() 
  {
    let token=localStorage.getItem('token');
    let TokenHeader={token:token};
    this.commonService.callinggetapi("api/users/getAllPosts",TokenHeader)
    .subscribe((resp) => {
      console.log('resp',resp);
      // localStorage.setItem('token',resp.token);
    });
  }

}
