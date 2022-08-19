import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Books } from '../models/bookmodel';

@Injectable({
    providedIn : 'root'
})
export class BookService
{
    
    baseUrl = 'https://localhost:7298'

    constructor(private http:HttpClient){}
    
    getAllBooks():Observable<Books[]>{
        return this.http.get<Books[]>(this.baseUrl+'/reader/books/getbooks')
    }
    
    token = "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJOYW1lIjoiU291cmFiaCIsIlJvbGUiOiJhdXRob3IiLCJhdWQiOlsiYXBpLmF1dGhvcnNlcnZpY2UuY29tIiwiYXBpLmdhdGV3YXkuY29tIiwiYXBpLmF1dGhzZXJ2aWNlcy5jb20iXSwiZXhwIjoxNjYwOTgwNzMyLCJpc3MiOiJhcGkuYXV0aHNlcnZpY2VzLmNvbSJ9.uldHD4RxHDn6Uv50znU6ZzheFC7xBRn4qxLoAOC-MLk";
    addBook(book: Books):Observable<Books> {
        console.log("i am hit in book service")
        console.log(book)
        return this.http.post<Books>(this.baseUrl+'/author/books/addbook', book,{headers: new HttpHeaders(
            {
              'Authorization': 'Bearer ' + this.token,
               'Content-Type': 'application/json'
                  })});
    }
}

