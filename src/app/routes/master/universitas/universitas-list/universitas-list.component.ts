import { formatNumber } from '@angular/common';
import { ChangeDetectorRef, Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { MtxGridColumn, MtxGridComponent } from '@ng-matero/extensions';
import { ResponseInterface } from '@shared/utils/response.interface';
import { ToastrService } from 'ngx-toastr';
import { MasterService } from '../../master.service';

@Component({
  selector: 'app-master-universitas-universitas-list',
  templateUrl: './universitas-list.component.html',
  styleUrls: ['./universitas-list.component.scss']
})
export class MasterUniversitasUniversitasListComponent implements OnInit {

  @ViewChild('logoTmpl', { static: true }) logoTmpl: TemplateRef<any>;
  @ViewChild('grid') public grid: MtxGridComponent;
  no = 0;
  columns: MtxGridColumn[];
  columnDetailFakultas: MtxGridColumn[];
  columnDetailProdi: MtxGridColumn[];
  list = [];

  total = 0;
  isLoading = true;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  query = {
    q: '',
    page: 0,
    size: 10,
  };

  get params() {
    const p = Object.assign({}, this.query);
    p.page += 0;
    return p;
  }
  constructor(
    private masterService: MasterService,
    private route: Router,
    private toast: ToastrService,
    private changeDetectorRefs: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.findAllUniversitas();
    this.renderTable();
    this.renderTableDetailFakultas();
    this.renderTableDetailProdi();
  }

  renderTable() {
    this.columns = [
      {
        showExpand: true,
        header: 'No',
        minWidth: 20,
        width: '20px',
        field: 'no',
        formatter: (data: any) => this.list.indexOf(data) + 1 + (this.query.page * this.query.size),
      },
      {
        header: 'Nama',
        minWidth: 250,
        width: '250px',
        field: 'nama',
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
    ];
  }
  renderTableDetailFakultas() {
    this.columnDetailFakultas = [
      {
        showExpand: true,
        header: 'Nama',
        minWidth: 250,
        width: '250px',
        field: 'nama',
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
        ],
      },
    ];
  }
  renderTableDetailProdi() {
    this.columnDetailProdi = [
      {
        header: 'Nama',
        minWidth: 250,
        width: '250px',
        field: 'nama',
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
          }
        ],
      },
    ];
  }
  remove(record): void {
    if (confirm('Are you sure to delete ' + record.nama)) {
      this.masterService.deleteUniversitas(record.id).subscribe((res: ResponseInterface) => {
        if (res.statusCode === 200) {
          this.findAllUniversitas();
          this.toast.success(res.message, 'Hapus');
        }
      })
    }
  }
  edit(record: any): void {
    this.route.navigateByUrl('master/universitas-edit?id=' + record.id);
  }
  async removeProdi(record) {
    const data = [];
    this.list.forEach(element => {
      element['m_fakultas'].forEach(fakultas => {
        const index = fakultas.m_prodis.indexOf(record, 0);
        if (index > -1) {
          element['m_fakultas'].push(record);
          fakultas.m_prodis.splice(index, 1);

          this.list = this.list.filter(_ => true);
          this.changeDetectorRefs.detectChanges();
        }
      });
    });
    // this.list = data;
    // console.log(this.list);
  }
  findAllUniversitas() {
    this.masterService.findAllUniversitas(this.query).subscribe(
      (res: ResponseInterface) => {
        console.log(res);
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
    this.query.page = e.pageIndex;
    this.query.size = e.pageSize;
    this.findAllUniversitas();
  }
  tambah() {
    this.route.navigateByUrl('master/universitas-add');
  }
  search() {
    this.findAllUniversitas();
  }

}
