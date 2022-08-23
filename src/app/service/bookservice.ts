import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Author } from '../models/authormodel';
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

    getAuthorBooks(user : Author):Observable<Books[]>{
        console.log("i am hit in book service")
        return this.http.post<Books[]>(this.baseUrl+'/reader/books/getauthorbooks',user)
    }
    
    filterBook(book: Books):Observable<Books[]>{
        return this.http.post<Books[]>(this.baseUrl+'/reader/books/searchbook',book)
      }
    
    
    token = localStorage.getItem("token")
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

