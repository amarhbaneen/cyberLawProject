import { Component } from '@angular/core';

@Component({
  selector: 'app-search-ideng',
  templateUrl: './search-ideng.component.html',
  styleUrls: ['./search-ideng.component.css']
})
export class SearchIDEngComponent {
  selectedLevel: String = "";
  showSearch: Boolean = true;

  selected() {
    this.showSearch = false;
  }
}
