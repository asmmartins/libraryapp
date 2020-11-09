import { NgModule } from '@angular/core';
import { BookListComponent } from './list/book-list.component';
import { BookDetailComponent } from './detail/book-detail.component';
import { BookEditComponent } from './edit/book-edit.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { BookDetailGuard } from './detail/book-detail.guard';
import { BookEditGuard } from './edit/book-edit.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    BookListComponent,
    BookDetailComponent,
    BookEditComponent,
    ConvertToSpacesPipe,
  ],
  imports: [
    RouterModule.forChild([
      { path: 'books', component: BookListComponent },
      {
        path: 'books/:id',
        canActivate: [BookDetailGuard],
        component: BookDetailComponent
      },
      {
        path: 'edit-books/:id',
        canActivate: [BookEditGuard],
        component: BookEditComponent
      }
    ]),
    SharedModule
  ]
})
export class BookModule { }
