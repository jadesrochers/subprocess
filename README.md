# Subprocess
Runs a shell process using exec from child process module.

## Whats the Use?
Just a quick way to run a shell command from a node program by passing  
the text of what you want to run.

## installation 
npm install @jadesrochers/subprocess  

const check = require('@jadesrochers/subprocess')  

## Usage
Set up some commands.
```javascript
let comm1 = "head -n 1 /path/to/original.txt"
let comm2 = "cd /path/to/dir && rm -r dirname/*"
led comm3 = docker build -f Dockerfile-nginxtest -t repo/name:tag . && docker push repo/name:tag"
```

Run the commands. Save the output if you need it.
```javascript
let rslt = subp.shellCommand(comm1)
subp.shellCommand(comm2)
subp.shellCommand(comm3)
```

Passing the output to this function will return the stdout or  
throw an error if there was one.
```javascript
subp.commandOutput( rslt )
```
