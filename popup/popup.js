var val1 = document.querySelector('#val1');
var val2 = document.querySelector('#val2');
var btn = document.querySelector('#calc');
var resultField = document.querySelector('#result');

	// JavaScript program to illustrate 
	// calculation of no. of days between two date 

btn.addEventListener('click', () => {
    // To set two dates to two variables 

var d1 = val1.value;
var d2 = val2.value;

    console.log(d1);
    console.log(d2);

var date1 = new Date(d1); 
var date2 = new Date(d2); 

// To calculate the time difference of two dates 
var Difference_In_Time = date2.getTime() - date1.getTime(); 

// To calculate the no. of days between two dates 
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 

//To display the final no. of days (result) Difference_In_Days
document.querySelector('#result').textContent = Difference_In_Days + ' days';
});


