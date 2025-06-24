const library = {
  inventory: {
    "The Client": {
      availability: false,
      rating: 3.5,
      stock: 0,
    },

    "The Firm": {
      availability: true,
      rating: 4.2,
      stock: 3,
    },

    "The Nutcracker and Mouseking": {
      availability: true,
      rating: 4.2,
      stock: 10,
    },
  },

  checkAva: function (bookName) {
    book = this.inventory[bookName]; // this gets the book object , having properties ava, rating, stock.
    if (!book) {
      console.log(`nosuch book name exist: ${bookName}`);
    }
    if (book.stock > 0) {
      console.log(`Yes, ${bookName} exist  , stock : ${book.stock}`);
    } else {
      console.log(`Out of stock, ${bookName}`);
    }
  },

  reStock: function (bookName, quantity) {
    book = this.inventory[bookName];
    if (!book) {
      console.log(`nosuch book name exist: ${bookName}`);
    } else if (book.stock > 0) {
      console.log(
        `Yes, ${bookName} exist in inventory stock : ${book.stock}. Cannot restock`
      );
    } else {
      book.stock += quantity;
      console.log(`${bookName}, restocked ${book.stock}`);
    }
  },
};

library.checkAva("The Client");
library.reStock("The Firm", 12);
