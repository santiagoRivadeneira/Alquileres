import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormControl, FormGroup } from '@angular/forms';

import { PropiedadService } from '../services/propiedad.service';

@Component({
  selector: 'app-crear-propiedad',
  templateUrl: './crear-propiedad.component.html',
  styleUrls: ['./crear-propiedad.component.css']
})
export class CrearPropiedadComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private propiedadService : PropiedadService, private storage: AngularFireStorage
  ) {
    this.formulario = new FormGroup({
      tipo_prop: new FormControl(),
      expensas: new FormControl(),
      precio: new FormControl(),
      direccion: new FormControl(),
      localidad: new FormControl(),
      numDireccion: new FormControl(),
      ubicacion: new FormControl(),
      imagen: new FormControl() 
    })

  }

  ngOnInit(): void {
  }

  async onSubmit(){
    console.log(this.formulario.value)

    const response = await this.propiedadService.addPropiedad(this.formulario.value)
 
  }



}
