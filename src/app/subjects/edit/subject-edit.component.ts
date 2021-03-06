import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ISubject } from '../subject';
import { SubjectService } from '../subject.service';

@Component({
  templateUrl: './subject-edit.component.html',
  styleUrls: ['./subject-edit.component.css']
})
export class SubjectEditComponent implements OnInit {

  pageTitle = 'Assunto';
  errorMessage = '';
  subject: ISubject | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private subjectService: SubjectService) {
  }

  ngOnInit(): void {
    
    const id = this.route.snapshot.paramMap.get('id');    
    if (id) {            
      this.getSubject(id);      
    }
  }

  getSubject(id: string): void {
    this.subjectService.getSubject(id).subscribe({
      next: subject => this.subject = subject,
      error: err => this.errorMessage = err
    });
  }

  onSubmit(): void {        
    if (this.subject) {                              
      this.subjectService.updateSubject(this.subject);        
    }
  }

  remove(): void {        
    if (this.subject) {                              
      this.subjectService.removeSubject(this.subject.id);        
    }
  }

  onBack(): void {
    this.router.navigate(['/subjects']);
  }
}
