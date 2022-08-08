import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  
  ngOnInit(): void {
  }

  constructor(
    public afAuth: AngularFireAuth // Inject Firebase auth service
    
  ) {}

    public email: string  = "";
    public pass: string  = "";
    public caracteresMaximos: string =  "";
  
    // Sign up with email/password
    SignUp(
    ) {
      return this.afAuth
        .createUserWithEmailAndPassword(this.email.trim(), this.pass)
        .then((result) => {
          window.alert('You have been successfully registered!');
          console.log(result.user);
        })
        .catch((error) => {
          window.alert(error.message);
        });
    }



     validaciones(pass: string){
        console.log("hola")
      if(this.pass.length <= 6 ){
         this.caracteresMaximos = "el maximo de caracteres es 6" 
         return this.caracteresMaximos;
      }
      return this.caracteresMaximos =" "
     

    }



}
