const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question('type username', username => {
	if(username == 'morgan'){
		console.log(`${username} logged in`);
		readline.close();
	} else {
		console.log('incorrect name');
		readline.close();
	}
})
