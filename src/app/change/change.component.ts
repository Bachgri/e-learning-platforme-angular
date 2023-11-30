import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServService } from '../Services/serv.service';


@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.css']
})
export class ChangeComponent implements OnInit{


  error:any
  formLogin!: FormGroup
  num!: number
  email! : any
  constructor(private fb : FormBuilder, private router:Router, private service:ServService){}
  ngOnInit(): void {
    this.formLogin = this.fb.group({
      password1 : this.fb.control(""),
      password2 : this.fb.control("")
    })
  }
  change(){
    console.log(this.service.email)
    let data = {email:this.service.email,password:this.formLogin.value.password1}
    this.service.Change(data).subscribe(
        res => {
          if(res.status==200){

            this.router.navigateByUrl("/Login")
            console.log(res)
          }
          else{
              console.warn(res.statusText);
              
          }
              
      }
    )

      
      
    }
   

}
