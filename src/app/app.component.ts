import {Component, EventEmitter, Output} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'cyberLawProject';
  lang = 'Eng';
  router: string ='type-search';

  setLangEng(){
    this.lang = 'Eng';
  }

  setLangHeb(){
    this.lang = 'Heb';
  }


  routeTOTypeSearch() {
    this.router ='type-search';
  }
  routeTOHome() {
    this.router ='mainPage';
  }
}
