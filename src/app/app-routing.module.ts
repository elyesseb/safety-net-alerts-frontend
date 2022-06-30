import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { FirestationUrlComponent } from './pages/url-page/firestation-url/firestation-url.component';
import { MedicalAssistGuard } from './guards/medical-assist.guard';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { BoardMedicalAssistComponent } from './pages/board-medical-assist/board-medical-assist.component';
import { MailByCityComponent } from './pages/mail-by-city/mail-by-city.component';
import { FirestationsComponent } from './pages/firestations/firestations.component';
import { UrlFindByNameComponent } from './pages/url-page/url-find-by-name/url-find-by-name.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'firestation', component: FirestationsComponent },
  { path: 'urls', component: FirestationUrlComponent },
  { path: 'urls2', component: UrlFindByNameComponent },
  {
    path: '',
    canActivate: [AuthGuard],
    children: [{ path: 'profile', component: ProfileComponent }],
  },
  {
    path: '',
    canActivate: [MedicalAssistGuard],
    children: [
      { path: 'medical-assist', component: BoardMedicalAssistComponent },
      { path: 'mail-by-city', component: MailByCityComponent },
    ],
  },
  { path: 'notfound', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'notfound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
