# todo-list-v1
This is a todolist project using EJS, express and Node.js
->Skills: HTML, CSS, Bootstrap, JavaScript, Express, EJS.

<h3> Motive </h3> 
<p> The prime motivation behind the project was to built an newsletter signup website for a youtube news channel PUBLIC NEWS, which will allow users to subscribe to the channel newsletter and stay updated</p>

<h3>Time-Line</h3>
<p>Read the documentation of bootstrap framework and selected best template for sigup page. Added bootstrap cdn and custom style sheet. Edited body section of signup.html page</p> </br>
<p>Used Jumbotron Bootstrap for styling success .html and failure.html page</p></br>
<p>Moved ahead to make app.js (my server). Followed the basic procedure of initialising npm and installing npm packages. Installed express body-parser and request.</p>

<h3>Procedure and problems faced</h3>
<p>In order to handle client request, went through the documentation of express.Read routing and routing methods to handle get request of client.Followed the basic get method route and post method route sysntax from express routing documentation.For proper handling post request, corrected the action attribute of html pages to send information after clicking submit button (post request)</p> </br>
<p>Caught the post request and used the updated syntaxof body-parser to parse the information recieved after post request. Checked by consoling in my command line.</p> </br>
<p>Now, the biggest obstacle was to store my contacts or audiences. Searched various options but decided to stick with mailchimp software becuase of prior understanding of its documentaion via a webd course. Went through the documentation of mailchimp API to hanlde post request to mailchimp server. Faced problems during analysing the format of information to be sent. I made myself familiarize with post rquest syntax and after searching through documenationa and going through queries in stackoverflow playtform, I was able to make a post request to mailchimp using its API</p> </br>
<p>The mailchimp API demanded to to recieve contanct/ audience information in JSON object formate. To make a post request to external API, I followed node.js documenation of http.request. I had a little toruble in authentication but I figured it out. Analysing the status code from mailchimp API, I was able to render exat html page. The mailchimp was succesfully recieving my contatcs information</p> </br>
<p>I decided to deploy my project on heroku. I followed the instruction on heroku website to do so.</p>


## Snapshots:
### Home Page-
<img alt="home-image" src="IMAGES/day task.PNG">

### Success Page-
<img alt="success-image" src="IMAGES/work list.PNG">


## Acknowledgements:
The project is inspired by Angela Yu - Web development bootcamp.