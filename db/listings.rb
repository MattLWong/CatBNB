module ListingsFactory
  Listing.create({
    title: "Charming post-modern loft ready for kittens",
    description: "Luxurious location for a cat to come enjoy! Great views! This will surely exceed your cat's expectations!",
    host_id: 1,
    street_address: "490 Vermont St",
    city: "San Francisco",
    zip: 94107,
    country: "United States",
    price: "65",
    max_cats: 4,
    cover_img_url: "http://res.cloudinary.com/mwong9968/image/upload/v1506563785/listing-covers/16.jpg",
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
    description: "Excellent spot for a cat to sit back and relax! Relax during your vacation knowing your cat will enjoy his or her stay!",
    host_id: 2,
    street_address: "1890 Sutter St",
    city: "San Francisco",
    zip: 94115,
    country: "United States",
    price: "48",
    max_cats: 2,
    cover_img_url: "http://res.cloudinary.com/mwong9968/image/upload/v1506563771/listing-covers/cover-2.jpg",
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
    description: "Great location in the Marina District for a single mellow cat to stay! Includes playground, laser tag with host, deluxe bed, quiet neighborhood, no other pets in the vicinity. Air conditioning, too!",
    host_id: 3,
    street_address: "2353 Lombard St",
    city: "San Francisco",
    zip: 94123,
    country: "United States",
    price: "85",
    max_cats: 1,
    cover_img_url: "http://res.cloudinary.com/mwong9968/image/upload/v1506999654/listing-covers/27.jpg",
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
    "Fabulous",
    "Clean, Quiet",
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
    "Cat",
    "Kitten",
    "Kitty",
    "Pretty Cool Cat",
    "Cool Cat",
    "Feline Buddy",
    "Furry Partner",
    "Furry Playmate",
    'Furry Companion'
  ]

  DESCRIPTIONS = [
    "Wonderfully secluded, great place for your cat to stay with plenty of amenities. The perfect place for your cat to stay while you travel the globe. We do everything to ensure the best possible stay for your cat here.",
    "Well-located spot where you can drop off your cats knowing that they will be well taken care of. Grooming included. Ideal for cats who are territorial and want a place for themselves. We provide purified water and take all precautions to ensure your cat will enjoy his or her stay with us.",
    "Ideal location for a cat that needs all the amenities that will leave him or her feeling great while you travel the world. We accommodate all kinds of cat personalities and have a great track record. We provide high quality facilities and nutritious organic meals for your cat.",
    "Cozy place for your cat to stay while you’re off exploring the globe. We accepts only your cats and no other guests at the same time, to ensure they get the quality care they deserve."

  ]

  COVER_IMG_LINKS = [
    "http://res.cloudinary.com/mwong9968/image/upload/v1506999655/listing-covers/26.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v1506563770/listing-covers/25.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v1506563762/listing-covers/24.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v1506563765/listing-covers/23.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v1506563785/listing-covers/21.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v1506563787/listing-covers/20.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v1506563760/listing-covers/1.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v1506563774/listing-covers/10.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v1506563777/listing-covers/12.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v1506563777/listing-covers/13.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v1506563777/listing-covers/14.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v1506563795/listing-covers/15.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v1506563788/listing-covers/17.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v1506563784/listing-covers/18.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v1506563800/listing-covers/19.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v1506563762/listing-covers/2.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v1506563787/listing-covers/20.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v1506563766/listing-covers/5.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v1506563764/listing-covers/cover-3.jpg"
  ]

  # North San Francisco
  10.times do
    lat = 37.788 + (rand(100).to_f/100 * 0.017)
    lng = -122.398 - (rand(100).to_f/100 * 0.0605)

    Listing.create!({
      title: "#{ADJECTIVES.shuffle[0]} #{TYPES.shuffle[0]} ready for a #{CAT.shuffle[0]}",
      description: "#{DESCRIPTIONS.shuffle[0]}",
      host_id: rand(28)+1,
      price: 25 + rand(80),
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

  30.times do
    lat = 37.7019 + (rand(100).to_f/100 * 0.089)
    lng = -122.398 - (rand(100).to_f/100 * 0.108)

    Listing.create!({
      title: "#{ADJECTIVES.shuffle[0]} #{TYPES.shuffle[0]} ready for a #{CAT.shuffle[0]}",
      description: "#{DESCRIPTIONS.shuffle[0]}",
      host_id: (rand(28)+1),
      price: 25 + rand(85),
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

  #bereley oakland
  40.times do
    lat = 37.805 + (rand(100).to_f/100 * 0.071)
    lng = -122.244 - (rand(100).to_f/100 * 0.046)

    Listing.create!({
      title: "#{ADJECTIVES.shuffle[0]} #{TYPES.shuffle[0]} ready for a #{CAT.shuffle[0]}",
      description: "#{DESCRIPTIONS.shuffle[0]}",
      host_id: (rand(28)+1),
      price: 25 + rand(85),
      street_address: "reverse geocode",
      city: "Oakland",
      zip: 94709,
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

  # Davis
  30.times do
    lat = 38.532 + (rand(100).to_f/100 * 0.034)
    lng = -121.6989 - (rand(100).to_f/100 * 0.079)

    Listing.create!({
      title: "#{ADJECTIVES.shuffle[0]} #{TYPES.shuffle[0]} ready for a #{CAT.shuffle[0]}",
      description: "#{DESCRIPTIONS.shuffle[0]}",
      host_id: (rand(28)+1),
      price: 25 + rand(85),
      street_address: "reverse geocode",
      city: "Davis",
      zip: 95616,
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

  # LOS ANGELES
  30.times do
    lat = 34.014 + (rand(100).to_f/100 * 0.025)
    lng = -118.457 - (rand(100).to_f/100 * 0.05)

    Listing.create!({
      title: "#{ADJECTIVES.shuffle[0]} #{TYPES.shuffle[0]} ready for a #{CAT.shuffle[0]}",
      description: "#{DESCRIPTIONS.shuffle[0]}",
      host_id: (rand(28)+1),
      price: 25 + rand(85),
      street_address: "reverse geocode",
      city: "Los Angeles",
      zip: 90291,
      country: "United States",
      cover_img_url: "#{COVER_IMG_LINKS.shuffle[0]}",
      max_cats: rand(4)+1,
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

  30.times do
    lat = 32.81 + (rand(100).to_f/100 * 0.03)
    lng = -117.227 - (rand(100).to_f/100 * 0.05)

    Listing.create!({
      title: "#{ADJECTIVES.shuffle[0]} #{TYPES.shuffle[0]} ready for a #{CAT.shuffle[0]}",
      description: "#{DESCRIPTIONS.shuffle[0]}",
      host_id: rand(28) +1,
      price: 25 + rand(85),
      street_address: "reverse geocode",
      city: "San Diego",
      zip: 93709,
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
end
