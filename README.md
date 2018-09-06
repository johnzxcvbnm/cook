# <a href="https://the-cooking-epidemic.herokuapp.com/">The Cooking Epidemic</a>

<h3>Index</h3>

<ol>
<li><a href="#summary">Summary</a></li>
<li><a href="#built">Built With</a></li>
<li><a href="#user">User Stories</a></li>
<li><a href="#challenges">Challenges</a></li>
<li><a href="#future">Future Additions</a></li>
<li><a href="#links">Links</a></li>
</ol>

<hr id="summary">
<h3>Summary</h3>

<p>The Cooking Epidemic is a full CRUD application created from the ground up using Express and a Mongo Database.  It contains three separate controllers, features the 7 RESTful routes and follows a MVC format.</p>


<hr id="built">
<h3>Built With</h3>
Javascript, Node.js, MongoDB, Mongoose, Express, EJS/CSS


<hr id="user">
<h2>User Stories</h2>
<ul>
<li>As a guest, I can register a new User Account or login to an existing User Account</li>
<li>As a guest, I can browse all the recipes in the database</li>
<li>As a guest, I can view each individual recipe (show page)</li>
<li>As a User, I can log out</li>
<li>As a User, I can create new recipes and add them to the database</li>
<li>As a User, I can edit or delete recipes I've created</li>
<li>As a User, I can Rate any recipe</li>
<li>As a User, I can Comment on any recipe</li>
<li>As a User, I can Save my favorite recipes</li>
<li>As a User, I can see all the recipes I've saved on my personal User Page</li>
</ul>

<hr id="challenges">
<h2>Challenges</h2>

<p>I wanted The Cooking Epidemic to be a collection of recipes where users can rate, comment and save their favorite recipes.  One of the challenges I faced was allowing guest users to browse the collection while disallowing them to alter it (create, edit or delete recipes).  Essentially what I did was I passed the current session (logged in user) to the html file which then determined if a tool bar would appear or not.</p>

<p>Another tricky problem was how to create a saved recipe list.  The solution was to alter the users schema and add in a cookbook array.  This array would then save all the unique ID's of the belonging to each of the recipes.  Then when the user go to their user page, the database is called using the array of ID's, creating a unique subset of recipes that the user has created.</p>


<hr id="future">
<h2>Future Additions</h2>

<p>(Completed) Users can comment on recipes</p>

<p>(Completed) Users can add a rating on recipes</p>

<p>Change the index.html to make a 'splash' page, similar to how you see most other websites, instead of throwing you into the post list page.</p>

<p>Update the 'Whats for Dinner' link to be a search function as well as a random recipe selector</p>


<hr id="links">
<h2>Links</h2>
<ul>
<li><a href="https://the-cooking-epidemic.herokuapp.com/">The Cooking Epidemic</a></li>
<li><a href="http://kusching.com/#home">Portfolio</a></li>
<li><a href="https://github.com/johnzxcvbnm">GitHub</a></li>
<li><a href="https://www.linkedin.com/in/kusching/">LinkedIn</a></li>
</ul>
