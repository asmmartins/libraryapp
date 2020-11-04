import { Component, OnInit } from '@angular/core';

import { ISubject } from './subject';
import { SubjectService } from './subject.service';

@Component({
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {

  pageTitle = 'Assuntos';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage = '';

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredSubjects = this.listFilter ? this.performFilter(this.listFilter) : this.subjects;
  }

  filteredSubjects: ISubject[] = [];
  subjects: ISubject[] = [];

  constructor(private SubjectService: SubjectService) { }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Assuntos: ' + message;
  }

  performFilter(filterBy: string): ISubject[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.subjects.filter((subject: ISubject) =>
      subject.description.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.SubjectService.getSubjects().subscribe({
      next: subjects => {
        this.subjects = subjects;
        this.filteredSubjects = this.subjects;
      },
      error: err => this.errorMessage = err
    });
  }
}
