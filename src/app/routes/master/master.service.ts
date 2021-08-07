import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  update(value: any, id: number) {
    throw new Error('Method not implemented.');
  }

  constructor(
    private http: HttpClient
  ) { }

  findAllAgenda() {
    return this.http.get(environment.API + 'agenda');
  }
  findAllFakultas(param) {
    return this.http.get(environment.API + '/fakultas', { params: param });
  }
  findOneProdi(id) {
    return this.http.get(environment.API + '/prodi/' + id);
  }
  findOneFakultas(id) {
    return this.http.get(environment.API + '/fakultas/' + id);
  }
  createFakultas(body) {
    return this.http.post(environment.API + '/fakultas', body);
  }
  deleteFakultas(id: string) {
    return this.http.delete(environment.API + '/fakultas/' + id);
  }
  updateFakultas(id: string, body) {
    return this.http.put(environment.API + '/fakultas/' + id, body);
  }
  findAllUniversitas(param) {
    return this.http.get(environment.API + '/universitas', { params: param });
  }
  createUniversitas(body) {
    return this.http.post(environment.API + '/universitas', body);
  }
  deleteUniversitas(id: string) {
    return this.http.delete(environment.API + '/universitas/' + id);
  }
  findOneUniversitas(id) {
    return this.http.get(environment.API + '/universitas/' + id);
  }
  updateUniversitas(body, id) {
    return this.http.put(environment.API + '/universitas/' + id, body);
  }
  findAllProdi(param) {
    return this.http.get(environment.API + '/prodis', { params: param });
  }
  createProdi(body) {
    return this.http.post(environment.API + '/prodi', body);
  }
  updateProdi(id: string, body) {
    return this.http.put(environment.API + '/prodi/' + id, body);
  }
  deleteProdi(id: string) {
    return this.http.delete(environment.API + '/prodi/' + id);
  }

  findAllUser(param) {
    return this.http.get(environment.API + '/users', { params: param });
  }
  saveUser(body) {
    return this.http.post(environment.API + '/register', body);
  }
  updateUser(body) {
    return this.http.put(environment.API + '/user', body);
  }
  findByIdUser(param) {
    return this.http.get(environment.API + '/users', { params: param });
  }
  deleteUser(id) {
    return this.http.delete(environment.API + '/user/' + id);
  }
}
