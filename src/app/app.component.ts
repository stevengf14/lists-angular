import { Component } from '@angular/core';
import { Book } from './common/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  books: Book[];

  constructor() {
    this.books = [
      {
        id: 1,
        title: 'El retrato de Dorian Gray',
        author: 'Oscar Wilde',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      },
      {
        id: 2,
        title: 'Frankenstein',
        author: 'Mary Shelley',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      },
      {
        id: 3,
        title: 'Orgullo y prejuicio',
        author: 'Jane Austen',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      },
      {
        id: 4,
        title: 'Drácula',
        author: 'Bram Stoker',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      },
      {
        id: 5,
        title: 'El maravilloso mago de Oz',
        author: 'L. Frank Baum',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      },
      {
        id: 6,
        title: 'Don Quijote de la Mancha',
        author: ' Miguel de Cervantes Saavedra',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      },
      {
        id: 7,
        title: 'La máquina del tiempo',
        author: 'H. G. Wells',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      },
      {
        id: 8,
        title: 'El conde de Montecristo',
        author: 'Alexandre Dumas',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      },
      {
        id: 9,
        title: 'Mujercitas',
        author: 'Louisa M. Alcott',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      },
      {
        id: 10,
        title: 'La isla del tesoro',
        author: 'Robert Louis Stevenson',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      },
    ];
  }

  showAuthor(_book: Book) {
    alert(` ${_book.title} fue escrito por ${_book.author} `);
  }
}
