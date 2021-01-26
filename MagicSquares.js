/*
* The program MagicSquares.java uses recursion to solve the 3x3 magic square 
* puzzle.
*
* @author  Wajd Mariam
* @version 1.0
* @since   2021/01/25
*/

// This function prints the squares.
function printSquare(printList) {
  console.log(printList[0] + " " + printList[1] + " " + printList[2]);
  console.log(printList[3] + " " + printList[4] + " " + printList[5]);
  console.log(printList[6] + " " + printList[7] + " " + printList[8]);
  console.log("*****");
}

//  The magicSquareSolver function uses recursion to solve 3x3 magic squares.
function magicSquareSolver(listNumbers, index, indexNum) {
  // This loop iterates to fill out a square of numbers
  for (let counter = 0; counter < listNumbers.length; counter++) {
    // Checking if a slot in the square has been occupied
    if (index[counter] == 0) {
      listNumbers[counter] = indexNum;
      index[counter] = 1;

      if (indexNum < 9) {
        magicSquareSolver(listNumbers, index, indexNum + 1);
      } else {
        // Calling "magicSquareValidity" to check if it's valid or not.
        // Proceeding 
        if (horizontalValidity(listNumbers) == true
            && verticalValidity(listNumbers) == true
            && diagonalValidity(listNumbers) == true) {
          // Print the square if all are true.
          printSquare(listNumbers);
        }
      }
      // If one of the checks is false. Redo the square.
      index[counter] = 0;
    }
  }
}


// This function checks the horizontal validity of Magic Square. 
function horizontalValidity(list) {
  // Horizontal Check
  let horizontalCheck1 = list[0] + list[1] + list[2];
  let horizontalCheck2 = list[3] + list[4] + list[5];
  let horizontalCheck3 = list[6] + list[7] + list[8]; 
  
  // Entering an if statement to check if each one of them adds to 15:
  if (horizontalCheck1 != 15 || horizontalCheck2 != 15 || horizontalCheck3 != 15) {
    return false;
  }
  return true;
}

// This function checks the vertical validity of Magic Square.
function verticalValidity(list) {
  // Vertical Check
  let verticalCheck1 = list[0] + list[3] + list[6];
  let verticalCheck2 = list[1] + list[4] + list[7];
  let verticalCheck3 = list[2] + list[5] + list[8];
  
  // Entering an if statement to check if each one of them adds to 15:
  if (verticalCheck1 != 15 || verticalCheck2 != 15 || verticalCheck3 != 15) {
    return false;
  }
  return true;
}

// This function checks the diagonal validity of Magic Square. 
function diagonalValidity(list) {
  // Diagonal Check
  let diagonalCheck1 = list[0] + list[4] + list[8];
  let diagonalCheck2 = list[2] + list[4] + list[6];
  
  // Entering an if statement to check if each one of them adds to 15:
  if (diagonalCheck1 != 15 || diagonalCheck2 != 15) {
    return false;
  }
  return true;
}


// Initializing lists:
let list1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let list2 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let index = 1;

// Calling function "magicSquareSolver".
magicSquareSolver(list1, list2, index);