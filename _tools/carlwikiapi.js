const spawn = require("child_process").spawn;
const pythonProcess = spawn('python',["tools.py", "Carl"]);

pythonProcess.stdout.on('data', (data) => {
    console.log(String(data));
});