const { exec } = require('child_process');

// Executes a shell command using the exec form of child_process
const shellCommand = comm => {
  return new Promise((resolve, reject) => {
    exec(comm, (error, stdout, stderr) => {
      if(error){
        reject(error)
      }else{
        resolve({stdout: stdout, stderr: stderr})
      }
    }) 
  })
}

// Checks a command's output for Error, returns stdout if present
const commandOutput = outAnderr => {
  if(outAnderr.stderr.length>0){
    throw new Error('Command had error output: ',outAnderr.stderr)
  }else if(outAnderr.stdout.length>0){
    return outAnderr.stdout
  }else{
    return ''
  }
}


exports.shellCommand = shellCommand
exports.commandOutput = commandOutput
