import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from '../people.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-update-people',
  templateUrl: './update-people.component.html',
  styleUrls: ['./update-people.component.css']
})
export class UpdatePeopleComponent implements OnInit {

  id: number;
  public people:any;
  errorMessage: boolean;
  errorObject: string;

  constructor(private route: ActivatedRoute,private router: Router,
    private peopleService:PeopleService,
    private datepipe:DatePipe) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    
    this.peopleService.getPeople(this.id)
      .subscribe(data => {
        console.log(data)
        this.people = data;
      }, error => console.log(error));
  }

  updatePeople() {
    let dateOfBirth=this.people['dob'];
    this.people['dob']=this.datepipe.transform(dateOfBirth,"yyyy-MM-dd")
    this.peopleService.updatePeople(this.id, this.people)
      .subscribe(data => this.gotoList(), error => this.showErrorMessage(error));
    
  }

  showErrorMessage(errorObject){
    this.errorMessage=true;
    console.log("error message "+this.errorObject);
    this.errorObject=errorObject['message'];
    console.log("error message "+this.errorObject);
    return;
   }

  onSubmit() {
    this.updatePeople();    
  }

  gotoList() {
    this.router.navigate(['/peoples']);
  }

}
