module ReviewsFactory
  positive_descriptions = [
    "Great place! I think my cat really enjoyed her stay here! Highly recommended! Wonderful, friendly host.",
    "Ideal spot, would come back again, the host took very good care of our baby.",
    "Definitely worth checking out.",
    "Best place I've ever sent my cat to stay!",
    "A+, would definitely bring my cat back!",
    "Awesome spot! Couldn't recommend it more highly.",
    "The host was exceptional, and my cat loved her stay!",
    "Solid place. High recommended.",
    "The best! I love leaving my cat here. The host is perfect.",
    "Very satisfied with the service.",
    "Would come back again if I needed a place for my cat to stay.",
    "My cat especially loved the amentities. So many amenities!",
    "I recommended this place to all my friends!",
    "Really enjoyed interacting with the host, and my cat was sad to leave!"
  ]

  negative_descriptions = [
    "Not recommended. Host was hard to communicate with and I thought my cat acted funny when she came back home.",
    "Meh. Try a different place.",
    "A bit overcrowded, although the host was very gracious.",
    "Unfortunately I had high expectations but alas I think my cat didn't enjoy her stay :(",
    "Stay away! Too many cats in one place!",
    "I don't recommend this place because I think there were too many other cats staying with her.",
    "Good place, but I thought the service was lacking."
  ]

  #positive reviews for top hits
  125.times do
    d = Date.new((2007 + rand(11)),(1 + rand(12)),(1 + rand(28)))
    Review.create!({
      guest_id: 1 + rand(28),
      listing_id: 1 + rand(3),
      description: positive_descriptions.shuffle[0],
      rating: 4 + rand(2),
      created_at: d
      })
  end

  #negative reviews for top hits
  20.times do
    d = Date.new((2007 + rand(11)),(1 + rand(12)),(1 + rand(28)))
    Review.create!({
      guest_id: 1 + rand(28),
      listing_id: 1 + rand(3),
      description: negative_descriptions.shuffle[0],
      rating: 2 + rand(2),
      created_at: d
      })
  end
  # 90% Positive reviews for the first 170 listings except
  3060.times do
    d = Date.new((2007 + rand(11)),(1 + rand(12)),(1 + rand(28)))
    Review.create!({
      guest_id: 1 + rand(28),
      listing_id: 4 + rand(170),
      description: positive_descriptions.shuffle[0],
      rating: 4 + rand(2),
      created_at: d
    })
  end

  340.times do
    d = Date.new((2007 + rand(11)),(1 + rand(12)),(1 + rand(28)))
    Review.create!({
      guest_id: 1 + rand(28),
      listing_id: 4 + rand(170),
      description: negative_descriptions.shuffle[0],
      rating: 2 + rand(2),
      created_at: d
    })
  end
end
