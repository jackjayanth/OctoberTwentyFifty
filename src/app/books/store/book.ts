export interface Book {
  id: number;
  name: string;
  author: string;
  cost: number;
}

export interface BookState{
  books: Book[];
}
