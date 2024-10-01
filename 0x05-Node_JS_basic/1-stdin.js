// Display welcome message
console.log("Welcome to Holberton School, what is your name?");

// Set up input stream to read from the user
process.stdin.setEncoding('utf8');

// Listen for input from stdin (the user's input)
process.stdin.on('data', (input) => {
  // Trim the input to remove any extra newlines or spaces
  const name = input.trim();

  // Display the user's name
  console.log(`Your name is: ${name}`);

  // End the process (emit the 'exit' event)
  process.stdin.end();
});

// Listen for when the process ends (via process.stdin.end() or Ctrl+D)
process.stdin.on('end', () => {
  console.log("This important software is now closing");
});

