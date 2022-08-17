import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-browser',
  templateUrl: './book-browser.component.html',
  styleUrls: ['./book-browser.component.css']
})
export class BookBrowserComponent implements OnInit {

  Title = "Book Browser"
  iconMargine = 2;
  iconWidth = 50;

  books : any[] = [
    {
      "url" : "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/094b67b3c431bc09ef7dc5cc0bd30500d90630bea97f1534b4822fb8a47ea082._RI_V_TTW_.jpg",
      "bookId" : 1,
      "title" : "Harry Potter 1",
      "category" : "Magic",
      "author" : "J.K. Rowling",
      "price" : 600,
      "publisher" : "Moon Publisher",
      "publishedDate" : "16-08-2002",
      "active" : "true",
      "content" : "Welcome to the world of magic",
      "createdDate" : "16-08-2002",
      "modifiedDate" : "16-08-2002"

    },
    {
      "bookId" : 2,
      "title" : "Harry Potter 2",
      "category" : "Magic",
      "author" : "J.K. Rowling",
      "price" : 600,
      "publisher" : "Moon Publisher",
      "publishedDate" : "16-08-2002",
      "active" : "true",
      "content" : "Welcome to the world of magic",
      "createdDate" : "16-08-2002",
      "modifiedDate" : "16-08-2002"

    }
]
  constructor() { }

  ngOnInit(): void {
  }

}
