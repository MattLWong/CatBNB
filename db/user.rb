module UsersFactory
  User.create({email: "mwong9968@gmail.com", password: "password", first_name: "Matt", last_name: "Wong", image_url: "http://res.cloudinary.com/mwong9968/image/upload/v1505782902/me_square_nepyma.png"})
  User.create({email: "guest@gmail.com", password: "password", first_name: "Guest", last_name: "Harland", image_url: "http://res.cloudinary.com/mwong9968/image/upload/v1505782902/me_square_nepyma.png"})
  User.create({email: "harry@gmail.com", password: "password", first_name: "Harry", last_name: "Truman", image_url: "https://media.creativemornings.com/uploads/user/avatar/89900/Profile_picture_square.jpg"})
end
