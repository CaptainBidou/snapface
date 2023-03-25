import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;





  ngOnInit(): void {
    this.mySnap = new FaceSnap('Face Snap', 'This is a Face Snap', new Date(), 6, 'https://www.w3schools.com/w3images/lights.jpg',true);
  }




}
