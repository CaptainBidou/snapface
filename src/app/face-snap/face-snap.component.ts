import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.models';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;

  constructor(private faceSnapsService: FaceSnapsService) { }

  like!: boolean;
  likeText!: string;


  ngOnInit() {
    if (this.faceSnap.like) {
      this.likeText = 'Oh un-snap!';
    } else {
      this.likeText = 'Oh snap!';
    }
  }

  onAddSnap() {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
    this.likeText = 'Oh un-snap!';
  }

  onRemoveSnap() {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    this.likeText = 'Oh snap!';
  }

  onSnapAction() {
    if (this.faceSnap.like) {
      this.onRemoveSnap();
    } else {
      this.onAddSnap();
    }
  }



}
