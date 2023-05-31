import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { articulo } from './interfaces/articulos.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public articulos : articulo[] = [];
    constructor(private http: HttpClient) { }
    ngOnInit() {
        let url = "http://localhost/frontend/Unidad%205/productos/";
        this.http.get<articulo[]>(url)
            .subscribe(
                resultado => {
                    this.articulos = resultado;
                    this.validarDatos = this.articulos.length > 0;
                    console.log(this.articulos);
                }
            );
    }
    public validarDatos: boolean = false;
}
