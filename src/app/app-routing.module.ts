import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportMainComponent } from './report-main/report-main.component';

const routes: Routes = [
	{ path: 'reportmain', component: ReportMainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ReportMainComponent]
