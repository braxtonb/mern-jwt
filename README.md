# MERN Stack JWT App

### Overview
This app uses MongoDB, ExpressJS, ReactJS, and Node.js to create an application that utilizes JWT to authenticate client-server communication.

### Directory Structure

|Location|Description|
|:--|:--|
|`client`|Directory containing the client side of the application|
|`server`|Directory containing the server side of the application|


### Server Usage Information

To run the server you must do the following:

1. Install [nodemon](https://github.com/remy/nodemon) globally to be able to have the server restart automatically when file changes are detected when saving. Run `npm install -g nodemon`.

2. Install all other npm modules. From the server directory, run `npm install`.

3. Install [MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/#install-mongodb-community-edition-with-homebrew). Note: For the setting up data directory permissions step, you can run `sudo chown -R $USER /data/db`.

4. Once MongoDB is running, to begin running the server on port 3090 run `npm run dev`.

The current endpoints are:

|Path|Authentication Required|
|:--|:--|
|`/`|Requires JWT token|
|`/signin`|Requires proper username/password combination|
|`/signup`|None|


### Client Usage Information

Work in progress.


### Recommended Resources

[Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en) - for testing endpoints

[Robo 3T](https://robomongo.org/) (formerly Robomongo) - GUI for visualizing MongoDB data

[MongoDB Compass](https://www.mongodb.com/download-center?jmp=nav#compass) - GUI for visualizing MongoDB data by the maintainers of MongoDB

[Passport](http://passportjs.org/) - authentication library for Node.js

[Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) - dev tools for redux
