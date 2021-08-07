import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { MtxGridColumn } from '@ng-matero/extensions';
import { ResponseInterface } from '@shared/utils/response.interface';
import { ToastrService } from 'ngx-toastr';
import { MasterService } from '../../master.service';

@Component({
  selector: 'app-master-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class MasterUserListComponent implements OnInit {
  @ViewChild('logoTmpl', { static: true }) logoTmpl: TemplateRef<any>;
  no = 0;
  columns: MtxGridColumn[];
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
    private toast: ToastrService
  ) { }

  ngOnInit() {
    this.findAllProdi();
    this.renderTable();
  }

  renderTable() {
    this.columns = [
      {
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
        header: 'Email',
        minWidth: 250,
        width: '250px',
        field: 'email',
      },
      {
        header: 'Nim',
        minWidth: 250,
        width: '250px',
        field: 'nim',
      },
      {
        header: 'Fakultas',
        minWidth: 250,
        width: '250px',
        field: 'm_prodi.m_fakulta.nama',
      },
      {
        header: 'Prodi',
        minWidth: 250,
        width: '250px',
        field: 'm_prodi.nama',
      },
      {
        header: 'Role',
        minWidth: 250,
        width: '250px',
        field: 'role',
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
      this.masterService.deleteUser(record.id.toString()).subscribe((res: ResponseInterface) => {
        if (res.statusCode === 200) {
          this.findAllProdi();
          this.toast.success(res.message, 'Hapus');
        }
      })
    }
  }
  edit(record: any): void {
    this.route.navigateByUrl('master/user-edit?id=' + record.id);
  }

  findAllProdi() {
    this.masterService.findAllUser(this.query).subscribe(
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
    this.findAllProdi();
  }
  tambah() {
    this.route.navigateByUrl('master/user-add');
  }
  search() {
    this.findAllProdi();
  }

}

