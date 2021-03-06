
function primeNos(newArr) {
  
  var prime = [];
 
  newArr.forEach((nos) => {
   
    if (nos == 2 || nos == 3) {
      prime.push(nos);
    } else if (nos > 3) {
      flag = true;
      for(let k = 2; k < nos; k++ ){
        if(nos%k == 0){
          flag = false;
          break;
        }else{
          flag = true;
        }
      }

      if(flag == true){
        prime.push(nos);
      }

    
    }


  });
  if(prime.length == 0){
      return `${prime}`
  }
else{
    
  return `(${prime})`;
}
}

function fibonacci(count) {
  var a = (b = 1);

  var arr = [1, 1];
  if(count>1){
    for (let i = 0; i < count - 1; i++) {
        let res = a + b;
        a = b;
        b = res;
        arr.push(res);
      }
     
  }
  

  
  return `(${arr})+${primeNos(arr)}+${arr[arr.length - 1]}`.split("+");
}


var content = document.getElementById('content');


var innerCount = 0;

var table = document.getElementById("fibonacci")

function displayContent(displayCount, fibo){


    var row = table.insertRow(displayCount);
    var data1 = row.insertCell(0);
    var data2 = row.insertCell(1);
    var data3 = row.insertCell(2);
    var data4 = row.insertCell(3);

data1.innerHTML = `${displayCount}`;
data2.innerHTML = `${fibo[2]}`;
data3.innerHTML = `${fibo[0]}`;
data4.innerHTML = `${fibo[1]}`;

    
}

function add(){

    innerCount += 1;
    var fibinit = fibonacci(innerCount);

    displayContent(innerCount, fibinit);
    
}


function deleteIt(){

    var tr = document.querySelectorAll('tr')
    if(innerCount > 0){
 tr[tr.length - 1].remove()
 innerCount = innerCount - 1;
    }
}