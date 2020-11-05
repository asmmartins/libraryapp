import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ISubject } from '../subject';
import { SubjectService } from '../subject.service';

@Component({
  templateUrl: './subject-add.component.html',
  styleUrls: ['./subject-add.component.css']
})
export class SubjectAddComponent implements OnInit {

  pageTitle = 'Assunto';
  errorMessage = '';
  subject: ISubject | undefined;

  constructor(private router: Router,
              private subjectService: SubjectService) {
  }

  ngOnInit(): void {
    this.subject = { "id": null, "description": null }
  }

  onSubmit(): void {        
    if (this.subject) {                              
      this.subjectService.createSubject(this.subject); 
    }
  }

  onBack(): void {
    this.router.navigate(['/subjects']);
  }
}
