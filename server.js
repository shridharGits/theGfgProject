const puppeteer = require('puppeteer');
const fs = require('fs')

// enter player 1 who has solved more problems
let player1 = 'shindesahil61';

// enter player 2 as you
let player2 = 'kalukheshridhar24';

// player 1 questions
(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(`https://auth.geeksforgeeks.org/user/${player1}/practice`);
    // await page.screenshot({path: 'geek.png'});
    // await browser.waitForTarget(()=>false)

    player1 = await page.$$eval('a', as => as.map(a => a.href));
    await browser.close();

})();

// player two questions
(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(`https://auth.geeksforgeeks.org/user/${player2}/practice`);
    await page.screenshot({ path: 'geek.png' });

    player2 = await page.$$eval('a', as => as.map(a => a.href));
    await browser.close();
})();


// now filtering uncommon questions that player 1 has solved but not player 2
// if net is slow increase delay below
var delayInMilliseconds = 20000; // 20sec
setTimeout(function () {
    let difference = player1.filter(x => player2.indexOf(x) === -1);
    difference = difference.filter(x => ignore.indexOf(x) == -1);
    const saveNotes = function(difference){
        const dataJSON = JSON.stringify(difference);
        fs.writeFileSync('chalu kar bhosdike.json', dataJSON).fo
    }
    saveNotes(difference)
}, delayInMilliseconds);


let ignore = [`https://www.linkedin.com/shareArticle?mini=true&url=https://auth.geeksforgeeks.org/user/${player1}/practice`,
    `https://plus.google.com/share?url=https://auth.geeksforgeeks.org/user/${player1}/practice`,
    `https://twitter.com/share?url=https://auth.geeksforgeeks.org/user/${player1}/practice`,
    `https://www.facebook.com/sharer.php?u=https://auth.geeksforgeeks.org/user/${player1}/practice`,
    `https://auth.geeksforgeeks.org/?to=https://auth.geeksforgeeks.org/user/${player1}/practice`,
    `https://auth.geeksforgeeks.org/user/${player1}/`,
    `https://auth.geeksforgeeks.org/user/${player1}/profile`,
    `https://auth.geeksforgeeks.org/user/${player1}/practice/`,
    `https://auth.geeksforgeeks.org/user/${player1}/articles`,
    `https://auth.geeksforgeeks.org/college/wce-sangli/`,
    `https://practice.geeksforgeeks.org/courses/fork-cpp`,
    `https://auth.geeksforgeeks.org/user/${player1}/practice#problem-solved-div`,
    `https://practice.geeksforgeeks.org/questions/${player1}/`,
    `https://practice.geeksforgeeks.org/answers/${player1}/`,
    `https://auth.geeksforgeeks.org/user/${player1}/practice#School`,
    `https://auth.geeksforgeeks.org/user/${player1}/practice#Basic`,
    `https://auth.geeksforgeeks.org/user/${player1}/practice#Easy`,
    `https://auth.geeksforgeeks.org/user/${player1}/practice#Medium`,
    `https://auth.geeksforgeeks.org/user/${player1}/practice#Hard`]

