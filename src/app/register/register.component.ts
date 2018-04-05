// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { AlertService, UserService } from '../_services/index';
// import { ReactiveFormsModule , FormGroup, FormControl, Validators } from '@angular/forms';


// @Component({
//     moduleId: module.id.toString(),
//     templateUrl: 'register.component.html'
// })

// export class RegisterComponent implements OnInit {
//     model: any = {};
//     loading = false;

//     langs: string[] = [
//         'English',
//         'French',
//         'German',
//     ];
//     form: FormGroup;


//     constructor(
//         private router: Router,
//         private userService: UserService,
//         private alertService: AlertService) { }

//     ngOnInit() {
//         // this.form = new FormGroup({
//         //     name: new FormGroup({
//         //         firstName: new FormControl('', Validators.required),
//         //         lastName: new FormControl('', Validators.required),
//         //     }),
//         // });
//     }


//     register() {
//         this.loading = true;
//         this.userService.create(this.model)
//             .subscribe(
//                 data => {
//                     this.alertService.success('Registration successful', true);
//                     this.router.navigate(['/login']);
//                 },
//                 error => {
//                     this.alertService.error(error);
//                     this.loading = false;
//                 });
//     }
// }

import { AlertService, UserService } from '../_services/index';
import { Router } from '@angular/router';
import {
    NgModule,
    Component,
    Pipe,
    OnInit
} from '@angular/core';
import {
    ReactiveFormsModule,
    FormsModule,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder
} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { User } from '../_models';


@Component({
    moduleId: module.id.toString(),
    templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {
    [x: string]: any;
    langs: string[] = [
        'English',
        'French',
        'German',
    ];
    myform: FormGroup;
    constructor(private userService: UserService,
         private router: Router,private alertService: AlertService) { }


    ngOnInit() {
        this.myform = new FormGroup({
            // name: new FormGroup({
                firstName: new FormControl('', Validators.required),
                lastName: new FormControl('', Validators.required),
            // }),
            username: new FormControl('',  Validators.required),
            password: new FormControl('', [
                Validators.required,
                Validators.minLength(8)
            ])
            // language: new FormControl()
        });
    }

    register(model:User) {
        // this.loading = true;
        this.userService.create(model)
                    .subscribe(
            data => {
                this.alertService.success('Registration successful', true);
                this.router.navigate(['/login']);
               
            },
            error => {
                this.alertService.error(error);
               // this.loading = false;
            });
    }

    onSubmit() {
        if (this.myform.valid) {
          //  console.log("Form Submitted!");
          //  this.myform.reset();

          this.register(this.myform.value);
        }
    }
}