-- Restaurants
insert into restaurants (
    name, address, street, state, phone, menu, picture
)
values (
    'Fresh', '111 Restaurant Dr.', '', 'GA', '1234567890', 'fresh.com/menu?', 'fresh.pic'
);

insert into restaurants (
    name, address, street, state, phone, menu, picture
)
values (
    'Ashs Burrito Shop', '222 Tech Villiage Ln.', '', 'GA', '0987654321', 'ashburritohut.org/menu', 'ash_makes_burritos.org/image'
);

insert into restaurants (
    name, address, street, state, phone, menu, picture
)
values (
    'Ceils Seasonal Seafood', '333 Idonotknow St.', '', 'CA', '1112223333', 'runningouttaideas.com/menu', 'guy-having-allergic-reaction.en'
);

insert into restaurants (
    name, address, street, state, phone, menu, picture
)
values (
    'Pizzaborg', '444 Thatsounds Cool Blvd.', '', 'GA', '4445556666', 'robotpizza.net/menu', 'pizza-robot.com/dancingmakesyoudumb#thuglife#hanshotfirst#apimpnamedslickback'
);

-- Users
insert into users (
    first_name, last_name, email, password
)
values 
    ('Chris', 'Childers', 'christopher.childers7@gmail.com', 'GrumpyGrapes0'),
    ('Chris', 'Aquino', 'radishmouse@aol.com', 'abc123'),
    ('Tenth', 'Doctor', 'tenthdoctor@who.tardis', 'dalek'),
    ('Ainz', 'Ool Gown', 'momanga@yggdrisil.net', 'TheSorcerorKing'),
    ('Scooby', 'Doo', 'mysterymachine@meddlingkids.dog', 'ScoobySnack');

-- Reviews
insert into reviews (
    score, content, restaurant_id, user_id)

values 
    (1, 'not only was the restaurant fake, but so was the address!', 1, 4),
    (5, 'Better than in my wildest dreams!', 1, 2),
    (3, 'The food was good. What was not so good was that I discovered a shellfish allergy :(', 3, 3),
    (5, 'Revery ring ras rerishish!', 2, 5),
    (1, 'I dont even know anymore', 4, 1);

-- Favorites
insert into favorites (
    user_id, restaurant_id
)
values 
    (5, 1),
    (5, 2),
    (5, 3),
    (1, 1),
    (5, 4),
    (3, 2);