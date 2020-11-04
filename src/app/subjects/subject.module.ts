import { NgModule } from '@angular/core';
import { SubjectListComponent } from './subject-list.component';
import { SubjectDetailComponent } from './subject-detail.component';
import { RouterModule } from '@angular/router';
import { SubjectDetailGuard } from './subject-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    SubjectListComponent,
    SubjectDetailComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'subjects', component: SubjectListComponent },
      {
        path: 'subjects/:id',
        canActivate: [SubjectDetailGuard],
        component: SubjectDetailComponent
      }
    ]),
    SharedModule
  ]
})
export class SubjectModule { }
