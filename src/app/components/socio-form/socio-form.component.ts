import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SocioServiceService } from 'src/app/shared/socio-service.service';

@Component({
  selector: 'app-socio-form',
  templateUrl: './socio-form.component.html',
  styleUrls: ['./socio-form.component.css']
})
export class SocioFormComponent implements OnInit {

  constructor(public service: SocioServiceService) { }

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
    this.service.postSocio().subscribe(
      res => {
        this.resetForm(form);
        this.service.obtainList();
      },
      error => {console.log(error); }
    )
  }

  updateData(form: NgForm){
    this.service.putSocio().subscribe(
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
