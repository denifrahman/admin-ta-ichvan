import { DatePipe } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ResponseInterface } from '@shared/utils/response.interface';
import { MasterService } from 'app/routes/master/master.service';
import { ToastrService } from 'ngx-toastr';
import { AgendaService } from '../agenda.service';

@Component({
  selector: 'app-agenda-agenda-agenda-edit',
  templateUrl: './agenda-edit.component.html',
  styleUrls: ['./agenda-edit.component.scss']
})
export class AgendaAgendaAgendaEditComponent implements OnInit {
  @ViewChild('fileInput') fileInput: ElementRef;
  fileAttr = 'Choose File';
  imageURL: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png';
  labelButton: string = 'Pilih Gambar'
  id: number;
  nama: string;
  flag: string;
  reactiveForm2: FormGroup;
  today: string;
  dataFakultas = [];
  dataProdi = [];
  dataUniversitas = [];
  pipe = new DatePipe('en-US');
  constructor(
    private fb: FormBuilder,
    private agendaService: AgendaService,
    private masterService: MasterService,
    private toast: ToastrService,
    private route: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.today = this.pipe.transform(new Date(), 'yyyy-MM-dd');
    this.reactiveForm2 = this.fb.group({
      nama: ['', [Validators.required]],
      kode: ['', [Validators.required]],
      tanggal_tayang: ['', [Validators.required]],
      tanggal_non_tayang: ['', [Validators.required]],
      tanggal_mulai: ['', [Validators.required]],
      tanggal_selesai: ['', [Validators.required]],
      fakultas_id: [],
      prodi_id: [],
      universitas_id: [],
      cover: ['', [Validators.required]],
    });
    this.activatedRoute.queryParams.subscribe(params => {
      if (params.flag !== undefined) {
        this.flag = params.flag;
      }
      if (params.id !== undefined) {
        this.id = params.id;
      }
      if (params.nama !== undefined) {
        this.nama = params.nama;
      }
    });
  }

  ngOnInit() {
    this.findAllFakultas();
    this.findAllProdi();
    this.findAgendayPk();
  }

  batal() {
    this.route.navigateByUrl('/agenda/agenda-list');
  }

  findAgendayPk() {
    this.agendaService.findByPk(this.id).subscribe((result: ResponseInterface) => {
      this.reactiveForm2.setValue({
        nama: result.data['nama'],
        kode: result.data['kode'],
        tanggal_tayang: result.data['tanggal_tayang'],
        tanggal_non_tayang: result.data['tanggal_non_tayang'],
        tanggal_mulai: result.data['tanggal_mulai'],
        tanggal_selesai: result.data['tanggal_selesai'],
        fakultas_id: result.data['fakultas_id'],
        prodi_id: result.data['prodi_id'],
        universitas_id: result.data['universitas_id'],
        cover: result.data['cover']
      });
      this.imageURL = this.reactiveForm2.value.cover;
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

  findAllProdi() {
    const query = {
      q: '',
      page: 0,
      size: 100
    };
    this.masterService.findAllProdi(query).subscribe((res: ResponseInterface) => {
      this.dataProdi = res.data.rows;
    });
  }

  findAllUniversitas() {
    const query = {
      q: '',
      page: 0,
      size: 100
    };
    this.masterService.findAllUniversitas(query).subscribe((res: ResponseInterface) => {
      this.dataUniversitas = res.data.rows;
    });
  }

  onSave() {
    if (this.reactiveForm2.valid) {
      const formData = new FormData();
      formData.append('cover', this.reactiveForm2.value.cover);
      formData.append('nama', this.reactiveForm2.value.nama);
      formData.append('tanggal_tayang', this.reactiveForm2.value.tanggal_tayang);
      formData.append('tanggal_non_tayang', this.reactiveForm2.value.tanggal_non_tayang);
      formData.append('tanggal_mulai', this.reactiveForm2.value.tanggal_mulai);
      formData.append('tanggal_selesai', this.reactiveForm2.value.tanggal_selesai);
      formData.append('kode', this.reactiveForm2.value.kode);
      if(this.reactiveForm2.value.fakultas_id != null){
        formData.append('fakultas_id', this.reactiveForm2.value.fakultas_id);
      }
      if(this.reactiveForm2.value.prodi_id != null){
        formData.append('prodi_id', this.reactiveForm2.value.prodi_id);
      }
      if(this.reactiveForm2.value.universitas_id != null){
        formData.append('universitas_id', this.reactiveForm2.value.universitas_id);
      }
      formData.append('id', this.id.toString());
      this.agendaService.update(this.id, formData).subscribe((result: ResponseInterface) => {
        if (result.statusCode === 200) {
          this.toast.success(result.message, 'Update');
          this.batal();
        }
      });
    }
  }


  dateChange(event) {
    this.today = this.pipe.transform(event, 'yyyy-MM-dd');
  }
  changeFakultas(event) {
    event.forEach(element => {
      let body = {
        fakultas_id: element.id
      }
    });
  }
  changeProdi(event) {

  }
  changeUniversitas(event) {

  }
  uploadFileEvt(event) {
    if (this.labelButton == 'Ganti Gambar') {
      this.reactiveForm2.value.cover = '';
    }
    const file = (event.target as HTMLInputElement).files[0];
    this.reactiveForm2.patchValue({
      cover: file
    });
    this.reactiveForm2.get('cover').updateValueAndValidity()
    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    }
    reader.readAsDataURL(file)
    this.labelButton = 'Ganti Gambar'
  }
}
