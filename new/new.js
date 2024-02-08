const buses = [
  {
    operator: "Hanif",
    startTime: "7:00 am",
    endTime: ' Ending at: 10:00 pm, ',
    price: 800,
    ac: "NON AC",
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
    ac: "NON AC",
    offday: ['wednesday', 'friday', 'monday'],
    startDestination: 'Barishal, ',
    endDestination: 'Dinazpur, '
  },
  {
    operator: 'Marsa',
    startTime: "4:15 pm",
    endTime: ' Ending at: 12:00 pm, ',
    price: 900,
    ac: "NON AC",
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
    ac: "NON AC",
    offday: ['monday'],
    startDestination: 'Rangpur, ',
    endDestination: 'Rajshahi, '
  },
  {
    operator: 'Shamoly',
    startTime: "7:35 am",
    endTime: ' Ending at: 11:55 pm, ',
    price: 500,
    ac: "NON AC",
    offday: ['thursday', 'tuesday'],
    startDestination: 'Barishal, ',
    endDestination: 'Shylet, '
  },
  {
    operator: 'Soudia',
    startTime: "10:25 am",
    endTime: ' Ending at: 3:05 pm, ',
    price: 700,
    ac: "NON AC",
    offday: ['wednessday', 'saturday'],
    startDestination: 'Dinazpur, ',
    endDestination: 'Chittagong, '
  },
  {
    operator: 'Shamoly',
    startTime: "9:05 pm",
    endTime: ' Ending at: 7:50 pm, ',
    price: 850,
    ac: "NON AC",
    offday: ['friday', 'saturday'],
    startDestination: 'Dinazpur, ',
    endDestination: 'Chittagong, '
  },
  {
    operator: 'Hanif',
    startTime: "2:50 pm",
    endTime: ' Ending at: 10:30 pm, ',
    price: 1050,
    ac: "NON AC",
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
    ac: "NON AC",
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
    ac: "NON AC",
    offday: ['wednesday', 'saturday'],
    startDestination: 'Dinazpur, ',
    endDestination: 'Chittagong, '
  }
];

function printTable(data) {
  var table = document.getElementById('myTable');
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

function printTable2(data) {
  var table = document.getElementById('myTable');
  table.innerHTML = "";
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

printTable(buses);
var div1 = document.getElementById('filt1');
var div2 = document.getElementById('filt2');
var dis = 0;
function hideShow() {
  if (dis == 1) {
    div1.style.display = "block";
    div2.style.display = "block";
    dis = 0;
  }
  else {
    div1.style.display = "none";
    div2.style.display = "none";
    dis = 1;
  }
}

const bus = buses.map(obj => obj.operator);
let uniqueArray = bus.filter((value, index, array) => array.indexOf(value) === index);

const acNonAc = buses.map(obj => obj.ac);
let uniqueArray2 = acNonAc.filter((value, index, array) => array.indexOf(value) === index);

let checkedBuses = [];
let filteredValue = [];
let acFilteredValue = [];

function showTable(operate,ac) {
  console.log(operate);
  const index = checkedBuses.indexOf(operate);
  if (index !== -1) {
    checkedBuses.splice(index, 1);
  }
  else {
    checkedBuses.push(operate);
  }
  console.log(checkedBuses);
  for (let i = 0; i < checkedBuses.length; ++i) {
    filteredValue = buses.filter((bus2) => {
      return bus2.operator === operate;
    });
  }
  console.log(filteredValue);
  for(let i=0;i,filteredValue.length;++i)
  {
    acFilteredValue=filteredValue.filter((acBus)=>{
      return acBus.ac===ac;
    })
  }
  if (checkedBuses.length === 1) {
    printTable2(filteredValue);
  }
  else if (checkedBuses.length > 1) {
    printTable(filteredValue);
  }
  else if (checkedBuses.length === 0) {
    printTable2(buses);
  }
}
const newInput = document.getElementById("2nd_input");
newInput.style.marginTop = "15px";
const inputTagBuses = uniqueArray.map((op) => {
  console.log(op);
  return `<input type="checkbox" id="${op}" name="busName" onclick=showTable("${op}") style="margin-left:35px"> ${op} <br>`
}).join(" ");
newInput.innerHTML = inputTagBuses;

const input = document.getElementById("1st_input");
const inputTagAcNonAc = uniqueArray2.map((a) => {
  console.log(a);
  return `<input type="checkbox" id="${a}" name="busName" onclick=showTable("${a}") style="margin-left:35px"> ${a}<br>`
}).join(" ");
input.innerHTML = inputTagAcNonAc;