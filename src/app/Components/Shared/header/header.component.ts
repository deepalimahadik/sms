import { Component, OnInit } from '@angular/core';
import {ViewChild, ElementRef} from '@angular/core';
import { LoginService } from '../../services';

import { Router, ActivatedRoute, Params } from '@angular/router';
import {
  FormGroup, FormArray, FormBuilder, FormControl,
  Validators, ReactiveFormsModule
} from '@angular/forms';

import {
  RequiredValidation,
  nullValidators,
  Min3CharTextValidation,
  Max8CharTextValidation,
  PasswordValidation,
  EmailValidation,
  PhoneNumberValidation,
  LandlienNumberValidation,
  WebsiteValidation,
  PincodeValidation
} from '../../../common/validations';

import * as $ from 'jquery';
import { Http } from '@angular/http';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  loginForm: FormGroup;
  Email: FormControl;
  Password: FormControl;

  globalResponse;
  constructor(private _router:Router) { 

  }

  isLoginForm:boolean = false;
   isHeader: boolean = true;
  ngOnInit() {
  //  if(window.location.pathname === '/Home' || window.location.pathname.length === 1){
  //     this.isHeader = true;
  //   }
  //   else{
  //     this.isHeader = false;
  //   }

  
    this.buildToLoginForm();
  }

  buildToLoginForm() {

    //Jr Developer
    // this.username = new FormControl('Akshay@ixiasolutions.com', [Validators.required]);
    // this.password = new FormControl('Akshay@123', [Validators.required]);
    
    //Sr Developer
    // this.username = new FormControl('test@gmail.com', [Validators.required]);
    // this.password = new FormControl('test@123', [Validators.required]);
    
    //Account Manager
    this.Email = new FormControl('flinnprep40@gmail.com', EmailValidation);
    this.Password = new FormControl('flinn456', PasswordValidation);
    
    //HR
    // this.username = new FormControl('test1@ixiasolutions.com', [Validators.required]);
    // this.password = new FormControl('test1@123', [Validators.required]);
    
    // this.username = new FormControl('', [Validators.required]);
    // this.password = new FormControl('', [Validators.required]);

    this.loginForm = new FormGroup({
      Email: this.Email,
      Password: this.Password
    })

  }

  showmainpage(){
    this.isHeader = false;
    $('#loginPopup').find('.popover').slideToggle()
  }
  showLoginForm(){
    console.log('inide function');
    if(this.isLoginForm){
      this.isLoginForm = false;
    }
    else{
      this.isLoginForm = true;
    }
  }
/******** Dynamically applay validation on from *********/
  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  signIn() {
    if (!(this.loginForm.valid)) {
      this.validateAllFormFields(this.loginForm);
    }
    else {
      // let user = this.loginForm.value;
      // this.isLoggedIn = false;
      // // this.authService.removeToken();
      // this.alert = [];
      // console.log('user', user);

      // this.authService.validateUser(user)
      //   .subscribe(response => {
      //     console.log('response', response.data.ModuleEmpList);
      //     localStorage.setItem('Module', JSON.stringify(response.data.ModuleEmpList));
      //     localStorage.setItem('userId', JSON.stringify(response.data.UserID));
      //     localStorage.setItem('id', JSON.stringify(response.data.ID));
      //     localStorage.setItem('userData', JSON.stringify(response.data));
      //     this.globalResponse = response;
      //     this.ErrorMessage = response.Message;
      //   },
      //   (error) => {
      //     console.log(error.Message);
      //   },
      //   () => {
      //     console.log(this.globalResponse);
      //     if (this.globalResponse.data.ClientToken) {
      //       this.authService.storeToken(JSON.stringify(this.globalResponse.data));
      //       this.isLoggedIn = true;
      //       this.toastr.success(this.ErrorMessage!);
      //       this.router.navigate(['/dashboard']);
      //       console.log('login successful');
      //     } else {
      //       // this.errorMessage = true;
      //       this.toastr.error("Oops! Invalid Credentials");

      //     }

      //   })
    }
  }


}
