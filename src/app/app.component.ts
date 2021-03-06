import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
    <nav class='navbar navbar-expand navbar-light bg-light'>        
        <ul class='nav nav-pills'>
          <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/welcome']">Home</a></li>
          <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/authors']">Autores</a></li>          
          <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/subjects']">Assuntos</a></li>
          <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/books']">Livros</a></li>          
          <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/author-books']">Livros por Autor</a></li>
        </ul>
    </nav>
    <div class='container'>
      <router-outlet></router-outlet>
    </div>
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
}
