import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ResponseInterface } from '@shared/utils/response.interface';
import { ToastrService } from 'ngx-toastr';
import { MasterService } from '../../master.service';

@Component({
  selector: 'app-master-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class MasterUserEditComponent implements OnInit {
  id: number;
  reactiveForm2: FormGroup;
  today: string;
  dataFakultas = [];
  dataProdi = [];
  pipe = new DatePipe('en-US');
  constructor(
    private fb: FormBuilder,
    private masterService: MasterService,
    private toast: ToastrService,
    private route: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.today = this.pipe.transform(new Date(), 'yyyy-MM-dd');
    this.reactiveForm2 = this.fb.group({
      nama: ['', [Validators.required]],
      email: ['', [Validators.required]],
      nim: ['', [Validators.required]],
      alamat: ['', [Validators.required]],
      fakultas_id: [['', Validators.required]],
      universitas_id: [1],
      prodi_id: [['', Validators.required]],
      role: ['MAHASISWA'],
    });

    this.activatedRoute.queryParams.subscribe(params => {
      if (params.id !== undefined) {
        this.id = params.id;
      }
    });
  }

  ngOnInit() {
    this.findAllFakultas();
    this.findUserById();

  }

  batal() {
    this.route.navigateByUrl('/master/user');
  }

  findUserById() {
    const param = {
      user_id: this.id
    };
    this.masterService.findByIdUser(param).subscribe((res: ResponseInterface) => {
      this.findAllProdi({ fakultas_id: res.data['m_prodi']['m_fakulta']['id'] });
      this.reactiveForm2.setValue({
        nama: res.data['nama'],
        email: res.data['email'],
        nim: res.data['nim'],
        alamat: res.data['alamat'],
        universitas_id: res.data['m_prodi']['m_fakulta']['m_universita']['id'],
        fakultas_id: res.data['m_prodi']['m_fakulta']['id'],
        prodi_id: res.data['m_prodi']['id'],
        role: 'MAHASISWA'
      });
    });
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
      this.masterService.updateUser(this.id, this.reactiveForm2.value).subscribe((result: ResponseInterface) => {
        if (result.statusCode === 200) {
          this.toast.success(result.message, 'Update');
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
