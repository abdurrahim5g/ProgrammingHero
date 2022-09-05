/**
 * The Problem is, calculate the 5 subject Avarage with 2 decimal places
 */

let math = 98;
let english = 56;
let social = 76.7;
let bangla = 87;
let physic = 75.98;

let totalNumberOfSubject = math + english + social + bangla + physic;
let totalAvarage = (totalNumberOfSubject / 5).toFixed(2);

console.log(parseFloat(totalAvarage));
