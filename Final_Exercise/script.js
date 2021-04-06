function numberExtraction(string) {
    let array = string.split(' ');
    let newArray = [];
    for (i = 0; i < array.length; i++){
        if (array[i].match(/\d+/g)) {
            newArray.push(array[i]);
        }
    }
    let salary = Number(newArray[0]);
    let bonus = Number(newArray[1]);
    let freelancing = Number(newArray[2]);

    let totalIncome = salary * 12 + bonus + freelancing * 12;
    console.log('Venitul total anual al lui Ion este de: ' + totalIncome + ' lei.');

    // let totalIncomeJohn = (salary * 4.8) * 12 + bonus + (freelancing * 4.3) * 12;
    // aici nu am reusit sa diferientez moneda astfel incat sa calculez calculul de mai sus
};

numberExtraction('Ion castiga 5000 lei/luna din salariu, 10000 lei/an bonus si 1500 lei/luna din freelancing.');
// numberExtraction('John castiga 1000 euro/luna din salariu, 9000 lei/an bonus si 1000 usd/luna din freelancing.');