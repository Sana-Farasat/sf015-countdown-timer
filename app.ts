#! /usr/bin/env node
//Shebang

import inquirer from "inquirer";
import {differenceInSeconds} from "date-fns";
import chalk from "chalk";

console.log(chalk.greenBright('\n\n\t\t'+'*'.repeat(17)));
console.log(chalk.greenBright('\t\t COUNTDOWN TIMER'));
console.log(chalk.greenBright('\t\t'+'*'.repeat(17)));

 const result = await inquirer.prompt(
     {
         name:'userInput',
         type:'number',
         message:chalk.redBright('\n\tPlease enter the time to 60 second:'),
         validate: (input) => {
            if (isNaN(input)) {
                 return chalk.greenBright('\n\tPlease enter a valid number!');
             } else if (input > 60) {
                 return chalk.greenBright('\n\tSeconds must be less than or equal to 60');
             } else {
                 return true; // Validation successful
             }
        }
     }
 )

 let input = result.userInput

 function startTime(val:number){
    const initialTime = new Date().setSeconds(new Date().getSeconds()+(val+2)) //added user value in initial time (future time)
  // const initialTime = new Date(new Date().getTime() + (val * 1000)); //2nd method to declare variable

    const intervalTime = new Date(initialTime) //initial time for human readibility
    console.log(chalk.redBright('\n\t\tTik Tik....'));

    setInterval((() => {
      const currentTime =new Date()
        const timeDiff = differenceInSeconds(intervalTime,currentTime)
          
         if(timeDiff <= 0){
            console.log(chalk.redBright.italic('\n\t\tTimer has expired....'));
            console.log(chalk.greenBright('\n\n\t'+'*'.repeat(35)));
            console.log(chalk.greenBright('\t'+'*'.repeat(35)));

           process.exit()
       }

       const min = Math.floor(timeDiff/60) //converting into minutes from seconds
       const sec = Math.floor(timeDiff%60)
       //let hour = Math.floor(timeDiff/3600)
       //console.log(`${hour.toString().padStart(2,'0')}:${min.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}`);
       
       console.log(chalk.redBright(`\n\t\t ${min.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}`));
             }),1000)            
 }
  
 startTime(input)
 
 
 
 

 

