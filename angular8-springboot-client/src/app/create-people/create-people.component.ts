import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-create-people',
  templateUrl: './create-people.component.html',
  styleUrls: ['./create-people.component.css']
})
export class CreatePeopleComponent implements OnInit {
  submitted = false;
  name:string;
  emailId:string;
  dob:string;
  imageLink:string;
  country:string;
  errorObject:{};
  errorMessage:boolean=false;

  constructor(private peopleService:PeopleService,
    private router: Router,
    private datepipe:DatePipe) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.submitted = false;
  }

  save() {
    let dateOfBirth=this.dob;
    dateOfBirth=this.datepipe.transform(dateOfBirth,"yyyy-MM-dd");
    let people={
      name:this.name,
      email:this.emailId,
      dob:dateOfBirth,
      avatar:this.imageLink,
      country:this.country
    };
    this.peopleService.createPeople(people)
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
    this.save();
    this.errorMessage=false;    
  }

  gotoList() {
    this.router.navigate(['/peoples']);
  }

}
