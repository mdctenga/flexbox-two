### Setting up a basic Meteor application

1) Create the project
2) Delete boiler plate files, autopublish, and insecure
3) Create the folders that most Meteor applications will need:
  - client
  - server
  - public
  - private
  - tests
  - lib
4) The highest priority in Meteor applications is data, so set up a db:
  - touch ./lib/collections.js
5) Instantiate the application
  - touch ./server/server.js
6) Meteor application data lives on the server and the client. Instead of a client constantly checking for new information, servers "publish" data and clients "subscribe" to servers.
  - touch ./server/publications.js
  - touch ./client/subscriptions.js
7) By deleting "insecure" in step 2, we can begin making the application secure by specifying what is "allowed"
  - touch ./server/security.js