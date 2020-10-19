import { Component, OnInit } from '@angular/core';
import { SalidaServiceService } from './../../shared/salida-service.service';
import { BarcoServiceService } from './../../shared/barco-service.service';
import { PatronServiceService } from './../../shared/patron-service.service';
import { SocioServiceService } from './../../shared/socio-service.service';




@Component({
  selector: 'app-salida-views',
  templateUrl: './salida-views.component.html',
  styleUrls: ['./salida-views.component.css']
})
export class SalidaViewsComponent implements OnInit {

  constructor(public service: SalidaServiceService) { }

  ngOnInit(): void {
    this.service.obtainList();
  }

  editForm(formSelected){
    this.service.data = Object.assign({}, formSelected);
    this.service.update = true;
    console.log(this.service.update);
  }

  deleteForm(boatID){
    if (confirm('Esta a punto de eliminarlo, desea continuar?')){
      this.service.deleteSalida(boatID)
      .subscribe(res => {
        this.service.obtainList();
      },
      error => {console.log(error);
      })
    }
  }


}
