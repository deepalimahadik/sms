import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { TutorialsComponent } from './Components/tutorials/tutorials.component';
import { NeedHelpComponent } from './Components/need-help/need-help.component';
import { CatelogComponent } from './Components/catelog/catelog.component';
import { DiscussionComponent } from './Components/discussion/discussion.component';
import { MessageComponent } from './Components/message/message.component';
import { ResourcesComponent } from './Components/resources/resources.component';
import { CommunityComponent } from './Components/community/community.component';
import { MyLabComponent    } from './Components/my-lab/my-lab.component';
import { MyCourseComponent  } from './Components/my-course/my-course.component';
import { MyCertificationComponent } from './Components/my-certification/my-certification.component';
import { ClassroomsComponent } from './Components/classrooms/classrooms.component';
import { ReportingComponent } from './Components/reporting/reporting.component';
import {PlannerComponent} from './Components/planner/planner.component'
const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  //{ path: 'hero/:id',      component: HomeComponent },
  {
    path: 'Dashboard',
    component: DashboardComponent,
   // data: { title: 'Heroes List' }
  },
  {
    path: 'Catalog',
    component: CatelogComponent,
   // data: { title: 'Heroes List' }
  },
  {
    path: 'my-course',
    component: MyCourseComponent,
   // data: { title: 'Heroes List' }
  },
  {
    path: 'my-lab',
    component: MyLabComponent,
   // data: { title: 'Heroes List' }
  },
  {
    path: 'my-certification',
    component: MyCertificationComponent,
   // data: { title: 'Heroes List' }
  },
  {
    path: 'Classrooms',
    component: ClassroomsComponent,
   // data: { title: 'Heroes List' }
  },
  {
    path: 'Reporting',
    component: ReportingComponent,
   // data: { title: 'Heroes List' }
  },
  {
    path: 'Planner',
    component: PlannerComponent,
   // data: { title: 'Heroes List' }
  },
  {
    path: 'Resources',
    component: ResourcesComponent,
   // data: { title: 'Heroes List' }
  },
  {
    path: 'Discussion',
    component: DiscussionComponent,
   // data: { title: 'Heroes List' }
  },
  {
    path: 'Community',
    component: CommunityComponent,
   // data: { title: 'Heroes List' }
  },
  {
    path: 'Message',
    component: MessageComponent,
   // data: { title: 'Heroes List' }
  },
  {
    path: 'Tutorials',
    component: TutorialsComponent,
   // data: { title: 'Heroes List' }
  },
  {
    path: 'NeedHelp',
    component: NeedHelpComponent,
   // data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/Home',
    pathMatch: 'full'
  },
 // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
