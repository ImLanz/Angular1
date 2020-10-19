import { Component, OnInit } from '@angular/core';
import { SocioServiceService } from './../../shared/socio-service.service';
import { SalidaServiceService } from './../../shared/salida-service.service';


@Component({
  selector: 'app-socio-views',
  templateUrl: './socio-views.component.html',
  styleUrls: ['./socio-views.component.css']
})
export class SocioViewsComponent implements OnInit {

  constructor(public service: SocioServiceService, public serviceSalida: SalidaServiceService) { }

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
      this.service.deleteSocio(credentialID)
      .subscribe(res => {
        this.service.obtainList();
      },
      error => {console.log(error);
      })
    }
  }

  sendSocios(credentialID, name, typeUser){
    this.serviceSalida.data.userId = credentialID;
    this.serviceSalida.data.userName = name;
    this.serviceSalida.data.typeUser = typeUser;
  }
  
}
