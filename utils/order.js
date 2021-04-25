// Set the maximum hours and days
const MAX_HOURS = 23;
const MAX_DAYS = 365; // Let's just hope it isn't a leap year :)

// Initialize values at zero
let HourPurch = 0;
let DayPurch = 0;

/**
 * Generates a random integer between a minimum
 * and maximum range, inclusively.
 *
 * @param {Number} min - The minimum value to be returned.
 * @param {Number} max - The maximum value to be returned.
 * @returns {Number}
 */
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min) + min);
};

/**
 * Generates the necessary HourPurch and DayPurch
 * values while adhering to the maximum allowed
 * values of each type.
 *
 * @returns {Object}
 */
const generatePurchaseTime = () => {
  const hourIncrement = getRandomInt(1, 5);
  HourPurch += hourIncrement;

  if (HourPurch > MAX_HOURS) {
    HourPurch -= MAX_HOURS;
    DayPurch += 1;
  }

  return { HourPurch, DayPurch };
};

module.exports = generatePurchaseTime;
