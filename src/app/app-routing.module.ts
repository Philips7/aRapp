import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {CameraComponent} from "./components/camera/camera.component";
import {LoginComponent} from "./components/login/login.component";
import {SettingsComponent} from "./components/settings/settings.component";

const routes: Routes = [
  {
    path: '', component: WelcomeComponent
  },
  {
    path: 'camera', component: CameraComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'settings', component: SettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
