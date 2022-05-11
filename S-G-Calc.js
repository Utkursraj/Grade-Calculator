function myFunction(){
    var nt = document.getElementById('nt').value;
    var be = document.getElementById('be').value;
    var math = document.getElementById('math').value;
    var oop = document.getElementById('oop').value;
    var eem = document.getElementById('eem').value;

     var sum = parseFloat(nt) + parseFloat(be) + parseFloat(math) + parseFloat(oop) + parseFloat(eem) ;
     


     var percent = (sum / 500) * 100;
     
     
     if (percent <= 100 && percent >=80) {
         grades = 'A';
     }
     else if (percent <= 79 && percent >=60) {
         grades = 'B';
     }
     else if (percent <= 59 && percent >= 40) {
         grades = 'C';
     }
     else{
         grades = 'F';
     }
     if (percent >=75) {
        document.getElementById('data').innerHTML = `You have recieved ${sum} out of 500
        and that concules your percentage to be ${percent}% .<br> Your Grade is ${grades}.<br> Pass`
     }
     else{
 document.getElementById('data').innerHTML = `You have recieved ${sum} out of 500
  and that concules your percentage to be ${percent}% .<br> Your Grade is ${grades}.<br>fail `
}
}