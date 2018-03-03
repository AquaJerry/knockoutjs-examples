import ko from './knockout';

// Represent a row in the seat reservations grid
class SeatReservation {
  // book a seat
  static new(seat) {
    return new SeatReservation(seat);
  }
  constructor({ name, meal }) {
    this.meal = ko.observable(meal);
    this.name = name;

    const formizePrice = this.formizePrice.bind(this);

    this.formattedPrice = ko.pureComputed(formizePrice);
  }
  // Formize the price
  formizePrice() {
    const { price } = this.meal();

    return price ? `$${price.toFixed(2)}` : 'None';
  }
}

// Represent rows in the seat reservations grid
class Seats {
  constructor({ meal, seats }) {
    const books = seats.map(SeatReservation.new);

    const chairs = ko.observableArray(books);

    // Book a seat
    books.add = () => {
      const book = new SeatReservation({
        meal,
        name: '',
      });
      return chairs.push(book);
    };
    books.remove = chairs.remove.bind(chairs);

    return chairs;
  }
}

class TotalSurcharge {
  static add(total, { meal }) {
    return total + meal().price;
  }
  static sum(seats) {
    return seats().reduce(TotalSurcharge.add, 0);
  }
  constructor({ seats }) {
    const total = () => TotalSurcharge.sum(seats);

    const text = () => total().toFixed(2);
    const visible = () => total() > 0;

    this.text = ko.pureComputed(text);
    this.visible = ko.pureComputed(visible);
  }
}

// Overall viewmodel for this screen, along with initial state
class ReservationsViewModel {
  constructor({ availableMeals, seats }) {
    this.availableMeals = availableMeals;
    this.seats = new Seats({ meal: availableMeals[0], seats });

    this.totalSurcharge = new TotalSurcharge({ seats: this.seats });
  }
  // Render
  deploy() {
    ko.applyBindings(this);
  }
}

// Non-editable catalog data - would come from the server
const availableMeals = [
  { mealName: 'Standard (sandwich)', price: 0 },
  { mealName: 'Premium (lobster)', price: 34.95 },
  { mealName: 'Ultimate (whole zebra)', price: 290 },
];
// Editable data
const seats = [
  { name: 'Steve', meal: availableMeals[1] },
  { name: 'Bert', meal: availableMeals[2] },
];
// Yield view model
const vm = new ReservationsViewModel({ availableMeals, seats });
// Render
vm.deploy();
