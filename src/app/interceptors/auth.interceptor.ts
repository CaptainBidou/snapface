import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
constructor(private auth:AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       // const headers=new HttpHeaders().append('Authorization','Bearer '+this.auth.getToken());
        //const modifiedReq =req.clone({headers:headers});

        const Req =req.clone();

        if(this.auth.getToken()!="ceciestunfauxToken" && this.auth.getToken()!=null)
        {const modifiedReq =req.clone({setHeaders:{Authorization:'Bearer '+this.auth.getToken()}});
        return next.handle(modifiedReq);}
        return next.handle(Req);
        
    }


    
}