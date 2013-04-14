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

* Enterprise Agent(Teacher/Professor)

* Student

Working Flow
------------

### Phases ###

1. Position Information Submission Phase

   Professor upload/modify Position information and Enterprise information

2. Position Application Phase

   Student send application to a position

3. Professor Selection Phase

   Professor select students for a position who applied to the position

4. Professor Post-selection Phase

   Professor select students for opening position from available students

5. Intern Phase

   Student begin the internship in company

   * 1st week, upload enterprise acknowledge table

   * Following weeks, upload weekly report

   * Last week, upload intern summary report

6. Professor Grading Phase

   Professor grade students for their work during internship

7. Finalize Phase

   Open grade to students, get an overview report

### Check Points ###

* Phase 1

  Professor ensure the information of position

  Registered students receive email to start selection

* Phase 2

  Students receive email to acknowledge their application

  Professor receive email inform the selection phase

* Phase 3 - 4

  Students receive email for acception/adjustment

* Phase 5, each week

  Acknowledge email to student after upload a report

* Phase 6

  Inform student to get their grade

### Preparation Works ###

**Administrator** 

1. Import the account information (id and name)

2. Set the schedule (time-table)

   We have several phase in this system, a schedule states the start time
   and deadline of a phase.

**Other Users**

* Register

* Change Password

* Edit Profile

  Including following information

  + Email Address

  + Telephone Number

  + Change Photo

  + Upload Resume (CV) *For Student*

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

If you want to improve this project, I recommend you install `node-dev` to
run `index.js`.

### Browser ###

Any **Modern Browser** is supported. 

*It's sorry if u use IE 6-9, they should never be full supported.*

*Only support for IE>=8 to complete the basic bussiness flow.*

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
