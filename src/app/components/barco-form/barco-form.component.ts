import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SocioServiceService } from 'src/app/shared/socio-service.service';
import { BarcoServiceService } from './../../shared/barco-service.service';



@Component({
  selector: 'app-barco-form',
  templateUrl: './barco-form.component.html',
  styleUrls: ['./barco-form.component.css']
})
export class BarcoFormComponent implements OnInit {

  constructor(public serviceBarco: BarcoServiceService, public serviceSocio: SocioServiceService) { }

  ngOnInit(): void {
    this.resetForm();
    this.serviceBarco.obtainList();
    this.serviceSocio.obtainList();
    this.serviceBarco.update = false;
  }

  resetForm(form?: NgForm){
    if(form != null)
    form.form.reset();
    this.serviceBarco.data = {
      boatID: '',
      boatName: '',
      boatFee: null,
      mooringNumber: '',
      credentialPatnerID: ''
    }
  }

  insertData(form: NgForm){
    this.serviceBarco.postBarco().subscribe(
      res => {
        this.resetForm(form);
        this.serviceBarco.obtainList();
      },
      error => {console.log(error); }
    )
  }

  updateData(form: NgForm){
    this.serviceBarco.putBarco().subscribe(
      res => {
        this.resetForm(form);
        this.serviceBarco.obtainList();
      },
      error => {console.log(error); }
    )
  }

  Submit(form: NgForm){
    if(!this.serviceBarco.update){
      this.insertData(form);
      console.log(this.serviceBarco.update);
    }else{
      this.updateData(form);
      this.serviceBarco.update = false;
      console.log(this.serviceBarco.update);
    }

  }

}
