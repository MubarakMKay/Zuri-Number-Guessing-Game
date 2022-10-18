const name = prompt("Please enter your username");

function check(range) {
            
  const guess = Number(prompt(`Guess a number between 1 & ${range}`))
  let level = range - 1
  let point = level - 1

  let randomNumber = Math.ceil(Math.random()*range)
            
  if (guess === randomNumber) {
    console.log('You got it')
    level++
    point++
    console.log(`Welcome to level ${level}`)
    console.log(`Your points is ${point}`)
  } else {
    console.log(`You didnt't get it`)
  }
}

check(2)