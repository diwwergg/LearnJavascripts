// karel program to draw a diagonal line
// Path: scripts\karel.js
// Author: Mr. Thawatchai Buachan
 
 function main(){
    putBeeper();
    diagonalLine();
    diagonalLine();
    diagonalLine();
    diagonalLine();
 }
 
 function diagonalLine(){
    turnLeft();
    move();
    turnRight();
    move();
    putBeeper();
 }
 