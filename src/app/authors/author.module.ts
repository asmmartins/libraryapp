import { NgModule } from '@angular/core';
import { AuthorListComponent } from './author-list.component';
import { AuthorDetailComponent } from './author-detail.component';
import { AuthorEditComponent } from './author-edit.component';
import { RouterModule } from '@angular/router';
import { AuthorDetailGuard } from './author-detail.guard';
import { AuthorEditGuard } from './author-edit.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AuthorListComponent,
    AuthorDetailComponent,    
    AuthorEditComponent
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
        path: 'edit-authors/:id',
        canActivate: [AuthorEditGuard],
        component: AuthorEditComponent
      }
    ]),
    SharedModule
  ]
})
export class AuthorModule { }
