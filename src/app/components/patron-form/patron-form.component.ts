import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PatronServiceService } from 'src/app/shared/patron-service.service';

@Component({
  selector: 'app-patron-form',
  templateUrl: './patron-form.component.html',
  styleUrls: ['./patron-form.component.css']
})
export class PatronFormComponent implements OnInit {

  constructor(public service: PatronServiceService) { }

  ngOnInit(): void {
    this.resetForm();
    this.service.update = false;
  }

  resetForm(form?: NgForm){
    if(form != null)
    form.form.reset();
    this.service.data = {
      credentialID: '',
      name: '',
      address: '',
      phone: ''
    }
  }

  insertData(form: NgForm){
    this.service.postPatron().subscribe(
      res => {
        this.resetForm(form);
        this.service.obtainList();
      },
      error => {console.log(error); }
    )
  }

  updateData(form: NgForm){
    this.service.putPatron().subscribe(
      res => {
        this.resetForm(form);
        this.service.obtainList();
      },
      error => {console.log(error); }
    )
  }

  Submit(form: NgForm){
    if(!this.service.update){
      this.insertData(form);
      console.log(this.service.update);
    }else{
      this.updateData(form);
      this.service.update = false;
      console.log(this.service.update);
    }

  }


}
