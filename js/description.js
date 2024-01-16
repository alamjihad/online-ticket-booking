(function() {
    exerciseList = document.querySelector(".exercise-list");

    let myArray = [
      {
         operator:"Operator: Hanif, ",
         startTime:7,
         endTime:' Ending at: 10pm, ',
         price:800,
         ac:'false',
         offday:['wednesday'],
         startDestination:' Starting from: Dhaka, ',
         endDestination:' Destination: Rangpur '
      },  
      {
         operator:'Operator: Marsa, ',
         startTime:7,
         endTime:' Ending at: 9:30am, ',
         price:1000,
         ac:'true',
         offday:[''],
         startDestination:' Starting from: Shylet, ',
         endDestination:' Destination: Chittagong '
      },
      {
         operator:'Operator: Hanif, ', 
         startTime:8,
         endTime:' Ending at: 12pm,',
         price:750,
         ac:'true',
         offday:['sunday','monday'],
         startDestination:' Starting from: Khulna, ',
         endDestination:' Destination: Rajshahi '
      },
      {
         operator:'Operator: Shamoly, ',
         startTime:6,
         endTime:' Ending at: 12 pm, ',
         price:1200,
         ac:'true',
         offday:['saturday','tuesday'],
         startDestination:' Starting from: Chittagong',
         endDestination:' Destination: Rajshahi'
      },
      {
         operator:"Operator: Soudia ,",
         startTime:12,
         endTime:' Ending at: 8 pm, ',
         price:500,
         ac:'true',
         offday:['friday'],
         startDestination:' Starting from: Dhaka',
         endDestination:' Destination: Rangpur'
      },
      {
         operator:'Operator: Shamoly, ',
         startTime:11,
         endTime:' Ending at: 6:15 pm, ',
         price:650,
         ac:'false',
         offday:['wednesday','friday','monday'],
         startDestination:' Starting from: Barishal, ',
         endDestination:' Destination: Dinazpur, '
      },
      {
         operator:'Operator: S.Alam, ',
         startTime:4,
         endTime:' Ending at: 12 pm, ',
         price:900,
         ac:'false',
         offday:['thursday'],
         startDestination:' Starting from: Dinazpur, ',
         endDestination:' Destination: Barishal, '
      },
      {
         operator:'Operator: Econo, ',
         startTime:11,
         endTime:' Ending at: 8:45 am, ',
         price:5500,
         ac:'false',
         offday:[''],
         startDestination:' Starting from: Rajshahi, ',
         endDestination:' Destination: Khulna, '
      },
      {
         operator:"Operator: Sakura, ",
         startTime:7,
         endTime:' Ending at: 3 am, ',
         price:1000,
         ac:'true',
         offday:['sunday','monday','thursday'],
         startDestination:' Starting from: Khulna, ',
         endDestination:' Destination: Rajshahi, '
      },
      {
         operator:'Operator: Soudia, ',
         startTime:3,
         endTime:' Ending at: 10 pm, ',
         price:1000,
         ac:'true',
         offday:['wednesday'],
         startDestination:' Starting from: Rangpur, ',
         endDestination:' Destination: Rajshahi, '
      },
      {
         operator:'Operator: Ekushey, ',
         startTime:5,
         endTime:' Ending at: 11:50 pm, ',
         price:650,
         ac:'true',
         offday:['tuesday'],
         startDestination:' Starting from: Rangpur, ',
         endDestination:' Destination: Rajshahi, '
      },
      {
         operator:'Operator: Soudia, ',
         startTime:9,
         endTime:' Ending at: 12 pm, ',
         price:350,
         ac:'false',
         offday:['monday'],
         startDestination:' Starting from: Rangpur, ',
         endDestination:' Destination: Rajshahi, '
      },
      {
         operator:'Operator: Unique, ',
         startTime:7,
         endTime:' Ending at: 11:55 pm, ',
         price:500,
         ac:'false',
         offday:['thursday','tuesday'],
         startDestination:' Starting from: Barishal, ',
         endDestination:' Destination: Shylet, '
      },
      {
         operator:"Operator: Soudia, ",
         startTime:11,
         endTime:' Ending at: 3 pm, ',
         price:700,
         ac:'false',
         offday:['wednessday','saturday'],
         startDestination:' Starting from: Dinazpur, ',
         endDestination:' Destination: Chittagong, '
      },
      {
         operator:'Operator: Lal Sabuj, ',
         startTime:11,
         endTime:' Ending at: 7 pm, ',
         price:850,
         ac:'false',
         offday:['friday','saturday'],
         startDestination:' Starting from: Dinazpur, ',
         endDestination:' Destination: Chittagong, '
      },
      {
         operator:'Operator: Hanif, ',
         startTime:2,
         endTime:' Ending at: 10 pm, ',
         price:1050,
         ac:'false',
         offday:['wednesday','saturday'],
         startDestination:' Starting from: Dinazpur, ',
         endDestination:' Destination: Chittagong, '
      },
      {
         operator:'Operator: Dhaka Express, ',
         startTime:11,
         endTime:' Ending at: 4:55 am, ',
         price:750,
         ac:'true',
         offday:[''],
         startDestination:' Starting from: Dhaka, ',
         endDestination:' Destination: Barishal, '
      },
      {
         operator:'Operator: Jonaki, ',
         startTime:8,
         endTime:' Ending at: 11:45 am, ',
         price:550,
         ac:'false',
         offday:['wednessday','saturday'],
         startDestination:' Starting from: Shylet, ',
         endDestination:' Destination: Dhaka, '
      },
      {
         operator:'Operator: Soudia, ',
         startTime:10,
         endTime:' Ending at: 5 am, ',
         price:450,
         ac:'true',
         offday:['monday','thursday'],
         startDestination:' Starting from: Rangpur, ',
         endDestination:' Destination: Shylet, '
      },
      {
         operator:'Operator: Soudia, ',
         startTime:5,
         endTime:' Ending at: 12 pm, ',
         price:800,
         ac:'false',
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
   endTime:' Ending at: 10pm, ',
   price:800,
   ac:'false',
   offday:['wednesday'],
   startDestination:' Starting from: Dhaka, ',
   endDestination:' Destination: Rangpur '
},  
{
   operator:'Operator: Marsa, ',
   startTime:"7:20 pm",
   endTime:' Ending at: 9:30am, ',
   price:1000,
   ac:'true',
   offday:[''],
   startDestination:' Starting from: Shylet, ',
   endDestination:' Destination: Chittagong '
},
{
   operator:'Operator: Hanif, ', 
   startTime:"8:15 am",
   endTime:' Ending at: 12pm,',
   price:750,
   ac:'true',
   offday:['sunday','monday'],
   startDestination:' Starting from: Khulna, ',
   endDestination:' Destination: Rajshahi '
},
{
   operator:'Operator: Shamoly, ',
   startTime:"6:00 pm",
   endTime:' Ending at: 12 pm, ',
   price:1200,
   ac:'true',
   offday:['saturday','tuesday'],
   startDestination:' Starting from: Chittagong',
   endDestination:' Destination: Rajshahi'
},
{
   operator:"Operator: Soudia ,",
   startTime:"12:30 pm",
   endTime:' Ending at: 8 pm, ',
   price:500,
   ac:'true',
   offday:['friday'],
   startDestination:' Starting from: Dhaka',
   endDestination:' Destination: Rangpur'
},
{
   operator:'Operator: Shamoly, ',
   startTime:"11:45 am",
   endTime:' Ending at: 6:15 pm, ',
   price:650,
   ac:'false',
   offday:['wednesday','friday','monday'],
   startDestination:' Starting from: Barishal, ',
   endDestination:' Destination: Dinazpur, '
},
{
   operator:'Operator: S.Alam, ',
   startTime:"4:15 pm",
   endTime:' Ending at: 12 pm, ',
   price:900,
   ac:'false',
   offday:['thursday'],
   startDestination:' Starting from: Dinazpur, ',
   endDestination:' Destination: Barishal, '
},
{
   operator:'Operator: Econo, ',
   startTime:"11:10 am",
   endTime:' Ending at: 8:45 am, ',
   price:5500,
   ac:'false',
   offday:[''],
   startDestination:' Starting from: Rajshahi, ',
   endDestination:' Destination: Khulna, '
},
{
   operator:"Operator: Sakura, ",
   startTime:"7:45 pm",
   endTime:' Ending at: 3 am, ',
   price:1000,
   ac:'true',
   offday:['sunday','monday','thursday'],
   startDestination:' Starting from: Khulna, ',
   endDestination:' Destination: Rajshahi, '
},
{
   operator:'Operator: Soudia, ',
   startTime:"3:50 am",
   endTime:' Ending at: 10 pm, ',
   price:1000,
   ac:'true',
   offday:['wednesday'],
   startDestination:' Starting from: Rangpur, ',
   endDestination:' Destination: Rajshahi, '
},
{
   operator:'Operator: Ekushey, ',
   startTime:"5:10 pm",
   endTime:' Ending at: 11:50 pm, ',
   price:650,
   ac:'true',
   offday:['tuesday'],
   startDestination:' Starting from: Rangpur, ',
   endDestination:' Destination: Rajshahi, '
},
{
   operator:'Operator: Soudia, ',
   startTime:"9:10 pm",
   endTime:' Ending at: 12 pm, ',
   price:350,
   ac:'false',
   offday:['monday'],
   startDestination:' Starting from: Rangpur, ',
   endDestination:' Destination: Rajshahi, '
},
{
   operator:'Operator: Unique, ',
   startTime:"7:35 am",
   endTime:' Ending at: 11:55 pm, ',
   price:500,
   ac:'false',
   offday:['thursday','tuesday'],
   startDestination:' Starting from: Barishal, ',
   endDestination:' Destination: Shylet, '
},
{
   operator:"Operator: Soudia, ",
   startTime:"10:25 am",
   endTime:' Ending at: 3 pm, ',
   price:700,
   ac:'false',
   offday:['wednessday','saturday'],
   startDestination:' Starting from: Dinazpur, ',
   endDestination:' Destination: Chittagong, '
},
{
   operator:'Operator: Lal Sabuj, ',
   startTime:"9:05 pm",
   endTime:' Ending at: 7 pm, ',
   price:850,
   ac:'false',
   offday:['friday','saturday'],
   startDestination:' Starting from: Dinazpur, ',
   endDestination:' Destination: Chittagong, '
},
{
   operator:'Operator: Hanif, ',
   startTime:"2:50 pm",
   endTime:' Ending at: 10 pm, ',
   price:1050,
   ac:'false',
   offday:['wednesday','saturday'],
   startDestination:' Starting from: Dinazpur, ',
   endDestination:' Destination: Chittagong, '
},
{
   operator:'Operator: Dhaka Express, ',
   startTime:"5:30 am",
   endTime:' Ending at: 4:55 am, ',
   price:750,
   ac:'true',
   offday:[''],
   startDestination:' Starting from: Dhaka, ',
   endDestination:' Destination: Barishal, '
},
{
   operator:'Operator: Jonaki, ',
   startTime:"8:55 pm",
   endTime:' Ending at: 11:45 am, ',
   price:550,
   ac:'false',
   offday:['wednessday','saturday'],
   startDestination:' Starting from: Shylet, ',
   endDestination:' Destination: Dhaka, '
},
{
   operator:'Operator: Soudia, ',
   startTime:"1:00 pm",
   endTime:' Ending at: 5 am, ',
   price:450,
   ac:'true',
   offday:['monday','thursday'],
   startDestination:' Starting from: Rangpur, ',
   endDestination:' Destination: Shylet, '
},
{
   operator:'Operator: Soudia, ',
   startTime:"6:40 am",
   endTime:' Ending at: 12 pm, ',
   price:800,
   ac:'false',
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

    let onlyac2=0;
    let onlynonac2=0;
    let onlyhainf2=0;
    let onlyshamoly2=0;
    let onlysoudia2=0;  
    
    let mixhanif=0;
    let mixshamoly=0;
    let mixsoudia=0;


   function ac(){
      if(onlynonac2===1)
      {
         console.log("ac and non ac all are open")
         const acBus=(myArray.filter(acbus =>{
            return acbus.ac==='true';
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
               return acbus.ac==='true';
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
            return acbus.ac==='false';
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
               return price.ac==='false';
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
            return achanif.ac==="true";
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
            return acbus.ac==='false';
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
               return acbus.ac==='true';
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
               return acbus.ac==='false';
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
            return achanif.ac==="false";
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
            return acbus.ac==='true';
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
            return acshamoly.ac==="true";
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
               return acbus.ac==='true';
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
               return acbus.ac==='false';
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
            return acshamoly.ac==="false";
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
            return acbus.ac==='true';
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
            return acbus.ac==='false';
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
            return acsoudia.ac==="true";
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
               return acbus.ac==='true';
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
               return acbus.ac==='false';
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
            return acsoudia.ac==="false";
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
            return acbus.ac==='true';
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
            return acbus.ac==='false';
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