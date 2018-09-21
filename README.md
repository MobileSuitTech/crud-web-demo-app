# crud-web-demo-app
interactive web app with database, containerized with Docker with separate front-end and database containers



<ul>
<li>make a new directory:  </li>
mkdir todo  
<li>go to it:  </li>
cd todo  
<li>download this app's code:  </li>
git clone https://github.com/MobileSuitTech/crud-web-demo-app.git  
<li>navigate to the main directory:  </li>
cd crud-web-demo-app/ToDo/
<li>run the app with:  </li>
sh script.sh  
<li>then point your browser to:  </li>
http://172.17.0.3:8888/  
<li>..and click on "Run Demo" to load some dummy data into the app  </li>
<br /><br />
<li>to terminate the app:  </li>
docker stop frontend-mean backend-mongo  
<li>for further cleanup:  </li>
docker system prune  
</ul>
<br /><br /><br />



