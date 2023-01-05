/*------- constants --------*/
const rows = 10
const columns = 10
const board = [];


/*--------variables-------*/
let mineCount = 10
let minePlacement = []
let tilesClicked = 0
let tile = []
let gameOver = false




/*----- functions -----*/

// function startGame() {
// document.querySelector("play").addEventListener("click", startGame) 
// assignMines()
// }

    



    //board
     for (let x = 0; x < rows; x++) {
        let row = []
        for (let y = 0; y < columns; y++) {
            let tile = document.createElement('div')
            // tile.id = x.toString() + "-" + y.toString()
            // tile.addEventListener("click", clickTile)
            document.getElementById("board").append(tile)
            row.push(tile)
        }
        board.push(row)
    }

 


    // function assignMines(){
    //     let minesLeft = mineTotal
    //     for (let x = 0; x < 10; x++) {
    //         let x = Math.floor(Math.random() * rows)
    //         let y = Math.floor(Math.random() * columns)
    //     let id = x.toString() + "-" + y.toString()
    //         if (!mineLocation.includes(id)) {
    //             mineLocation.push(id)
    //             minesLeft -= 1;
    //         }
    //         }
            
    //     }//         


// function playButton() {
//     document.querySelector("play").addEventListener("click", startGame) 

// }


// function clickTile() {
   
//     if (gameOver || tile.classList.contains("tile-clicked")) { 
//         return;
//     }

//     if (minePlacement.includes(tile.id)) {
//         gameOver = true;
//         exposeMines();
//         return;
//     }

//     let coordinates = tile.id.split("-")
                
// }

// function exposeMines() {
//     for (let x = 0; x < rows; x++) {
//         for (let y = 0; y < columns; y++) {
//             let tile = board[x][y]
//             if (mineLocation.includes(tile.id)) {
//                 tile.innerText = "💣"
//                 tile.style.backgroundColor = "red"
//             }
//         }
//     }
// }





