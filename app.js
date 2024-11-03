// alert("Hello, Welcome To Checker.Com This Web Application Created & Design By Mr. Dipayan Dey");
const heading = document.querySelector(".heading");
//oddeven
const oddevennumber = document.getElementById("oddeveninput");
const oddevenbtn = document.getElementById("oddevenbtn");
//isprime
const isprimebtn = document.getElementById("isprimebtn");
const isprimenumber = document.getElementById("isprimeinput");
//ispallindrom
const ispallindrombtn = document.getElementById("ispallindrombtn");
const ispallindromnumber = document.getElementById("ispallindrominput");
//leapyear
const isleapyearbtn = document.getElementById("leapyearbtn");
const isleapyearnumber = document.getElementById("leapyearinput");

//amstrong number
const isamstrongbtn = document.getElementById("amstrongbtn");
const isamstrongnumber = document.getElementById("amstronginput");
//count of digits
const iscountbtn = document.getElementById("countbtn");
const iscountnumber = document.getElementById("countinput");
//strong number
const isstrongbtn = document.getElementById("strongbtn");
const isstrongnumber = document.getElementById("stronginput");
//reverse number printing
const reverseBtn = document.getElementById("reversebtn");
const reversenumber = document.getElementById("reverseinput");


//factorial number calculate
const factnumBtn = document.getElementById("factnumbtn");
const factnumber = document.getElementById("factnuminput");


//for odd even
function oddevenback() {
  document.querySelector(".oddeven").style.display = "none";
  document.querySelector(".btnsec").style.display = "block";
  //   heading.style.display="block"
}

function calloddeven() {
  document.querySelector(".oddeven").style.display = "block";
  document.querySelector(".btnsec").style.display = "none";
  //   heading.style.display="none"
}

oddevenbtn.addEventListener("click", () => {
  let oddeveninput = oddevennumber.value;
  if (oddeveninput == "") {
    alert("Please Enter a valid number");
  } else if (oddeveninput % 2 == 0) {
    alert(oddeveninput + " Is  Even Number");
  } else {
    alert(oddeveninput + " Is  Odd Number");
  }
  oddevennumber.value = "";
});

//for prime number
function isprimeback() {
  document.querySelector(".isprime").style.display = "none";
  document.querySelector(".btnsec").style.display = "block";
  //  heading.style.display="block"
}

function callisprime() {
  document.querySelector(".isprime").style.display = "block";
  document.querySelector(".btnsec").style.display = "none";
  //   heading.style.display="none"
}

isprimebtn.addEventListener("click", () => {
  let isprimeinput = isprimenumber.value;
  let i,
    flag = 1;
  for (i = 2; i < isprimeinput; i++) {
    if (isprimeinput % i == 0) {
      alert(isprimeinput + " Is  Not Prime Number");
      flag = 0;
      break;
    }
  }
  if (flag == 1) {
    alert(isprimeinput + " Is  Prime Number");
  }

  isprimenumber.value = "";
});

//isplindrom
function callipallindrom() {
  document.querySelector(".ispallindrom").style.display = "block";
  document.querySelector(".btnsec").style.display = "none";
  //   heading.style.display="none"
}
function ispllindrom() {
  document.querySelector(".ispallindrom").style.display = "none";
  document.querySelector(".btnsec").style.display = "block";
  //  heading.style.display="block"
}
ispallindrombtn.addEventListener("click", () => {
  let ispallindrominput = ispallindromnumber.value;
  // alert(ispallindrominput)
  if (ispallindrominput == "") {
    alert("Please Enter a valid number");
    return;
  }
  const palindrom = ispallindrominput === ispallindrominput.split("").reverse().join("");
  alert(
    palindrom
      ? ` ${ispallindrominput} Is Palindrom Number`
      : `${ispallindrominput} Is Not Palindrom Number`
  );

  ispallindromnumber.value = "";
});

//leapyear section
function callleapyear() {
  document.querySelector(".isleapyear").style.display = "block";
  document.querySelector(".btnsec").style.display = "none";
  //   heading.style.display="none"
}
function isleapyear() {
  document.querySelector(".isleapyear").style.display = "none";
  document.querySelector(".btnsec").style.display = "block";
  //  heading.style.display="block"
}
isleapyearbtn.addEventListener("click", () => {
  let isleapyearinput = isleapyearnumber.value;

  if (isleapyearinput == "") {
    alert("Please Enter a valid number");
    return;
  }

  if (
    isleapyearinput % 400 == 0 ||
    (isleapyearinput % 4 == 0 && isleapyearinput % 100 != 0)
  ) {
    alert("("+isleapyearinput+")"+" This Year Is Leapyear");
  } else {
    alert("("+isleapyearinput+")"+" This Year Is Not Leapyear");
  }

  isleapyearnumber.value = "";
});

//amstrong
function callamstrong() {
  document.querySelector(".isamstrong").style.display = "block";
  document.querySelector(".btnsec").style.display = "none";
  //   heading.style.display="none"
}
function isamstrong() {
  document.querySelector(".isamstrong").style.display = "none";
  document.querySelector(".btnsec").style.display = "block";
  //  heading.style.display="block"
}
isamstrongbtn.addEventListener("click", () => {
  
  function isArmstrongNumber(num) {
    const digits = num.toString().split("");
    const numberOfDigits = digits.length;

    const sum = digits.reduce((acc, digit) => {
      return acc + Math.pow(parseInt(digit), numberOfDigits);
    }, 0);

    return sum === num;
  }
  let isamstronginput = parseInt(isamstrongnumber.value);
  // if(isamstronginput<0){
  //   alert("the number is negative")
  //   return ;
  // }
  // isamstrongnumber.value = "";
  if (isNaN(isamstronginput)) {
    alert("Please Enter a valid number");
    return;
  }

  if (isArmstrongNumber(isamstronginput)) {
    alert(isamstronginput + " Is  Amstrong Number");
  } else {
    alert(isamstronginput + " Is Not Amstrong Number");
  }

  isamstrongnumber.value = "";
});


//count of number
function callcountDigits() {
  document.querySelector(".iscount").style.display = "block";
  document.querySelector(".btnsec").style.display = "none";
  //   heading.style.display="none"
}
function iscount() {
  document.querySelector(".iscount").style.display = "none";
  document.querySelector(".btnsec").style.display = "block";
  //  heading.style.display="block"
}
iscountbtn.addEventListener("click", () => {
  let iscountinput = iscountnumber.value;
  var count = 0;
  if (iscountinput == "") {
    alert("Please Enter a valid number");
    return;
  }
  if (iscountinput == 0) {
    count = 1;
  }
  if (iscountinput < 0) {
    alert("The number is Negative");
  } else {
    // count = iscountinput.toString().length;
    while(iscountinput!=0){
      iscountinput=Math.floor( iscountinput/10 )
      count++;
    }
    alert("There Are "+count+" Numbers Digits");
  }

  iscountnumber.value = "";
});



//strong number
function callstrongNumber() {
  document.querySelector(".isstrong").style.display = "block";
  document.querySelector(".btnsec").style.display = "none";
  //   heading.style.display="none"
}
function isStrongBack() {
  document.querySelector(".isstrong").style.display = "none";
  document.querySelector(".btnsec").style.display = "block";
  //  heading.style.display="block"
}

isstrongbtn.addEventListener("click", () => {
  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }

  function isStrongNumber(num) {
    const digits = num.toString().split("");
    const sum = digits.reduce((acc, digit) => {
      return acc + factorial(parseInt(digit));
    }, 0);

    return sum === num;
  }

  let isstrtonginput = parseInt(isstrongnumber.value);
  if (isstrtonginput < 0) {
    alert("The number is negative");
  }
  isstrongnumber.value = "";
  if (isNaN(isstrtonginput)) {
    alert("Please Enter a valid number");
    return;
  }

  if (isStrongNumber(isstrtonginput)) {
    alert(isstrtonginput+" Is A Strong Number");
  } else {
    alert(isstrtonginput+" Is Not A Strong Number");
  }

  isstrongnumber.value = "";
});


//reverse number
function callreverseNumber() {
  document.querySelector(".isreverse").style.display = "block";
  document.querySelector(".btnsec").style.display = "none";
  //   heading.style.display="none"
}
function isReverseBack() {
  document.querySelector(".isreverse").style.display = "none";
  document.querySelector(".btnsec").style.display = "block";
  //  heading.style.display="block"
}
reverseBtn.addEventListener("click",()=>{
  let reverseinput=reversenumber.value;
  let result=0

  if(reverseinput==""){
    alert("Please Enter A Valid Number")
  }



     while(reverseinput>0){
      const ld=reverseinput%10;
     result=result*10+ld;
     reverseinput=Math.floor(reverseinput/10);
     }
     alert("The NUmber Printing In Reverse Order " + "(" +result + ")");
  // }


   reversenumber.value=""
})

//factorial number calculate

function callfactNumber() {
  document.querySelector(".factnum").style.display = "block";
  document.querySelector(".btnsec").style.display = "none";
  //   heading.style.display="none"
}
function factBack() {
  document.querySelector(".factnum").style.display = "none";
  document.querySelector(".btnsec").style.display = "block";
  //  heading.style.display="block"
}

factnumBtn.addEventListener("click",()=>{
  let factinputnumber=parseInt(factnumber.value);
  if(isNaN(factinputnumber)){
    alert("Please Enter A Valid Number")
    // return;
  }
 else if(factinputnumber==0){
    alert(factinputnumber + " factorial Always " + factinputnumber + " Please Eenter Another Number")
  }

  else if(factinputnumber<0){
    alert("Please Enter A Positive Number")
  }
  else{

    let fact=1;
    for(let i=1;i<=factinputnumber;i++){
      fact=fact*i;
    }
    alert("Factorial Of "+ factinputnumber + " Is " +fact)
  }


  factnumber.value=""
})
