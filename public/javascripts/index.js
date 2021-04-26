/**
 * A helper function which uses the fetch
 * API to send data to the server. Not
 * super flexible but for this
 * assignment it works fine.
 *
 * @param {string} url - The URL to which we send the data.
 * @param {object} data - The data which is to be sent to the server.
 * @returns {object}
 */
async function postData(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data),
  });

  // Parses JSON response into native JavaScript objects
  return response.json();
}

/**
 * Object containing all 24 employees
 * and their corresponding store ID.
 */
const employees = {
  1: { StoreID: 98053 },
  2: { StoreID: 98053 },
  3: { StoreID: 98053 },
  4: { StoreID: 98053 },
  5: { StoreID: 98007 },
  6: { StoreID: 98007 },
  7: { StoreID: 98007 },
  8: { StoreID: 98007 },
  9: { StoreID: 98077 },
  10: { StoreID: 98077 },
  11: { StoreID: 98077 },
  12: { StoreID: 98077 },
  13: { StoreID: 98055 },
  14: { StoreID: 98055 },
  15: { StoreID: 98055 },
  16: { StoreID: 98055 },
  17: { StoreID: 98011 },
  18: { StoreID: 98011 },
  19: { StoreID: 98011 },
  20: { StoreID: 98011 },
  21: { StoreID: 98046 },
  22: { StoreID: 98046 },
  23: { StoreID: 98046 },
  24: { StoreID: 98046 },
};

/**
 * The CDs which are available to purchase.
 */
const cds = [
  12345,
  123654,
  321456,
  321654,
  654123,
  654321,
  543216,
  354126,
  621453,
  623451,
];

/**
 * Generates a random number between two numbers.
 *
 * @param {Number} min - The minimum number to be returned.
 * @param {Number} max - The maximum number to be returned.
 * @returns {Number}
 */
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min) + min);
};

/**
 * Creates an order by setting all the
 * randomized data according to the
 * above datasets.
 *
 * @returns {Object}
 */
const createOrder = () => {
  const SalesPersonID = getRandomInt(1, 24);
  const { StoreID } = employees[SalesPersonID];
  const CdID = cds[getRandomInt(0, cds.length - 1)];
  const PricePaid = getRandomInt(5, 15);

  return { SalesPersonID, StoreID, CdID, PricePaid };
};

/**
 * Updates a small message container under
 * the buttons based on the supplied ID.
 *
 * @param {String} id - The ID of the DOM element to get.
 * @param {String} status - The status message to display.
 * @returns {void}
 */
const setButtonStatus = (id, status) => {
  const div = document.getElementById(id);
  div.innerHTML = status;

  setTimeout(() => {
    div.innerHTML = '';
  }, 4000);
};

// Sets the formData to the orderForm on the DOM
const formData = new FormData(document.getElementById('orderForm'));

/**
 * Attaches an event listener to the orderForm
 * so we can iterate over the properties
 * of an order and update the form.
 */
document.getElementById('orderForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const orderDetails = createOrder();

  for (const [name, value] of Object.entries(orderDetails)) {
    document.querySelector(`[name="${name}"]`).value = value;
  }
});

/**
 * Attaches an event listener to the Create One
 * button which handles submitting a single
 * order to the backend.
 */
document.getElementById('createOne').addEventListener('click', async (e) => {
  e.preventDefault();

  const data = Object.fromEntries(formData.entries());

  try {
    const response = await postData('http://localhost:3000/', data);

    if (!response) {
      setButtonStatus('createOneStatus', 'There was an error!');
      throw new Error('Network response was not ok!');
    }

    setButtonStatus('createOneStatus', 'Success!');
  } catch (e) {
    console.error(e);
  }
});

/**
 * Attaches an event listener to the the Create Five Hundred
 * button which handles generating and posting 500 orders
 * to the backend.
 */
document
  .getElementById('createFiveHundred')
  .addEventListener('click', async (e) => {
    e.preventDefault();

    const ORDER_QUANTITY = 500;
    let curr = 0;
    let hasError = false;

    do {
      document.getElementById(
        'createFiveHundredStatus'
      ).innerHTML = `Working...${curr} of ${ORDER_QUANTITY} created`;

      const orderDetails = createOrder();

      try {
        const response = await postData(
          'http://localhost:3000/create-five-hundred',
          orderDetails
        );

        if (!'_id' in response) {
          hasError = true;
          throw new Error('Network response was not ok');
        }
      } catch (e) {
        hasError = true;
        console.error(e);
      }

      curr++;
    } while (curr < ORDER_QUANTITY);

    setButtonStatus(
      'createFiveHundredStatus',
      hasError ? 'There was an error!' : 'Success!'
    );
  });
