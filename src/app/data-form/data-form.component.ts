import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss']
})
export class DataFormComponent implements OnInit{

  formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {

    /*this.formulario = new FormGroup( {
      nome: new FormControl(null),
      email: new FormControl(null)
    });*/

    this.formulario = this.formBuilder.group({
      nome: [null],
      cargo: [null],
      inicio: [null],
      tecnologias: [null],
      cliente: [null],
      equipe: [null],
      hobbies: [null],
      comida: [null],
      musica: [null],
      motivacao: [null]
    })
  }

}
