import { Component, OnInit } from '@angular/core';
import {  FormBuilder,  FormGroup,  Validators } from '@angular/forms';

// export function ConfirmedValidator(controlName: string, matchingControlName: string){
//   return (formGroup: FormGroup) => {
//       const control = formGroup.controls[controlName];
//       const matchingControl = formGroup.controls[matchingControlName];
//       if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
//           return;
//       }
//       if (control.value !== matchingControl.value) {
//           matchingControl.setErrors({ confirmedValidator: true });
//       } else {
//           matchingControl.setErrors(null);
//       }
//   }
// }

function ConfirmedValidator(form:any) {
  const password = form.get('password')
  const confirmPassword = form.get('confirmPassword')

  if(password.value !== confirmPassword.value) {
    confirmPassword.setErrors({ passwordsMatch: true })
  } else {
    confirmPassword.setErrors(null)
  }

  return null
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm : any  ;
  constructor(private bldr:FormBuilder) {

    this.registerForm=bldr.group({
      name:['',Validators.required],
      userName:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required],
      confirmPassword:['', [Validators.required]]
    },{
      Validators: ConfirmedValidator
    }
    );

   }

  ngOnInit(): void {


  }

  register(){
    console.log(this.registerForm.value)
  }
}
