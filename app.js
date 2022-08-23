const fs = require('fs'); 
const generatePage = require('./src/page-template.js');//importing function so place it at the top 


const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;
/*
const name = profileDataArgs[0];
const github = profileDataArgs [0];



   
const printProfileData = profileDataArr => {
    for (let i = 0; i < profileDataArr.length; i += 1) {
    console.log(profileDataArr[i]);
    }


console.log('================');

// Is the same as this...
profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(printProfileData);
*/


  
  /*console.log(name, github);
  console.log(generatePage('name', 'github'));*/
  fs.writeFile('index.html'/*filename*/ ,generatePage(name, github)/*data being written*/, err => {
    if (err) throw new Error(err);/*error callback function*/

    console.log('Portfolio complete! Check out index.html to see the output!');
  });

  
