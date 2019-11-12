import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clientForm: FormGroup;
  private nom = "";
  private prenom = "";
  private adresse = "";
  private cp = "";
  private ville = "";

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.clientForm = this.fb.group({
      nom: [],
      prenom: [],
      adresse: [],
      cp: [],
      ville: []
    });
  }

  submitClientForm() {
    console.log("Ajout de l\'utilisateur");
    this.nom = this.clientForm.value.nom;
    this.prenom = this.clientForm.value.prenom;
    this.adresse = this.clientForm.value.adresse;
    this.cp = this.clientForm.value.cp;
    this.ville = this.clientForm.value.ville;
    console.warn(this.nom + " " + this.prenom + " " + this.adresse + " " + this.cp + " " + this.ville);
  }

}
