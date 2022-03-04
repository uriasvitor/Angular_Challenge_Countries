import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListsComponent } from './components/lists/lists.component';
import { DetailsComponent } from './components/details/details.component';
import { apiService } from 'src/core/http.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListsComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [apiService],
  bootstrap: [AppComponent],
  exports: [
    HomeComponent
  ]
})
export class AppModule { }
