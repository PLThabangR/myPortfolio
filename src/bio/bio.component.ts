import { GetdataService } from './../app/provider/getdata.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit {
  public  users: any = [];
  constructor(private http: GetdataService) { }

  ngOnInit() {

    this.http.getUsers().subscribe(
      // tslint:disable-next-line: semicolon
      response => {  this.users = response
                     console.log(response); }
    );
  }

}
