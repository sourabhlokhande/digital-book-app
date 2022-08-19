import { Component, OnInit } from '@angular/core';
import { Books } from '../models/bookmodel';
import { BookService } from '../service/bookservice';

@Component({
  selector: 'app-book-browser',
  templateUrl: './book-browser.component.html',
  styleUrls: ['./book-browser.component.css']
})
export class BookBrowserComponent implements OnInit {
  book : Books = {
    title : '',
    category : '',
    price : 0,
    publisher: '',
    publishedDate: new Date,
    active: true,
    content: '',
    createdDate: new Date,
    modifiedDate: new Date,
    authorId: 0
}

  Title = "Book Browser"
  iconMargine = 2;
  iconWidth = 50;
  showIcon : boolean = false;
  filter = "book";
  hike = 0;
  books : Books[] = [];

  constructor(private bookService : BookService) { }

  hideAndShow(): void{
    this.showIcon = !this.showIcon;
  }

  increasePrice() : void{
    this.hike = this.hike+10;
  }
  decreasePrice() : void{
    this.hike = this.hike-10;
  }
  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks()
  {
    console.log("i am hit in getBooks component")
    this.bookService.getAllBooks()
    .subscribe(
      response => { 
        this.books = response;
        console.log(this.books)
      });
    
  }

    onSubmit(){
      console.log("i am hit in book browser component")
      this.bookService.addBook(this.book).subscribe();
    
  }

}
