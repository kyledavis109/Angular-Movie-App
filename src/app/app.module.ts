import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ButtonComponent } from './components/button/button.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopTvTodayComponent } from './pages/top-tv-today/top-tv-today.component';
import { TopMoviesTodayComponent } from './pages/top-movies-today/top-movies-today.component';
import { HeaderComponent } from './components/header/header.component';
import { GetImagesComponent } from './components/get-images/get-images.component';
import { EmailComponent } from './components/email/email.component';
import { GetTitlesComponent } from './components/get-titles/get-titles.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { LoadingInterceptor } from './interceptors/loading.interceptor';

// Page routes.
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'topTvToday', component: TopTvTodayComponent },
  { path: 'topMoviesToday', component: TopMoviesTodayComponent },

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
    GetImagesComponent,
    EmailComponent,
    GetTitlesComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
