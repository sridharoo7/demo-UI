import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css'
})
export class LoaderComponent {
  visibility: boolean = false;

  changeVisibility(show: boolean) {
    this.visibility = show;
  }
}
