import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, Observable } from 'rxjs';
import { Item } from '../model/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  public getAllItems(page: number, size: number, sort: string, filters?: string): Observable<Item[]>{
    let urlEndpoint: string = "http://localhost:8080/store/items?page=" + page + "&size=" + size + "&sort=" + sort;
    if (filters) {
      urlEndpoint = urlEndpoint + "&filter=" + filters;
    }
    return this.http.get<Item[]>(urlEndpoint);
  }
  
  public getAllItemsByCategoryId(categoryId: number, page: number, size: number, sort: string): Observable<Item[]>{
    const urlEndpoint: string = "http://localhost:8080/store/items?filter=category.id:EQUAL:" + categoryId + "&page=" + page + "&size=" + size + "&sort=" + sort;
    return this.http.get<Item[]>(urlEndpoint);
  }


}
