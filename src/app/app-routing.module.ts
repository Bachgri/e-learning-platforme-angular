import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogComponent } from './Login/log/log.component';
import { InsComponent } from './Inscription/ins/ins.component';
import { PasswordComponent } from './password/password.component';
import { CheckComponent } from './check/check.component';
import { ChangeComponent } from './change/change.component';
import { AdminInscriptionsComponent } from './admin-inscriptions/admin-inscriptions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminNotesComponent } from './admin-notes/admin-notes.component';
import { AdminProfesseurComponent } from './admin-professeur/admin-professeur.component';
import { ProfCoursComponent } from './prof-cours/prof-cours.component';
import { ProfDashboardComponent } from './prof-dashboard/prof-dashboard.component';
import { ProfExamsComponent } from './prof-exams/prof-exams.component';
import { CoursePageComponent } from './Etudiant/course-page/course-page.component';
import { HomeComponent } from './Etudiant/home/home.component';
import { MyCoursesComponent } from './Etudiant/my-courses/my-courses.component';
import { LogOutComponent } from './log-out/log-out.component';
import { ExamComponent } from './Etudiant/Course/exam/exam.component';

const routes: Routes = [
  { path: 'Login', component: LogComponent },
  { path: 'Inscription', component: InsComponent },
  { path: 'Password', component: PasswordComponent },
  { path: 'Check', component: CheckComponent },
  { path: 'Change', component: ChangeComponent },
  { path: 'Etudiant/home', component: HomeComponent },
  { path: 'Etudiant/Course/:id', component: CoursePageComponent },
  { path: 'Etudiant/Courses', component: MyCoursesComponent },
  { path: 'Etudiant/Course/:id/Exam', component : ExamComponent},
  { path: 'admin/inscriptions', component: AdminInscriptionsComponent },
  { path: 'admin/dashboard', component: AdminDashboardComponent },
  { path: 'admin/notes', component: AdminNotesComponent },
  { path: 'admin/professeurs', component: AdminProfesseurComponent },
  { path: 'prof/course', component: ProfCoursComponent },
  { path: 'prof/dashboard', component: ProfDashboardComponent },
  { path: 'prof/examens', component: ProfExamsComponent },
  { path: 'logout', component: LogOutComponent },

  //{path:"", redirectTo:"Login",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
