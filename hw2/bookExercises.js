'use strict'

function loopingTriangle(){
	let chars = '#'
	const maxChars = 7
	for(; chars.length <= maxChars; chars += '#'){
		console.log(chars)
	}
}

function fizzBuzz(maxValue){
	for(let currValue = 1; currValue <= maxValue; ++currValue){
		let toPrint = ''
		if(currValue % 3 == 0){
			toPrint += 'Fizz'
		}
        
		if(currValue % 5 == 0){
			toPrint += 'Buzz'
		}
		console.log(toPrint || currValue)
	}
}


function chessBoard(size){
	const space =  ' '
	const hashtag = '#'
	let toPrint = ''
	let line = ''
	for(let lines = 0; lines < size; ++lines){

		for (let count = 0; count < size; ++count) {
			if((count + lines) % 2){
				line += hashtag
			} else {
				line += space
			}
		}

		toPrint += line
		line = ''
		toPrint += '\n'
	}
	console.log(toPrint)

}

loopingTriangle()
