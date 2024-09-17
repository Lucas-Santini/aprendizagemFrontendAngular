import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PlanejamentoUC } from '../models/PlanejamentoUC';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('TokeUsuarioLogado')}`,
  }),
};

@Injectable({
  providedIn: 'root'
})
export class PlanejamentoUcService {
  url = environment.apiServer + 'api/PlanejamentoUC';

  constructor(private https: HttpClient) { }

  criarPlanejamentoUC(planejamentoUC: PlanejamentoUC): Observable<PlanejamentoUC> {
    const apiUrl = `${this.url}/AdicionarPlanejamentoUC`;
    return this.https.post<PlanejamentoUC>(apiUrl, planejamentoUC, httpOptions);
  }

  buscarPlanejamentoUCPorId(ucId: number): Observable<PlanejamentoUC> {
    const apiUrl = `${this.url}/${ucId}`;
    return this.https.get<PlanejamentoUC>(apiUrl, httpOptions);
  }

  atualizarPlanejamentoUC(planejamentoUC: PlanejamentoUC): Observable<PlanejamentoUC> {
    const apiUrl = `${this.url}/${planejamentoUC.id}`;
    return this.https.put<PlanejamentoUC>(apiUrl, planejamentoUC, httpOptions);
  }

  excluirPlanejamentoUC(ucId: number): Observable<void> {
    const apiUrl = `${this.url}/${ucId}`;
    return this.https.delete<void>(apiUrl, httpOptions);
  }

  FiltrarPlanejamentoUCByGrupoId(ucId: number): Observable<PlanejamentoUC> {
    const apiUrl = `${this.url}/FiltrarPlanejamentoUCByGrupoId/${ucId}`;
    return this.https.get<PlanejamentoUC>(apiUrl);
  }

  FiltrarPlanejamentoUCsByUnidadeCurricularId(ucId: number): Observable<PlanejamentoUC[]> {
    const apiUrl = `${this.url}/FiltrarPlanejamentoUCsByUnidadeCurricularId/${ucId}`;
    return this.https.get<PlanejamentoUC[]>(apiUrl);
  }
}
