class MarkerManager {
  constructor(map, handleClick) {
    this.map = map;
    this.handleClick = handleClick;
    this.markers = {};

    this.priceIcon = {
      url: "http://res.cloudinary.com/mwong9968/image/upload/v1506550771/Speach-Bubble-5-icon_lraq4a.png",
      size: new google.maps.Size(38, 30),
      scaledSize: new google.maps.Size(38,30),
      origin: new google.maps.Point(0,0),
      labelOrigin: new google.maps.Point(19,13)
    }
  }

  updateMarkers(listings) {
    const listingsObj = {};
    listings.forEach(listing => listingsObj[listing.id] = listing)

    listings
      .filter(listing => !this.markers[listing.id])
      .forEach(newListing => this.createMarkerFromListing(newListing, this.handleClick))

    Object.keys(this.markers)
      .filter(listingId => !listingsObj[listingId])
      .forEach((listingId) => this.removeMarker(this.markers[listingId]))

    console.log("Markers are updated");
  }

  createMarkerFromListing(listing) {
    const position = new google.maps.LatLng(listing.latitude, listing.longitude);

    const marker = new google.maps.Marker({
      position,
      map: this.map,
      listingId: listing.id,
      optimized: false,
      icon: this.priceIcon,
      label: {text: "$" + listing.price, color: "white"}
    })

    marker.addListener('click', () => this.handleClick(listing))
    this.markers[marker.listingId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.listingId].setMap(null);
    delete this.markers[marker.listingId];
  }
}

export default MarkerManager;
