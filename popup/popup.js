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


//theme//
var checkbox = document.getElementById("ChangeTheme"); //get the checkbox to a variable

//check storage if dark mode was on or off
if (sessionStorage.getItem("mode") == "dark") {
  darkmode(); //if dark mode was on, run this funtion
} else {
  nodark(); //else run this funtion
}

//if the checkbox state is changed, run a funtion
checkbox.addEventListener("change", function() {
  //check if the checkbox is checked or not
  if (checkbox.checked) {
    darkmode(); //if the checkbox is checked, run this funtion
  } else {
    nodark(); //else run this funtion
  }
});

//function for checkbox when checkbox is checked
function darkmode() {
  document.body.classList.remove("light-mode"); //remove added class from body tag
  document.body.classList.add("dark-mode"); //add a class to the body tag
  checkbox.checked = true; //set checkbox to be checked state
  sessionStorage.setItem("mode", "dark"); //store a name & value to know that dark mode is on
}

//function for checkbox when checkbox is not checked
function nodark() {
  document.body.classList.add("light-mode"); 
  document.body.classList.remove("dark-mode"); //remove added class from body tag
  checkbox.checked = false; //set checkbox to be unchecked state
  sessionStorage.setItem("mode", "light"); //store a name & value to know that dark mode is off or light mode is on
}

//Notepad localstorage//
  var editorKey = 'html5-notepad';
  var editor = document.getElementById('editor');
  var cache = localStorage.getItem(editorKey);

  if (cache) {
    editor.innerHTML = cache;
  }

  function autosave() {
    var newValue = editor.innerHTML;
    if (cache != newValue) {
      cache = newValue;
      localStorage.setItem(editorKey, cache);
    }
  }

  editor.addEventListener('input', autosave);

//clear Notepad//
const clearBtn = document.querySelector('#clearBtn');

clearBtn.addEventListener('click', () => {
  editor.innerHTML = " ";
});