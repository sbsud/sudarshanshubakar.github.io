import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsComponent } from './projects/projects.component'
import { ExperienceComponent } from './experience/experience.component'
import { AboutComponent } from './about/about.component'
import { ContactComponent } from './contact/contact.component'
import { HomeComponent } from './home/home.component'
export const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full'},
	{ path: 'home', component: HomeComponent },
	{ path: 'projects', component: ProjectsComponent }
	{ path: 'experience', component: ExperienceComponent }
	{ path: 'about', component: AboutComponent }
	{ path: 'contact', component: ContactComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
