import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { PeopleSearch } from '../../providers/people-search';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [PeopleSearch]
})
export class HomePage {
  public people: any;
  constructor(public navCtrl: NavController, public peopleSearch: PeopleSearch) {
    this.loadPeople();
  }

  loadPeople() {
    this.peopleSearch.load()
      .then(data1 => { 
        this.people = data1;
      });
  }
}
