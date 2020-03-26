import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { CommonModule, HashLocationStrategy, Location, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HeaderComponent } from './Components/Shared/header/header.component';
import { FooterComponent } from './Components/Shared/footer/footer.component';
import { SidebarComponent } from './Components/Shared/sidebar/sidebar.component';
import { NeedHelpComponent } from './Components/need-help/need-help.component';
import { TutorialsComponent } from './Components/tutorials/tutorials.component';

import { LoginService } from './Components/services';
import { CatelogComponent } from './Components/catelog/catelog.component';
import { DiscussionComponent } from './Components/discussion/discussion.component';
import { MessageComponent } from './Components/message/message.component';
import { ResourcesComponent } from './Components/resources/resources.component';
import { CommunityComponent } from './Components/community/community.component';
import { MyCourseComponent } from './Components/my-course/my-course.component';
import { MyLabComponent } from './Components/my-lab/my-lab.component';
import { MyCertificationComponent } from './Components/my-certification/my-certification.component';
import { PlannerComponent } from './Components/planner/planner.component';
import { ReportingComponent } from './Components/reporting/reporting.component';
import { ClassroomsComponent } from './Components/classrooms/classrooms.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    NeedHelpComponent,
    TutorialsComponent,
    CatelogComponent,
    DiscussionComponent,
    MessageComponent,
    ResourcesComponent,
    CommunityComponent,
    MyCourseComponent,
    MyCertificationComponent,
    MyLabComponent,
    PlannerComponent,
    ReportingComponent,
    ClassroomsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
