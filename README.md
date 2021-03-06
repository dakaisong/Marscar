# Marscar
This is marcar by typescript

## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v11.14.0

    $ npm --version
    6.7.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

## Install

    $ git clone https://github.com/dakaisong/Marcar
    $ cd Marscar
    $ npm install

## Running the project

    $ nodemon ./src/app.ts localhost 8000
## Running the project with Docker to publish
    $ Install the docker on your local mechine
    $ open terminal and type the command "Docker build -t node-web-app ."
    $ run "Docker run -p 3000:3000 node-web-app"
## API document 
 
When start the project, the project providers swagger document with http://localhost:8000/sendOrder

## Running the unit test

The project use mocha to do the unit test. Open the terminal and go to project folder and run "npm run test"

