import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
    providedIn :'root'
})

export class AuthService {
    constructor(private http :HttpClient) {}

    private token: string = "ceciestunfauxToken";

    setToken(tel:number,passwd:string): Observable<string> {
        return this.http.post<string>("https://evanerds.fr/api/v1/auth",{tel:tel,password:passwd});
    }

    getToken(): string {
        return this.token;
    }


}