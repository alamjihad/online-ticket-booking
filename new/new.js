const buses = [
  {
    operator: "Hanif",
    startTime: "7:00 am",
    endTime: ' Ending at: 10:00 pm, ',
    price: 800,
    ac: "NON_AC",
    offday: ['wednesday'],
    startDestination: 'Dhaka, ',
    endDestination: 'Rangpur '
  },
  {
    operator: 'Marsa',
    startTime: "7:20 pm",
    endTime: ' Ending at: 9:30am, ',
    price: 1000,
    ac: "AC",
    offday: [''],
    startDestination: 'Shylet, ',
    endDestination: 'Chittagong '
  },
  {
    operator: 'Hanif',
    startTime: "8:15 am",
    endTime: ' Ending at: 12:15 pm,',
    price: 750,
    ac: "AC",
    offday: ['sunday', 'monday'],
    startDestination: 'Khulna, ',
    endDestination: 'Rajshahi '
  },
  {
    operator: 'Shamoly',
    startTime: "6:00 pm",
    endTime: ' Ending at: 12:25 pm, ',
    price: 1200,
    ac: "AC",
    offday: ['saturday', 'tuesday'],
    startDestination: 'Chittagong',
    endDestination: 'Rajshahi'
  },
  {
    operator: 'Soudia',
    startTime: "12:30 pm",
    endTime: ' Ending at: 8:35 pm, ',
    price: 500,
    ac: "AC",
    offday: ['friday'],
    startDestination: 'Dhaka',
    endDestination: 'Rangpur'
  },
  {
    operator: 'Shamoly',
    startTime: "11:45 am",
    endTime: ' Ending at: 6:15 pm, ',
    price: 650,
    ac: "NON_AC",
    offday: ['wednesday', 'friday', 'monday'],
    startDestination: 'Barishal, ',
    endDestination: 'Dinazpur, '
  },
  {
    operator: 'Marsa',
    startTime: "4:15 pm",
    endTime: ' Ending at: 12:00 pm, ',
    price: 900,
    ac: "NON_AC",
    offday: ['thursday'],
    startDestination: 'Dinazpur, ',
    endDestination: 'Barishal, '
  },
  {
    operator: 'Shamoly',
    startTime: "11:10 am",
    endTime: ' Ending at: 8:45 am, ',
    price: 5500,
    ac: "AC",
    offday: [''],
    startDestination: 'Rajshahi, ',
    endDestination: 'Khulna, '
  },
  {
    operator: "Marsa",
    startTime: "7:45 pm",
    endTime: ' Ending at: 3:00 am, ',
    price: 1000,
    ac: "AC",
    offday: ['sunday', 'monday', 'thursday'],
    startDestination: 'Khulna, ',
    endDestination: 'Rajshahi, '
  },
  {
    operator: 'Soudia',
    startTime: "3:50 am",
    endTime: ' Ending at: 10:40 pm, ',
    price: 1000,
    ac: "AC",
    offday: ['wednesday'],
    startDestination: 'Rangpur, ',
    endDestination: 'Rajshahi, '
  },
  {
    operator: 'Marsa',
    startTime: "5:10 pm",
    endTime: ' Ending at: 11:50 pm, ',
    price: 650,
    ac: "AC",
    offday: ['tuesday'],
    startDestination: 'Rangpur, ',
    endDestination: 'Rajshahi, '
  },
  {
    operator: 'Soudia',
    startTime: "9:10 pm",
    endTime: ' Ending at: 12:55 pm, ',
    price: 350,
    ac: "NON_AC",
    offday: ['monday'],
    startDestination: 'Rangpur, ',
    endDestination: 'Rajshahi, '
  },
  {
    operator: 'Shamoly',
    startTime: "7:35 am",
    endTime: ' Ending at: 11:55 pm, ',
    price: 500,
    ac: "NON_AC",
    offday: ['thursday', 'tuesday'],
    startDestination: 'Barishal, ',
    endDestination: 'Shylet, '
  },
  {
    operator: 'Soudia',
    startTime: "10:25 am",
    endTime: ' Ending at: 3:05 pm, ',
    price: 700,
    ac: "NON_AC",
    offday: ['wednessday', 'saturday'],
    startDestination: 'Dinazpur, ',
    endDestination: 'Chittagong, '
  },
  {
    operator: 'Shamoly',
    startTime: "9:05 pm",
    endTime: ' Ending at: 7:50 pm, ',
    price: 850,
    ac: "NON_AC",
    offday: ['friday', 'saturday'],
    startDestination: 'Dinazpur, ',
    endDestination: 'Chittagong, '
  },
  {
    operator: 'Hanif',
    startTime: "2:50 pm",
    endTime: ' Ending at: 10:30 pm, ',
    price: 1050,
    ac: "NON_AC",
    offday: ['wednesday', 'saturday'],
    startDestination: 'Dinazpur, ',
    endDestination: 'Chittagong, '
  },
  {
    operator: 'Hanif',
    startTime: "5:30 am",
    endTime: ' Ending at: 4:55 am, ',
    price: 750,
    ac: "AC",
    offday: [''],
    startDestination: 'Dhaka, ',
    endDestination: 'Barishal, '
  },
  {
    operator: 'Marsa',
    startTime: "8:55 pm",
    endTime: ' Ending at: 11:45 am, ',
    price: 550,
    ac: "NON_AC",
    offday: ['wednessday', 'saturday'],
    startDestination: 'Shylet, ',
    endDestination: 'Dhaka, '
  },
  {
    operator: 'Soudia',
    startTime: "1:00 pm",
    endTime: ' Ending at: 5:50 am, ',
    price: 450,
    ac: "AC",
    offday: ['monday', 'thursday'],
    startDestination: 'Rangpur, ',
    endDestination: 'Shylet, '
  },
  {
    operator: 'Soudia',
    startTime: "6:40 am",
    endTime: ' Ending at: 12:10 pm, ',
    price: 800,
    ac: "NON_AC",
    offday: ['wednesday', 'saturday'],
    startDestination: 'Dinazpur, ',
    endDestination: 'Chittagong, '
  }
];

function printTable(data) {
  var table = document.getElementById('myTable');
  // table.innerHTML = "";
  for (var i = 0; i < data.length; i++) {
    var row = `<tr>
     <td>${data[i].operator}</td>
     <td>Starting at: ${data[i].startTime}</td>
     <td>${data[i].endTime}</td>
     <td>${data[i].price}</td>
     <td>${data[i].ac}</td>
     <td>${data[i].offday}</td>
     <td>${data[i].startDestination}</td>
     <td>${data[i].endDestination}</td>
     </tr>`
    table.innerHTML += row;
  }
}

const bus = buses.map(obj => obj.operator);
let uniqueArray = bus.filter((value, index, array) => array.indexOf(value) === index);

const acNonAc = buses.map(obj => obj.ac);
let uniqueArray2 = acNonAc.filter((value, index, array) => array.indexOf(value) === index);

printTable(buses);

let panel = document.getElementById("panel");
var dis = 0;

function hideShow() {
  if (dis == 1) {
    panel.style.display = "block";
    dis = 0;
  }
  else {
    panel.style.display = "none";
    dis = 1;
  }
}

let checkedBuses = [];
let filteredValue = buses;
let acFilteredValue = [];

function showTable() {

  filteredValue = [];

  let selectedBuses = [];

  let filteredBusArray = [];

  const checkBus = document.getElementsByName("busName");
  for (let i = 0; i < checkBus.length; ++i) {
    if (checkBus[i].checked) {
      selectedBuses.push(checkBus[i].value);
    }
  }

  for (let i = 0; i < selectedBuses.length; ++i) {
    filteredBusArray = buses.filter((bus2) => {
      return bus2.operator === checkBus[i].value;
    })
  }
  // console.log(filteredBusArray);
  printTable(filteredBusArray);

  let selectedAcType = [];
  let filterAcArray = [];

  const checkAc = document.getElementsByName("acType");
  for (let i = 0; i < checkAc.length; ++i) {
    if (checkAc[i].checked) {
      selectedAcType.push(checkAc[i].value);
    }
  }
  for (let i = 0; i < selectedAcType.length; ++i) {
    filterAcArray = buses.filter((bus3) => {
      return bus3.ac === checkAc[i].value;
    })
  }
  // console.log(filterAcArray);
  printTable(filterAcArray);

  filteredValue = buses.filter((bus) => {
    return selectedBuses.includes(bus.operator) && selectedAcType.includes(bus.ac);
  });
  console.log(filteredValue);
  printTable(filteredValue);
}
const newInput = document.getElementById("2nd_input");
newInput.style.marginTop = "15px";
const inputTagBuses = uniqueArray.map((op) => {
  return `<input type="checkbox" value="${op}" name="busName" onclick=showTable() style="margin-left:35px"> ${op} <br>`
}).join(" ");
newInput.innerHTML = inputTagBuses;

const input = document.getElementById("1st_input");
const inputTagAcNonAc = uniqueArray2.map((a) => {
  return `<input type="checkbox" value="${a}" name="acType" onclick=showTable() style="margin-left:35px"> ${a}<br>`
}).join(" ");
input.innerHTML = inputTagAcNonAc;

function operatorUP() {
  const operator1 = filteredValue.sort((a, b) => {
    a = a.operator.toLocaleLowerCase();
    b = b.operator.toLocaleLowerCase();
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });
  printTable(operator1);
}

function operatorDown() {
  const operator2 = filteredValue.sort((a, b) => {
    a = a.operator.toLocaleLowerCase();
    b = b.operator.toLocaleLowerCase();
    if (a > b) {
      return -1;
    }
    if (a < b) {
      return 1;
    }
    return 0;
  });
  printTable(operator2);
}

function timeUp() {
  const time1 = filteredValue.sort(function (a, b) {
    return Date.parse('1970/01/01 ' + a.startTime.slice(0, -2) + ' ' + a.startTime.slice(-2)) - Date.parse('1970/01/01 ' + b.startTime.slice(0, -2) + ' ' + b.startTime.slice(-2))
  });
  printTable(time1);
}

function timeDown() {
  const time2 = filteredValue.sort(function (a, b) {
    return Date.parse('1970/01/01 ' + b.startTime.slice(0, -2) + ' ' + b.startTime.slice(-2)) - Date.parse('1970/01/01 ' + a.startTime.slice(0, -2) + ' ' + a.startTime.slice(-2))
  });
  printTable(time2);
}

function fareUp() {
  const price = (a, b) => a.price - b.price;
  const fare1 = (filteredValue.sort(price));
  printTable(fare1);
}

function fareDown() {
  const pric = (a, b) => b.price - a.price;
  const price2 = (filteredValue.sort(pric));
  printTable(price2);
}

function upDown(number) {
  if (number === 1) {
    operatorUP();
  }
  else if (number === 2) {
    operatorDown();
  }
  else if (number === 3) {
    timeUp();
  }
  else if (number === 4) {
    timeDown();
  }
  else if (number === 5) {
    fareUp();
  }
  else {
    fareDown();
  }
}