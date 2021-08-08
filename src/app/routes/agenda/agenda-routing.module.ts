import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgendaAgendaAgendaAddComponent } from './agenda/agenda-add/agenda-add.component';
import { AgendaAgendaAgendaEditComponent } from './agenda/agenda-edit/agenda-edit.component';
import { AgendaAgendaAgendaListComponent } from './agenda/agenda-list/agenda-list.component';

const routes: Routes = [
  { path: 'agenda-list', component: AgendaAgendaAgendaListComponent },
  { path: 'agenda-add', component: AgendaAgendaAgendaAddComponent },
  { path: 'agenda-edit', component: AgendaAgendaAgendaEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgendaRoutingModule { }
