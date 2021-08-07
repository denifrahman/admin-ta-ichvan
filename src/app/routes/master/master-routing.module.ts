import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterAgendaAgendaAddComponent } from './agenda/agenda-add/agenda-add.component';
import { MasterAgendaAgendaListComponent } from './agenda/agenda-list/agenda-list.component';
import { MasterFakultasFakultasAddComponent } from './fakultas/fakultas-add/fakultas-add.component';
import { MasterFakultasFakultasEditComponent } from './fakultas/fakultas-edit/fakultas-edit.component';
import { MasterFakultasFakultasListComponent } from './fakultas/fakultas-list/fakultas-list.component';
import { MasterProdiProdiAddComponent } from './prodi/prodi-add/prodi-add.component';
import { MasterProdiProdiEditComponent } from './prodi/prodi-edit/prodi-edit.component';
import { MasterProdiProdiListComponent } from './prodi/prodi-list/prodi-list.component';
import { MasterUniversitasUniversitasAddComponent } from './universitas/universitas-add/universitas-add.component';
import { MasterUniversitasUniversitasEditComponent } from './universitas/universitas-edit/universitas-edit.component';
import { MasterUniversitasUniversitasListComponent } from './universitas/universitas-list/universitas-list.component';
import { MasterUserAddComponent } from './user/user-add/user-add.component';
import { MasterUserEditComponent } from './user/user-edit/user-edit.component';
import { MasterUserListComponent } from './user/user-list/user-list.component';

const routes: Routes = [
  { path: 'agenda', component: MasterAgendaAgendaListComponent },
  { path: 'fakultas', component: MasterFakultasFakultasListComponent },
  { path: 'fakultas-edit', component: MasterFakultasFakultasEditComponent },
  { path: 'fakultas-add', component: MasterFakultasFakultasAddComponent },
  { path: 'universitas', component: MasterUniversitasUniversitasListComponent },
  { path: 'universitas-add', component: MasterUniversitasUniversitasAddComponent },
  { path: 'universitas-edit', component: MasterUniversitasUniversitasEditComponent },
  { path: 'prodi', component: MasterProdiProdiListComponent },
  { path: 'prodi-add', component: MasterProdiProdiAddComponent },
  { path: 'prodi-edit', component: MasterProdiProdiEditComponent },
  { path: 'user-edit', component: MasterUserEditComponent },
  { path: 'user-add', component: MasterUserAddComponent },
  { path: 'user', component: MasterUserListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
