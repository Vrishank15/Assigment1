import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.css']
})
export class PeopleDetailsComponent implements OnInit {

  id: number;
  public people:any;

  constructor(private route: ActivatedRoute,private router: Router,
    private peopleService:PeopleService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    
    this.peopleService.getPeople(this.id)
      .subscribe(data => {
        console.log(data)
        this.people = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['peoples']);
  }

}
