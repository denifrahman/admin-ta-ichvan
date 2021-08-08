import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AgendaRoutingModule } from './agenda-routing.module';
import { AgendaAgendaAgendaListComponent } from './agenda/agenda-list/agenda-list.component';
import { AgendaAgendaAgendaAddComponent } from './agenda/agenda-add/agenda-add.component';
import { AgendaAgendaAgendaEditComponent } from './agenda/agenda-edit/agenda-edit.component';

const COMPONENTS = [];
const COMPONENTS_DYNAMIC = [AgendaAgendaAgendaListComponent, AgendaAgendaAgendaAddComponent, AgendaAgendaAgendaEditComponent];

@NgModule({
  imports: [
    SharedModule,
    AgendaRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_DYNAMIC
  ],
  entryComponents: COMPONENTS_DYNAMIC
})
export class AgendaModule { }
