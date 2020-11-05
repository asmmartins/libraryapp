import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IAuthor } from './author';
import { AuthorService } from './author.service';

@Component({  
  templateUrl: './author-add.component.html',
  styleUrls: ['./author-add.component.css']
})
export class AuthorAddComponent implements OnInit {

  pageTitle = 'Autor';
  errorMessage = '';
  author: IAuthor | undefined;  

  constructor(private router: Router,
              private authorService: AuthorService) {
  }

  ngOnInit(): void {     
    this.author = { "id": null, "name": null };
  }

  onSubmit(): void {        
    if (this.author) {                              
      this.authorService.createAuthor(this.author); 
      this.onBack();     
    }
  }

  onBack(): void {
    this.router.navigate(['/authors']);
  }
}
