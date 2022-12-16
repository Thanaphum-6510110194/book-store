import Book from "../models/Book";
import { IRepository } from "./IRepository";

export class BookRepository implements IRepository<Book> {
    async getAll(): Promise<Book[] | null> {
        return [
            {
                id: 1, title: 'Titanic', price:10, stockAmount: 10,
                category: {id : 1,title: 'Drama'}
            },
            {
                id: 1, title: 'The green mile', price:420, stockAmount: 6,
                category: {id: 1,title: 'Drama'}
            }
        ]
    }
}
