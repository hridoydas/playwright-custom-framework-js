export default class Utilities {
  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
}
