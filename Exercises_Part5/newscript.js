// ------- Exercise with triangle ------- //

function triangle(num) {
    
    let line = ''
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= i; j++){
            line += '#'
        }
        line += '\n';
    }
    return line;
}

console.log(triangle(5));

// ------- Exercise with tree ------- //

function christmasTree(branches) {
    let threads = '';
    for(i = 1; i <= branches; i++) {
        threads = '';
        for(j = i; j < branches; j++) {
        threads += ' ';
        }
        for(k = 0; k < (i*2)-1; k++) {
        threads += '*';
        }
    console.log(threads);
    }
    return threads;
}

christmasTree(5);

// ------- Exercise with Chess Board ------- //

function chessBoard(size) {

    let board = "";
    for (let i = 0; i < size; i++) {  
        for (let j = 0; j < size; j++) {
            if ((i + j) % 2 == 0){
                board += " ";
            } else {
                board += "#";
            }
        }
    board += "\n";
    }
    return board;
}

console.log(chessBoard(8));


