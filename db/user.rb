module UsersFactory
  FEMALE_PICTURES = [
    "http://res.cloudinary.com/mwong9968/image/upload/v1506567382/profile-pictures/f-1.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v1506567383/profile-pictures/f-10.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v1506567383/profile-pictures/f-11.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v1506567383/profile-pictures/f-12.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v1506567383/profile-pictures/f-13.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v1506567382/profile-pictures/f-2.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v1506567382/profile-pictures/f-3.jpg",
    'http://res.cloudinary.com/mwong9968/image/upload/v1506567382/profile-pictures/f-4.jpg',
    "http://res.cloudinary.com/mwong9968/image/upload/v1506567382/profile-pictures/f-5.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v1506567382/profile-pictures/f-6.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v1506567383/profile-pictures/f-7.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v1506567382/profile-pictures/f-8.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v1506567383/profile-pictures/f-9.jpg"
  ]

  MALE_PICTURES = [
    "http://res.cloudinary.com/mwong9968/image/upload/v1506567367/profile-pictures/m-1.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v1506567368/profile-pictures/m-10.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v1506567368/profile-pictures/m-11.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v1506567368/profile-pictures/m-12.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v1506567368/profile-pictures/m-13.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v1506567368/profile-pictures/m-14.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v1506567368/profile-pictures/m-15.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v1506567367/profile-pictures/m-16.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v1506567367/profile-pictures/m-17.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v1506567367/profile-pictures/m-18.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v1506567367/profile-pictures/m-3.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v1506567367/profile-pictures/m-4.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v1506567368/profile-pictures/m-7.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v1506567368/profile-pictures/m-8.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v1506567368/profile-pictures/m-9.jpg"
  ]

  User.create!({email: "mwong9968@gmail.com", password: "password", first_name: "Matt", last_name: "Wong", image_url: "http://res.cloudinary.com/mwong9968/image/upload/v1505782902/me_square_nepyma.png"})

  User.create!({email: "harry@gmail.com", password: "password", first_name: "Sara", last_name: "Oswald", image_url: FEMALE_PICTURES[0]})
  User.create!({email: "harry1@gmail.com", password: "password", first_name: "Emma", last_name: "David", image_url: FEMALE_PICTURES[1]})
  User.create!({email: "harry2@gmail.com", password: "password", first_name: "Lauren", last_name: "Weinberg", image_url: FEMALE_PICTURES[2]})
  User.create!({email: "harry3@gmail.com", password: "password", first_name: "Stephanie", last_name: "Lane", image_url: FEMALE_PICTURES[3]})
  User.create!({email: "harry4@gmail.com", password: "password", first_name: "Laura", last_name: "Prezal", image_url: FEMALE_PICTURES[4]})
  User.create!({email: "harry5@gmail.com", password: "password", first_name: "Liz", last_name: "Davidson", image_url: FEMALE_PICTURES[5]})
  User.create!({email: "harry6@gmail.com", password: "password", first_name: "Amanda", last_name: "Cobbett", image_url: FEMALE_PICTURES[6]})
  User.create!({email: "harry7@gmail.com", password: "password", first_name: "Sihye", last_name: "Sternberg", image_url: FEMALE_PICTURES[7]})
  User.create!({email: "harry8@gmail.com", password: "password", first_name: "Christine", last_name: "Kunze", image_url: FEMALE_PICTURES[8]})
  User.create!({email: "harry9@gmail.com", password: "password", first_name: "Kirsten", last_name: "Slatsen", image_url: FEMALE_PICTURES[9]})
  User.create!({email: "harry10@gmail.com", password: "password", first_name: "Cleo", last_name: "Han", image_url: FEMALE_PICTURES[10]})
  User.create!({email: "harry11@gmail.com", password: "password", first_name: "Sandra", last_name: "Yeltsin", image_url: FEMALE_PICTURES[11]})
  User.create!({email: "harry12@gmail.com", password: "password", first_name: "Terry", last_name: "Wheeler", image_url: FEMALE_PICTURES[12]})

  User.create!({email: "harry13@gmail.com", password: "password", first_name: "Sean", last_name: "Kitridge", image_url: MALE_PICTURES[0]})
  User.create!({email: "harry14@gmail.com", password: "password", first_name: "Thom", last_name: "Long", image_url: MALE_PICTURES[1]})
  User.create!({email: "harry15@gmail.com", password: "password", first_name: "Luke", last_name: "Renner", image_url: MALE_PICTURES[2]})
  User.create!({email: "harry16@gmail.com", password: "password", first_name: "David", last_name: "Bond", image_url: MALE_PICTURES[3]})
  User.create!({email: "harry17@gmail.com", password: "password", first_name: "Harry", last_name: "Bales", image_url: MALE_PICTURES[4]})
  User.create!({email: "harry18@gmail.com", password: "password", first_name: "Kip", last_name: "Lovelace", image_url: MALE_PICTURES[5]})
  User.create!({email: "harry19@gmail.com", password: "password", first_name: "Michael", last_name: "Goldman", image_url: MALE_PICTURES[6]})
  User.create!({email: "harry20@gmail.com", password: "password", first_name: "Dave", last_name: "Lang", image_url: MALE_PICTURES[7]})
  User.create!({email: "harry21@gmail.com", password: "password", first_name: "Dan", last_name: "Bates", image_url: MALE_PICTURES[8]})
  User.create!({email: "harry22@gmail.com", password: "password", first_name: "Mickey", last_name: "Harpster", image_url: MALE_PICTURES[9]})
  User.create!({email: "harry23@gmail.com", password: "password", first_name: "Max", last_name: "Remnick", image_url: MALE_PICTURES[10]})
  User.create!({email: "harry24@gmail.com", password: "password", first_name: "Peter", last_name: "Olso", image_url: MALE_PICTURES[11]})
  User.create!({email: "harry25@gmail.com", password: "password", first_name: "Alex", last_name: "Yelsin", image_url: MALE_PICTURES[12]})
  User.create!({email: "harry26@gmail.com", password: "password", first_name: "Po", last_name: "Rudnov", image_url: MALE_PICTURES[13]})
  User.create!({email: "harry27@gmail.com", password: "password", first_name: "Kyle", last_name: "Polanski", image_url: MALE_PICTURES[14]})
end
