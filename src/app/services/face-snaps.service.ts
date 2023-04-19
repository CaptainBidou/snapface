import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.models";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { ApiUser } from "../models/api-user.models";
import { ApiUsers } from "../models/api-users.models";

@Injectable({
    providedIn: 'root'
})


export class FaceSnapsService {
    constructor (private http: HttpClient){
    }
    

    getReponse(id:number): Observable<ApiUser> {
        return this.http.get<ApiUser>("https://evanerds.fr/api/v1/users/"+id);
    }

    getAllUsers(): Observable<ApiUsers> {
        return this.http.get<ApiUsers>("https://evanerds.fr/api/v1/users");
    }


    faceSnaps: FaceSnap[] = [
        {
            id: 1,
            title: 'Face Snap',
            description: 'This is a Face Snap',
            createdDate: new Date(),
            snaps: 140,
            imageUrl: 'https://www.w3schools.com/w3images/lights.jpg',
            like: true,
            location: 'Paris',
        },
        {
            id: 2,
            title: 'Face Snap',
            description: 'This is a Face Snap',
            createdDate: new Date(),
            snaps: 6,
            imageUrl: 'https://www.w3schools.com/w3images/lights.jpg',
            like: true,
            location: 'Paris',
        },
        {
            id: 3,
            title: 'Face Snap',
            description: 'This is a Face Snap',
            createdDate: new Date(),
            snaps: 6,
            imageUrl: 'https://www.w3schools.com/w3images/lights.jpg',
            like: true,
            location: 'Paris',
        },];

    getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (faceSnap) {
            return faceSnap;
        }
        else {
            throw new Error('Face Snap not found');
        }
    }


    getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
    }

    snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType == 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
        snapType == 'snap' ? faceSnap.like = true : faceSnap.like = false;

    }


}