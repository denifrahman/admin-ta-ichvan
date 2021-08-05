import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ResponseInterface } from '@shared/utils/response.interface';
import { ToastrService } from 'ngx-toastr';
import { MasterService } from '../../master.service';

@Component({
  selector: 'app-master-prodi-prodi-edit',
  templateUrl: './prodi-edit.component.html',
  styleUrls: ['./prodi-edit.component.scss']
})
export class MasterProdiProdiEditComponent implements OnInit {
  reactiveForm2: FormGroup;
  today: string;
  dataFakultas = [];
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
      fakultas_id: [['', Validators.required]],
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
    this.findAllFakultas();
  }

  batal() {
    this.route.navigateByUrl('/master/prodi');
  }

  findOneByPk() {
    this.masterService.findOneProdi(this.id).subscribe((res: ResponseInterface) => {
      this.reactiveForm2.setValue({
        nama: res.data['nama'],
        fakultas_id: res.data['fakultas_id'],
        id: res.data['id']
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

  onSave() {
    if (this.reactiveForm2.valid) {
      this.masterService.updateProdi(this.id.toString(), this.reactiveForm2.value).subscribe((result: ResponseInterface) => {
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
    this.reactiveForm2.value.universitas_id = event.id;
  }

}
