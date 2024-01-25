const buses = [
    {
       operator:"Hanif",
       startTime:"7:00 am",
       endTime:' Ending at: 10:00 pm, ',
       price:800,
       ac:false,
       offday:['wednesday'],
       startDestination:'Dhaka, ',
       endDestination:'Rangpur '
    },  
    {
       operator:'Marsa',
       startTime:"7:20 pm",
       endTime:' Ending at: 9:30am, ',
       price:1000,
       ac:true,
       offday:[''],
       startDestination:'Shylet, ',
       endDestination:'Chittagong '
    },
    {
       operator:'Hanif', 
       startTime:"8:15 am",
       endTime:' Ending at: 12:15 pm,',
       price:750,
       ac:true,
       offday:['sunday','monday'],
       startDestination:'Khulna, ',
       endDestination:'Rajshahi '
    },
    {
       operator:'Shamoly',
       startTime:"6:00 pm",
       endTime:' Ending at: 12:25 pm, ',
       price:1200,
       ac:true,
       offday:['saturday','tuesday'],
       startDestination:'Chittagong',
       endDestination:'Rajshahi'
    },
    {
       operator:'Soudia',
       startTime:"12:30 pm",
       endTime:' Ending at: 8:35 pm, ',
       price:500,
       ac:true,
       offday:['friday'],
       startDestination:'Dhaka',
       endDestination:'Rangpur'
    },
    {
       operator:'Shamoly',
       startTime:"11:45 am",
       endTime:' Ending at: 6:15 pm, ',
       price:650,
       ac:false,
       offday:['wednesday','friday','monday'],
       startDestination:'Barishal, ',
       endDestination:'Dinazpur, '
    },
    {
       operator:'Marsa',
       startTime:"4:15 pm",
       endTime:' Ending at: 12:00 pm, ',
       price:900,
       ac:false,
       offday:['thursday'],
       startDestination:'Dinazpur, ',
       endDestination:'Barishal, '
    },
    {
       operator:'Shamoly',
       startTime:"11:10 am",
       endTime:' Ending at: 8:45 am, ',
       price:5500,
       ac:true,
       offday:[''],
       startDestination:'Rajshahi, ',
       endDestination:'Khulna, '
    },
    {
       operator:"Marsa",
       startTime:"7:45 pm",
       endTime:' Ending at: 3:00 am, ',
       price:1000,
       ac:true,
       offday:['sunday','monday','thursday'],
       startDestination:'Khulna, ',
       endDestination:'Rajshahi, '
    },
    {
      operator:'Soudia',
       startTime:"3:50 am",
       endTime:' Ending at: 10:40 pm, ',
       price:1000,
       ac:true,
       offday:['wednesday'],
       startDestination:'Rangpur, ',
       endDestination:'Rajshahi, '
    },
    {
       operator:'Marsa',
       startTime:"5:10 pm",
       endTime:' Ending at: 11:50 pm, ',
       price:650,
       ac:true,
       offday:['tuesday'],
       startDestination:'Rangpur, ',
       endDestination:'Rajshahi, '
    },
    {
      operator:'Soudia',
       startTime:"9:10 pm",
       endTime:' Ending at: 12:55 pm, ',
       price:350,
       ac:false,
       offday:['monday'],
       startDestination:'Rangpur, ',
       endDestination:'Rajshahi, '
    },
    {
       operator:'Shamoly',
       startTime:"7:35 am",
       endTime:' Ending at: 11:55 pm, ',
       price:500,
       ac:false,
       offday:['thursday','tuesday'],
       startDestination:'Barishal, ',
       endDestination:'Shylet, '
    },
    {
      operator:'Soudia',
       startTime:"10:25 am",
       endTime:' Ending at: 3:05 pm, ',
       price:700,
       ac:false,
       offday:['wednessday','saturday'],
       startDestination:'Dinazpur, ',
       endDestination:'Chittagong, '
    },
    {
       operator:'Shamoly',
       startTime:"9:05 pm",
       endTime:' Ending at: 7:50 pm, ',
       price:850,
       ac:false,
       offday:['friday','saturday'],
       startDestination:'Dinazpur, ',
       endDestination:'Chittagong, '
    },
    {
       operator:'Hanif',
       startTime:"2:50 pm",
       endTime:' Ending at: 10:30 pm, ',
       price:1050,
       ac:false,
       offday:['wednesday','saturday'],
       startDestination:'Dinazpur, ',
       endDestination:'Chittagong, '
    },
    {
       operator:'Hanif',
       startTime:"5:30 am",
       endTime:' Ending at: 4:55 am, ',
       price:750,
       ac:true,
       offday:[''],
       startDestination:'Dhaka, ',
       endDestination:'Barishal, '
    },
    {
       operator:'Marsa',
       startTime:"8:55 pm",
       endTime:' Ending at: 11:45 am, ',
       price:550,
       ac:false,
       offday:['wednessday','saturday'],
       startDestination:'Shylet, ',
       endDestination:'Dhaka, '
    },
    {
      operator:'Soudia',
       startTime:"1:00 pm",
       endTime:' Ending at: 5:50 am, ',
       price:450,
       ac:true,
       offday:['monday','thursday'],
       startDestination:'Rangpur, ',
       endDestination:'Shylet, '
    },
    {
      operator:'Soudia',
       startTime:"6:40 am",
       endTime:' Ending at: 12:10 pm, ',
       price:800,
       ac:false,
       offday:['wednesday','saturday'],
       startDestination:'Dinazpur, ',
       endDestination:'Chittagong, '
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
// const newArrayOfValues=buses.map(obj=>Object.values(obj));
// console.log(newArrayOfValues);

function abc(op){
   console.log(op);
   // console.log(op);
    let filteredValue = buses.filter((buss)=>{
   // console.log(op);
    console.log(buss.operator);
    return buss.operator===op;
    });
    console.log(filteredValue);
    buildTable(filteredValue)
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
 }

/*tech:- 1*/
// const newarray = {};
// for (const element of bus){
//   newarray[element] = true;
// }
// const uniqueArray = Object.keys(newarray);
// function unique(value,index,array){
//    return array.indexOf===index;
// }

/*tech:- 2*/
let uniqueArray=bus.filter((value,index,array)=>array.indexOf(value)===index);

/*tech:- 3*/
// function uniqueArray(bus){
//    function onlyUnique(value,index,arr) {
//       return arr.indexOf(value)===index
//    }
// }
// let unique = bus.filter(onlyUnique);

/* tech:- 4*/
// function uniqueArray2(bus){
//    let a=[];
//    for(var i=0;i<bus.length;++i)
//    {
//       if(a.indexOf(bus[i]===-1&&bus[i]!=' '))
//       {
//          a.push(bus[i]);
//       }
//    }
//    return a;
// }
// let uniqueArray=uniqueArray2(bus);

console.log(uniqueArray);
const newInput =document.getElementById("2nd_input");
const template =uniqueArray.map((op)=>{
   console.log(op);
   return`${op} <input type="checkbox" id="${op}" onclick="abc(${op})" style="margin-left:35px"> <br>`
})
newInput.innerHTML=template;

