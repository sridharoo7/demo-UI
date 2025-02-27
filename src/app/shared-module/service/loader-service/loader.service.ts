import { Injectable } from '@angular/core';
import { LoaderComponent } from '../../components/loader/loader.component';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor(private loader: LoaderComponent) { }

  showLoader(show: boolean){
    this.loader.changeVisibility(show);
  }
}
