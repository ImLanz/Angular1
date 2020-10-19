import { Component, OnInit } from '@angular/core';
import { SalidaServiceService } from 'src/app/shared/salida-service.service';
import { PatronServiceService } from './../../shared/patron-service.service';


@Component({
  selector: 'app-patron-views',
  templateUrl: './patron-views.component.html',
  styleUrls: ['./patron-views.component.css']
})
export class PatronViewsComponent implements OnInit {

  constructor(public service: PatronServiceService, public serviceSalida: SalidaServiceService) { }

  ngOnInit() {
    this.service.obtainList();
  }

  editForm(formSelected){
    this.service.data = Object.assign({}, formSelected);
    this.service.update = true;
    console.log(this.service.update);
  }

  deleteForm(credentialID){
    if (confirm('Esta a punto de eliminarlo, desea continuar?')){
      this.service.deletePatron(credentialID)
      .subscribe(res => {
        this.service.obtainList();
      },
      error => {console.log(error);
      })
    }
  }

  sendPatron(credentialID, name, typeUser){
    this.serviceSalida.data.userId = credentialID;
    this.serviceSalida.data.userName = name;
    this.serviceSalida.data.typeUser = typeUser;
  }

}
