import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ButtonComponent } from './components/button/button.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopTvTodayComponent } from './pages/top-tv-today/top-tv-today.component';
import { TopMoviesTodayComponent } from './pages/top-movies-today/top-movies-today.component';
import { HeaderComponent } from './components/header/header.component';
import { GetImagesComponent } from './components/get-images/get-images.component';

// Page routes.
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'topTvToday', component: TopTvTodayComponent },
  { path: 'topMoviesToday', component: TopMoviesTodayComponent },
  // { path: 'topWeek', component: TopWeekComponent },

  // Otherwise redirect to home page.
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ButtonComponent,
    FooterComponent,
    TopTvTodayComponent,
    TopMoviesTodayComponent,
    HeaderComponent,
    GetImagesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
