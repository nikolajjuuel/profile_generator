const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Whats your name? Nicknames are also acceptable :) ', (name) => {
    rl.question("What's an activity you like doing?", (activity) => {        
        rl.question("What do you listen to while doing that?", (music) => {
            rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (mealTime) => {
                rl.question("What's your favourite thing to eat for that meal?", (meal) => {
                    rl.question("Which sport is your absolute favourite?", (sport) => {
                        rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (superpower) => {
                            process.stdout.write(
                            `\n 
                             name: ${name} \n
                             activity: ${activity} \n
                             ${name} enjoys lisstening to ${music} while ${activity}\n
                             favourire meal time is: ${mealTime} \n
                             favorite food: ${meal} \n
                             favorite sport: ${sport} \n
                             superpower: ${superpower} \n
                            `)
                            rl.close();
                        });
                    });
                });
            });
        });
    });
});


