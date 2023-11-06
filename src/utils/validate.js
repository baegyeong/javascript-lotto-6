export const validation = {
  isDivideThousand(price) {
    return price % 1000 !== 0;
  },
  isBiggerThanThousand(price) {
    return price < 1000;
  },
  isNumber(price) {
    return Number.isNaN(price);
  },
};
