import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IAuthor } from './author';
import { AuthorService } from './author.service';

@Component({
  templateUrl: './author-create.component.html',
  styleUrls: ['./author-create.component.css']
})
export class AuthorCreateComponent implements OnInit {

  pageTitle = 'Livro';
  errorMessage = '';
  author: IAuthor | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authorService: AuthorService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    if (id) {            
      this.getAuthor(id);      
    }
  }

  getAuthor(id: string): void {
    this.authorService.getAuthor(id).subscribe({
      next: author => this.author = author,
      error: err => this.errorMessage = err
    });
  }

  onBack(): void {
    this.router.navigate(['/authors']);
  }
}
