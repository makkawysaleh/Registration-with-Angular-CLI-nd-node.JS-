# Saleh Makkawy's Project # 2 for Web Security Class 

First you need to install [node.JS](https://nodejs.org/en/) go to the website and follow the directions to install it. 
After that,install [Angular CLI](https://github.com/angular/angular-cli) version 6.2.5. You can do this manually through the this command line `sudo npm install -g @angular/cli@1` after that you can check if it is installed by this command `ng --version` 
Make sure that you have git installed to be able to clone the project to your computer. You can downloaded from here [git](https://git-scm.com/downloads)
In this project I also used angular material to build the interface of the app. You can get it from here [angular material](https://material.angular.io/) or you can run these commands in your terminal to get it `npm install --save @angular/material @angular/cdk @angular/animations`

## Clone the project to your disktop
After you finish installing all the previous librares, open a new terminal run`sudo git clone https://github.com/makkawysaleh/Registration-with-Angular-CLI-nd-node.JS-.git`



Then navigate to the project folder and run `ng serve --open` for a dev server. Open a browser and navigate to `http://localhost:4200/`. The app will automatically reload all the source files.


## In this project
There are three main components: `localhost:4200/signin` , `localhost:4200/signup` and `localhost:4200/reset-password`. The project is connected to [Firebase](https://firebase.google.com/)

<img width="610" alt="screen shot 2018-11-03 at 1 02 09 pm" src="https://user-images.githubusercontent.com/15700170/47955153-bec5e300-df69-11e8-8a17-51340b16481e.png">

The app will always direct you to signin page. If you don't have an account, go to the `signup` page to sign-up. You can sign up with Twitter, Google or by entering a valid email and password. 

You can always `reset you password` link, if you forget your password. a link will be sent to your email to reset your password. 

## If you couldn't get the project to work
Try these commands and make sure that you are running the same versions of software and libraries that I am running.
1-Open a terminal and type `ng --version`, this will returns the angular's version you are running. Make sure that you ar running `6.2.5`.

<img width="738" alt="screen shot 2018-11-12 at 12 23 52 pm" src="https://user-images.githubusercontent.com/15700170/48364239-e6a5fc80-e675-11e8-9988-f2d041381575.png">

2- Type `node -v` to see the node's version you are running make sure it is `V10.12.0`.

3- Type `npm -v` to check node.js packages and modules version. It shloud return `6.4.1`.

4- make sure that you installed Angular material from this site [angular material](https://material.angular.io/). And follow the instrections to get started if you haven't done them.

5- Finally, if you couldn't get it to work you can email me at {salehmakkawy@gmail.com}




## If you want to run Angular CLI 4,5,6> on Cloud9 you should follow this commands:

C9/Angular setup:

1- `$ nvm install node (installs latest node version within C9 workspace environment)`.

2- `$ nvm ls (see what version was installed, use that version in next command)`.

3- `$ nvm alias default (makes version the workspace default)`.

4- `$ npm i -g npm (updates npm version to match new node version)`.

5- `$ npm install -g @angular/cli`.

## If you want to create new app 
`$ ng new my-new-ngapp`

## If you want to run an existing app 

navigate to the folder of the app and do this command:
`$ ng serve --host 0.0.0.0 --port 8080 --disableHostCheck`
You will able to see it get it running. 

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
