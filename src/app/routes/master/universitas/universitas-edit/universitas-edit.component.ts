import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ResponseInterface } from '@shared/utils/response.interface';
import { ToastrService } from 'ngx-toastr';
import { MasterService } from '../../master.service';

@Component({
  selector: 'app-master-universitas-universitas-edit',
  templateUrl: './universitas-edit.component.html',
  styleUrls: ['./universitas-edit.component.scss']
})
export class MasterUniversitasUniversitasEditComponent implements OnInit {

  reactiveForm2: FormGroup;
  today: string;
  pipe = new DatePipe('en-US');
  id: number;
  kuponService: any;
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
    });
    this.activatedRoute.queryParams.subscribe(params => {
      if (params.id !== undefined) {
        this.id = params.id;
      }
    });
  }

  ngOnInit() {
    this.findOneByPk();
  }

  batal() {
    this.route.navigateByUrl('master/universitas');
  }

  findOneByPk() {
    this.masterService.findOneUniversitas(this.id).subscribe((result: ResponseInterface) => {
      this.reactiveForm2.setValue({
        nama: result.data['nama']
      });
    });
  }

  onSave() {
    if (this.reactiveForm2.valid) {
      this.masterService.updateUniversitas(this.reactiveForm2.value, this.id).subscribe((result: ResponseInterface) => {
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

}
