import { Component } from '@angular/core';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Observable, map } from 'rxjs';
import { User } from '../models/user.models';
import { ApiUser } from '../models/api-user.models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-api-user',
  templateUrl: './api-user.component.html',
  styleUrls: ['./api-user.component.scss']
})
export class ApiUserComponent {
  constructor(private faceSnapsService: FaceSnapsService, private route : ActivatedRoute) { }

  //retourRequete$ !: Observable<ApiUser>;
  user$!: Observable<User>;

ngOnInit(){ 
  //this.retourRequete$ = this.faceSnapsService.getReponse().pipe(map(=>({...ApiUser})));
 // this.retourRequete$ = this.faceSnapsService.getReponse();
  //this.user$=this.retourRequete$.pipe(map((apiUser:ApiUser)=>({...apiUser.user})));

this.user$=this.faceSnapsService.getReponse(+this.route.snapshot.params['id']).pipe(map((apiUser:ApiUser)=>({...apiUser.user})));
//this.user$.subscribe(value=>console.log(value));

 // this.retourRequete$.subscribe(value=>console.log(value));

}

}
