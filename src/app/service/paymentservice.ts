import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from '../models/paymentmodel';



@Injectable({
    providedIn : 'root'
})
export class PaymentService
{
    
    baseUrl = 'https://localhost:7298'

    constructor(private http:HttpClient){}
    
    
    buyBook(payment: Payment):Observable<Payment[]> {
        console.log("i am hit in author service")
        console.log(payment)
        return this.http.post<Payment[]>(this.baseUrl+'/reader/books/buybook', payment);
    }
}

