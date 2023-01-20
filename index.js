import csvParser from "csv-parser";
import fs from "fs";
import axios from "axios";

// // NB: The the first query to the users/${userId}/following endpoints does not return the email address so I had to first query for the logins(userids), then use each logins to query for the email addresses

const client = axios.create({
headers: {
'User-Agent': 'GithubFollowingsApp',
'Authorization': `token YOUR__PERSONAL_ACCESS_TOKEN_HERE`
},
});

let users = [];

async function fetchUsers() {
return new Promise((resolve, reject) => {
fs.createReadStream('users.csv')
.pipe(csvParser())
.on('data', async (data) => {
const userId = data.userId;
try {
const followingResponse = await client.get(`https://api.github.com/users/${userId}/following`);
followingResponse.data.forEach(async (user) => {
try {
const userResponse = await client.get(`https://api.github.com/users/${user.login}`);
if (userResponse.data.email) {
users.push({ login: user.login, email: userResponse.data.email });
console.log({ login: user.login, email: userResponse.data.email });
} else {
users.push({ login: user.login, email: "" });
console.log({ login: user.login, email: "" });
}
} catch (error) {
console.log(error);
}
});
} catch (error) {
console.log(error);
}
})
.on('end', () => {
resolve(users);
console.log('CSV file successfully processed');
});
});
}

async function main() {
const users = await fetchUsers();
console.log(users);
}

main();
