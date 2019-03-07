import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { NewsComponent } from '../news/news.component';
import { ServiceGuard } from '../service.guard';


const routes: Routes = [
  {path:'login', component:LoginComponent },
  {path:'register', component:RegisterComponent},
  {path:'news', component:NewsComponent, canActivate:[ServiceGuard]},
  {path:'', redirectTo:'login', pathMatch:'full'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
