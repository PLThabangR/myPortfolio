import { Component, OnInit } from '@angular/core';
import { GetMydataService } from '../provider/get-mydata.service';

@Component({
  selector: 'app-workexperience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {

 public  users:any =[];
  constructor(private http:GetMydataService) { }

  ngOnInit() {

    this.http.getUsers().subscribe(
      response =>{  this.users = response
      console.log(response);}
    );
  }
}
