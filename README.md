# crud-web-demo-app
demo app that showcases aptitude in making an interactive web app with database, containerized

so far only the front-end is done and we connected to version control Git with Github: 

DEPENDENCIES:
node js			current 10.9.0  needed 8.9
@angular/cli 	current	6.1.5	needed 6.1.5
npm				current 6.4.1	needed 5.1.1
yeoman			current 2.0.5	needed ?
with MEAN.js:
npm install -g generator-meanjs
with grunt:
grunt-cli@1.3.1

use this to install Mondodb: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/

if want specific version of MongoDB:
sudo apt-get install -y mongodb-org=4.0.2 mongodb-org-server=4.0.2 mongodb-org-shell=4.0.2 mongodb-org-mongos=4.0.2 mongodb-org-tools=4.0.2

to get the latest of node and npm:

install npm, then:
sudo npm install npm@latest -g
sudo npm cache clean -f
sudo npm install -g n
sudo n latest

after creating an angular project with angular-cli, 
don't forget to do the audit to remove the vulnerabilities (it reminds you of it)

to create an angular project:
ng new "my-new-app"
also "ng init" will do same except without folder creation
then compile and run the app:
ng serve
and to run it in production with a different environment:
ng --prod serve



start the server with:
node server.js
