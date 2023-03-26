import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.models';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;

  constructor(private faceSnapsService: FaceSnapsService, private route: ActivatedRoute) { }

  like!: boolean;
  likeText!: string;


  ngOnInit() {

    const id = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(id);
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
