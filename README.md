# Speakerbox

## Story of this Web App 

I wanted to feature music in this project, and so I thought it would be great to use Spotify, since the Spotify web API features a ton of the functionality I wanted to purvey to my users. However, coding this application was a huge task, so I decided that features like music streaming, rendering album artwork data, and allowing users to update their data within spotify are goals better left to future versions. This app allows users to save data on their favorite tracks, albums, and artists, and allows associating tracks data with albums data via dropdown. All data is stored in MongoDB Atlas. The entire app is written in javascript using Node.JS and Express as well as Mongoose to facilitate data Schemas and Models, and to communicate with MongoDB.

## Screenshots
### ERD

![Screen Shot 2020-07-31 at 10.25.59 AM](https://i.imgur.com/r4zhplI.png)

![Screen Shot 2020-08-06 at 3.14.51 PM](https://i.imgur.com/dkkFQGf.png)


### Wireframes

![Screen Shot 2020-07-31 at 7.25.18 PM](https://i.imgur.com/5c5mgJX.png)

![Screen Shot 2020-07-31 at 7.26.08 PM](https://i.imgur.com/Rnmgzam.png)

![Screen Shot 2020-08-03 at 6.11.31 PM](https://i.imgur.com/F415Jt3.png)

![spkrbx-revsd-wf-tracks](https://i.imgur.com/EFDP0X8.png)

### Screenshots from the Finished Application

![Screen Shot 2020-08-06 at 3.23.47 PM](https://i.imgur.com/cDsOWSg.png)

![Screen Shot 2020-08-06 at 3.25.04 PM](https://i.imgur.com/wQNZy0B.png)

![Screen Shot 2020-08-06 at 3.24.42 PM](https://i.imgur.com/c5iGOgW.png)

![Screen Shot 2020-08-06 at 4.29.44 PM](https://i.imgur.com/vctJAOH.png)

![Screen Shot 2020-08-06 at 3.25.21 PM](https://i.imgur.com/CL4jBt3.png)

![Screen Shot 2020-08-06 at 3.25.59 PM](https://i.imgur.com/YDy84zX.png)

## Technologies Used
* Node.JS
* Express
* MongoDB
* Mongoose
* Passport
* HTML5
* CSS3
* EJS View Engine
* JavaScript
* OAuth using Spotify

## Getting Started
Click [this link](https://speakerbox.herokuapp.com/) to open Speakerbox in Heroku.

## Next Steps

### From The Icebox:
* Add Update/Delete Functionality for Tracks and Artists
* Add streaming via a spotify widget
* Complete authorization to allow users to only update their personal DB documents
* Incorporate Album Artwork as an embedded schema within Albums