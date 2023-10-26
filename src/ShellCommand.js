import React, { useState } from 'react';
// const { spawn } = require('child_process');

// const { remote } = require('electron');
// const mainProcess = remote.require('child_process');
// const { spawn } = remote.require('child_process');


function ShellCommand() {
    const [output, setOutput] = useState('');
    /*
    function runShellCommand() {
        // console.log(spawn);
        const ls = child_process.spawn('ls');

        ls.stdout.on('data', (data) => {
            setOutput(data.toString());
        });

        ls.stderr.on('data', (data) => {
            console.error(`Error: ${data}`);
        });

        ls.on('close', (code) => {
            if (code === 0) {
                console.log('Command executed succesfully.');
            } else {
                console.log(`Command exited with code ${code}`);
            }
        });
    };
    */

    function runShellCommand() {
        console.log(window.os.homedir());
    }

    return (
        <div>
            <button onClick={runShellCommand}>Run ls</button>
            <pre>{output}</pre>
        </div>
    );
}

export default ShellCommand;
