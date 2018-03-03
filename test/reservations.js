import { expect } from 'chai';
import '../src/reservations';

// Syntatic Sugar
const $ = global.document.querySelectorAll.bind(global.document);

describe('Seats', () => {
  before(function initSeat() {
    const $addButton = $('button')[0];
    const event = global.document.createEvent('Event');
    Object.assign(this, {
      add() {
        $addButton.dispatchEvent(event);
        return this.length();
      },
      length: () => $('tbody > tr').length,
      remove(n = 0) {
        $('a')[n].dispatchEvent(event);
        return this.length();
      },
    });
    event.initEvent('click', true, true);
  });
  it('have 2 at first', function testInit() {
    expect(this.length()).to.equal(2);
  });
  it('can be added to 3', function testAdd() {
    expect(this.add()).to.equal(3);
  });
  it('can be removed to 2', function testRemove() {
    expect(this.remove()).to.equal(2);
  });
});
describe('Total Surcharge', () => {
  it('is a number', () => {
    expect(+$('h3 > span')[0].innerHTML).to.be.a('number');
  });
});
