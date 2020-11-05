import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ISubject } from './subject';
import { SubjectService } from './subject.service';

@Component({
  templateUrl: './subject-detail.component.html',
  styleUrls: ['./subject-detail.component.css']
})
export class SubjectDetailComponent implements OnInit {

  pageTitle = 'Assunto';
  errorMessage = '';
  subject: ISubject | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private SubjectService: SubjectService) {
  }

  ngOnInit(): void {
    
    const id = this.route.snapshot.paramMap.get('id');    
    if (id) {            
      this.getSubject(id);      
    }
  }

  getSubject(id: string): void {
    this.SubjectService.getSubject(id).subscribe({
      next: subject => this.subject = subject,
      error: err => this.errorMessage = err
    });
  }

  onBack(): void {
    this.router.navigate(['/subjects']);
  }
}
