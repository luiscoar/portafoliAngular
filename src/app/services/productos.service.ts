import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';
import { resolve, reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];
  productosFiltrado: Producto[] = [];

  constructor(private http: HttpClient) {
      this.cargarProductos();
  }

  private cargarProductos() {

    // se ejecuta
    return new Promise( ( resolve, reject ) => {

      this.http.get('https://angular-html-501a9.firebaseio.com/productos_idx.json')
        .subscribe( (resp: Producto[]) => {
          this.productos = resp;
          this.cargando = false;
          resolve();  // para decir que termino exitosamente
        });
    });
  }

  getProducto(id: string) {
    return this.http.get(`https://angular-html-501a9.firebaseio.com/productos/${ id }.json`);

  }

  buscarProducto( termino: string) {
    if (this.productos.length === 0) {
      this.cargarProductos().then( () => {
        // ejecuta despues de tener los productos
        // aplicar el fltro
        this.filtrarProductos( termino );
      });
    } else {
      // aplicar el filtro
      this.filtrarProductos( termino );
    }

    // hago un barrido del arreglo a otro arreglo
    this.productosFiltrado = this.productos.filter( producto => {
      return true;
    });

    // console.log(this.productosFiltrado);
  }

  // filtro los productos
  private filtrarProductos( termino: string ) {

    // console.log(this.productos);
    this.productosFiltrado = [];  // limpio despues de recargar la pagina

    // convierto en minusculas para busqueda
    termino = termino.toLocaleLowerCase();

    // hago un ciclo para la busqueda en la base de datos
    this.productos.forEach( prod => {

      const tituloLower = prod.titulo.toLocaleLowerCase();
      // si existe la busqueda
      if (prod.categoria.indexOf( termino )  >= 0 || tituloLower.indexOf( termino ) >= 0 ) {
        this.productosFiltrado.push ( prod);
      }
    });
  }

}
