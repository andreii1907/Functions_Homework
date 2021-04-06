// ------- Exercise with Chess Board ------- //

function chessBoard(square) {
    let board = '';

    for (let i=1; i <= square; i++) {
        for (let j=1; j <= square; i++){
            if ((i+j) % 2 == 0) {
                board += '';
            } else {
                board += '#';
            }
        }
        
        board += "\n";
    }

    console.log(board);
}

console.log(chessBoard(16));