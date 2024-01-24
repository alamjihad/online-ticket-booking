const buses = [
    {
       operator:"Operator: Hanif",
       startTime:"7:00 am",
       endTime:' Ending at: 10:00 pm, ',
       price:800,
       ac:'False',
       offday:['wednesday'],
       startDestination:' Starting from: Dhaka, ',
       endDestination:' Destination: Rangpur '
    },  
    {
       operator:'Operator: Marsa',
       startTime:"7:20 pm",
       endTime:' Ending at: 9:30am, ',
       price:1000,
       ac:'True',
       offday:[''],
       startDestination:' Starting from: Shylet, ',
       endDestination:' Destination: Chittagong '
    },
    {
       operator:'Operator: Hanif', 
       startTime:"8:15 am",
       endTime:' Ending at: 12:15 pm,',
       price:750,
       ac:'True',
       offday:['sunday','monday'],
       startDestination:' Starting from: Khulna, ',
       endDestination:' Destination: Rajshahi '
    },
    {
       operator:'Operator: Shamoly',
       startTime:"6:00 pm",
       endTime:' Ending at: 12:25 pm, ',
       price:1200,
       ac:'True',
       offday:['saturday','tuesday'],
       startDestination:' Starting from: Chittagong',
       endDestination:' Destination: Rajshahi'
    },
    {
       operator:'Operator: Soudia',
       startTime:"12:30 pm",
       endTime:' Ending at: 8:35 pm, ',
       price:500,
       ac:'True',
       offday:['friday'],
       startDestination:' Starting from: Dhaka',
       endDestination:' Destination: Rangpur'
    },
    {
       operator:'Operator: Shamoly',
       startTime:"11:45 am",
       endTime:' Ending at: 6:15 pm, ',
       price:650,
       ac:'False',
       offday:['wednesday','friday','monday'],
       startDestination:' Starting from: Barishal, ',
       endDestination:' Destination: Dinazpur, '
    },
    {
       operator:'Operator: Marsa',
       startTime:"4:15 pm",
       endTime:' Ending at: 12:00 pm, ',
       price:900,
       ac:'False',
       offday:['thursday'],
       startDestination:' Starting from: Dinazpur, ',
       endDestination:' Destination: Barishal, '
    },
    {
       operator:'Operator: Shamoly',
       startTime:"11:10 am",
       endTime:' Ending at: 8:45 am, ',
       price:5500,
       ac:'True',
       offday:[''],
       startDestination:' Starting from: Rajshahi, ',
       endDestination:' Destination: Khulna, '
    },
    {
       operator:"Operator: Marsa",
       startTime:"7:45 pm",
       endTime:' Ending at: 3:00 am, ',
       price:1000,
       ac:'True',
       offday:['sunday','monday','thursday'],
       startDestination:' Starting from: Khulna, ',
       endDestination:' Destination: Rajshahi, '
    },
    {
      operator:'Operator: Soudia',
       startTime:"3:50 am",
       endTime:' Ending at: 10:40 pm, ',
       price:1000,
       ac:'True',
       offday:['wednesday'],
       startDestination:' Starting from: Rangpur, ',
       endDestination:' Destination: Rajshahi, '
    },
    {
       operator:'Operator: Marsa',
       startTime:"5:10 pm",
       endTime:' Ending at: 11:50 pm, ',
       price:650,
       ac:'True',
       offday:['tuesday'],
       startDestination:' Starting from: Rangpur, ',
       endDestination:' Destination: Rajshahi, '
    },
    {
      operator:'Operator: Soudia',
       startTime:"9:10 pm",
       endTime:' Ending at: 12:55 pm, ',
       price:350,
       ac:'False',
       offday:['monday'],
       startDestination:' Starting from: Rangpur, ',
       endDestination:' Destination: Rajshahi, '
    },
    {
       operator:'Operator: Shamoly',
       startTime:"7:35 am",
       endTime:' Ending at: 11:55 pm, ',
       price:500,
       ac:'False',
       offday:['thursday','tuesday'],
       startDestination:' Starting from: Barishal, ',
       endDestination:' Destination: Shylet, '
    },
    {
      operator:'Operator: Soudia',
       startTime:"10:25 am",
       endTime:' Ending at: 3:05 pm, ',
       price:700,
       ac:'False',
       offday:['wednessday','saturday'],
       startDestination:' Starting from: Dinazpur, ',
       endDestination:' Destination: Chittagong, '
    },
    {
       operator:'Operator: Shamoly',
       startTime:"9:05 pm",
       endTime:' Ending at: 7:50 pm, ',
       price:850,
       ac:'False',
       offday:['friday','saturday'],
       startDestination:' Starting from: Dinazpur, ',
       endDestination:' Destination: Chittagong, '
    },
    {
       operator:'Operator: Hanif',
       startTime:"2:50 pm",
       endTime:' Ending at: 10:30 pm, ',
       price:1050,
       ac:'False',
       offday:['wednesday','saturday'],
       startDestination:' Starting from: Dinazpur, ',
       endDestination:' Destination: Chittagong, '
    },
    {
       operator:'Operator: Hanif',
       startTime:"5:30 am",
       endTime:' Ending at: 4:55 am, ',
       price:750,
       ac:'True',
       offday:[''],
       startDestination:' Starting from: Dhaka, ',
       endDestination:' Destination: Barishal, '
    },
    {
       operator:'Operator: Marsa',
       startTime:"8:55 pm",
       endTime:' Ending at: 11:45 am, ',
       price:550,
       ac:'False',
       offday:['wednessday','saturday'],
       startDestination:' Starting from: Shylet, ',
       endDestination:' Destination: Dhaka, '
    },
    {
      operator:'Operator: Soudia',
       startTime:"1:00 pm",
       endTime:' Ending at: 5:50 am, ',
       price:450,
       ac:'True',
       offday:['monday','thursday'],
       startDestination:' Starting from: Rangpur, ',
       endDestination:' Destination: Shylet, '
    },
    {
      operator:'Operator: Soudia',
       startTime:"6:40 am",
       endTime:' Ending at: 12:10 pm, ',
       price:800,
       ac:'False',
       offday:['wednesday','saturday'],
       startDestination:' Starting from: Dinazpur, ',
       endDestination:' Destination: Chittagong, '
    }
];
buildTable(buses)
function buildTable(data){
   var table = document.getElementById('myTable');
   table.innerHTML="";
   for(var i=0;i<data.length;i++)
   {
      var row=`<tr>
      <td>${data[i].operator}</td>
      <td>Starting at: ${data[i].startTime}</td>
      <td>${data[i].endTime}</td>
      <td>${data[i].price}</td>
      <td>${data[i].ac}</td>
      <td>${data[i].offday}</td>
      <td>${data[i].startDestination}</td>
      <td>${data[i].endDestination}</td>
      </tr>`
      table.innerHTML+=row;
   }
}
const bus=buses.map(obj=>obj.operator);                                          // map method
console.log(bus);
const bus2 = [];                                                                        // for of method  
// for(const obj of buses){
//    const propertyValue = obj.operator;
//    bus2.push(propertyValue);
// }
// console.log(bus2);
const newArrayOfValues=buses.map(obj=>Object.values(obj));
console.log(newArrayOfValues);
// function displayContent(buttonId){
// switch(buttonId){
//       case "hanif":
//          display("Hanif ,");
//          console.log("displayHanif function is calling");
//          break;
//       case "shamoly":
//          display("Shamoly ,");
//          break;
//       case "marsa":
//          display("Marsa ,");
//          break;
//       case "soudia":
//          display("Soudia ,");
//          break;
//       case "ac":
//          display('True');
//          break;
//       case "nonac":
//          display('False');
//          break;
//    }
// }
// function display(abc){
//    console.log("displayHanif function is called");
//    const select = buses.filter(innerArray=>{
//       buses.operator=abc;
//       //return innerArray[1].includes("item");
//       return innerArray.operator=abc;
//    });
// //   createTable(select);
//    buildTable(select)
//    function buildTable(data){
//       var table = document.getElementById('myTable');
//       table.innerHTML="";
//       for(var i=0;i<data.length;i++)
//       {
//          var row=`<tr>
//          <td>${data[i].operator}</td>
//          <td>Starting at: ${data[i].startTime}</td>
//          <td>${data[i].endTime}</td>
//          <td>${data[i].price}</td>
//          <td>${data[i].ac}</td>
//          <td>${data[i].offday}</td>
//          <td>${data[i].startDestination}</td>
//          <td>${data[i].endDestination}</td>
//          </tr>`
//          table.innerHTML+=row;
//       }
//    }
// }

const unique = [...new Set(buses.map(obj=>obj.operator))];
console.log(unique);

const text = unique.map(item=>item.split(":")[1].trim()).join(", ");
console.log(text);

const my = text.split(",");
console.log(my);

const container = document.getElementById("input-container");
my.map((element,index)=>{
   const label =document.createElement("label");
   label.textContent = element;

   const checkbox = document.createElement("input");
   checkbox.type = "checkbox";
   checkbox.id = element;
   checkbox.onclick=xyz(element);

   container.appendChild(label);
   container.appendChild(checkbox);

   container.appendChild(document.createElement("br"));
});

function xyz(operator){
   console.log(`hello ${operator}`);
}

const newInput =document.getElementById("2nd_input");
newInput=" ";
let html = my.map((op)=>{
   retrun `<input type="checkbox" value=${op} onclick=abc(${op}) id=${op}`;
}).join(" ");
newInput.innerHTML=html;