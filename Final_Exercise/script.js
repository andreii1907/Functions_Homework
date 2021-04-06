function numberExtraction(string) {
    let array = string.split(' ');
    let newArray = [];
    for (i = 0; i < array.length; i++){
        if (array[i].match(/\d+/g)) {
            newArray.push(array[i]);
        }
    }
    console.log(newArray);

    newArray.join

    let totalIncome = newArray[0] * 12 + newArray[1] + newArray[2] * 12;
    console.log('Venitul total al lui Ion este de: ' + totalIncome);
    return totalIncome;
}

numberExtraction('Ion castiga 5000 lei/luna din salariu, 10000 lei/an bonus si 1500 lei/luna din freelancing.');
// numberExtraction('')