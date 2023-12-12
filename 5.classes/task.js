
class PrintEditionItem {
   constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
   }

   fix() {
      this.state *= 1.5;
   }
   set state(number) {
    if (number < 0 ) {
      this._state = 0;
    }
    else if (number > 100) {
      this._state = 100;
    }
    else {
      this._state = number;
    }
   }
   get state() {
      return this._state;
   }
}

class Magazine extends PrintEditionItem {
   constructor(type, name, releaseDate, pagesCount) {
      super(type, name, releaseDate, pagesCount);
      this.type = "magazine";
   }
}

class Book extends PrintEditionItem {
   constructor(author, type, releaseDate, pagesCount) {
       super(type, releaseDate, pagesCount);
       this.author = author;
       this.type = "book";
   }
}

class NovelBook extends Book {
   constructor(type, releaseDate, pagesCount, author) {
      super(type, releaseDate, pagesCount, author);
      this.type = "novel";
      }
   }

class FantasticBook extends Book {
      constructor(type, releaseDate, pagesCount, author) {
         super(type, releaseDate, pagesCount, author);
         this.type = "fantastic";
      }
}

class DetectiveBook extends Book {
      constructor(type, releaseDate, pagesCount, author) {
         super(type, releaseDate, pagesCount, author);
         this.type = "detective";
      }
}

class Library {
   constructor(name) {
       this.name = name;
       this.books = []
   }


addBook(book) {
   if(book.state > 30) {
       this.books.push(book)
   }
}

findBookBy(type, value) {
   let book = null;
   for (let i = 0; i < this.books.length; i++) {
     if(this.books[i][type] === value) {
       book = this.books[i];
     }
   }
   return book;
 }

 giveBookByName(bookName) {
   for (let i = 0; i < this.books.length; i++) {
       if (this.books[i].name === bookName) {
           return this.books.splice(i, 1)[0];
       }             
   }
   return null;
} 
}

class Students {
   constructor(name) {
      this.name = name;
      this.journal = {};
   }

   addMark(mark, subject) {
      if (this.marks?.[subject] === undefined && mark >= 2 && mark <= 5) {
         this.marks[subject] = [];
         this.marks[subject].push(mark);
       } else if (this.marks.hasOwnProperty(subject) && mark >= 2 && mark <= 5) {
         this.marks[subject].push(mark);
       }
   }

   getAverageBySubject(subject) {
      if (this.marks.hasOwnProperty(subject) === false) {
        return 0;
      }
      const gradePointAverage = this.marks[subject].reduce((acc, mark, index, arr) => {
        acc += mark;
        if (index === arr.length - 1) {
          return acc / arr.length;
        }
        return acc;
      }, 0);
      return gradePointAverage;
    }
    getAverage() {
      if (Object.keys(this.marks).length === 0) {
        return 0;
      }
      let allSubject = Object.keys(this.marks);
      for (let subject of allSubject) {
        allSubject[allSubject.indexOf(subject)] = this.getAverageBySubject(subject);
      }
      const gradePointAverage = allSubject.reduce((acc, mark, index, arr) => {
        acc += mark;
        if (index === arr.length - 1) {
            return acc / arr.length;
        }
        return acc;
        }, 0);
        return gradePointAverage;
    }
  }


