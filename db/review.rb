module ReviewsFactory
  positive_descriptions = [
    "Great location, my cat enjoyed her stay here! Highly recommended!",
    "Ideal spot, would come back again",
    "Definitely worth checking out.",
    "A+",
    "Awesome spot!",
    "My cat especially loved the amentities. So many amenities!"
  ]

  negative_descriptions = [
    "Not recommended."
  ]

  150.times do
    Review.create!({
      guest_id: 1 + rand(2),
      listing_id: 1 + rand(3),
      description: positive_descriptions.shuffle[0],
      rating: rand(4) + 2
      })
  end
end
