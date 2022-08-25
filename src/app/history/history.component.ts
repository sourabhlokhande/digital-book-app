import { Component, OnInit } from '@angular/core';
import { Payment } from '../models/paymentmodel';
import { PaymentService } from '../service/paymentservice';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  pay : Payment =
{
  email : '',
  bookId : 0
}

history : Payment[] = [];
showHistory = false;

  constructor(private paymentService:PaymentService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.pay.email != '')
    {  
      this.showHistory = true;
      this.paymentService.getPurchasedBook(this.pay).subscribe(response => {this.history = response});
    }
    else
    {
      alert("Please provide email address")
    }

}
}
