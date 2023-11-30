import { Component , OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServService } from '../Services/serv.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit{
  error:any
  formLogin!: FormGroup
  num!: number
  email! : any
  constructor(private fb : FormBuilder, private router:Router, private service:ServService){}
  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email : this.fb.control("")
    })
  }

  check(){
    console.log(this.formLogin.value)
    this.service.CheckGmail(this.formLogin.value).subscribe((res:any) => {
      console.log(res)
      this.service.num = res
      this.service.email = this.formLogin.value.email
      this.router.navigateByUrl("/Check")
    },
      (error:any) =>this.error="email incorrect"      
      
      )
  }
}
