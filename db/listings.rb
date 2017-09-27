module ListingsFactory
  Listing.create({
    title: "Charming post-modern loft ready for kittens",
    description: "Wonderful luxurious location for a cat to come enjoy! Great views! Will surely exceed your cat's expectations!",
    host_id: 1,
    street_address: "490 Vermont St",
    city: "San Francisco",
    zip: 94107,
    country: "United States",
    price: "85",
    max_cats: 4,
    cover_img_url: "https://i.pinimg.com/originals/43/3e/1a/433e1ae247388df21c5469d21a0d1ab8.jpg",
    deluxe_bed: true,
    house_dog_friend: false,
    gourmet_meals: true,
    maze_playground: false,
    air_conditioning: true,
    laser_tag: false,
    natural_light: false,
    cuddling_partner: true,
    spay_neuter: true,
    vaccinated: true,
    flea: true,
    peeing: true,
    shedding: true,
    meowing: true
  })

  Listing.create({
    title: "Plush loft ready for cozy kitten",
    description: "Excellent spot for a cat to sit back and relax! Enjoy your vacation knowing your cat will enjoy his stay!",
    host_id: 1,
    street_address: "1890 Sutter St",
    city: "San Francisco",
    zip: 94115,
    country: "United States",
    price: "48",
    max_cats: 2,
    cover_img_url: "http://cdn.decoist.com/wp-content/uploads/2017/02/Smart-use-of-wooden-planks-to-create-cool-walkways-for-cats.jpg",
    deluxe_bed: true,
    house_dog_friend: false,
    gourmet_meals: true,
    maze_playground: true,
    air_conditioning: true,
    laser_tag: false,
    natural_light: false,
    cuddling_partner: true,
    spay_neuter: true,
    vaccinated: true,
    flea: true,
    peeing: false,
    shedding: true,
    meowing: true
  })

  Listing.create({
    title: "Rustic condo in Marina District ready for your furry friend",
    description: "Great place in the Marina District for a single cat to stay! Nice maze playground, laser tag, deluxe bed, quiet neighborhood, no other pets in the vicinity. Air conditioning, too!",
    host_id: 2,
    street_address: "2353 Lombard St",
    city: "San Francisco",
    zip: 94123,
    country: "United States",
    price: "85",
    max_cats: 1,
    cover_img_url: "https://cache-blog.credit.com/wp-content/uploads/2016/06/your-first-apartment.jpg",
    deluxe_bed: true,
    house_dog_friend: false,
    gourmet_meals: false,
    maze_playground: true,
    air_conditioning: true,
    laser_tag: true,
    natural_light: false,
    cuddling_partner: true,
    spay_neuter: true,
    vaccinated: true,
    flea: true,
    peeing: true,
    shedding: true,
    meowing: false
  })

  ADJECTIVES = [
    "Beautiful",
    "Swanky",
    "Grand",
    "Cozy",
    "Relaxing",
    "Charming",
    "Upscale",
    "Edwardian",
    "Fabulous",
    "Clean, Small",
    "Cozy & Accessible",
    "Private",
    "Friendly",
    "Spacious",
    "Quiet & Comfy",
    "Bright",
    "Nice",
    "Big, Cozy",
    "Rustic",
    "Victorian",
    "Gorgeous",
    "Fancy"
  ]

  TYPES = [
    "Apartment",
    "Apartment",
    "Studio",
    "Room",
    "Living Room",
    "Living Room",
    "Loft",
    "Guesthouse",
    "Guest Room",
    "Spot",
    "Home",
    "Condo",
    "Shared Space",
    "Bedroom",
    "Suite",
    "Flat",
    "House",
    "Treehouse"
  ]

  CAT = [
    "Cat",
    "Cat",
    "Cat",
    "Cat",
    "Kitten",
    "Kitty",
    "Pretty Awesome Cat",
    "Cool Cat",
    "Feline Buddy",
    "Furry Partner",
    "Furry Playmate",
    'Furry Companion'
  ]

  DESCRIPTIONS = [

  ]

  COVER_IMG_LINKS = [

  ]

# North San Francisco

  5.times do
    lat = 37.788 + (rand(100).to_f/100 * 0.017)
    lng = -122.398 - (rand(100).to_f/100 * 0.0605)

    Listing.create!({
      title: "#{ADJECTIVES.shuffle[0]} #{TYPES.shuffle[0]} ready for a #{CAT.shuffle[0]}",
      description: "#{DESCRIPTIONS.shuffle[0]}",
      host_id: (rand(20)),
      price: 18 + rand(65),
      street_address: "reverse geocode",
      city: "San Francisco",
      zip: 94123,
      country: "United States",
      cover_img_url: "#{COVER_IMG_LINKS.shuffle[0]}",
      max_cats: (rand(4)+1),
      latitude: lat,
      longitude: lng,
      deluxe_bed: (rand(2)==1 || rand(3)==1),
      house_dog_friend: (rand(2)==1 || rand(3)==1),
      gourmet_meals: (rand(2)==1),
      free_grooming: (rand(2)==1 || rand(3)==1),
      maze_playground: (rand(2)==1),
      air_conditioning: (rand(2)==1),
      laser_tag: (rand(2)==1),
      natural_light: (rand(2)==1 || rand(3)==1),
      cuddling_partner: (rand(2)==1 || rand(3)==1),
      spay_neuter: (rand(2)==1 || rand(3)==1),
      vaccinated: (rand(2)==1 || rand(3)==1),
      flea: (rand(2)==1 || rand(3)==1),
      peeing: (rand(2)==1 || rand(3)==1),
      shedding: (rand(2)==1 || rand(3)==1),
      meowing: (rand(2)==1 || rand(3)==1)
    })
  end

  # San Francisco

  20.times do
    lat = 37.7019 + (rand(100).to_f/100 * 0.089)
    lng = -122.398 - (rand(100).to_f/100 * 0.108)

    Listing.create!({

    })
  end
end

# Los Angeles
# Oakland
# San Jose
# ...
