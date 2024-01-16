(function() {
    exerciseList = document.querySelector(".exercise-list");

    let myArray = [
      {
         operator:"Operator: Hanif, ",
         startTime:"7:00 am",
         endTime:' Ending at: 10:00 pm, ',
         price:800,
         ac:'False',
         offday:['wednesday'],
         startDestination:' Starting from: Dhaka, ',
         endDestination:' Destination: Rangpur '
      },  
      {
         operator:'Operator: Marsa ',
         startTime:"7:20 pm",
         endTime:' Ending at: 9:30am, ',
         price:1000,
         ac:'True',
         offday:[''],
         startDestination:' Starting from: Shylet, ',
         endDestination:' Destination: Chittagong '
      },
      {
         operator:'Operator: Hanif, ', 
         startTime:"8:15 am",
         endTime:' Ending at: 12:15 pm,',
         price:750,
         ac:'True',
         offday:['sunday','monday'],
         startDestination:' Starting from: Khulna, ',
         endDestination:' Destination: Rajshahi '
      },
      {
         operator:'Operator: Shamoly, ',
         startTime:"6:00 pm",
         endTime:' Ending at: 12:25 pm, ',
         price:1200,
         ac:'True',
         offday:['saturday','tuesday'],
         startDestination:' Starting from: Chittagong',
         endDestination:' Destination: Rajshahi'
      },
      {
         operator:"Operator: Soudia ,",
         startTime:"12:30 pm",
         endTime:' Ending at: 8:35 pm, ',
         price:500,
         ac:'True',
         offday:['friday'],
         startDestination:' Starting from: Dhaka',
         endDestination:' Destination: Rangpur'
      },
      {
         operator:'Operator: Shamoly, ',
         startTime:"11:45 am",
         endTime:' Ending at: 6:15 pm, ',
         price:650,
         ac:'False',
         offday:['wednesday','friday','monday'],
         startDestination:' Starting from: Barishal, ',
         endDestination:' Destination: Dinazpur, '
      },
      {
         operator:'Operator: Marsa ',
         startTime:"4:15 pm",
         endTime:' Ending at: 12:00 pm, ',
         price:900,
         ac:'False',
         offday:['thursday'],
         startDestination:' Starting from: Dinazpur, ',
         endDestination:' Destination: Barishal, '
      },
      {
         operator:'Operator: Shamoly, ',
         startTime:"11:10 am",
         endTime:' Ending at: 8:45 am, ',
         price:5500,
         ac:'True',
         offday:[''],
         startDestination:' Starting from: Rajshahi, ',
         endDestination:' Destination: Khulna, '
      },
      {
         operator:"Operator: Marsa ",
         startTime:"7:45 pm",
         endTime:' Ending at: 3:00 am, ',
         price:1000,
         ac:'True',
         offday:['sunday','monday','thursday'],
         startDestination:' Starting from: Khulna, ',
         endDestination:' Destination: Rajshahi, '
      },
      {
         operator:'Operator: Soudia, ',
         startTime:"3:50 am",
         endTime:' Ending at: 10:40 pm, ',
         price:1000,
         ac:'True',
         offday:['wednesday'],
         startDestination:' Starting from: Rangpur, ',
         endDestination:' Destination: Rajshahi, '
      },
      {
         operator:'Operator: Marsa ',
         startTime:"5:10 pm",
         endTime:' Ending at: 11:50 pm, ',
         price:650,
         ac:'True',
         offday:['tuesday'],
         startDestination:' Starting from: Rangpur, ',
         endDestination:' Destination: Rajshahi, '
      },
      {
         operator:'Operator: Soudia, ',
         startTime:"9:10 pm",
         endTime:' Ending at: 12:55 pm, ',
         price:350,
         ac:'False',
         offday:['monday'],
         startDestination:' Starting from: Rangpur, ',
         endDestination:' Destination: Rajshahi, '
      },
      {
         operator:'Operator: Shamoly, ',
         startTime:"7:35 am",
         endTime:' Ending at: 11:55 pm, ',
         price:500,
         ac:'False',
         offday:['thursday','tuesday'],
         startDestination:' Starting from: Barishal, ',
         endDestination:' Destination: Shylet, '
      },
      {
         operator:"Operator: Soudia, ",
         startTime:"10:25 am",
         endTime:' Ending at: 3:05 pm, ',
         price:700,
         ac:'False',
         offday:['wednessday','saturday'],
         startDestination:' Starting from: Dinazpur, ',
         endDestination:' Destination: Chittagong, '
      },
      {
         operator:'Operator: Shamoly, ',
         startTime:"9:05 pm",
         endTime:' Ending at: 7:50 pm, ',
         price:850,
         ac:'False',
         offday:['friday','saturday'],
         startDestination:' Starting from: Dinazpur, ',
         endDestination:' Destination: Chittagong, '
      },
      {
         operator:'Operator: Hanif, ',
         startTime:"2:50 pm",
         endTime:' Ending at: 10:30 pm, ',
         price:1050,
         ac:'False',
         offday:['wednesday','saturday'],
         startDestination:' Starting from: Dinazpur, ',
         endDestination:' Destination: Chittagong, '
      },
      {
         operator:'Operator: Hanif, ',
         startTime:"5:30 am",
         endTime:' Ending at: 4:55 am, ',
         price:750,
         ac:'True',
         offday:[''],
         startDestination:' Starting from: Dhaka, ',
         endDestination:' Destination: Barishal, '
      },
      {
         operator:'Operator: Marsa ',
         startTime:"8:55 pm",
         endTime:' Ending at: 11:45 am, ',
         price:550,
         ac:'False',
         offday:['wednessday','saturday'],
         startDestination:' Starting from: Shylet, ',
         endDestination:' Destination: Dhaka, '
      },
      {
         operator:'Operator: Soudia, ',
         startTime:"1:00 pm",
         endTime:' Ending at: 5:50 am, ',
         price:450,
         ac:'True',
         offday:['monday','thursday'],
         startDestination:' Starting from: Rangpur, ',
         endDestination:' Destination: Shylet, '
      },
      {
         operator:'Operator: Soudia, ',
         startTime:"6:40 am",
         endTime:' Ending at: 12:10 pm, ',
         price:800,
         ac:'False',
         offday:['wednesday','saturday'],
         startDestination:' Starting from: Dinazpur, ',
         endDestination:' Destination: Chittagong, '
      }
      ];
      
buildTable(myArray)
function buildTable(data){
    var table = document.getElementById('myTable');
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
})();

var div1=document.getElementById('filt1');
var div2=document.getElementById('filt2');
var dis=0;
function hideShow(){
if(dis==1)
{
   div1.style.display="block";
   div2.style.display="block";  
   dis=0;
}
else
{
   div1.style.display="none";
   div2.style.display="none";
   dis=1;
}
}

let myArray = [
{
   operator:"Operator: Hanif, ",
   startTime:"7:00 am",
   endTime:' Ending at: 10:00 pm, ',
   price:800,
   ac:'False',
   offday:['wednesday'],
   startDestination:' Starting from: Dhaka, ',
   endDestination:' Destination: Rangpur '
},  
{
   operator:'Operator: Marsa ',
   startTime:"7:20 pm",
   endTime:' Ending at: 9:30am, ',
   price:1000,
   ac:'True',
   offday:[''],
   startDestination:' Starting from: Shylet, ',
   endDestination:' Destination: Chittagong '
},
{
   operator:'Operator: Hanif, ', 
   startTime:"8:15 am",
   endTime:' Ending at: 12:15 pm,',
   price:750,
   ac:'True',
   offday:['sunday','monday'],
   startDestination:' Starting from: Khulna, ',
   endDestination:' Destination: Rajshahi '
},
{
   operator:'Operator: Shamoly, ',
   startTime:"6:00 pm",
   endTime:' Ending at: 12:25 pm, ',
   price:1200,
   ac:'True',
   offday:['saturday','tuesday'],
   startDestination:' Starting from: Chittagong',
   endDestination:' Destination: Rajshahi'
},
{
   operator:"Operator: Soudia ,",
   startTime:"12:30 pm",
   endTime:' Ending at: 8:35 pm, ',
   price:500,
   ac:'True',
   offday:['friday'],
   startDestination:' Starting from: Dhaka',
   endDestination:' Destination: Rangpur'
},
{
   operator:'Operator: Shamoly, ',
   startTime:"11:45 am",
   endTime:' Ending at: 6:15 pm, ',
   price:650,
   ac:'False',
   offday:['wednesday','friday','monday'],
   startDestination:' Starting from: Barishal, ',
   endDestination:' Destination: Dinazpur, '
},
{
   operator:'Operator: Marsa ',
   startTime:"4:15 pm",
   endTime:' Ending at: 12:00 pm, ',
   price:900,
   ac:'False',
   offday:['thursday'],
   startDestination:' Starting from: Dinazpur, ',
   endDestination:' Destination: Barishal, '
},
{
   operator:'Operator: Shamoly, ',
   startTime:"11:10 am",
   endTime:' Ending at: 8:45 am, ',
   price:5500,
   ac:'True',
   offday:[''],
   startDestination:' Starting from: Rajshahi, ',
   endDestination:' Destination: Khulna, '
},
{
   operator:"Operator: Marsa ",
   startTime:"7:45 pm",
   endTime:' Ending at: 3:00 am, ',
   price:1000,
   ac:'True',
   offday:['sunday','monday','thursday'],
   startDestination:' Starting from: Khulna, ',
   endDestination:' Destination: Rajshahi, '
},
{
   operator:'Operator: Soudia, ',
   startTime:"3:50 am",
   endTime:' Ending at: 10:40 pm, ',
   price:1000,
   ac:'True',
   offday:['wednesday'],
   startDestination:' Starting from: Rangpur, ',
   endDestination:' Destination: Rajshahi, '
},
{
   operator:'Operator: Marsa ',
   startTime:"5:10 pm",
   endTime:' Ending at: 11:50 pm, ',
   price:650,
   ac:'True',
   offday:['tuesday'],
   startDestination:' Starting from: Rangpur, ',
   endDestination:' Destination: Rajshahi, '
},
{
   operator:'Operator: Soudia, ',
   startTime:"9:10 pm",
   endTime:' Ending at: 12:55 pm, ',
   price:350,
   ac:'False',
   offday:['monday'],
   startDestination:' Starting from: Rangpur, ',
   endDestination:' Destination: Rajshahi, '
},
{
   operator:'Operator: Shamoly, ',
   startTime:"7:35 am",
   endTime:' Ending at: 11:55 pm, ',
   price:500,
   ac:'False',
   offday:['thursday','tuesday'],
   startDestination:' Starting from: Barishal, ',
   endDestination:' Destination: Shylet, '
},
{
   operator:"Operator: Soudia, ",
   startTime:"10:25 am",
   endTime:' Ending at: 3:05 pm, ',
   price:700,
   ac:'False',
   offday:['wednessday','saturday'],
   startDestination:' Starting from: Dinazpur, ',
   endDestination:' Destination: Chittagong, '
},
{
   operator:'Operator: Shamoly, ',
   startTime:"9:05 pm",
   endTime:' Ending at: 7:50 pm, ',
   price:850,
   ac:'False',
   offday:['friday','saturday'],
   startDestination:' Starting from: Dinazpur, ',
   endDestination:' Destination: Chittagong, '
},
{
   operator:'Operator: Hanif, ',
   startTime:"2:50 pm",
   endTime:' Ending at: 10:30 pm, ',
   price:1050,
   ac:'False',
   offday:['wednesday','saturday'],
   startDestination:' Starting from: Dinazpur, ',
   endDestination:' Destination: Chittagong, '
},
{
   operator:'Operator: Hanif, ',
   startTime:"5:30 am",
   endTime:' Ending at: 4:55 am, ',
   price:750,
   ac:'True',
   offday:[''],
   startDestination:' Starting from: Dhaka, ',
   endDestination:' Destination: Barishal, '
},
{
   operator:'Operator: Marsa ',
   startTime:"8:55 pm",
   endTime:' Ending at: 11:45 am, ',
   price:550,
   ac:'False',
   offday:['wednessday','saturday'],
   startDestination:' Starting from: Shylet, ',
   endDestination:' Destination: Dhaka, '
},
{
   operator:'Operator: Soudia, ',
   startTime:"1:00 pm",
   endTime:' Ending at: 5:50 am, ',
   price:450,
   ac:'True',
   offday:['monday','thursday'],
   startDestination:' Starting from: Rangpur, ',
   endDestination:' Destination: Shylet, '
},
{
   operator:'Operator: Soudia, ',
   startTime:"6:40 am",
   endTime:' Ending at: 12:10 pm, ',
   price:800,
   ac:'False',
   offday:['wednesday','saturday'],
   startDestination:' Starting from: Dinazpur, ',
   endDestination:' Destination: Chittagong, '
}
];
    function upping(){
      const price=(a,b)=>a.price-b.price;
      const result1= (myArray.sort(price));

      buildTable(result1)
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

    function downing(){
      const pric=(a,b)=>b.price-a.price;
      const result2= (myArray.sort(pric));

      buildTable(result2)
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

    function uing(){
      const result3=myArray.sort(function(a,b){
         return Date.parse('1970/01/01 ' + a.startTime.slice(0, -2) + ' ' + a.startTime.slice(-2)) - Date.parse('1970/01/01 ' + b.startTime.slice(0, -2) + ' ' + b.startTime.slice(-2))
      });
      buildTable(result3)
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

    function doing(){
      const result4=myArray.sort(function(a,b){
         return Date.parse('1970/01/01 ' + b.startTime.slice(0, -2) + ' ' + b.startTime.slice(-2)) - Date.parse('1970/01/01 ' + a.startTime.slice(0, -2) + ' ' + a.startTime.slice(-2))
      });
      buildTable(result4)
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

    function uping(){
       const result5= myArray.sort((a,b)=>{
            a=a.operator.toLocaleLowerCase();
            b=b.operator.toLocaleLowerCase();
            if(a<b)
            {
               return -1;
            }
            if(a>b)
            {
               return 1;
            }
            return 0;
        });

      buildTable(result5)
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

    function dowing(){
      const result6=myArray.sort((a,b)=>{
         a=a.operator.toLocaleLowerCase();
         b=b.operator.toLocaleLowerCase();
         if(a>b)
         {
               return -1;
         }
         if(a<b)
         {
               return 1;
         }
         return 0;
      });

      buildTable(result6)
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

    let onlyac=1;
    let onlynonac=1;
    let onlyhainf=1;
    let onlyshamoly=1;
    let onlysoudia=1;
    let onlymarsa=1;

    let onlyac2=0;
    let onlynonac2=0;
    let onlyhainf2=0;
    let onlyshamoly2=0;
    let onlysoudia2=0;
    let onlymarsa2=0;  
    
    let mixhanif=0;
    let mixshamoly=0;
    let mixsoudia=0;
    let mixmarsa=0;


   function ac(){
      if(onlynonac2===1)
      {
         console.log("ac and non ac all are open")
         const acBus=(myArray.filter(acbus =>{
            return acbus.ac==='True';
         }));
         buildTable(acBus)
         function buildTable(data){
            var table = document.getElementById('myTable');
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
         onlyac=0;
         onlynonac2=0;
      }
      else if (onlyhainf===3&&onlyac===0)
      {
         console.log("only hainf buses are");
         const hanifBus=(myArray.filter(hanifbus =>{
            return hanifbus.operator==='Operator: Hanif, ';
         }));
         buildTable(hanifBus)
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
         onlyhainf=1;
      }
      else if (onlyshamoly===3&&onlyac===0)
      {
         console.log("only shamoly buses are");
         const shamolyBus=(myArray.filter(shamolybus =>{
            return shamolybus.operator==='Operator: Shamoly, ';
         }));
         buildTable(shamolyBus)
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
         onlyshamoly=1;
      }
      else if (onlysoudia===3&&onlyac===0)
      {
         console.log("only hainf buses are");
         const soudiaBus=(myArray.filter(soudiabus =>{
            return soudiabus.operator==='Operator: Soudia, ';
         }));
         buildTable(soudiaBus)
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
         onlysoudia=1;
      }
      else if(onlyac===1)
      {
         console.log("only ac are open");
         const acBus=(myArray.filter(acbus =>{
               return acbus.ac==='True';
            }));
         buildTable(acBus)
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
         onlyac=0;
         onlyac2=1;
      }
      else if(onlyac===0)
      {
         console.log("ac off all shows");
         buildTable(myArray)
         function buildTable(data){
            var table = document.getElementById('myTable');
            table.innerHTML="";
            for(var i=0;i<data.length;i++)
            {
               var row=`<tr>
               <td>${data[i].operator}</td>
               <td>${data[i].startTime}</td>
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
         onlyac=1;
         onlyac2=0;
      }
   }

   function nonac(){
      if(onlyac2===1)
      {
         console.log("non ac and ac all are open")
         const nonacBus=(myArray.filter(acbus =>{
            return acbus.ac==='False';
         }));
         buildTable(nonacBus)
         function buildTable(data){
            var table = document.getElementById('myTable');
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
         onlynonac=0;
         onlyac2=0;
      }
      else if (onlyhainf===3&&onlynonac===0)
      {
         console.log("only hainf buses are");
         const hanifBus=(myArray.filter(hanifbus =>{
            return hanifbus.operator==='Operator: Hanif, ';
         }));
         buildTable(hanifBus)
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
         onlyhainf=1;
      }
      else if (onlyshamoly===3&&onlynonac===0)
      {
         console.log("only shamoly buses are");
         const shamolyBus=(myArray.filter(shamolybus =>{
            return shamolybus.operator==='Operator: Shamoly, ';
         }));
         buildTable(shamolyBus)
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
         onlyshamoly=1;
      }
      else if (onlysoudia===3&&onlynonac===0)
      {
         console.log("only hainf buses are");
         const soudiaBus=(myArray.filter(soudiabus =>{
            return soudiabus.operator==='Operator: Soudia, ';
         }));
         buildTable(soudiaBus)
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
         onlysoudia=1;
      }
      else if(onlynonac===1)
      {
         console.log("only non ac are open");
         const nonAcBus=(myArray.filter(price =>{
               return price.ac==='False';
            }));
         buildTable(nonAcBus)
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
         onlynonac=0;
         onlynonac2=1;
      }
      else if(onlynonac===0)
      {
         console.log("nonac off all shows");
         buildTable(myArray)
         function buildTable(data){
            var table = document.getElementById('myTable');
            table.innerHTML="";
            for(var i=0;i<data.length;i++)
            {
               var row=`<tr>
               <td>${data[i].operator}</td>
               <td>${data[i].startTime}</td>
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
         onlynonac=1;
         onlynonac2=0;
      }
   }

   function hanif(){
      if(((onlyshamoly2===1||onlysoudia2===1)&&(onlyhainf===2))||(onlyshamoly2===1 && onlysoudia2===1)&&(onlyhainf===2))
      {
         console.log("hanif off shamoly and soudia are open");
         const shamolyBus=(myArray.filter(shamolybus =>{
            return shamolybus.operator==='Operator: Shamoly, ';
         }));
         buildTable(shamolyBus)
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
         const soudiaBus=(myArray.filter(soudiabus =>{
            return soudiabus.operator==='Operator: Soudia, ';
         }));
         buildTable2(soudiaBus)
         function buildTable2(data){
            var table = document.getElementById('myTable');
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
         onlyhainf=1;
      }
      else if((onlyshamoly2===1||onlysoudia2===1)||(onlyshamoly2===1 && onlysoudia2===1))
      {
         console.log("shamoly or soudia or both open hanif add");
         const hanifBus=(myArray.filter(hanifbus =>{
            return hanifbus.operator==='Operator: Hanif, ';
         }));
         buildTable(hanifBus)
         function buildTable(data){
            var table = document.getElementById('myTable');
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
         onlyhainf=2;
      }
      if((mixshamoly===1&&mixsoudia===1)||(mixshamoly===1||mixsoudia===1))
      {
         console.log("hainf buses are");
         const hanifBus=(myArray.filter(hanifbus =>{
            return hanifbus.operator==='Operator: Hanif, ';
         }));
         buildTable(hanifBus)
         function buildTable(data){
            var table = document.getElementById('myTable');
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
      else if(onlyhainf===1)
      {
         console.log("only hainf buses are");
         const hanifBus=(myArray.filter(hanifbus =>{
            return hanifbus.operator==='Operator: Hanif, ';
         }));
         buildTable(hanifBus)
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
         // onlyhainf=0;
         // onlyhainf2=1;
         mixhanif=1;
      }
      else if(onlyhainf===1&&onlyac===0)
      {
         console.log("only hainf ac bus are");
         const hanifBus=(myArray.filter(hanifbus =>{
            return hanifbus.operator==='Operator: Hanif, ';
         }));
         const acHanif=(hanifBus.filter(achanif=>{
            return achanif.ac==="True";
         }))
         buildTable(acHanif)
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
         onlyac=0;
         onlyhainf=3;
      }
      else if(onlyhainf===1&&onlynonac===0)
      {
         console.log("only non ac bus are");
         const acBus=(myArray.filter(acbus =>{
            return acbus.ac==='False';
         }));
         buildTable(acBus)
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
      else if (onlyhainf===3&&onlyac===0)
      {
         console.log("only ac are open");
         const acBus=(myArray.filter(acbus =>{
               return acbus.ac==='True';
            }));
         buildTable(acBus)
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
         onlyac=1;
      }
      else if (onlyhainf===3&&onlynonac===0)
      {
         console.log("only ac are open");
         const acBus=(myArray.filter(acbus =>{
               return acbus.ac==='False';
            }));
         buildTable(acBus)
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
         onlyac=1;
      }
      else if(onlyhainf===1&&onlynonac===0)
      {
         console.log("only hainf non ac bus are");
         const hanifBus=(myArray.filter(hanifbus =>{
            return hanifbus.operator==='Operator: Hanif, ';
         }));
         const acHanif=(hanifBus.filter(achanif=>{
            return achanif.ac==="False";
         }))
         buildTable(acHanif)
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
         onlynonac=1;
         onlyhainf=3;
      }
      else if(onlyhainf===1&&onlyac===1)
      {
         console.log("only ac bus are");
         const acBus=(myArray.filter(acbus =>{
            return acbus.ac==='True';
         }));
         buildTable(acBus)
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
      else if(onlyhainf===0)
      {
         console.log("hanif off all show");
         buildTable(myArray)
         function buildTable(data){
            var table = document.getElementById('myTable');
            for(var i=0;i<data.length;i++)
            {
               var row=`<tr>
               <td>${data[i].operator}</td>
               <td>${data[i].startTime}</td>
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
         onlyhainf=1;
         onlyhainf2=0;
      }
   }

   function shamoly(){
      if(((onlyhainf2===1||onlysoudia2===1)&&(onlyshamoly===2))||(onlyhainf2===1 && onlysoudia2===1)&&(onlyshamoly===2))
      {
         console.log("shamoly off hanif and soudia are open");
         const hanifBus=(myArray.filter(hanifbus =>{
            return hanifbus.operator==='Operator: Hanif, ';
         }));
         buildTable(hanifBus)
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
         const soudiaBus=(myArray.filter(soudiabus =>{
            return soudiabus.operator==='Operator: Soudia, ';
         }));
         buildTable2(soudiaBus)
         function buildTable2(data){
            var table = document.getElementById('myTable');
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
         onlyshamoly=1;
      }
      else if(onlyhainf2===1 || onlysoudia2===1 || (onlyhainf2===1 && onlysoudia2===1))
      {
         console.log("hanif or soudia or both open shamoly add");
         const shamolyBus=(myArray.filter(shamolybus =>{
            return shamolybus.operator==='Operator: Shamoly, ';
         }));
         buildTable(shamolyBus)
         function buildTable(data){
            var table = document.getElementById('myTable');
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
         onlyshamoly=2;
      }
      if((mixhanif===1&&mixsoudia===1)||(mixhanif===1||mixsoudia===1))
      {
         console.log("shamoly buses are");
         const shamolyBus=(myArray.filter(shamolybus =>{
            return shamolybus.operator==='Operator: Shamoly, ';
         }));
         buildTable(shamolyBus)
         function buildTable(data){
            var table = document.getElementById('myTable');
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
      if(onlyshamoly===1)
      {
         console.log("only shamoly buses are open");
         const shamolyBus=(myArray.filter(shamolybus =>{
            return shamolybus.operator==='Operator: Shamoly, ';
         }));
         buildTable(shamolyBus)
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
         mixshamoly=1;
         // onlyshamoly=0;
         // onlyshamoly2=1;
      }
      else if(onlyshamoly===1&&onlyac===0)
      {
         console.log("only shamoly ac bus are");
         const shamolyBus=(myArray.filter(shamolybus =>{
            return shamolybus.operator==='Operator: Shamoly, ';
         }));
         const acshamoly=(shamolyBus.filter(acshamoly=>{
            return acshamoly.ac==="True";
         }))
         buildTable(acshamoly)
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
         onlyac=0;
         onlyshamoly=3;
      }
      else if (onlyshamoly===3&&onlyac===0)
      {
         console.log("only ac are open");
         const acBus=(myArray.filter(acbus =>{
               return acbus.ac==='True';
            }));
         buildTable(acBus)
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
         onlyac=1;
      }
      else if (onlyhainf===3&&onlynonac===0)
      {
         console.log("only ac are open");
         const acBus=(myArray.filter(acbus =>{
               return acbus.ac==='False';
            }));
         buildTable(acBus)
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
         onlyac=1;
      }
      else if(onlyshamoly===1&&onlynonac===0)
      {
         console.log("only shamoly non ac bus are");
         const shamolyBus=(myArray.filter(shamolybus =>{
            return shamolybus.operator==='Operator: Shamoly, ';
         }));
         const acshamoly=(shamolyBus.filter(acshamoly=>{
            return acshamoly.ac==="False";
         }))
         buildTable(acshamoly)
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
         onlynonac=1;
      }
      else if(onlyshamoly===1&&onlyac===1)
      {
         console.log("only ac bus are");
         const acBus=(myArray.filter(acbus =>{
            return acbus.ac==='True';
         }));
         buildTable(acBus)
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
      else if(onlyshamoly===1&&onlynonac===1)
      {
         console.log("only non ac bus are");
         const acBus=(myArray.filter(acbus =>{
            return acbus.ac==='False';
         }));
         buildTable(acBus)
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
      else if(onlyshamoly===0)
      {
         console.log("shamoly off all show");
         buildTable(myArray)
         function buildTable(data){
            var table = document.getElementById('myTable');
            for(var i=0;i<data.length;i++)
            {
               var row=`<tr>
               <td>${data[i].operator}</td>
               <td>${data[i].startTime}</td>
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
         onlyshamoly=1;
         onlyshamoly2=0;
      }
   }

   function soudia(){
      // if(((onlyhainf2===1||onlyshamoly2===1)&&(onlysoudia===2))||(onlyhainf2===1 && onlyshamoly2===1)&&(onlysoudia===2))
      // {
      //    console.log("soudia off shamoly and hanif are open");
      //    const hanifBus=(myArray.filter(hanifbus =>{
      //       return hanifbus.operator==='Operator: Hanif, ';
      //    }));
      //    buildTable(hanifBus)
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
      //          <td>${data[i].offday}</td>
      //          <td>${data[i].startDestination}</td>
      //          <td>${data[i].endDestination}</td>
      //          </tr>`
      //          table.innerHTML+=row;
      //       }
      //    }
      //    const shamolyBus=(myArray.filter(shamolybus =>{
      //       return shamolybus.operator==='Operator: Shamoly, ';
      //    }));
      //    buildTable2(shamolyBus)
      //    function buildTable2(data){
      //       var table = document.getElementById('myTable');
      //       for(var i=0;i<data.length;i++)
      //       {
      //          var row=`<tr>
      //          <td>${data[i].operator}</td>
      //          <td>Starting at: ${data[i].startTime}</td>
      //          <td>${data[i].endTime}</td>
      //          <td>${data[i].price}</td>
      //          <td>${data[i].offday}</td>
      //          <td>${data[i].startDestination}</td>
      //          <td>${data[i].endDestination}</td>
      //          </tr>`
      //          table.innerHTML+=row;
      //       }
      //    }
      //    onlysoudia=1;
      // }
      // else if(onlyhainf2===1 || onlyshamoly2===1 || (onlyhainf2===1 && onlyshamoly2===1))
      // {
      //    console.log("hanif or shamoly or both open soudia add");
      //    const soudiaBus=(myArray.filter(soudiabus =>{
      //       return soudiabus.operator==='Operator: Soudia, ';
      //    }));
      //    buildTable(soudiaBus)
      //    function buildTable(data){
      //       var table = document.getElementById('myTable');
      //       for(var i=0;i<data.length;i++)
      //       {
      //          var row=`<tr>
      //          <td>${data[i].operator}</td>
      //          <td>Starting at: ${data[i].startTime}</td>
      //          <td>${data[i].endTime}</td>
      //          <td>${data[i].price}</td>
      //          <td>${data[i].offday}</td>
      //          <td>${data[i].startDestination}</td>
      //          <td>${data[i].endDestination}</td>
      //          </tr>`
      //          table.innerHTML+=row;
      //       }
      //    }
      //    onlysoudia=2;
      // }
      if(onlysoudia===1)
      {
         console.log("only soudia buses are");
         const soudiaBus=(myArray.filter(soudiabus =>{
            return soudiabus.operator==='Operator: Soudia, ';
         }));
         buildTable(soudiaBus)
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
         mixsoudia=1;
         // onlysoudia=0;
         // onlysoudia2=1;
      }
      else if(onlyshamoly===1&&onlyac===0)
      {
         console.log("only soudia ac bus are");
         const soudiaBus=(myArray.filter(soudiabus =>{
            return soudiabus.operator==='Operator: Soudia, ';
         }));
         const acsoudia=(soudiaBus.filter(acsoudia=>{
            return acsoudia.ac==="True";
         }))
         buildTable(acsoudia)
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
         onlyac=0;
         onlyshamoly=3;
      }
      else if (onlysoudia===3&&onlyac===0)
      {
         console.log("only ac are open");
         const acBus=(myArray.filter(acbus =>{
               return acbus.ac==='True';
            }));
         buildTable(acBus)
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
         onlyac=1;
      }
      else if (onlyhainf===3&&onlynonac===0)
      {
         console.log("only ac are open");
         const acBus=(myArray.filter(acbus =>{
               return acbus.ac==='False';
            }));
         buildTable(acBus)
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
         onlyac=1;
      }
      else if(onlysoudia===1&&onlynonac===0)
      {
         console.log("only soudia non ac bus are");
         const soudiaBus=(myArray.filter(soudiabus =>{
            return soudiabus.operator==='Operator: Soudia, ';
         }));
         const acsoudia=(soudiaBus.filter(acsoudia=>{
            return acsoudia.ac==="False";
         }))
         buildTable(acsoudia)
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
         onlynonac=1;
      }
      else if(onlysoudia===1&&onlyac===1)
      {
         console.log("only ac bus are");
         const acBus=(myArray.filter(acbus =>{
            return acbus.ac==='True';
         }));
         buildTable(acBus)
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
      else if(onlysoudia===1&&onlynonac===1)
      {
         console.log("only non ac bus are");
         const acBus=(myArray.filter(acbus =>{
            return acbus.ac==='False';
         }));
         buildTable(acBus)
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
      else if(onlysoudia===0)
      {
         console.log("nonac off all show");
         buildTable(myArray)
         function buildTable(data){
            var table = document.getElementById('myTable');
            for(var i=0;i<data.length;i++)
            {
               var row=`<tr>
               <td>${data[i].operator}</td>
               <td>${data[i].startTime}</td>
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
         onlysoudia=1;
         onlysoudia2=0;
      }
   }

   function marsa(){
      if(onlymarsa===1)
      {
         console.log("only marsa buses are");
         const marsaBus=(myArray.filter(marsabus =>{
            return marsabus.operator==='Operator: Marsa ';
         }));
         buildTable(marsaBus)
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
         mixmarsa=1;
         // onlymarsa=0;
         // onlymarsa2=1;
      }
      else if(onlyshamoly===1&&onlyac===0)
      {
         console.log("only marsa ac bus are");
         const marsaBus=(myArray.filter(marsabus =>{
            return marsabus.operator==='Operator: Marsa ';
         }));
         const acmarsa=(marsaBus.filter(acmarsa=>{
            return acmarsa.ac==="True";
         }))
         buildTable(acmarsa)
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
         onlyac=0;
         onlyshamoly=3;
      }
      else if (onlymarsa===3&&onlyac===0)
      {
         console.log("only ac are open");
         const acBus=(myArray.filter(acbus =>{
               return acbus.ac==='True';
            }));
         buildTable(acBus)
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
         onlyac=1;
      }
      else if (onlyhainf===3&&onlynonac===0)
      {
         console.log("only ac are open");
         const acBus=(myArray.filter(acbus =>{
               return acbus.ac==='False';
            }));
         buildTable(acBus)
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
         onlyac=1;
      }
      else if(onlymarsa===1&&onlynonac===0)
      {
         console.log("only marsa non ac bus are");
         const marsaBus=(myArray.filter(marsabus =>{
            return marsabus.operator==='Operator: Marsa ';
         }));
         const acmarsa=(marsaBus.filter(acmarsa=>{
            return acmarsa.ac==="False";
         }))
         buildTable(acmarsa)
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
         onlynonac=1;
      }
      else if(onlymarsa===1&&onlyac===1)
      {
         console.log("only ac bus are");
         const acBus=(myArray.filter(acbus =>{
            return acbus.ac==='True';
         }));
         buildTable(acBus)
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
      else if(onlymarsa===1&&onlynonac===1)
      {
         console.log("only non ac bus are");
         const acBus=(myArray.filter(acbus =>{
            return acbus.ac==='False';
         }));
         buildTable(acBus)
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
      else if(onlymarsa===0)
      {
         console.log("nonac off all show");
         buildTable(myArray)
         function buildTable(data){
            var table = document.getElementById('myTable');
            for(var i=0;i<data.length;i++)
            {
               var row=`<tr>
               <td>${data[i].operator}</td>
               <td>${data[i].startTime}</td>
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
         onlymarsa=1;
         onlymarsa2=0;
      }
   }