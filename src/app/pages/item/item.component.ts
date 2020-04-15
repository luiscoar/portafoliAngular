import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { ProductoDescripcion } from 'src/app/interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  // llamo mi interface
  producto: ProductoDescripcion;
  id: string;

  // activo los routes
  constructor(private route: ActivatedRoute,
              public productoService: ProductosService ) { }

  ngOnInit() {
    // obtengo los parametros que vienen del router link
    // al hacer clic en una imagen desde el portafolio.component.html
    this.route.params
    .subscribe( parametros => {
      // console.log(parametros['id']);

      this.productoService.getProducto(parametros['id'])
          .subscribe( (producto: ProductoDescripcion) => {
            this.id = parametros['id'];
            this.producto = producto;
      });

    });
  }

}
