import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogComponent } from './Login/log/log.component';
import { InsComponent } from './Inscription/ins/ins.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider,
  GoogleSigninButtonDirective,
  GoogleSigninButtonModule,
} from '@abacritt/angularx-social-login';
import { PasswordComponent } from './password/password.component';
import { CheckComponent } from './check/check.component';
import { ChangeComponent } from './change/change.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminInscriptionsComponent } from './admin-inscriptions/admin-inscriptions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminNotesComponent } from './admin-notes/admin-notes.component';
import { AdminProfesseurComponent } from './admin-professeur/admin-professeur.component';
import { ProfCoursComponent } from './prof-cours/prof-cours.component';
import { ProfDashboardComponent } from './prof-dashboard/prof-dashboard.component';
import { ProfExamsComponent } from './prof-exams/prof-exams.component';
import { HomeComponent } from './Etudiant/home/home.component';
import { CoursesComponent } from './Etudiant/courses/courses.component';
import { MyCoursesComponent } from './Etudiant/my-courses/my-courses.component';
import { LogOutComponent } from './log-out/log-out.component';
import { InterceptorInterceptor } from './interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LogComponent,
    InsComponent,
    PasswordComponent,
    CheckComponent,
    ChangeComponent,
    HomeComponent,
    CoursesComponent,
    SidebarComponent,
    MyCoursesComponent,
    AdminInscriptionsComponent,
    DashboardComponent,
    AdminDashboardComponent,
    AdminNotesComponent,
    AdminProfesseurComponent,
    ProfCoursComponent,
    ProfDashboardComponent,
    ProfExamsComponent,
    LogOutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    SocialLoginModule,
    GoogleSigninButtonModule,
    FormsModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorInterceptor,
      multi: true,
    },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '858810144935-hnm5m9mcgdsd1tihv574ienbn151s1jb.apps.googleusercontent.com',
              {
                scopes:
                  'profile email https://www.googleapis.com/auth/calendar',
              }
            ),
          },
        ],
        onError: (err) => {
          console.error(err);
        },
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
