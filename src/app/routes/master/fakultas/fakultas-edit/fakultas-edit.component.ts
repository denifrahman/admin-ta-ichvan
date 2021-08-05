import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ResponseInterface } from '@shared/utils/response.interface';
import { ToastrService } from 'ngx-toastr';
import { MasterService } from '../../master.service';

@Component({
  selector: 'app-master-fakultas-fakultas-edit',
  templateUrl: './fakultas-edit.component.html',
  styleUrls: ['./fakultas-edit.component.scss']
})
export class MasterFakultasFakultasEditComponent implements OnInit {
  reactiveForm2: FormGroup;
  today: string;
  dataUniversitas = [];
  id: number;
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
      universitas_id: [['', Validators.required]],
      id: [['', Validators.required]]
    });
    this.activatedRoute.queryParams.subscribe(params => {
      if (params.id !== undefined) {
        this.id = params.id;
      }
    });
  }

  ngOnInit() {
    this.findOneByPk();
    this.findAllUniversitas();
  }

  batal() {
    this.route.navigateByUrl('/master/fakultas');
  }

  findOneByPk() {
    this.masterService.findOneFakultas(this.id).subscribe((res: ResponseInterface) => {
      this.reactiveForm2.setValue({
        nama: res.data['nama'],
        universitas_id: res.data['universitas_id'],
        id: res.data['id']
      });
    });
  }

  findAllUniversitas() {
    const query = {
      q: '',
      page: 0,
      size: 10,
    };
    this.masterService.findAllUniversitas(query).subscribe((res: ResponseInterface) => {
      this.dataUniversitas = res.data.rows;
    });
  }

  onSave() {
    if (this.reactiveForm2.valid) {
      this.masterService.updateFakultas(this.id.toString(), this.reactiveForm2.value).subscribe((result: ResponseInterface) => {
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
  getUserByCabang(event) {
    this.reactiveForm2.value.universitas_id = event.id;
  }

}
