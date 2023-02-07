import { BrowserModule } from '@angular/platform-browser';  
import { NgModule } from '@angular/core';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule, HttpClient } from '@angular/common/http';  

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
  
import { AppRoutingModule } from './app-routing.module';  
import { AppComponent } from './app.component';
import { PortfolioUiService } from './portfolio-ui.service';
import { PortfolioUIComponent } from './portfolio-ui/portfolio-ui.component';


@NgModule({
  declarations: [
    AppComponent,
    PortfolioUIComponent
    
  ],
  imports: [
    BrowserModule,  
    FormsModule,  
    ReactiveFormsModule,  
    HttpClientModule,  
    BrowserAnimationsModule, 
    AppRoutingModule
  ],
  providers: [HttpClientModule, PortfolioUiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
