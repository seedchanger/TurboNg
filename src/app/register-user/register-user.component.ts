import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms'; //For verifying the user input
import { CommonModule } from '@angular/common'; //For *ngIf

@Component({
  selector: 'app-register-user',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css'
})
export class RegisterUserComponent {

  //registrationForm :property of a class with FormGroup type
  //FormGroup is a type from Angular's Reactive Forms module. It is used to represent a collection of FormControl instances, which in turn represent individual form fields.
  //In this case, registrationForm will hold the form group that contains several form controls (like name, email, and password)
  registrationForm: FormGroup;

  //constructor is a special method that runs when the component is instantiated. In Angular, the constructor is typically used for dependency injection and initialization tasks
  constructor() {

    //inject(FormBuilder) is used to inject the FormBuilder service into the constructor.
    //FormBuilder is an Angular service that helps to create FormGroup and FormControl instances more easily and concisely
    //The inject() function is part of Angular's standalone component system
    const fb = inject(FormBuilder);

    //The group() method from FormBuilder is used to create a FormGroup.
    //Inside the group(), you define the form controls (like name, email, and password), and their initial values and validation rules
    this.registrationForm = fb.group({

      //The initial value (in this case, an empty string '' for each control).
      //The validators that are applied to the control (e.g., Validators.required, Validators.minLength, etc.)
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
      email: ['', [Validators.required, Validators.email, Validators.minLength(4), Validators.maxLength(40)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]]
    });
  }
  

  registerClick(){
    debugger;
    if(this.registrationForm.valid){
      alert("Valid");
    }
    else{
      alert("Invalid form");
    }
  }

}

