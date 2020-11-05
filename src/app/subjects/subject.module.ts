import { NgModule } from '@angular/core';
import { SubjectListComponent } from './list/subject-list.component';
import { SubjectDetailComponent } from './detail/subject-detail.component';
import { SubjectAddComponent } from './add/subject-add.component';
import { RouterModule } from '@angular/router';
import { SubjectDetailGuard } from './detail/subject-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    SubjectListComponent,
    SubjectDetailComponent,
    SubjectAddComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'subjects', component: SubjectListComponent },
      {
        path: 'subjects/:id',
        canActivate: [SubjectDetailGuard],
        component: SubjectDetailComponent
      },
      { path: 'add-subjects', component: SubjectAddComponent }
    ]),
    SharedModule
  ]
})
export class SubjectModule { }
