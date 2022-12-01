const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
// 2. Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
let user3 = users.filter(function(n) {
   return n.languages.length >= 3;
});
console.log(user3);
//or
// let user3 = users.filter(n => n.languages.length >= 3);
// console.log(user3);

// 3. Use .map to create an array of strings where each element is a user's email address
let userEmails = users.map(function(n) {
    return n.email;
});
console.log(userEmails);
//or
// let userEmails = users.map(n => n.email);
// console.log(userEmails);

// 4. Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
const totalYears = users.reduce((total, user) =>{
    return total + user.yearsOfExperience;
}, 0);
console.log(totalYears);

// 5. Use .reduce to get the longest email from the list of users.
let longestEmail = userEmails.reduce((email1, email2) => {
    if(email1.length > email2.length) {
        return email1;
    } else {
        return email2;
    }
});
console.log(longestEmail);

// 6. Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
let instructors = users.reduce((total, user) => {
    return `${total} ${user.name},`
}, "Your instructors are:");
console.log(instructors);