import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeopleService } from '../people.service';
import {AgeCalculatorPipe} from '../pipes/age-calculator.pipe';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  public peoples: any;

  constructor(
    private peopleService:PeopleService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.peoples = this.peopleService.getPeopleList();
  }

  deletePeople(id: number) {
    this.peopleService.deletePeople(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  peopleDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updatePeople(id: number){
    this.router.navigate(['update', id]);
  }

}
