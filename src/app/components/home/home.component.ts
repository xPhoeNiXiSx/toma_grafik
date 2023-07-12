import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import firebase from 'firebase/compat/app';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sketchForm : FormGroup;
  
  constructor(
    private store: AngularFirestore,
    private formBuilder: FormBuilder
  ) {
    // store.collection("socials").doc("toto2").set({
    //   name: "Dessin2"
    // })
    // .then(() => { console.log("Document successfully written!"); })
    // .catch((error) => { console.error("Error writing document: ", error); });
    
    console.log(store.collection.length);
  }
    
  ngOnInit(): void {
    this.sketchForm =  this.formBuilder.group({
      name: ['', [Validators.required]],
    })
  }

  submitSketch(value: any): void {
    if(value) {
      this.store.collection("sketch").add(value);
    }
  }

}
