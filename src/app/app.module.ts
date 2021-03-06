import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { BookModule } from './books/book.module';
import { AuthorModule } from './authors/author.module';
import { SubjectModule } from './subjects/subject.module';
import { AuthorBookModule } from './authors-books/authorbook.module';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [     
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),      
    FormsModule,
    NgMultiSelectDropDownModule,    
    BookModule,
    AuthorModule,
    SubjectModule,
    AuthorBookModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
