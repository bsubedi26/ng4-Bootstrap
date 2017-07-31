import { FeatherService } from './../../providers/feather.service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as axios from 'axios';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  searchInput: string;
  shouldShowCancel: boolean = true;
  constructor(public navCtrl: NavController, public http: Http, public featherService: FeatherService) {

  }
  onInput($event) {
    // console.log('onInput ', this.searchInput)
  }

  onCancel($event) {
    console.log('onCancel ', $event)
  }

  handleSubmit() {
    console.log(this.searchInput)
    const searchUrl = `http://localhost:3030/fetch/${this.searchInput}`
    this.http.get(searchUrl)
    .map(res => res.json())
    .subscribe((response) => {
      console.log(response) // 200
    })

    this.searchInput = "";
    
    // this.http.get(`http://www.hoovers.com/company-information/company-search.html?term=${this.searchInput}`)
    // this.http.get(`/fetch/${this.searchInput}`)
    // .subscribe(
    //   (response) => {
    //     console.log('http$ ', response)
    //   },
    //   (error) => {
    //     console.error(error)
    //   }
    // )
    // axios({
    //   url: `http://www.hoovers.com/company-information/company-search.html?term=${this.searchInput}`
    // })
  }

}
