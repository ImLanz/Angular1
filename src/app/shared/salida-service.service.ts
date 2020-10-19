import { Injectable } from '@angular/core';
import { SalidaModel } from './salida-model.model';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class SalidaServiceService {
  
  data: SalidaModel = new SalidaModel();
  readonly ruta = 'http://localhost:5000/api';
  list:SalidaModel[];

  update: boolean = false;
  decision: boolean = false;

  constructor(private http:HttpClient) { }

  obtainList(){
    this.http.get(`${this.ruta}/OutputDetails/`)
    .toPromise()
    .then(res => this.list = res as SalidaModel[]);
  }

  postSalida(){
    return this.http.post(`${this.ruta}/OutputDetails/`, this.data);
  }

  putSalida(){
    return this.http.put(`${this.ruta}/OutputDetails/${this.data.id}`, this.data)
  }

  deleteSalida(id){
    return this.http.delete(`${this.ruta}/OutputDetails/${id}`)
  }
}
