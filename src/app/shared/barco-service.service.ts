import { Injectable } from '@angular/core';
import { BarcoModel } from './barco-model.model';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class BarcoServiceService {

  data: BarcoModel = new BarcoModel();
  readonly ruta = 'http://localhost:5000/api';
  list:BarcoModel[];

  update: boolean = false;

  constructor( private http:HttpClient) { }

  obtainList(){
    this.http.get(`${this.ruta}/barcoModels/`)
    .toPromise()
    .then(res => this.list = res as BarcoModel[]);
  }

  postBarco(){
    return this.http.post(`${this.ruta}/barcoModels/`, this.data);
  }

  putBarco(){
    return this.http.put(`${this.ruta}/barcoModels/${this.data.boatID}`, this.data)
  }

  deleteBarco(boatID){
    return this.http.delete(`${this.ruta}/barcoModels/${boatID}`)
  }
}
