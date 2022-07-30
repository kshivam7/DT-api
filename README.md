# DT-api
# API Documentation is word file!

# Api Documentation
Introduction
Welcome to the official Api documentation of out api. You can use this api by adding express, javascript and mongodb in your in your project and try npm to install. This api use to create nudge as per given data.
Usage
This is compatible with node.js.
Our base url : api/v3/app.
Get
Request "get" for get the user by using _id url: /api/v3/app//events?id=:event_id.
this request will provide you the user details from database. 
Get
Request "get" for get the recency and paginate results. url: /api/v3/app/events?type=latest&limit=5&page=1. This is provide you the recency and paginate result by using limit and page url parameters by using skip.
Post
Request "post" to register a new user and you have to follow the object given in table below Url for post is url: /api/v3/app/events and the payload for this request is name, files[image], tagline, schedule, description, moderator, category, sub_category and rigor_rank. 
Put
Request "put" url: /api/v3/app/events/:id this uses same payload as post request name, files[image], tagline, schedule, description, moderator, category, sub_category and rigor_rank.
Delete
Request "delete" for delete the user using _id from the database url:   /api/v3/app/events/:/id 
so this is the working of api and all request to get the data post the data and delete.

API
There are the urls of this api and payload for request follow up this table to get use to it and it's important to read documentation before use any library or api.
 
Object Model
"type:""event""
uid:18 (user id)
name: Name of the event
tagline: A proper tag-line for the event
schedule: (Date + time) Timestamp
description: String
files[image]: Image file (File upload)
moderator: A user who is going to host
category: Category of the event
sub_category: Sub category
rigor_rank: Integer value
attendees: Array of user Id's who is attending the event
Database
We used mongodb in this and without schema and mongoose. In this we user mongodb driver to connect to db and perform all insert, delete, find, etc. 

