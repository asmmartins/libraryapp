import { NgModule } from '@angular/core';
import { BookListComponent } from './list/book-list.component';
import { BookDetailComponent } from './detail/book-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { BookDetailGuard } from './detail/book-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    BookListComponent,
    BookDetailComponent,
    ConvertToSpacesPipe,
  ],
  imports: [
    RouterModule.forChild([
      { path: 'books', component: BookListComponent },
      {
        path: 'books/:id',
        canActivate: [BookDetailGuard],
        component: BookDetailComponent
      }
    ]),
    SharedModule
  ]
})
export class BookModule { }
