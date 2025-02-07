import AbstractView from '../framework/view/abstract-view.js';
export const sort = {
  price:'sort-price',
  day: 'sort-day',
  time: 'sort-time'
};
function getSortingTemplate() {
  return `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
            <div class="trip-sort__item  trip-sort__item--day">
              <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" checked="" data-id="${sort.day}">
              <label class="trip-sort__btn" for="${sort.day}">Day</label>
            </div>

            <div class="trip-sort__item  trip-sort__item--event">
              <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled="">
              <label class="trip-sort__btn" for="sort-event">Event</label>
            </div>

            <div class="trip-sort__item  trip-sort__item--time">
              <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time" data-id="${sort.time}">
              <label class="trip-sort__btn" for="${sort.time}">Time</label>
            </div>

            <div class="trip-sort__item  trip-sort__item--price">
              <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price" data-id="${sort.price}">
              <label class="trip-sort__btn" for="sort-price">Price</label>
            </div>

            <div class="trip-sort__item  trip-sort__item--offer">
              <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled="" id="sort-offer">
              <label class="trip-sort__btn" for="sort-offer">Offers</label>
            </div>
          </form>`;
}
class Sorting extends AbstractView {
  constructor() {
    super();
    this.template = getSortingTemplate();
  }
}
export default Sorting;
