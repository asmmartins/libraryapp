import { NgModule } from '@angular/core';
import { AuthorListComponent } from './list/author-list.component';
import { AuthorDetailComponent } from './detail/author-detail.component';
import { AuthorEditComponent } from './edit/author-edit.component';
import { AuthorAddComponent } from './add/author-add.component';
import { RouterModule } from '@angular/router';
import { AuthorDetailGuard } from './detail/author-detail.guard';
import { AuthorEditGuard } from './edit/author-edit.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AuthorListComponent,
    AuthorDetailComponent,    
    AuthorEditComponent,
    AuthorAddComponent
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
      },
      { path: 'add-authors', component: AuthorAddComponent }
    ]),
    SharedModule
  ]
})
export class AuthorModule { }
