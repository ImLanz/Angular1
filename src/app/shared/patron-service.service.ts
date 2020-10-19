import { Injectable } from '@angular/core';
import { SocioModel } from './socio-model.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatronServiceService {

  data: SocioModel = new SocioModel();
  readonly ruta = 'http://localhost:5000/api';
  list:SocioModel[];

  update: boolean = false;

  constructor( private http:HttpClient) { }

  obtainList(){
    this.http.get(`${this.ruta}/patronModels/`)
    .toPromise()
    .then(res => this.list = res as SocioModel[]);
  }

  postPatron(){
    return this.http.post(`${this.ruta}/patronModels/`, this.data);
  }

  putPatron(){
    return this.http.put(`${this.ruta}/patronModels/${this.data.credentialID}`, this.data)
  }

  deletePatron(credentialID){
    return this.http.delete(`${this.ruta}/patronModels/${credentialID}`)
  }
}
