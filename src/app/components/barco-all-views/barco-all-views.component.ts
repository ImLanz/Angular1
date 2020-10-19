import { Component, OnInit } from '@angular/core';
import { BarcoServiceService } from './../../shared/barco-service.service';


@Component({
  selector: 'app-barco-all-views',
  templateUrl: './barco-all-views.component.html',
  styleUrls: ['./barco-all-views.component.css']
})
export class BarcoAllViewsComponent implements OnInit {

  constructor(public service: BarcoServiceService) { }

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
      this.service.deleteBarco(boatID)
      .subscribe(res => {
        this.service.obtainList();
      },
      error => {console.log(error);
      })
    }
  }

}
