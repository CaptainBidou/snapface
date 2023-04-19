import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormConnexion } from '../models/form-connexion.models';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-connexion',
  templateUrl: './form-connexion.component.html',
  styleUrls: ['./form-connexion.component.scss']
})
export class FormConnexionComponent implements OnInit {

email!:number;
password:string="";
token$!:Observable<string>;

  
    constructor(private auth : AuthService) { }
  ngOnInit(): void {
  }

SeConnecter():void
{
  console.log("email:"+this.email);
  console.log("password:"+this.password);
  this.token$=this.auth.setToken(this.email,this.password);
  

}

}
