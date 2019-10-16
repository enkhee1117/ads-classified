import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrameComponent } from './components/frame/frame.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/frame/children/header/header.component';
import { BodyComponent } from './components/frame/children/body/body.component';
import { FooterComponent } from './components/frame/children/footer/footer.component';


const routes: Routes = [
  { path: 'frame', component: FrameComponent, children: [
      {path: 'header', component: HeaderComponent},
      {path: 'body', component: BodyComponent},
      {path: 'footer', component: FooterComponent}
    ]
  },
  { path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
