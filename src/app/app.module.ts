import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TopWeekComponent } from './pages/top-week/top-week.component';
import { TopDayComponent } from './pages/top-day/top-day.component';

// Page routes.
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'topDay', component: TopDayComponent },
  { path: 'topWeek', component: TopWeekComponent },

  // Otherwise redirect to home page.
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopWeekComponent,
    TopDayComponent
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
