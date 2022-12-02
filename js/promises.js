
// Handle An API Promise
function getGitUserLastCommit(username) {
    return fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization': GITHUB_API}}).then((response) => {
        return response.json().then((data) => {
            // console.log(data);
            let commit = data.filter(event => event.type === "PushEvent");
            // console.log(commit);
            console.log(username + "'s last commit was on: " + commit[0].created_at);
        })
    })
}
getGitUserLastCommit('silvam03');


// Create Your Own Promise
function wait(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!isNaN(parseInt(num))) {
                resolve(`You'll see this in ${num/1000} seconds`);
            }else{
                reject(`Error: ${num} is not a number. Try again!`);
            }
        }, num);
    })
}
wait(1000).then(() => {
    console.log("You'll see this after 1 second!");
});
wait(3000).then(() => {
    console.log("You'll see this after 3 seconds!");
});
wait(5000).then(() => {
    console.log("You'll see this after 5 seconds!");
});

wait('hello').catch(() => {
    console.log("This is not a number!");
});