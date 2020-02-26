const data2 = [5,12,33,46]
for(let i = 0; i < data2.length; i++){
  console.log('data2[i]', data2[i])
}

function numberWriter(num){
  console.log(num)
  if (num> 10){
    console.log('num',num)
  }else{
    console.log('number too small');
  }
}

function numberWriter(num){
  console.log(num)
  if (num> 10){
    console.log('num',num)
  }else if(num>=5 && num <=6){
    console.log('number too awesome')
  }else{
    console.log('number too small ot too big');
  }
}

numberWriter1(data1);