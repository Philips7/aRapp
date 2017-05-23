import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {CameraComponent} from "./components/camera/camera.component";

const routes: Routes = [
  {
    path: '', component: WelcomeComponent
  },
  {
    path: 'camera', component: CameraComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
