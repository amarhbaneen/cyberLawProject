import { Component } from '@angular/core';

@Component({
  selector: 'app-search-idheb',
  templateUrl: './search-idheb.component.html',
  styleUrls: ['./search-idheb.component.css']
})
export class SearchIDhebComponent {
  selectedLevel: String = "";
  showSearch: Boolean = true;

  selected() {
    this.showSearch = false;
  }
}
