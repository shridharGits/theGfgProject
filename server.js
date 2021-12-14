const puppeteer = require('puppeteer');
const fs = require('fs')

// enter player 1 who has solved more problems
let player1 = 'crea';

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
    // console.log(player1);
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
var delayInMilliseconds = 12000; // 20sec
setTimeout(function () {
    let difference = player1.filter(x => player2.indexOf(x) === -1);
    difference = difference.filter(x => ignore.indexOf(x) == -1);

    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();
    const saveNotes = function(difference){
        const dataJSON = JSON.stringify(difference);
        fs.writeFileSync(`${day}-${month}-${year}.json`, dataJSON)
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
    `https://auth.geeksforgeeks.org/user/${player1}/practice#Hard`,
    "https://www.geeksforgeeks.org/",
    "mailto:feedback@geeksforgeeks.org",
    "https://www.facebook.com/geeksforgeeks.org/",
    "https://www.instagram.com/geeks_for_geeks/",
    "https://in.linkedin.com/company/geeksforgeeks",
    "https://twitter.com/geeksforgeeks",
    "https://www.youtube.com/geeksforgeeksvideos",
    "https://www.geeksforgeeks.org/about/",
    "https://www.geeksforgeeks.org/careers/",
    "https://www.geeksforgeeks.org/privacy-policy/",
    "https://www.geeksforgeeks.org/about/contact-us/",
    "https://www.geeksforgeeks.org/copyright-information/",
    "https://www.geeksforgeeks.org/fundamentals-of-algorithms/",
    "https://www.geeksforgeeks.org/data-structures/",
    "https://www.geeksforgeeks.org/category/program-output/",
    "https://www.geeksforgeeks.org/articles-on-computer-science-subjects-gq/",
    "https://www.youtube.com/geeksforgeeksvideos/",
    "https://practice.geeksforgeeks.org/courses/",
    "https://practice.geeksforgeeks.org/company-tags/",
    "https://practice.geeksforgeeks.org/topic-tags/",
    "https://practice.geeksforgeeks.org/faq.php",
    "https://www.geeksforgeeks.org/contribute/",
    "https://www.geeksforgeeks.org/write-interview-experience/",
    "https://www.geeksforgeeks.org/internship/",
    "https://www.geeksforgeeks.org/how-to-contribute-videos-to-geeksforgeeks/",
    "https://www.geeksforgeeks.org/copyright-information/",
    "https://www.geeksforgeeks.org/cookie-policy/",
    "https://www.geeksforgeeks.org/privacy-policy/",
    "",
    "",
    "https://www.geeksforgeeks.org/",
    "",
    "https://practice.geeksforgeeks.org/jobs/",
    "https://practice.geeksforgeeks.org/jobs/",
    "https://www.geeksforgeeks.org/computer-science-projects/",
    "https://www.geeksforgeeks.org/geek-of-the-month/",
    "https://www.geeksforgeeks.org/campus-geek-of-the-month/",
    "https://www.geeksforgeeks.org/placements-gq/",
    "https://www.geeksforgeeks.org/category/competitive-programming/",
    "https://www.geeksforgeeks.org/testimonials/",
    "https://www.geeksforgeeks.org/category/geek-on-the-top/",
    "https://www.geeksforgeeks.org/careers/",
    "https://www.geeksforgeeks.org/internship/",
    "https://contribute.geeksforgeeks.org/",
    "https://auth.geeksforgeeks.org/",
    "javascript:void(0)",
    "",
    "javascript:void(0)",
    "javascript:void(0)",
    "",
    "",
    "https://www.geeksforgeeks.org/why-create-an-account-on-geeksforgeeks/",
    "https://www.geeksforgeeks.org/privacy-policy/",
    "https://www.geeksforgeeks.org/cookie-policy/",
    "",
    "https://auth.geeksforgeeks.org/testimonial/",
    "https://auth.geeksforgeeks.org/colleges/",
    "https://auth.geeksforgeeks.org/organizations/",
    "https://auth.geeksforgeeks.org/campus-ambassadors/",
    "https://auth.geeksforgeeks.org/import/",
    "https://practice.geeksforgeeks.org/courses/30-days-of-code",
    "https://practice.geeksforgeeks.org/courses/get-placed-series-1",
]

// player2Stats = await page.$$eval('a', as => as.map(a => a.textContent));
    // for(let i = 0 ; i<player2.length; i++){
    //     const statArray = player2Stats[i].split(" ");
    //     const stats = statArray.find(e => (e == 'School' || e == 'Basic' || e == 'Easy' || e == 'Medium' || e == 'Hard' ))
    //     if(stats){
    //         console.log(player2Stats[i]);
    //     }
    // }