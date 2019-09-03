# JYU-BlOG
My personal website, blog, and portfolio.

Accessible at https://jayewe.com.

Created using Gatsby with the HeroBlog starter by Greg Lobinsky.

Hosted on AWS, served utilizing AWS S3, Cloudfront, Route 53.
Includes a contact form utilizing AWS API Gateway to create a lambda proxy forwarding messages to my email.
Includes Facebook comments and share buttons for Linkedin, Facebook, and Twitter.
Uses components from Ant Design. (Plan to migrate to Material-UI in due time)

## Project Showcase

Teamster  

The Tale of Eric  

SimpleCalendar (Currently _not_ so simple - will be scrapped and rebuilt. Backend basically nonexistant unfortunately)  

## Experiments

## Infinite XKCD

_Currently incompatible with mobile as of Aug 17, 2019._
Accesses the XKCD API through AWS API Gateway. Listens for a scroll threshold to be reached before fetching an additional comic. 
Comics are clickable for a fixed-dimensions zoom. 



