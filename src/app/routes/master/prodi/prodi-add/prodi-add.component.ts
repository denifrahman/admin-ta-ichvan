import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResponseInterface } from '@shared/utils/response.interface';
import { ToastrService } from 'ngx-toastr';
import { MasterService } from '../../master.service';

@Component({
  selector: 'app-master-prodi-prodi-add',
  templateUrl: './prodi-add.component.html',
  styleUrls: ['./prodi-add.component.scss']
})
export class MasterProdiProdiAddComponent implements OnInit {

  reactiveForm2: FormGroup;
  today: string;
  dataFakultas = [];
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
      fakultas_id: [['', Validators.required]]
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

  onSave() {
    if (this.reactiveForm2.valid) {
      this.masterService.createProdi(this.reactiveForm2.value).subscribe((result: ResponseInterface) => {
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
  }

}
