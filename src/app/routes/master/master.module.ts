import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { MasterRoutingModule } from './master-routing.module';
import { MasterUniversitasUniversitasListComponent } from './universitas/universitas-list/universitas-list.component';
import { MasterUniversitasUniversitasAddComponent } from './universitas/universitas-add/universitas-add.component';
import { MasterFakultasFakultasEditComponent } from './fakultas/fakultas-edit/fakultas-edit.component';
import { MasterUniversitasUniversitasEditComponent } from './universitas/universitas-edit/universitas-edit.component';
import { MasterFakultasFakultasAddComponent } from './fakultas/fakultas-add/fakultas-add.component';
import { MasterFakultasFakultasListComponent } from './fakultas/fakultas-list/fakultas-list.component';
import { MasterProdiProdiListComponent } from './prodi/prodi-list/prodi-list.component';
import { MasterProdiProdiAddComponent } from './prodi/prodi-add/prodi-add.component';
import { MasterProdiProdiEditComponent } from './prodi/prodi-edit/prodi-edit.component';
import { MasterAgendaAgendaEditComponent } from './agenda/agenda-edit/agenda-edit.component';
import { MasterAgendaAgendaListComponent } from './agenda/agenda-list/agenda-list.component';
import { MasterAgendaAgendaAddComponent } from './agenda/agenda-add/agenda-add.component';
import { MasterUserListComponent } from './user/user-list/user-list.component';
import { MasterUserAddComponent } from './user/user-add/user-add.component';
import { MasterUserEditComponent } from './user/user-edit/user-edit.component';

const COMPONENTS = [];
const COMPONENTS_DYNAMIC = [MasterUniversitasUniversitasListComponent, MasterUniversitasUniversitasAddComponent, MasterFakultasFakultasEditComponent, MasterUniversitasUniversitasEditComponent, MasterFakultasFakultasAddComponent, MasterFakultasFakultasListComponent, MasterProdiProdiListComponent, MasterProdiProdiAddComponent, MasterProdiProdiEditComponent, MasterAgendaAgendaEditComponent, MasterAgendaAgendaListComponent, MasterAgendaAgendaAddComponent, MasterUserListComponent, MasterUserAddComponent, MasterUserEditComponent];

@NgModule({
  imports: [
    SharedModule,
    MasterRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_DYNAMIC
  ],
  entryComponents: COMPONENTS_DYNAMIC
})
export class MasterModule { }
