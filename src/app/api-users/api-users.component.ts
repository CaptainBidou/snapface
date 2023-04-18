import { Component } from '@angular/core';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Observable, map } from 'rxjs';
import { User } from '../models/user.models';
import { ApiUser } from '../models/api-user.models';
import { ApiUsers } from '../models/api-users.models';

@Component({
  selector: 'app-api-users',
  templateUrl: './api-users.component.html',
  styleUrls: ['./api-users.component.scss']
})
export class ApiUsersComponent {
  constructor(private faceSnapsService: FaceSnapsService) { }

  //retourRequete$ !: Observable<ApiUser>;
  user$!: Observable<User[]>;

ngOnInit(){ 
  //this.retourRequete$ = this.faceSnapsService.getReponse().pipe(map(=>({...ApiUser})));
 // this.retourRequete$ = this.faceSnapsService.getReponse();
  //this.user$=this.retourRequete$.pipe(map((apiUser:ApiUser)=>({...apiUser.user})));

this.user$=this.faceSnapsService.getAllUsers().pipe(map((apiUsers:ApiUsers)=>([...apiUsers.users])));
//this.user$.subscribe(value=>console.log(value));

 // this.retourRequete$.subscribe(value=>console.log(value));

}

}

