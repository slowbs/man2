import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { DashboardComponent }   from './dashboard/dashboard.component';
import { KanaComponent } from './kana/kana.component'
import { DetailComponent } from './detail/detail.component'
import { HomeComponent } from './home/home.component';
import { SakaComponent } from './saka/saka.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'kana', component: KanaComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'home', component: HomeComponent },
  { path: 'saka/:id', component: SakaComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}