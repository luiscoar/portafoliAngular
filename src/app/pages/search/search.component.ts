import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  // adquiero el active router para obtener la ruta
  // y mando a llamar mi productosService para obtener el metodo
  constructor(private route: ActivatedRoute,
              public productoService: ProductosService) { }

  ngOnInit() {

    // obtengo el valor del termino de la busqueda
    this.route.params
      .subscribe( params => {
        console.log( params['termino']);

        this.productoService.buscarProducto(params['termino']);
      });

  }


}
