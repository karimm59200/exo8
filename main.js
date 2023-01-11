// let res = prompt("Veuillez saisir un mot : ");

// function palindrome (res) {
  
//   let resReverser = res.split('').reverse().join('');

//   return res === resReverser;
 
// }

// if( palindrome) {
//     alert ( "le mot est un palindrome !");
// } else{
//   alert("ce mot n'est pas un palindrome ! ");
// }

let mot, reverse;

mot = prompt("veuillez saisir un mot : ")

reverse = mot.split('').reverse().join('');

console.log(reverse);

if (mot != reverse) {
  alert('ce mot n\'est pas un palindrome' );
} else {
  alert('ce mot est un palindrome');
}

