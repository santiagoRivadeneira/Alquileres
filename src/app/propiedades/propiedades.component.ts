import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import Propiedad from 'src/interfaces/propiedad.interface';
import { PropiedadService } from '../services/propiedad.service';

@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.component.html',
  styleUrls: ['./propiedades.component.css']
})
export class PropiedadesComponent implements OnInit {

  propiedades: Propiedad[];


  constructor(
    private placesService: PropiedadService,  
    private spinner: NgxSpinnerService) { 
    
    this.propiedades = [{
      id: null,
      id_prop: null,
      tipo_prop:  null ,
      expensas: null,
      precio: null,
      direccion: null,
      localidad: null,
      numDireccion: null,
      ubicacion: null,
      imagen: null
    }]

  }




  ngOnInit(): void {


    this.placesService.getPropiedades().subscribe(propiedades => {
      this.propiedades = propiedades;
      console.log(this.propiedades)
    })

  }


  


  }


