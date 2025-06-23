/**
 * 1. store book in inventory
 *      -title
 *      -rating
 *      -stock
 * 2.check availabity and restock if stock is low
 */

const bookStore = {
  Inventory: {
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

  availableBook: function (bookName) {
    const book = this.Inventory[bookName];
    if (!book) {
      console.log(`${bookName} not availble in this place.`);
      return;
    }
    if (book.stock > 0) {
      console.log(
        `Yes, ${bookName}  is available and stock is : ${book.stock}`
      );
    } else {
      console.log(`${bookName} is  out of stock .`);
    }
  },

  restockBook: function (bookName, quantity) {
    book = this.Inventory[bookName];
    if (!book) {
      console.log(`Cannot Stock ${bookName}, not in Inventory.`);
      return;
    }

    book.stock += quantity;
    book.availability = true;
    console.log(`${bookName} restocked to ${book.stock}.`);
  },
};

bookStore.availableBook("The Client");
bookStore.restockBook("The Client", 12);
bookStore.availableBook("The Client");
