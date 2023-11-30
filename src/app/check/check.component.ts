import { Component , OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServService } from '../Services/serv.service';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit{
  error:any
  formLogin!: FormGroup
  num!: number
  email! : any
  constructor(private fb : FormBuilder, private router:Router, private service:ServService){}
  ngOnInit(): void {
    console.log(this.service.num)
    this.formLogin = this.fb.group({
      code : this.fb.control("")
    })
  }

  check(){
    let numb= Number.parseInt(this.formLogin.value.code)
    if(numb === this.service.num){
      console.log("hello")
      this.router.navigateByUrl("/Change")
    }
    else{
      console.log("alloha")
    }
  }

}
