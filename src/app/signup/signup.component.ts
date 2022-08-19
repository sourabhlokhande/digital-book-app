import { Component, OnInit } from '@angular/core';
import { Author } from '../models/authormodel';
import { AuthorService } from '../service/authorservice';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  author : Author = {
    authorName :'',
    userType: '',
    password: '',
    createdDate: new Date,
    modifiedDate: new Date
}

  constructor(private authorService: AuthorService) { }

  ngOnInit(): void {}

  onSubmit(){
    console.log("i am hit in author component")
    this.authorService.addAuthor(this.author).subscribe();
  
}

}
