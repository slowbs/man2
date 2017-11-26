import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule }    from '@angular/forms';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { KanaComponent } from './kana/kana.component';
import { DetailComponent } from './detail/detail.component';
import { HeroService } from './hero.service';
import { HomeComponent } from './home/home.component';
import { SakaComponent } from './saka/saka.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    KanaComponent,
    DetailComponent,
    HomeComponent,
    SakaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
