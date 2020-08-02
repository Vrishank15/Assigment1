import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PeopleListComponent } from './people-list/people-list.component';
import { UpdatePeopleComponent } from './update-people/update-people.component';
import { PeopleDetailsComponent } from './people-details/people-details.component';
import { CreatePeopleComponent } from './create-people/create-people.component';
import { AgeCalculatorPipe } from './pipes/age-calculator.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePipe } from '@angular/common'

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    UpdatePeopleComponent,
    PeopleDetailsComponent,
    CreatePeopleComponent,
    AgeCalculatorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
