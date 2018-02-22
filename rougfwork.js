
exports.wordsForGames = {
   
};







/*var inquirer = require('inquirer');

var wordArray = ['The mountains', 'The flowers', 'The wind', 'The garland'];
var random_word;
var split_word;
var temp_str= '';
var dash='-';
var guessed_char='';
var choices=10;

function random() {
    random_word = wordArray[Math.floor(Math.random() * wordArray.length)];
    console.log("random ", random_word);

}
function start() {
    console.log('Guess word:');
    for (var i = 0; i < random_word.length; i++) {
        if (random_word[i] === ' ') {
            temp_str = temp_str + " ";

        } else {
            temp_str = temp_str + random_word[i].replace(random_word[i], dash);
        }

    }
    
    console.log(temp_str);
    console.log(temp_str.length);
    guessLetter();
}

random();
start();


function guessLetter() {
    //this.symbol=arg;
    inquirer.prompt([
        {
            type: 'input',
            message: 'Guess Letter :',
            name: 'userInput'
        }

    ]).then(function(response) {
        for(var i=0;i<random_word.length;i++){
            if(response.userInput=== random_word[i])

            {
                
                temp_str=temp_str.replace(temp_str[i] ,response.userInput);
            }
            

        }
        console.log(temp_str);
    })

}*/




/*function Letter(letter, letter_guessed) {

    this.letter = letter;
    console.log(letter);
    this.letter_guessed = letter_guessed;
    this.char_guessed = function(random_length) {

         console.log("function running1" , random.length);
       

    };
    this.check_char = function(char_guessed) {
        console.log('function runnung 2');

    }

}

var letter_obj = new Letter('a', true);
letter_obj.char_guessed();
letter_obj.check_char();

function Word(random) {
    this.random = random_word;
    split_word = random.split("");
    //console.log("word" ,split_word);
    

}
console.log("word" ,split_word)
var word = new Word(random_word);*/