import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BarcoServiceService } from 'src/app/shared/barco-service.service';
import { PatronServiceService } from 'src/app/shared/patron-service.service';
import { SocioServiceService } from 'src/app/shared/socio-service.service';
import { SalidaServiceService } from './../../shared/salida-service.service';



@Component({
  selector: 'app-salida-form',
  templateUrl: './salida-form.component.html',
  styleUrls: ['./salida-form.component.css']
})
export class SalidaFormComponent implements OnInit {

  constructor(public serviceSalida: SalidaServiceService, public serviceSocio: SocioServiceService, public servicePatron: PatronServiceService, public serviceBarco: BarcoServiceService) { }

  ngOnInit(): void {
    this.serviceSalida.update = false;
    this.serviceBarco.obtainList();
    this.servicePatron.obtainList();
    this.serviceSocio.obtainList();
    this.serviceSalida.obtainList();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.serviceSalida.data = {
      id: null,
      userId: '',
      userName: '',
      typeUser: '',
      boatName: '',
      boatID: '',
      destiny: '',
      fecha: '',
      hora: '',
      cuota: null
    }
  }

  insertData(form: NgForm){
    this.serviceSalida.postSalida().subscribe(
      res => {
        this.resetForm(form);
        this.serviceSalida.obtainList();
      },
      error => {console.log(error); }
    )
  }

  updateData(form: NgForm){
    this.serviceSalida.putSalida().subscribe(
      res => {
        this.resetForm(form);
        this.serviceSalida.obtainList();
      },
      error => {console.log(error); }
    )
  }

  Submit(form: NgForm){
    if(!this.serviceSalida.update){
      this.data();
      this.insertData(form);
    }else{
      this.updateData(form);
      this.serviceSalida.update = false;
    }

  }

  data(){
    console.log(this.serviceSalida.data)
    const boatID = this.serviceSalida.data.boatID;
    const sBarco = this.serviceBarco.list;
    for(let x = 0; x < sBarco.length; x = x+1){
      const barcoList = sBarco[x];
      if(barcoList.boatID == boatID){
        this.serviceSalida.data.boatName = barcoList.boatName;
        this.serviceSalida.data.cuota = barcoList.boatFee;
      }
    }
  }

}
