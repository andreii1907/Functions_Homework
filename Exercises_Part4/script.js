// ------- Exercise with 8 character and at least one special character ------- //

function conditionString (string) {
    if (string.length < 8) {
       return console.log('Trebuie sa ai minim 8 caractere');
    }

    let specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if (specialCharacters.test(string)){
      return console.log('Valid');
    } else {
      return  console.log('Trebuie sa ai minim un caracter special')
    }
}

conditionString('calamarii@');

// ------- Exercise with email address validation -------- //

function mailValidation(mail) {
    const validSyntax = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (validSyntax.test(mail)) return true;
    
    console.log('Adresa de mail este invalida. Va rog reincercati.')
    return false
}

console.log(mailValidation('luchianandrei1024@email.com'));