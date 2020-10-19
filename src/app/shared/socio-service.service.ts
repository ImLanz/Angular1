import { Injectable } from '@angular/core';
import { SocioModel } from './socio-model.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SocioServiceService {

  data: SocioModel = new SocioModel();
  readonly ruta = 'http://localhost:5000/api';
  list:SocioModel[];

  update: boolean = false;

  constructor( private http:HttpClient) { }

  obtainList(){
    this.http.get(`${this.ruta}/socioModels/`)
    .toPromise()
    .then(res => this.list = res as SocioModel[]);
  }

  postSocio(){
    return this.http.post(`${this.ruta}/socioModels/`, this.data);
  }

  putSocio(){
    return this.http.put(`${this.ruta}/socioModels/${this.data.credentialID}`, this.data)
  }

  deleteSocio(credentialID){
    return this.http.delete(`${this.ruta}/socioModels/${credentialID}`)
  }

  

}
