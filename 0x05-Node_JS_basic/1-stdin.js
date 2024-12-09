console.log('Welcome to ALX, what is your name?');

process.stdin.on('data', (userInput) => {
  const userName = userInput.toString().trim();
  console.log(`Your name is: ${userName}`);
  process.exit();
});

process.on('exit', () => {
  console.log('This important software is now closing');
});
