import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // constructor() { }
  // importo mi servicio y el router para navegar
  constructor( public _servicio: InfoPaginaService,
              private router: Router) { }

  ngOnInit() {
  }

  // metodo obtener la busqueda y navegar al componente search
  buscarProducto( termino: string) {

    // la palabra debe ser mayor para poder navegar en la bd
    if ( termino.length < 1) {
      return;
    }
    // para mandar el termino con la navegacion
    this.router.navigate(['/search', termino]);
  }

}
