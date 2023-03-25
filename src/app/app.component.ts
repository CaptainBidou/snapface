import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  ngOnInit() {
    this.faceSnaps = [
      {
        title: 'Face Snap',
        description: 'This is a Face Snap',
        createdDate: new Date(),
        snaps: 140,
        imageUrl: 'https://www.w3schools.com/w3images/lights.jpg',
        like: true,
        location: 'Paris',
      },
      {
        title: 'Face Snap',
        description: 'This is a Face Snap',
        createdDate: new Date(),
        snaps: 6,
        imageUrl: 'https://www.w3schools.com/w3images/lights.jpg',
        like: true,
        location: 'Paris',
      },
      {
        title: 'Face Snap',
        description: 'This is a Face Snap',
        createdDate: new Date(),
        snaps: 6,
        imageUrl: 'https://www.w3schools.com/w3images/lights.jpg',
        like: true,
        location: 'Paris',
      },];

  }




}
