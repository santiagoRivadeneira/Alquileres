import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { collection, addDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import Propiedad from 'src/interfaces/propiedad.interface';

@Injectable({
  providedIn: 'root'
})
export class PropiedadService {

  constructor(private firestore: Firestore) { }

  //agregar una propiedad a la base de datoss de firestone
  addPropiedad (priopiedad: Propiedad) {
    //crear una coleccion en firestone
    const propiedadRef = collection(this.firestore, 'propiedades' )
    //insertar
    return addDoc(propiedadRef, priopiedad)
  }

  getPropiedades(): Observable<Propiedad[]> {

    const propiedadRef = collection(this.firestore, 'propiedades' )

    //array de propiedades
    return collectionData(propiedadRef, { idField: 'id' }) as Observable<Propiedad[]>
  }

}
