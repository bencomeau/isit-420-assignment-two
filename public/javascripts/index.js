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
  
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
  
    return Math.floor(Math.random() * (max - min) + min);
  };
  
  const createOrder = () => {
    const SalesPersonID = getRandomInt(1, 24);

    const { StoreID } = employees[SalesPersonID];

    const CdID = cds[getRandomInt(0, cds.length - 1)];

    const PricePaid = getRandomInt(5, 15);
  
    return { SalesPersonID, StoreID, CdID, PricePaid };
  };
  document.getElementById('orderForm').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const orderDetails = createOrder();
  
    for (const [name, value] of Object.entries(orderDetails)) {

      document.querySelector(`[name="${name}"]`).value = value;
      
    }
  });