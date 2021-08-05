import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResponseInterface } from '@shared/utils/response.interface';
import { ToastrService } from 'ngx-toastr';
import { MasterService } from '../../master.service';

@Component({
  selector: 'app-master-fakultas-fakultas-add',
  templateUrl: './fakultas-add.component.html',
  styleUrls: ['./fakultas-add.component.scss']
})
export class MasterFakultasFakultasAddComponent implements OnInit {
  reactiveForm2: FormGroup;
  today: string;
  dataUniversitas = [];
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
      universitas_id: [['', Validators.required]]
    });
  }

  ngOnInit() {
    this.findAllUniversitas();
  }

  batal() {
    this.route.navigateByUrl('/master/fakultas');
  }

  findAllUniversitas() {
    const query = {
      q: '',
      page: 0,
      size: 100,
    };
    this.masterService.findAllUniversitas(query).subscribe((res: ResponseInterface) => {
      this.dataUniversitas = res.data.rows;
    });
  }

  onSave() {
    if (this.reactiveForm2.valid) {
      this.masterService.createFakultas(this.reactiveForm2.value).subscribe((result: ResponseInterface) => {
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
  getUserByCabang(event) {
    this.reactiveForm2.value.universitas_id = event.id;
  }
}