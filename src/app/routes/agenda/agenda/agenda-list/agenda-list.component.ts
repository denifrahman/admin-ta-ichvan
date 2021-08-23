import { DatePipe } from '@angular/common';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { MtxGridColumn } from '@ng-matero/extensions';
import { ResponseInterface } from '@shared/utils/response.interface';
import { MasterService } from 'app/routes/master/master.service';
import { ToastrService } from 'ngx-toastr';
import { AgendaService } from '../agenda.service';

@Component({
  selector: 'app-agenda-agenda-agenda-list',
  templateUrl: './agenda-list.component.html',
  styleUrls: ['./agenda-list.component.scss']
})
export class AgendaAgendaAgendaListComponent implements OnInit {

  @ViewChild('logoTmpl', { static: true }) logoTmpl: TemplateRef<any>;
  no = 0;
  columns: MtxGridColumn[];
  columnsFakultas: MtxGridColumn[];
  columnsProdi: MtxGridColumn[];
  list = [];
  listEventFakultas = [];
  listEventProdi = [];
  total = 0;
  isLoading = true;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  queryUniv = {
    q: '',
    page: 0,
    size: 10
  };

  constructor(
    private agendaService: AgendaService,
    private route: Router,
    private toast: ToastrService
  ) { }
  pipe = new DatePipe('en-US');
  ngOnInit() {
    this.findAllAgendaUniversitas();
    this.renderTable();
  }

  renderTable() {
    this.columns = [
      {
        header: 'No',
        minWidth: 20,
        width: '20px',
        field: 'no',
        formatter: (data: any) => this.list.indexOf(data) + 1 + (this.queryUniv.page * this.queryUniv.size),
      },
      {
        header: 'Nama',
        minWidth: 250,
        width: '250px',
        field: 'nama',
      },
      {
        header: 'Kode',
        minWidth: 250,
        width: '250px',
        field: 'kode',
      },
      {
        header: 'Tanggal Acara',
        minWidth: 250,
        width: '250px',
        field: 'tanggal_mulai',
        formatter: (data: any) => this.pipe.transform(data.tanggal_mulai, 'dd-MMM-yyyy HH:mm') + ' - ' + this.pipe.transform(data.tanggal_selesai, 'dd-MMM-yyyy HH:mm')
      },
      {
        header: 'Aktif Agenda',
        minWidth: 250,
        width: '250px',
        field: 'm_universita',
        formatter: (data: any) => (data.m_universita == null ? '' : data.m_universita.nama) + '' + (data.m_fakulta == null ? '' : data.m_fakulta.nama) + '' + (data.m_prodi == null ? '' : data.m_prodi.nama)
      },
      {
        header: 'Opsi',
        field: 'id',
        minWidth: 50,
        width: '50px',
        type: 'button',
        buttons: [
          {
            type: 'icon',
            icon: 'edit',
            tooltip: 'Ubah',
            click: record => this.edit(record),
          },
          {
            type: 'icon',
            color: 'accent',
            icon: 'delete',
            tooltip: 'Hapus',
            click: record => this.remove(record),
          },
        ],
      },
    ]
  }

  remove(record): void {
    if (confirm('Are you sure to delete ' + record.nama)) {
      this.agendaService.delete(record.id.toString()).subscribe((res: ResponseInterface) => {
        if (res.statusCode === 200) {
          this.findAllAgendaUniversitas();
          this.toast.success(res.message, 'Hapus');
        }
      })
    }
  }
  edit(record: any): void {
    console.log(record.id);

    if (record.m_universita != null) {
      this.route.navigateByUrl('agenda/agenda-edit?id=' + record.id + '&' + 'nama=' + record.m_universita.nama + '&' + 'flag=universitas');
    }
    if (record.m_fakulta != null) {
      this.route.navigateByUrl('agenda/agenda-edit?id=' + record.id + '&' + 'nama=' + record.m_fakulta.nama + '&' + 'flag=fakultas');
    }
    if (record.m_prodi != null) {
      this.route.navigateByUrl('agenda/agenda-edit?id=' + record.id + '&' + 'nama=' + record.m_prodi.nama + '&' + 'flag=prodi');
    }
  }

  findAllAgendaUniversitas() {
    this.agendaService.findAllAgendaUniversitas(this.queryUniv).subscribe(
      (res: ResponseInterface) => {
        this.list = res.data.rows;
        this.total = res.data.count;
        this.isLoading = false;
      },
      () => {
        this.isLoading = false;
      },
      () => {
        this.isLoading = false;
      }
    );
  }

  getNextPage(e: PageEvent) {
    this.queryUniv.page = e.pageIndex;
    this.queryUniv.size = e.pageSize;
    this.findAllAgendaUniversitas();
  }
  tambah(flag) {
    this.route.navigateByUrl('agenda/agenda-add?flag=' + flag);
  }
  search() {
    this.findAllAgendaUniversitas();
  }
}
