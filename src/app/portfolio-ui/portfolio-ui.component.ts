import { Component, OnInit } from '@angular/core';
import { PortfolioUiService } from '../portfolio-ui.service';

@Component({
  selector: 'app-portfolio-ui',
  templateUrl: './portfolio-ui.component.html',
  styleUrls: ['./portfolio-ui.component.css']
})

export class PortfolioUIComponent implements OnInit {
  public portfolios: any;
  constructor(private portfolioUiService:PortfolioUiService) { }  
  ngOnInit() {  
    this.loadPortfolioDetails();  
  }  

  loadPortfolioDetails() {

    this.portfolioUiService.getPortfolioDetails().subscribe(res => {
      if (res) {
        this.portfolios = res;
      }
    });
  }
}
