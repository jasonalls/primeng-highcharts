import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-data',
  templateUrl: './book-data.component.html',
  styleUrls: ['./book-data.component.less']
})
export class BookDataComponent implements OnInit {

  books: Book[];
  cols: any[];
  totalRecords: number;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getBooks().
    then(books => this.books = books);

    this.cols = [
      { field: 'name', header: 'Name' },
      {field: 'author', header: 'Author' },
      { field: 'price', header: 'Price' }      
    ];

    this.totalRecords=this.cols.length;
  }

}
