import { NgModule } from '@angular/core';
import { AuthorListComponent } from './author-list.component';
import { AuthorDetailComponent } from './author-detail.component';
import { RouterModule } from '@angular/router';
import { AuthorDetailGuard } from './author-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AuthorListComponent,
    AuthorDetailComponent,    
  ],
  imports: [
    RouterModule.forChild([
      { path: 'authors', component: AuthorListComponent },
      {
        path: 'authors/:id',
        canActivate: [AuthorDetailGuard],
        component: AuthorDetailComponent
      }
    ]),
    SharedModule
  ]
})
export class AuthorModule { }
