import { PRICE, RANGE } from "../constants/NUMBER.js";

export const validateNumber = {
  isDivideThousand(number) {
    return number % PRICE === 0;
  },

  isBiggerThanThousand(number) {
    return number >= PRICE;
  },

  isNumber(number) {
    return !Number.isNaN(number);
  },

  isOneToFourtyFive(number) {
    return number > RANGE.MIN && number < RANGE.MAX;
  },
};

export const validateArray = {
  isSixSize(numbers) {
    return numbers.length === RANGE.SIZE;
  },

  isOneToFourtyFive(numbers) {
    return numbers.every(
      (element) => element >= RANGE.MIN && element <= RANGE.MAX
    );
  },

  isDuplicate(numbers) {
    return numbers.some((element, index) => numbers.indexOf(element) !== index);
  },

  isNumber(numbers) {
    return numbers.every((element) => !Number.isNaN(element));
  },
};
