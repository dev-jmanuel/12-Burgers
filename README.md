# Burgers

Burgers is a full-stack browser application which logs your burger orders and the burgers that you've eaten.

## Table of Contents:

* [Getting Started](#getting-started)
* [Architecture](#architecture)

## Getting Started <a name="getting-started"></a>
To install, run the following codes in your git bash:

```bash
git clone https://github.com/joshespr/12-Burgers.git
```

```bash
npm install
```

To start the application on your localhost, run the following code in your git bash: 

```bash
node server.js
```

## Architecture <a name="architecture"></a>
This application follows the MVC design pattern: 

- For models, we use MySQL for its database to handle all our data.
- For views, we use Handlebars as our template engine to generate our HTML and CSS for additional styling. 
- For controllers, we use Express to handle routing, data parsing, and server set-up on the local host, as well as Node for data routing and executing javascript query calls to the database. Also has a homemade ORM to hold all our SQL statement functions

<!-- ## Change Log
Use this are to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an examples: 

01-01-2001 4:59pm - Application now has a fully-functional express server, with GET and POST routes for the book resource.

## Credits and Collaborations
Give credit (and a link) to other people or resources that helped you build this application.  -->

<!-- https://guides.github.com/features/wikis/ -->

--- 

**Author**: Joshua Manuel  
**License**: MIT 
**Version**: 1.0.0
