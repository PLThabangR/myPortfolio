import { Component, OnInit } from '@angular/core';
import { GetMydataService } from '../provider/get-mydata.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public users:any =[];
  constructor(private http:GetMydataService) { }

  ngOnInit() {

    this.http.getUsers().subscribe(
      response =>{  this.users = response
      console.log(response);}
    );
    
  }



}
