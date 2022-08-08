import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(
    public afAuth: AngularFireAuth // Inject Firebase auth service
    
  ) {}

  public email: string = ""
  public pass: string = ""



    // Sign in with email/password
    SignIn(email: string, pass: string) {
      return this.afAuth
        .signInWithEmailAndPassword(email, pass)
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          window.alert(error.message);
        });
    }




    
  ngOnInit(): void {
  }


}


