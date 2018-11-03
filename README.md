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

The app will always direct you to signin page. If you don't have an account, go to the `signup` page to sign-up. You can sign up with Twitter, Google or by entering a valid email and password. 

You can always `reset you password` link, if you forget your password. a link will be sent to your email to reset your password. 





## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
