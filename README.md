
# CatBNB

[Live](http://catbnb.us)

![Front Page](/public/cover.jpg)

CatBNB is a full-stack web application inspired by AirBNB. It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.

## Features and Implementation

### Map Search

One of the highlight of this project was creating a map that displays all the listing in the boundaries. Changing in the map dimensions should trigger an AJAX request that updates the state of the application. Then, once updated, the listing should refresh to display information of listing on the map.

What I really enjoyed was creating price points on the map. This was possible by creating a png file and passing in the price of each listing to the map.

In addition, I realized that the listings on the left half took time to load, and gave incorrect information (old information as the map was updating). I found a way to "hide" the content with an overlay and loading gif, that way, users know that the information is being loaded from the the server.

![Map Search](/public/map.jpg)

### Rendering Listings

Users should see a beautiful display of the information of each listing. What is essential gathering information from state and rendering it in a coherent, aesthetically-pleasing way that doesn't break on different screen sizes. There are over 34 attributes from state to render on the screen, including potentially many reviews.

![Listing](/public/listing.jpg)

Sample state:

![State](/public/state.jpg)

I had to figure out a way to add and remove CSS properties in React to get the strike-through lines and font weight of amenities. This was done through Javascript introduced CSS styling.

![Amenities](/public/amenities.jpg)

### Adding Listings

### Navigation

### Search and Autocomplete

### Stars

## Future Direction on Project

In addition to the features already implemented, I plan to continue work on this project. The next steps for HairBNB are outlined below.

### Profiles

Profiles are a standard feature on AirBNB and inform guests about the person hosting them. I will add a profiles page that allows the user to share public information with other users they interact with, once a connection is made.

### Host Approval

Hosts should be able to accept or decline requests from other users. I would like to create a way for hosts to validating a reservation.

### Uploading pictures and gallery

It would be amazing to allow users to view multiple pictures of a listing, instead of just the cover image. I managed to create galleries for my other projects, and with some more time I would like to create a JavaScript gallery to display multiple pictures of the listing.

### Fixed Reservation Box

I would also like to make the reservation box fixed, so that the box continues to appear on the screen as the viewer scrolls down the page.
