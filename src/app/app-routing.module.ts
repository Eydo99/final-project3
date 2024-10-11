import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';  
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ProjectsComponent } from './projects/projects.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'services',component:ServicesComponent},
 {path:'projects',component:ProjectsComponent},
 {path:'blog',component:BlogComponent},
 {path:'contact',component:ContactComponent},
 {path:'project-details',component:ProjectDetailsComponent},
 {path:'blog-details',component:BlogDetailsComponent},
 {path:'service-details',component:ServiceDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
