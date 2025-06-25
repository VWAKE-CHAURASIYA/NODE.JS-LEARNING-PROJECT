//Enter the filename
//Enter the content

import readline from 'readline';
import fs from 'fs';

//first we need to create an interface with the help of 'readline' where we can read or write anything: 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const fileCreation = () => {
    rl.question('Enter your file name: ', (filename) => {
       //content added to filename:
        rl.question('Enter the content for your file: ', (content) => {
           //writing a file:
            fs.writeFile(`${filename}.txt`, content, (err) => {
                if (err) {
                    console.log(`Error writing the file: ${err.message}`);
                } else {
                    console.log(`File "${filename}.txt" created successfully.`);
                }
                rl.close();                         //make sure we need to also close the connection 
            });
        });
    });
};

fileCreation();
