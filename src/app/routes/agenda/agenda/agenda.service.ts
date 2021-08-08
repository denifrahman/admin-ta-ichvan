import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  constructor(
    private http: HttpClient
  ) { }

  findAllAgendaUniversitas(param) {
    return this.http.get(environment.API + '/agendas', { params: param });
  }
  findAllAgendaFakultas(param) {
    return this.http.get(environment.API + '/agendas', { params: param });
  }

  findAllAgendaProdi(param) {
    return this.http.get(environment.API + '/agendas', { params: param });
  }

  findByPk(id) {
    return this.http.get(environment.API + '/agenda/' + id);
  }

  create(body) {
    return this.http.post(environment.API + '/agenda', body);
  }

  update(id, body) {
    return this.http.put(environment.API + '/agenda/' + id, body);
  }

  delete(id) {
    return this.http.delete(environment.API + '/agenda/' + id);
  }

}
