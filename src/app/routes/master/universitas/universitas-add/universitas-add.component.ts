import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResponseInterface } from '@shared/utils/response.interface';
import { ToastrService } from 'ngx-toastr';
import { MasterService } from '../../master.service';

@Component({
  selector: 'app-master-universitas-universitas-add',
  templateUrl: './universitas-add.component.html',
  styleUrls: ['./universitas-add.component.scss']
})
export class MasterUniversitasUniversitasAddComponent implements OnInit {
  reactiveForm2: FormGroup;
  today: string;
  pipe = new DatePipe('en-US');
  constructor(
    private fb: FormBuilder,
    private masterService: MasterService,
    private toast: ToastrService,
    private route: Router
  ) {
    this.today = this.pipe.transform(new Date(), 'yyyy-MM-dd');
    this.reactiveForm2 = this.fb.group({
      nama: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  batal() {
    this.route.navigateByUrl('/master/universitas');
  }

  onSave() {
    if (this.reactiveForm2.valid) {
      this.masterService.createUniversitas(this.reactiveForm2.value).subscribe((result: ResponseInterface) => {
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
}