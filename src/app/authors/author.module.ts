import { NgModule } from '@angular/core';
import { AuthorListComponent } from './author-list.component';
import { AuthorDetailComponent } from './author-detail.component';
import { AuthorCreateComponent } from './author-create.component';
import { RouterModule } from '@angular/router';
import { AuthorDetailGuard } from './author-detail.guard';
import { AuthorCreateGuard } from './author-create.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AuthorListComponent,
    AuthorDetailComponent,    
    AuthorCreateComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'authors', component: AuthorListComponent },
      {
        path: 'authors/:id',
        canActivate: [AuthorDetailGuard],
        component: AuthorDetailComponent
      },
      {
        path: 'create-authors/:id',
        canActivate: [AuthorCreateGuard],
        component: AuthorCreateComponent
      }
    ]),
    SharedModule
  ]
})
export class AuthorModule { }
