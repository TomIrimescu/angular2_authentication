import {Component, OnInit} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    template: `
        <h3>Please sign up to use all features</h3>
        <form [formGroup]="myForm" (ngSubmit)="onSignin()">
            <div style="width:100%;" class="input-group">
                <label for="email">E-Mail</label>
                <input class="form-control" formControlName="email" type="email" id="email">
                <div>&nbsp;</div>                
            </div>
            <div style="width:100%;" class="input-group">
                <label for="password">Password</label>
                <input class="form-control" formControlName="password" type="password" id="password">
                <div>&nbsp;</div>                
            </div>
            <button class="btn btn-primary" type="submit" [disabled]="!myForm.valid">Sign In</button>
        </form>
    `
})
export class SigninComponent implements OnInit {
    myForm: FormGroup;
    error = false;
    errorMessage = '';

    constructor(private fb: FormBuilder) {}

    onSignin() {

    }

    ngOnInit():any {
        this.myForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        });
    }
}
