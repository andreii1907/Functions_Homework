// ------- Exercise with 8 character and at least one special character ------- //

function conditionString (string) {
  if (string.length < 8) {
    console.log('You must have 8 characters.');
    return false;
  }

  let specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

  if (specialCharacters.test(string)){
    return true;
  } else {
    return  console.log('You must have one special character.');
  }
}

conditionString('calamarii@');

// ------- Exercise with email address validation -------- //

function mailValidation(mail) {
  const validSyntax = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (validSyntax.test(mail)) return true;
    
  console.log('Invalid Email Address. Please try again.');
  return false;
}

console.log(mailValidation('luchianandrei1024@email.com'));


// ------- Exercise with user data validation ------- //

function userValidation({email, firstName, lastName, password}) {

  if (conditionString(password) !== true ) {
    return false;
  } else if (mailValidation(email) !== true) {
    return false;
  } else if (firstName === undefined) {
    console.log ('You must enter your First Name');
    return false;
  } else if (lastName === undefined){
    console.log ('You must enter your Last name');
    return false;
  } else {
    console.log('User data is correct. Welcome!');
    return  true;
  }
}

userValidation({email: 'luchianandrei1024@yahoo.com', firstName: 'Luchian', lastName: 'Andrei', password:'luchian124@'});


// ------- Exercise with list of users validation ------ //

function listOfUsers(users) {
  
  let validUsers = [];
  for (let i = 0; i < users.length; i++) {
    if (userValidation(users[i]) == true) validUsers.push(users[i])
  }
  return validUsers;
} 

console.log(' ------- Exercise with list of users validation ------ ')

console.log(listOfUsers([{email: 'luchianandrei1024@yahoo.com', firstName: 'Luchian', lastName: 'Andrei', password:'luchian124@'},
  {email: 'tudoralexandru@yahoo.com', firstName: 'Luchian', lastName: 'Andrei', password:'luchian124@'}, 
  {email: 'ceaparosiesaualbayahoocom', lastName: 'Ceapa Alba', password:'ceapalumama1212!@'}, 
  {email: 'papanouaguinee@gmail.com', firstName: 'Hamad', password:'cotedevoire124##'}
]));
