# Github Followings App

This is a Node.js script that uses the Github API to fetch the list of users that a user is following and their email addresses. The script takes in a CSV file containing the list of user IDs, and returns the list of users and their email addresses in a JSON format.

## Requirements

- Node.js
- npm

## Dependencies

- csv-parser
- axios
- fs

## Installation

1. Clone the repository to your local machine

```bash
git clone https://github.com/<your-username>/github-followings-app.git
```

2. Install the dependencies

```bash
npm install
```

3. Replace the users.csv file with your own file containing the list of user IDs.

4. Run the script.

```bash
node index.js
```

## Usage

The script uses the `axios` library to make requests to the Github API. It takes in a CSV file containing the list of user IDs, and uses the Github API to fetch the list of users that the user is following, and their email addresses. The data is then logged to the console in a JSON format.

## Configuration

You need to set up the API token for using the Github API, you can set it in the client object by replacing the token value YOUR\_\_PERSONAL_ACCESS_TOKEN_HERE with your own token.

## Output

The script will log the results of the API calls to the console in the following format:

```bash
{ login: 'username', email: 'user@email.com' }
```

If the user does not have an email, it will be logged as:

```bash
{ login: 'username', email: '' }
```

## Limitations

The script is limited by the Github API's rate limit. If you are making a lot of requests, you might hit the limit and get a 403 error. Make sure to check the [Github API documentation](https://docs.github.com/en/rest/) for more information on rate limits and how to handle them.
