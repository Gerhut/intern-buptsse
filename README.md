Intern BuptSSE
==============

This project is a web based system designed to manage the Students'
internship during school. 

It's designed for School of Software Engineering, BUPT
(Beijing University of Post and Telecommunication) as the Course Work of TSP
(Team Software Process improvement) class.

Roles
-----

* Administrator

* Enterprise Agent(Teacher)

* Student

Working Flow
------------

Deployment
----------

### Server ###

Requirement:

* Linux Server is Better

* Nginx Server support Reverse Proxy

* Mongodb service on port 27017

* Node.js &gt; 0.10.0 and npm is required

Steps:

1. Include the `nginx_config` config file to the Nginx configuration.

2. Restart the nginx service.

3. Run `npm install` script under the root folder of project.

4. Run `npm test` to ensure the compatibality of your configuration.

5. Run `index.js` or `npm start`

### Browser ###

Any **Modern Browser** is supported. 

*It's sorry if u use IE 6-9, they should never be supported.*

For Chinese user using a browser with multi-layout engine, pls switch your
browser to the "Fast Mode" if it's not turned on by default.

Technical Detail
----------------

### Server ###

Using [Node.js](#)

Using [Mongoose ORM](#)

Using [Mongodb](#)

### Browser ###

Using [Twitter Bootstrap](http://twitter.github.com/bootstrap/)

Using [Zepto.js](#)

License
-------

Copyright 2013 Shinohane&lt;imandry.c@gmail.com&gt;

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
