import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 formulario = {
   objeto : "",
   descripcion : ""
  };

  constructor() { }

  ngOnInit(): void {
  }
  Enviar(){
    console.log(`Objeto ${this.formulario.objeto} Descripcion ${this.formulario.descripcion}`);
  }

}
