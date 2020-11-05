import { NgModule } from '@angular/core';
import { AuthorBookListComponent } from './list/authorbook-list.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AuthorBookListComponent  
  ],
  imports: [
    RouterModule.forChild([
      { path: 'author-books', component: AuthorBookListComponent }      
    ]),
    SharedModule
  ]
})
export class AuthorBookModule { }
