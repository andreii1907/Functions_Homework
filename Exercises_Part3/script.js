// ------- Exercise with palindrom ------- //

function palindrom (value) {
    for (let i = 0; i < value.length / 2; i++) {
        if (value[i] !== value[value.length -1 - i]) {
            return false;
        }
    }

    return true;
}

console.log(palindrom('cojoc'));

// ------- Exercises with Uppercase ------- //


function uppercaseFirstLetter(string){
    let array = string.split(' ');
    let newarray = [];

    for (let i = 0; i < array.length; i++){
       newarray.push(array[i].charAt(0).toUpperCase() + array[i].slice(1));
    }

    return newarray.join(' ');
}

console.log(uppercaseFirstLetter('aici puteti transoforma primele litere din cuvinte in litere mari'));


// ------- Exercise with Vowels ------- //

const countVowelsV2 = (inputString) => {
    let counter = 0;
    const vowels = ["a", "e", "i", "o", "u"];
  
    for (let i = 0; i < inputString.length; i++) {
      if (vowels.includes(inputString[i].toLowerCase())) counter++;
    }
  
    return counter;
  };

  console.log(countVowelsV2("Ana are mere"));


  // ------- Exercise with Prime number ------- //

function primeNumber(number) {
    for (let i = 2; i < number; i++){
        if (number % i === 0) return false;
    }
    return number > 1;
}

console.log(primeNumber(12));