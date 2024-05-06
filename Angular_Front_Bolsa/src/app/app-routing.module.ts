import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddArticleComponent } from './components/article/add-article/add-article.component';
import { ListArticleComponent } from './components/article/list-article/list-article.component';
import { ShowArticleComponent } from './components/article/show-article/show-article.component';
import { LoginComponent } from './components/auth/login.component';
import { RegisterAdviserComponent } from './components/auth/register-adviser.component';
import { RegisterComponent } from './components/auth/register.component';
import { convocatoriaComponent } from './components/convocatoria/convocatoria.component';
import { AddConvocatoriaComponent } from './components/convocatorias/add-convocatoria/add-convocatoria.component';
import { ListConvocatoriaComponent } from './components/convocatorias/list-convocatoria/list-convocatoria.component';

import { HomeComponent } from './components/home/home.component';
import { ListpComponent } from './components/project/listp/listp.component';
import { MenupComponent } from './components/project/menup/menup.component';
import { AddResearchComponent } from './components/research/add-research/add-research.component';

import { AddStudentComponent } from './components/student/add-student/add-student.component';
import { DetailStudentComponent } from './components/student/detail-student/detail-student.component';
import { EditStudentComponent } from './components/student/edit-student/edit-student.component';
import { ListStudentComponent } from './components/student/list-student/list-student.component';
import { AddTemplateComponent } from './components/template/add-template/add-template.component';
import { CrudTemplateComponent } from './components/template/crud-template/crud-template.component';
import { LoginGuard } from './guards/login.guard';
import { RolesGuard } from './guards/roles.guard';
import { ListPostComponent } from './post/list-post/list-post.component';
import { ApplicationComponent } from './post/application/application.component';




const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'list-student', component:ListStudentComponent, canActivate: [RolesGuard], data: {expectedRole: ['admin', 'adviser', 'user']}},
  {path:'add-student', component:AddStudentComponent, canActivate: [RolesGuard], data: {expectedRole: ['admin', 'adviser']}},
  {path:'edit-student', component:EditStudentComponent},
  {path:'detail-student/:id', component:DetailStudentComponent},
  {path:'login', component: LoginComponent, canActivate: [LoginGuard]},
  {path:'register', component: RegisterComponent, canActivate: [LoginGuard]},
  {path:'register-adviser', component: RegisterAdviserComponent, canActivate: [RolesGuard], data: {expectedRole: ['admin']}},
  {path:'add-article', component: AddArticleComponent},
  {path:'add-research', component: AddResearchComponent},
  {path:'list-research', component: ListArticleComponent},
  {path:'list-article', component:ListArticleComponent},
  {path:'show-article/:id', component: ShowArticleComponent},
  {path:'project', component: MenupComponent},
  {path:'listp', component: ListpComponent},



  {path:'template', component: CrudTemplateComponent},
  {path:'add-template', component: AddTemplateComponent},
  //{path:'',component:LoginComponent},
  {path:'convocatoria',component:convocatoriaComponent},
  {path:'list-convocatoria',component:ListConvocatoriaComponent},
  {path:'add-convocatoria',component:AddConvocatoriaComponent},
  {path: 'posts', component:ListPostComponent},
  {path: 'applications', component:ApplicationComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
