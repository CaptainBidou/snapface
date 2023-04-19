import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';
import { ApiUserComponent } from './api-user/api-user.component';
import { ApiUsersComponent } from './api-users/api-users.component';
import { FormConnexionComponent } from './form-connexion/form-connexion.component';

const routes: Routes = [
    { path: 'facesnaps/id:', component: SingleFaceSnapComponent },
    { path: 'facesnaps', component: FaceSnapListComponent },
    { path: '', component: LandingPageComponent },
    { path: 'facesnaps/users', component:ApiUsersComponent},
    { path: 'facesnaps/user/:id', component:ApiUserComponent},
    { path:'facesnaps/login', component:FormConnexionComponent}

];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }