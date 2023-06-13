import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InteropObservable, Observable } from 'rxjs';


import { DogsModel } from '../models/dogs.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable()
export class DogsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllBreeds(breedType) {
    return this.http.get(`https://dog.ceo/api/breed/${breedType}/images`)
  }

}