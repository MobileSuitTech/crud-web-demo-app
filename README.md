# crud-web-demo-app
demo app that showcases an interactive web app with database, containerized with Docker with separate front-end and database containers

to run the app just use:  
sh script.sh  
then point your browser to:  
http://172.17.0.3:8888/  



DEPENDENCIES:
node js			current 10.9.0
angular 		current 1.4.5
npm				current 6.2.0


use this to install Mondodb: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/

if want specific version of MongoDB:
sudo apt-get install -y mongodb-org=4.0.2 mongodb-org-server=4.0.2 mongodb-org-shell=4.0.2 mongodb-org-mongos=4.0.2 mongodb-org-tools=4.0.2

to get the latest of node and npm:

install npm, then:
sudo npm install npm@latest -g
sudo npm cache clean -f
sudo npm install -g n
sudo n latest

yes so sudo npm audit fix --force
is EXTREMELY IMPORTANT TO DO, UNLESS WE ALREADY COME UP WITH THE RIGHT PACKAGES?

morgan@1.9.1
body-parser@1.18.3 
mongoose@5.2.14
express@4.16.3  
method-override@3.0.0

to create an angular project:
ng new "my-new-app"
also "ng init" will do same except without folder creation
then compile and run the app:
ng serve
and to run it in production with a different environment:
ng --prod serve



start the server with:
node server.js

if we want to make it a daemon:
sudo npm install -g forever
then:
forever start server.js

tocheck the dir of forever:
which forever
to check the processes associated with the daemon:
ps -ef|grep  node|grep -v grep

to stop the daemon:
forever stop server.js

