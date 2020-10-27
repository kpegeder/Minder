# Film Connector

![License Badge](https://img.shields.io/badge/License-MIT-blue)

**_Links_**

Deployed URL: https://film-connector.herokuapp.com/

Github Code URL: https://github.com/kpegeder/Minder

## Description

Our goal for this project was to create a social media platform that connects users by commonalities based on their favorite movies. Then with that data, users can pick a movie to watch. Our simple yet powerful interface makes finding movies and comparing with other users easy and hassle-free!

### Table of Contents

- [Usage](#Usage)
- [Installation](#installation)
- [Test](#test)
- [Server](#server)
- [License](#license)
- [Questions](#questions)

### Usage

The user goes to our website and from there they can either sign-up for the first time or log-in as a returning user.

![landing page](./public/Assets/landingpage.png)

If the user is signing up for the first time they will enter a username, e-mail, and password.

![sign-up page](./public/Assets/signuppage.png)

Once the user is signed they will be taken straight to their profile, easy!

![profile page](./public/Assets/profilepage.png)

Our log-in screen is super straightforward and takes the user directly to their profile as well.

![log-in page](./public/Assets/loginpage.png)

To start searching for movies simply click on "Home" link at the top left of the page and the user will be presented with a large search bar.

![search page](./public/Assets/home-searchpage.png)

Or click on "Show me the movies!" to see a history of previously liked movies.

![my movies](./public/Assets/previouslikedpage.png)

Once the search results come back the user can choose to like or dislike the movie. Liking the movie will add it directly to their profile page whereas clicking dislike will erase it from the results.

![search results](./public/Assets/likeordislikepage.png)

If the user wanted to compare movies with another user they just need to click on "Select Username" and the dropdown menu will list other users on the application. After choosing, click on "Compare Movies" and any movies that both individuals have liked will populate the area below. If no results are shown then unfortunately that means they have different tastes.

![compare results](./public/Assets/comparepageUSE.png)

When the user is ready to watch a movie they just need to navigate back to their "Profile" page, click on "Show me the movies!", pick a movie listed, and they can just click on their streaming service prference to be taken straight to their movie! Enjoy!

![liked movies age](./public/Assets/likedmoviespage.png)

### Technologies Used

HTML, CSS, Bootstrap Framework, JavaScript, MySQL, express, passport, sequelize, handlebars, heroku, OMDb API, IMDb API

### Installation

To install necessary dependencies, run the following command:

```
npm install
```

### Test

To run tests, run the following command:

```
npm test
```

### Server

To run the server locally, run the following command:

```
node server.js
```

### License

Licensed under the MIT license.

### Contributing

[Kalen](https://github.com/kpegeder), [David](https://github.com/davidnjaffe), [Bronson](https://github.com/Bronson-code), [Michael](https://github.com/mcheung008)

### Questions

If you have any additional questions about the applictaion, you can contact us through email: [Kalen](mailto:k.pegeder@gmail.com), [David](mailto:davidnjaffe@gmail.com), [Micheal](mailto:mcheung008@gmail.com). You can see more of our work on GitHub: [Kalen](https://github.com/kpegeder), [David](https://github.com/davidnjaffe), [Bronson](https://github.com/Bronson-code), [Michael](https://github.com/mcheung008)
