import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServService } from 'src/app/Services/serv.service';

@Component({
  selector: 'app-ins',
  templateUrl: './ins.component.html',
  styleUrls: ['./ins.component.css']
})
export class InsComponent implements OnInit{
  formRegister! : FormGroup
  error : String = ""
  constructor(private fb : FormBuilder, private router : Router,
    private clientService:ServService, ){}

  ngOnInit(): void {
    this.formRegister = this.fb.group({
      Name : this.fb.control(""),
      Ville : this.fb.control(""),
      Email : this.fb.control(""),
      Password : this.fb.control(""),
      Tel : this.fb.control(""),
      DateN : this.fb.control(""),
      Role : this.fb.control("")
    })
  }  
  register(){
    console.log(this.formRegister.value)
    this.formRegister.patchValue({Role:'Student'})
    console.log(this.formRegister.value)
    this.clientService.create(this.formRegister.value).subscribe(res=>{console.log(res);
      this.router.navigateByUrl("/Login");                                                              
    },
      error =>{this.error="Email Already used";this.formRegister.reset()})
  }

  cancel(){
    this.router.navigateByUrl("/Login")
  }
}
