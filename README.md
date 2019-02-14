![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## City Explorer

### Author: Tanner Seramur & Jacob Anderson

### Links and Resources
* [repo](https://github.com/TannerSeramur/30-city-explorer)
* [travis](https://www.travis-ci.com/TannerSeramur/30-city-explorer)
* [front-end](http://city-explorer-tanner-jake.s3-website.us-east-2.amazonaws.com/)

### Modules

#### `App.js`
##### Exported Values and Methods

#### `Card.js`
##### Exported Values and Methods
###### `Card({ details, type })
A class that takes in details and type props from Deck.js and returns jsx containing and html elements data for each

#### `Deck.js`
##### Exported Values and Methods
###### `Deck({ details, type })
A class that takes in details and type props from renderLocationDetails in Location.js and returning some formatting container jsx for the cards

#### `Home.js`
##### Exported Values and Methods
###### handleSubmit(e)
Takes in event and appends the url with the user input location (state.userLocation)

###### handleChange(E)
Takes in event and sets the state.userlocation of the event object to user input.

###### render()
Renders the home/landing page

#### `Location.js`
##### Exported Values and Methods
###### componentDidMount()
An async function that runs getLocationDetails when page loads

###### getLocationDetails()
An async function that gets location details and sets state

###### getResource(resource, location)
An asyn function that updates state of each resource in our state object

###### handleChange(e)
Handles new search input, updates state. Also changes state of location

###### handleSubmit(e)
Updates the URL

###### renderLocationDetails()
Runs loading bar until it gets state 

###### render()
Renders the data


#### Running the app
* `npm start`
  
#### Tests
* Run tests: npm test


