(function() {
    exerciseList = document.querySelector(".exercise-list");

   let myArray = [
{
   operator:'Operator: Hanif, ',
   startTime: 'Starting at: 7pm,',
   endTime:' Ending at: 10pm, ',
   price:800,
   ac:'false',
   offday:['wednesday'],
   startDestination:' Starting from: Dhaka, ',
   endDestination:' Destination: Rangpur '
},  
{
   operator:'Operator: Marsa, ',
   startTime:' Starting at: 7am, ',
   endTime:' Ending at: 9:30am, ',
   price:1000,
   ac:'true',
   offday:[''],
   startDestination:' Starting from: Shylet, ',
   endDestination:' Destination: Chittagong '
},
{
   operator:'Operator: Hanif, ', 
   startTime:' Starting at: 8pm, ',
   endTime:' Ending at: 12pm,',
   price:750,
   ac:'true',
   offday:['sunday','monday'],
   startDestination:' Starting from: Khulna, ',
   endDestination:' Destination: Rajshahi '
},
{
   operator:'Operator: Shamoly ,',
   startTime:' Starting at: 6 am, ',
   endTime:' Ending at: 12 pm, ',
   price:1200,
   ac:'false',
   offday:['saturday','tuesday'],
   startDestination:' Starting from: Chittagong',
   endDestination:' Destination: Rajshahi'
},
{
   operator:"Operator: Soudia ,",
   startTime:' Starting at: 12:30 pm, ',
   endTime:' Ending at: 8 pm, ',
   price:500,
   ac:'true',
   offday:['friday'],
   startDestination:' Starting from: Dhaka',
   endDestination:' Destination: Rangpur'
},
{
   operator:'Operator: S.NR Travels, ',
   startTime:' Starting at: 11:45 am, ',
   endTime:' Ending at: 6:15 pm, ',
   price:650,
   ac:'false',
   offday:['wednesday','friday','monday'],
   startDestination:' Starting from: Barishal, ',
   endDestination:' Destination: Dinazpur, '
},
{
   operator:'Operator: S.Alam, ',
   startTime:' Starting at: 4 am, ',
   endTime:' Ending at: 12 pm, ',
   price:900,
   ac:'false',
   offday:['thursday'],
   startDestination:' Starting from: Dinazpur, ',
   endDestination:' Destination: Barishal, '
},
{
   operator:'Operator: Econo, ',
   startTime:' Starting at: 11:10 pm, ',
   endTime:' Ending at: 8:45 am, ',
   price:5500,
   ac:'false',
   offday:[''],
   startDestination:' Starting from: Rajshahi, ',
   endDestination:' Destination: Khulna, '
},
{
   operator:"Operator: Sakura, ",
   startTime:' Starting at: 7 pm, ',
   endTime:' Ending at: 3 am, ',
   price:1000,
   ac:'true',
   offday:['sunday','monday','thursday'],
   startDestination:' Starting from: Khulna, ',
   endDestination:' Destination: Rajshahi, '
},
{
   operator:'Operator: Desh travels, ',
   startTime:' Starting at: 3 pm, ',
   endTime:' Ending at: 10 pm, ',
   price:1000,
   ac:'true',
   offday:['wednesday'],
   startDestination:' Starting from: Rangpur, ',
   endDestination:' Destination: Rajshahi, '
},
{
   operator:'Operator: Ekushey, ',
   startTime:' Starting at: 5 pm, ',
   endTime:' Ending at: 11:50 pm, ',
   price:650,
   ac:'true',
   offday:['tuesday'],
   startDestination:' Starting from: Rangpur, ',
   endDestination:' Destination: Rajshahi, '
},
{
   operator:'Operator: Padma Exclusive, ',
   startTime:' Starting at: 9:35 am, ',
   endTime:' Ending at: 12 pm, ',
   price:350,
   ac:'false',
   offday:['monday'],
   startDestination:' Starting from: Rangpur, ',
   endDestination:' Destination: Rajshahi, '
},
{
   operator:'Operator: Unique, ',
   startTime:' Starting at: 7 am, ',
   endTime:' Ending at: 11:55 pm, ',
   price:500,
   ac:'false',
   offday:['thursday','tuesday'],
   startDestination:' Starting from: Barishal, ',
   endDestination:' Destination: Shylet, '
},
{
   operator:"Operator: Eagle, ",
   startTime:' Starting at: 11:35 pm, ',
   endTime:' Ending at: 3 pm, ',
   price:700,
   ac:'false',
   offday:['wednessday','saturday'],
   startDestination:' Starting from: Dinazpur, ',
   endDestination:' Destination: Chittagong, '
},
{
   operator:'Operator: Lal Sabuj, ',
   startTime:' Starting at: 11 am, ',
   endTime:' Ending at: 7 pm, ',
   price:850,
   ac:'false',
   offday:['friday','saturday'],
   startDestination:' Starting from: Dinazpur, ',
   endDestination:' Destination: Chittagong, '
},
{
   operator:'Operator: Asia, ',
   startTime:' Starting at: 2 pm, ',
   endTime:' Ending at: 10 pm, ',
   price:1050,
   ac:'false',
   offday:['wednesday','saturday'],
   startDestination:' Starting from: Dinazpur, ',
   endDestination:' Destination: Chittagong, '
},
{
   operator:'Operator: Dhaka Express, ',
   startTime:' Starting at: 11:40 pm, ',
   endTime:' Ending at: 4:55 am, ',
   price:750,
   ac:'true',
   offday:[''],
   startDestination:' Starting from: Dhaka, ',
   endDestination:' Destination: Barishal, '
},
{
   operator:'Operator: Jonaki, ',
   startTime:' Starting at: 8:35 am, ',
   endTime:' Ending at: 11:45 am, ',
   price:550,
   ac:'false',
   offday:['wednessday','saturday'],
   startDestination:' Starting from: Shylet, ',
   endDestination:' Destination: Dhaka, '
},
{
   operator:'Operator: Shahi, ',
   startTime:' Starting at: 10:25 pm, ',
   endTime:' Ending at: 5 am, ',
   price:450,
   ac:'true',
   offday:['monday','thursday'],
   startDestination:' Starting from: Rangpur, ',
   endDestination:' Destination: Shylet, '
},
{
   operator:'Operator: Grameen, ',
   startTime:' Starting at: 5:45 am, ',
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
   ac:'false',
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
var kha=1;
var khb=1;
var khc=1;
var khd=1;
var khe=1;
    function upping(){
      const price=(a,b)=>a.price-b.price;
      const result= (myArray.sort(price));

      buildTable(result)
      function buildTable(data){
         var table = document.getElementById('myTable');
         table.innerHTML="";
         for(var i=0;i<data.length;i++)
         {
            var row=`<tr>
            <td>${data[i].operator}</td>
            <td>Starting at: ${data[i].startTime} am</td>
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
      const result= (myArray.sort(pric));

      buildTable(result)
      function buildTable(data){
         var table = document.getElementById('myTable');
         table.innerHTML="";
         for(var i=0;i<data.length;i++)
         {
            var row=`<tr>
            <td>${data[i].operator}</td>
            <td>Starting at: ${data[i].startTime} am</td>
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
      const price=(a,b)=>a.startTime-b.startTime;
      const result= (myArray.sort(price));

      buildTable(result)
      function buildTable(data){
         var table = document.getElementById('myTable');
         table.innerHTML="";
         for(var i=0;i<data.length;i++)
         {
            var row=`<tr>
            <td>${data[i].operator}</td>
            <td>Starting at: ${data[i].startTime} am</td>
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
      const pric=(a,b)=>b.startTime-a.startTime;
      const result= (myArray.sort(pric));

      buildTable(result)
      function buildTable(data){
         var table = document.getElementById('myTable');
         table.innerHTML="";
         for(var i=0;i<data.length;i++)
         {
            var row=`<tr>
            <td>${data[i].operator}</td>
            <td>Starting at: ${data[i].startTime} am</td>
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
       const result= myArray.sort((a,b)=>{
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

      buildTable(result)
      function buildTable(data){
         var table = document.getElementById('myTable');
         table.innerHTML="";
         for(var i=0;i<data.length;i++)
         {
            var row=`<tr>
            <td>${data[i].operator}</td>
            <td>Starting at: ${data[i].startTime} am</td>
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
      const result=myArray.sort((a,b)=>{
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

      buildTable(result)
      function buildTable(data){
         var table = document.getElementById('myTable');
         table.innerHTML="";
         for(var i=0;i<data.length;i++)
         {
            var row=`<tr>
            <td>${data[i].operator}</td>
            <td>Starting at: ${data[i].startTime} am</td>
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

    function nonac(){
      if(kha===1)
      {
         console.log("kha = 1")
         const result=(myArray.filter(price =>{
            return price.ac==='false';
         }));
         buildTable(result)
         function buildTable(data){
            var table = document.getElementById('myTable');
            table.innerHTML="";
            for(var i=0;i<data.length;i++)
            {
               var row=`<tr>
               <td>${data[i].operator}</td>
               <td>Starting at: ${data[i].startTime} am</td>
               <td>${data[i].endTime}</td>
               <td>${data[i].price}</td>
               <td>${data[i].offday}</td>
               <td>${data[i].startDestination}</td>
               <td>${data[i].endDestination}</td>
               </tr>`
               table.innerHTML+=row;
            }
         }
         kha=0
      }
      else
      {
         console.log("kha = 0");
         buildTable(myArray)
         function buildTable(data){
            var table = document.getElementById('myTable');
            table.innerHTML="";
            for(var i=0;i<data.length;i++)
            {
               var row=`<tr>
               <td>${data[i].operator}</td>
               <td>Starting at: ${data[i].startTime} am</td>
               <td>${data[i].endTime}</td>
               <td>${data[i].price}</td>
               <td>${data[i].offday}</td>
               <td>${data[i].startDestination}</td>
               <td>${data[i].endDestination}</td>
               </tr>`
               table.innerHTML+=row;
            }
         }
         kha=1;
      }
      }

      function ac(){
         if(khb===1)
         {
            console.log("khb = 1")
            const result=(myArray.filter(price =>{
               return price.ac==='true';
            }));
            buildTable(result)
            function buildTable(data){
               var table = document.getElementById('myTable');
               table.innerHTML="";
               for(var i=0;i<data.length;i++)
               {
                  var row=`<tr>
                  <td>${data[i].operator}</td>
                  <td>Starting at: ${data[i].startTime} am</td>
                  <td>${data[i].endTime}</td>
                  <td>${data[i].price}</td>
                  <td>${data[i].offday}</td>
                  <td>${data[i].startDestination}</td>
                  <td>${data[i].endDestination}</td>
                  </tr>`
                  table.innerHTML+=row;
               }
            }
            khb=0
         }
         else
         {
            console.log("khb = 0");
            buildTable(myArray)
            function buildTable(data){
               var table = document.getElementById('myTable');
               table.innerHTML="";
               for(var i=0;i<data.length;i++)
               {
                  var row=`<tr>
                  <td>${data[i].operator}</td>
                  <td>Starting at: ${data[i].startTime} am</td>
                  <td>${data[i].endTime}</td>
                  <td>${data[i].price}</td>
                  <td>${data[i].offday}</td>
                  <td>${data[i].startDestination}</td>
                  <td>${data[i].endDestination}</td>
                  </tr>`
                  table.innerHTML+=row;
               }
            }
            khb=1;
         }
         }

   function han(){
      if(khc===1)
      {
         console.log("khc =1");
         const result=(myArray.filter(price =>{
            return price.operator==='Operator: Hanif, ';
         }));
         buildTable(result)
         function buildTable(data){
            var table = document.getElementById('myTable');
            table.innerHTML="";
            for(var i=0;i<data.length;i++)
            {
               var row=`<tr>
               <td>${data[i].operator}</td>
               <td>Starting at: ${data[i].startTime} am</td>
               <td>${data[i].endTime}</td>
               <td>${data[i].price}</td>
               <td>${data[i].offday}</td>
               <td>${data[i].startDestination}</td>
               <td>${data[i].endDestination}</td>
               </tr>`
               table.innerHTML+=row;
            }
         }
         khc=0;
      }
      else
      {
         console.log("khc = 0");
         buildTable(myArray)
            function buildTable(data){
               var table = document.getElementById('myTable');
               table.innerHTML="";
               for(var i=0;i<data.length;i++)
               {
                  var row=`<tr>
                  <td>${data[i].operator}</td>
                  <td>Starting at: ${data[i].startTime} am</td>
                  <td>${data[i].endTime}</td>
                  <td>${data[i].price}</td>
                  <td>${data[i].offday}</td>
                  <td>${data[i].startDestination}</td>
                  <td>${data[i].endDestination}</td>
                  </tr>`
                  table.innerHTML+=row;
               }
            }
            khc=1;
      }
  }

  function sha(){
   if(khd===1)
   {
      console.log("khd =1");
      const result=(myArray.filter(price =>{
         return price.operator==='Operator: Shamoly, ';
      }));
      buildTable(result)
      function buildTable(data){
         var table = document.getElementById('myTable');
         table.innerHTML="";
         for(var i=0;i<data.length;i++)
         {
            var row=`<tr>
            <td>${data[i].operator}</td>
            <td>Starting at: ${data[i].startTime} am</td>
            <td>${data[i].endTime}</td>
            <td>${data[i].price}</td>
            <td>${data[i].offday}</td>
            <td>${data[i].startDestination}</td>
            <td>${data[i].endDestination}</td>
            </tr>`
            table.innerHTML+=row;
         }
      }
      khd=0;
   }
   else
   {
      console.log("khd = 0");
      buildTable(myArray)
         function buildTable(data){
            var table = document.getElementById('myTable');
            table.innerHTML="";
            for(var i=0;i<data.length;i++)
            {
               var row=`<tr>
               <td>${data[i].operator}</td>
               <td>Starting at: ${data[i].startTime} am</td>
               <td>${data[i].endTime}</td>
               <td>${data[i].price}</td>
               <td>${data[i].offday}</td>
               <td>${data[i].startDestination}</td>
               <td>${data[i].endDestination}</td>
               </tr>`
               table.innerHTML+=row;
            }
         }
         khd=1;
   }
}

function sou(){
   if(khe===1)
   {
      console.log("khe =1");
      const result=(myArray.filter(price =>{
         return price.operator==='Operator: Soudia, ';
      }));
      buildTable(result)
      function buildTable(data){
         var table = document.getElementById('myTable');
         table.innerHTML="";
         for(var i=0;i<data.length;i++)
         {
            var row=`<tr>
            <td>${data[i].operator}</td>
            <td>Starting at: ${data[i].startTime} am</td>
            <td>${data[i].endTime}</td>
            <td>${data[i].price}</td>
            <td>${data[i].offday}</td>
            <td>${data[i].startDestination}</td>
            <td>${data[i].endDestination}</td>
            </tr>`
            table.innerHTML+=row;
         }
      }
      khe=0;
   }
   else
   {
      console.log("khe = 0");
      buildTable(myArray)
         function buildTable(data){
            var table = document.getElementById('myTable');
            table.innerHTML="";
            for(var i=0;i<data.length;i++)
            {
               var row=`<tr>
               <td>${data[i].operator}</td>
               <td>Starting at: ${data[i].startTime} am</td>
               <td>${data[i].endTime}</td>
               <td>${data[i].price}</td>
               <td>${data[i].offday}</td>
               <td>${data[i].startDestination}</td>
               <td>${data[i].endDestination}</td>
               </tr>`
               table.innerHTML+=row;
            }
         }
         khe=1;
   }
}
