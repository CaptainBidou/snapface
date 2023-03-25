import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.models';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
 
  @Input() faceSnap!: FaceSnap;



  
  title!: string ;
  description!: string ;
  createdDate!: Date ;
  snaps!: number;
  imageUrl!: string;
  like!: boolean;
  likeText!: string;


  ngOnInit(){
    if (this.faceSnap.like){
      this.likeText = 'Oh un-snap!';
    }else{
    this.likeText = 'Oh snap!';
    }
  }

  onAddSnap(){
    this.faceSnap.snaps++;
    this.faceSnap.like=true;
    this.likeText = 'Oh un-snap!';
  }

  onRemoveSnap(){
    this.faceSnap.snaps--;
    this.faceSnap.like=false;
    this.likeText = 'Oh snap!';
  }

  onSnapAction(){
    if(this.faceSnap.like){
      this.onRemoveSnap();
    }else{
      this.onAddSnap();
    }
  }



}
