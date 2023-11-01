import { Injectable } from '@angular/core';
import { ChapterAssuntoComentario } from 'src/app/models/ChapterAssuntoComentario';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
  url = environment.apiServer + 'api/ChapterAssuntoComentario';

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('TokenUsuarioLogado')}`
    })
  };

  NovoChapterAssuntoComentario(comentario: ChapterAssuntoComentario): Observable<ChapterAssuntoComentario> {
    return this.http.post<ChapterAssuntoComentario>(this.url, comentario, this.httpOptions);
  }

  FiltrarChapterAssuntoComentarioPorId(id: number): Observable<ChapterAssuntoComentario[]> {
    const apiUrl = `${this.url}/filterByChapterAssuntoId/${id}`;
    return this.http.get<ChapterAssuntoComentario[]>(apiUrl);
  }
}
