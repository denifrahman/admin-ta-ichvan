import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResponseInterface } from '@shared/utils/response.interface';
import { ToastrService } from 'ngx-toastr';
import { MasterService } from '../../master.service';

@Component({
  selector: 'app-master-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class MasterUserAddComponent implements OnInit {


  reactiveForm2: FormGroup;
  today: string;
  dataFakultas = [];
  dataProdi = [];
  pipe = new DatePipe('en-US');
  constructor(
    private fb: FormBuilder,
    private masterService: MasterService,
    private toast: ToastrService,
    private route: Router
  ) {
    this.today = this.pipe.transform(new Date(), 'yyyy-MM-dd');
    this.reactiveForm2 = this.fb.group({
      nama: ['', [Validators.required]],
      email: ['', [Validators.required]],
      nim: ['', [Validators.required]],
      password: ['', [Validators.required]],
      alamat: ['', [Validators.required]],
      fakultas_id: [['', Validators.required]],
      universitas_id: [1],
      prodi_id: [['', Validators.required]],
      role: ['MAHASISWA'],
    });
  }

  ngOnInit() {
    this.findAllFakultas();

  }

  batal() {
    this.route.navigateByUrl('/master/prodi');
  }

  findAllFakultas() {
    const query = {
      q: '',
      page: 0,
      size: 100,
    };
    this.masterService.findAllFakultas(query).subscribe((res: ResponseInterface) => {
      this.dataFakultas = res.data.rows;
    });
  }

  findAllProdi({ fakultas_id }) {
    const query = {
      q: '',
      page: 0,
      size: 100,
      fakultas_id
    };
    this.masterService.findAllProdi(query).subscribe((res: ResponseInterface) => {
      this.dataProdi = res.data.rows;
    });
  }

  onSave() {
    if (this.reactiveForm2.valid) {
      this.masterService.saveUser(this.reactiveForm2.value).subscribe((result: ResponseInterface) => {
        if (result.statusCode === 201) {
          this.toast.success(result.message, 'Tambah');
          this.batal();
        }
      })
    }
  }

  dateChange(event) {
    this.today = this.pipe.transform(event, 'yyyy-MM-dd');
  }
  changeFakultas(event) {
    this.reactiveForm2.value.fakultas_id = event.id;
    this.findAllProdi({ fakultas_id: event.id });
  }
  changeProdi(event) {
    this.reactiveForm2.value.prodi_id = event.id;
  }
}
