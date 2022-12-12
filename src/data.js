

const list = [
    {
      id: 1,
      title: "The Psychology of Money",
      author: "by Morgan Housel | 25 April 2018",
      price: 32,
      img: "https://m.media-amazon.com/images/I/41v+g6LqafL._SY344_BO1,204,203,200_.jpg",
      amount: 1,
    },
    {
      id: 2,
      title: "The Philosophy of Life",
      author: "by Zeyad zeyadeh  | 29 December 2021",
      price: 15,
      img: "https://m.media-amazon.com/images/I/41DqILbDbDL._SX322_BO1,204,203,200_.jpg",
      amount: 1,
    },
    {
      id: 3,
      title: "Physical Chemistry: Principles and Applications in Biological Sciences ",
      author: "by Ignacio Tinoco | 25 November 2016",
      price: 65,
      img: "https://m.media-amazon.com/images/I/51fRCKYaRdL._SX397_BO1,204,203,200_.jpg",
      amount: 1,
    },
    {
      id: 4,
      title: "Anti-Bullying Through Sports",
      author: "by Fred Spencer | 29 November 2022",
      price: 57,
      img: "https://m.media-amazon.com/images/I/5189PCZS++L.jpg",
      amount: 1,
    },
    {
      id: 5,
      title: "The Totally Awesome Book of Useless Information",
      author: "by Noel Botham  | 5 June 2012",
      price: 149,
      img: "https://m.media-amazon.com/images/I/511z+WBjO8L._SX359_BO1,204,203,200_.jpg",
      amount: 1,
    },
    {
      id: 6,
      title: "Dinner in One",
      author: "by Melissa Clark | 6 September 2022",
      price: 24.99,
      img: "https://m.media-amazon.com/images/I/51vu6x7UbrL._SX405_BO1,204,203,200_.jpg",
      amount: 1,
    },
    {
      id: 7,
      title: "American Vampire Omnibus ",
      author: "by Scott Snyder  | 4 October 2021",
      price: 74.5,
      img: "https://m.media-amazon.com/images/I/51sIrCFz4WL._SX335_BO1,204,203,200_.jpg",
      amount: 1,
    },
    {
      id: 8,
      title: "The Prophet",
      author: "by Khalil Gibran  | 22 December 2019",
      price: 18.99,
      img: "https://m.media-amazon.com/images/I/51xRGy3Ln1L._SX322_BO1,204,203,200_.jpg",
      amount: 1,
    },
    {
      id: 9,
      title: "Blossom Moral Story Book for Kids ",
      author: "by Content Team at Target Publications",
      price: 50,
      img: "https://m.media-amazon.com/images/I/7122h3jWvEL._AC_UY327_FMwebp_QL65_.jpg",
      amount: 1,
    },
    {
      id: 10,
      title: "Brain Activity Book for Kids",
      author: "by Maple Press | 1 September 2021",
      price: 66.5,
      img: "https://m.media-amazon.com/images/I/7175YpTSa7L._AC_UY327_FMwebp_QL65_.jpg",
      amount: 1,
    },
    {
      id: 11,
      title: "Willy the Silly Panda",
      author: "by Rebecca Smith  | 14 December 2021",
      price: 22,
      img: "https://m.media-amazon.com/images/I/71-ocPGQIJL._AC_UY327_FMwebp_QL65_.jpg",
      amount: 1,
    },
    {
      id: 12,
      title: "Grandma's Bag of Stories",
      author: "by Sudha Murty | 1 January 2015",
      price: 59,
      img: "https://m.media-amazon.com/images/I/81jv44QdNwL._AC_UY327_FMwebp_QL65_.jpg",
      amount: 1,
    },
    {
      id: 13,
      title: "The Economics Book",
      author: "by DK  | 6 February 2018",
      price: 48.99,
      img: "https://m.media-amazon.com/images/I/51n4tcOl9fL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
      amount: 1,
    },
    {
      id: 14,
      title: "Developing Motor and Social Skills",
      author: "by Christopher Denning  | 08 December 2014",
      price: 47.99,
      img: "https://m.media-amazon.com/images/I/51EFEERJlRL.jpg",
      amount: 1,
    },
    {
      id: 15,
      title: "Fairy Tale",
      author: "by Stephen King  | 09 Mars 2016",
      price: 16.99,
      img: "https://m.media-amazon.com/images/I/51r6QPk-vHL.jpg",
      amount: 1,
    },
    {
      id: 16,
      title: "The Music Never Stops",
      author: "by Peter Shapiro  | 2 August 2022",
      price: 25,
      img: "https://m.media-amazon.com/images/I/51KPnCaEdTL._SX338_BO1,204,203,200_.jpg",
      amount: 1,
    },
    {
      id: 17,
      title: "Ibn Khaldun: An Intellectual Biography",
      author: "by Robert Irwin | 2 Juin 2013",
      price: 88,
      img: "https://m.media-amazon.com/images/I/51XRW1z0tSL.jpg",
      amount: 1,
    },
    {
      id: 18,
      title: "From Blood and Ash",
      author: "by Jennifer L.Armentrout  | 18 Janury 2011",
      price: 23.5,
      img: "https://m.media-amazon.com/images/I/51M+TIzXbdL.jpg",
      amount: 1,
    },
    {
      id: 19,
      title: "Elon Musk: the Quest for a Fantastic Future",
      author: "by Ashlee Vance | 25 mai 2022",
      price: 115,
      img: "https://m.media-amazon.com/images/I/51IQzkj0+NL.jpg",
      amount: 1,
    },
    {
      id: 20,
      title: "The Cold War",
      author: "by Odd Arne Westad | 15 October 2019",
      price: 86,
      img: "https://m.media-amazon.com/images/I/41xtl6VN1HL._SX322_BO1,204,203,200_.jpg",
      amount: 1,
    },
    {
      id: 21,
      title: "Soul Eater: The Perfect Edition ",
      author: "by Atsushi Ohkubo | 29 November 2022",
      price: 32,
      img: "https://m.media-amazon.com/images/I/4127Rn7gjxL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
      amount: 1,
    },
  
  ];


export default list;