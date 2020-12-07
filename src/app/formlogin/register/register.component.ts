import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {FormloginService} from '../../service/formlogin.service';
import {SignUp} from '../../model/signUp';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: any = {};
  signUp: SignUp;
  status  = 'Please Fill in the form';
  emailValidate = new FormControl('', [
    Validators.required,
    Validators.email
  ])
  hide = true;
  data1: any = {
    message: "nouser"
  }
  data2: any = {
    message: "noemail"
  }
  data3: any = {
    message: "yes"
  }
  constructor(private formLoginService: FormloginService) { }

  ngOnInit(): void {
  }
  onSubMit(){
    this.signUp = new SignUp(
      this.form.name,
      this.form.username,
      this.form.email,
      this.form.password
    )
    console.log('name',this.form.name);
    this.formLoginService.signUp(this.signUp).subscribe(data=>{
      console.log('data',data)
      if(JSON.stringify(data)==JSON.stringify(this.data1)){
        this.status = 'Username is existed, Please try again! '
      }
      if(JSON.stringify(data)==JSON.stringify(this.data2)){
        this.status = 'Email is existed, Please try again!'
      }
      if(JSON.stringify(data)==JSON.stringify(this.data3)){
        this.status = 'Create success full your accout'
        alert(this.status)
      }
    })
  }

}
