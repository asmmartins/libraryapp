import { NgModule } from '@angular/core';
import { SubjectListComponent } from './list/subject-list.component';
import { SubjectDetailComponent } from './detail/subject-detail.component';
import { SubjectAddComponent } from './add/subject-add.component';
import { SubjectEditComponent } from './edit/subject-edit.component';
import { RouterModule } from '@angular/router';
import { SubjectDetailGuard } from './detail/subject-detail.guard';
import { SubjectEditGuard } from './edit/subject-edit.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    SubjectListComponent,
    SubjectDetailComponent,
    SubjectAddComponent,
    SubjectEditComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'subjects', component: SubjectListComponent },
      {
        path: 'subjects/:id',
        canActivate: [SubjectDetailGuard],
        component: SubjectDetailComponent
      },
      { path: 'add-subjects', component: SubjectAddComponent },
      {
        path: 'edit-subjects/:id',
        canActivate: [SubjectEditGuard],
        component: SubjectEditComponent
      },
    ]),
    SharedModule
  ]
})
export class SubjectModule { }
