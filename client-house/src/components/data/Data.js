import React from "react";
export const nav = [
  {
    text: "home",
    path: "/",
  },
  {
    text: "about",
    path: "/about",
  },
  {
    text: "services",
    path: "/services",
  },
  {
    text: "blog",
    path: "/blog",
  },
  {
    text: "pricing",
    path: "/pricing",
  },
  {
    text: "contact",
    path: "/contact",
  },
];
export const featured = [
  {
    cover: "../images/hero/h1.png",
    name: "Family House",
    total: "122 Property",
  },
  {
    cover: "../images/hero/h2.png",
    name: "House & Villa",
    total: "155 Property",
  },
  {
    cover: "../images/hero/h3.png",
    name: "Apartment",
    total: "300 Property",
  },
  {
    cover: "../images/hero/h4.png",
    name: "Office & Studio",
    total: "80 Property",
  },
  {
    cover: "../images/hero/h6.png",
    name: "Villa & Condo",
    total: "80 Property",
  },
];
export const list = [
  {
    id: 1,
    cover: "../images/list/glory.jpeg",
    name: "Glory City",
    location: "Down quarter Bambili",
    category: "For Rent",
    price: "180k/yr",
    type: "Apartment",
  },
  {
    id: 2,
    cover: "../images/list/joshua.jpeg",
    name: "House of Joshua",
    location: "At corners Bambili",
    category: "For rent",
    price: "240K/yr",
    type: "Room",
  },
  {
    id: 3,
    cover: "../images/list/edma.jpg",
    name: "Edma house",
    location: "Opposite presberian church",
    category: "For Rent",
    price: "200K/yr",
    type: "Room",
  },
  {
    id: 4,
    cover: "../images/list/ebc.jpg",
    name: "A&A hostel",
    location: "Down Quarters behind Presbiterian church",
    category: "For Rents",
    price: "300K/yr",
    type: "1room",
  },
  {
    id: 5,
    cover: "../images/list/footprint.jpeg",
    name: "Mami Anna hostel",
    location: "up Qauatier beside mami Anna",
    category: "For Rent",
    price: "400K/yr",
    type: "studio",
  },
  {
    id: 6,
    cover: "../images/list/elisam.jpeg",
    name: "Ellisam",
    location: "Opposite police",
    category: "For Rent",
    price: "240K/yr",
    type: "Apartment",
  },
];
export const awards = [
  {
    icon: <i class="fa-solid fa-trophy"></i>,
    num: "32 k	",
    name: "Blue Mbaya Award",
  },
  {
    icon: <i class="fa-solid fa-briefcase"></i>,
    num: "43 k",
    name: "Kfusa Award",
  },
  {
    icon: <i class="fa-solid fa-lightbulb"></i>,
    num: "51 k",
    name: "Charmbuh Award",
  },
  {
    icon: <i class="fa-solid fa-heart"></i>,
    num: "42 k",
    name: "Njiseng award",
  },
];
export const location = [
  {
    id: 1,
    name: "Bastos, Yaounde",
    Apartments: "10 Apartments",
    cover: "./images/location/city-1.png",
  },
  {
    id: 2,
    name: "Upstation,Bamenda",
    Apartments: "10 Apartments",
    cover: "./images/location/city-2.png",
  },
  {
    id: 3,
    name: "Malingo,Buea",
    Apartments: " 10 Apartments",
    cover: "./images/location/city-3.png",
  },
  {
    id: 4,
    name: "DownBEach,Limbe",
    Apartments: " 10 Apartments",
    cover: "./images/location/city-4.png",
  },
  {
    id: 5,
    name: "Bonamoussadi,Douala",
    Apartments: " 10 Apartments",
    cover: "./images/location/city-5.png",
  },
  {
    id: 6,
    name: "Mayor Street,Buea",
    Apartments: " 10 Apartments",
    cover: "./images/location/city-6.png",
  },
];
export const team = [
  {
    list: "50",
    cover: "../images/customer/team-1.jpg",
    address: "Yaonde, Camerooon",
    name: "Berinyuy Vanessa",
    icon: [
      <i class="fa-brands fa-facebook-f"></i>,
      <i class="fa-brands fa-linkedin"></i>,
      <i class="fa-brands fa-twitter"></i>,
      <i class="fa-brands fa-instagram"></i>,
    ],
  },
  {
    list: "70",
    cover: "../images/customer/team-2.jpg",
    address: "Bamenda, Cameroon",
    name: "Ngi Gordon",
    icon: [
      <i class="fa-brands fa-facebook-f"></i>,
      <i class="fa-brands fa-linkedin"></i>,
      <i class="fa-brands fa-twitter"></i>,
      <i class="fa-brands fa-instagram"></i>,
    ],
  },
  
];
export const price = [
  {
    plan: "Basic",
    price: "29,000",
    ptext: "per user, per month",
    list: [
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "Gate for security",
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "Internal Toilet",
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "Running Pipe-borne Water",
      },
      {
        change: "color",
        icon: <i class="fa-solid fa-x"></i>,
        text: "Grocery Store",
      },
      {
        change: "color",
        icon: <i class="fa-solid fa-x"></i>,
        text: "Laundry and Sunning space",
      },
    ],
  },
  {
    best: "Best Value",
    plan: "Standard",
    price: "49,000",
    ptext: "per user, per month",
    list: [
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "Gate with guard",
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "Internal Toilet",
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "Running Pipe-borne Water",
      },
      {
        change: "color",
        icon: <i class="fa-solid fa-x"></i>,
        text: "Grocery Store",
      },
      {
        change: "color",
        icon: <i class="fa-solid fa-x"></i>,
        text: "Laundry and Sunning space",
      },
    ],
  },
  {
    plan: "Platinum",
    price: "79000",
    ptext: "2 user, per month",
    list: [
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "Gate with guard",
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "Internal Toilet",
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "Running Pipe-borne Water",
      },
      {
        change: "color",
        icon: <i class="fa-solid fa-x"></i>,
        text: "Grocery Store",
      },
      {
        change: "color",
        icon: <i class="fa-solid fa-x"></i>,
        text: "Laundry and Sunning space",
      },
    ],
  },
];
export const footer = [
  {
    title: "LAYOUTS",
    text: [
      { list: "Home Page" },
      { list: "About Page" },
      { list: "Service Page" },
      { list: "Property Page" },
      { list: "Contact Page" },
      { list: "Single Blog" },
    ],
  },
  {
    title: "ALL SECTIONS",
    text: [
      { list: "Headers" },
      { list: "Features" },
      { list: "Attractive" },
      { list: "Testimonials" },
      { list: "Videos" },
      { list: "Footers" },
    ],
  },
  {
    title: "COMPANY",
    text: [
      { list: "About" },
      { list: "Blog" },
      { list: "Pricing" },
      { list: "Affiliate" },
      { list: "Login" },
      { list: "Changelog" },
    ],
  },
  
];
export const detailedList = [
  {
    id: 1,
    cover: "../images/list/glory.jpeg",
    name: "Glory City",
    location: "Down quarter Bambili",
    category: "For Rent",
    price: "180,000Frs/yr",
    type: "Apartment",
    details: ' lorem ipfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'

  },
  {
    id: 2,
    cover: "../images/list/footprint.jpeg",
    name: "Footprint residence",
    location: "Beside Edma house",
    category: "For Sale",
    price: "240,000Frs/yr",
    type: "Self content",
    details: ' lorem ipfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'
  
  },
  {
    id: 3,
    cover: "../images/list/edma.jpg",
    name: "Edma house",
    location: "Opposite presberian church",
    category: "For Rent",
    price: "200,000frs/yr",
    type: "Single Room",
    details: ' lorem ipfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'

  },
  {
    id: 4,
    cover: "../images/list/p-4.png",
    name: "A&A hostel",
    location: "Down Quarters behind Presbiterian church",
    category: "For Rents",
    price: "300,000Frs/yr",
    type: "Self Content Rooms",
    details: ' lorem ipfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'

  },
  {
    id: 5,
    cover: "../images/list/p-5.png",
    name: "Mami Anna hostel",
    location: "up Qauatier beside mami Anna",
    category: "For Rent",
    price: "400,000Frs/yr",
    type: "Single Room/studio",
    details: ' lorem ipfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'

  },
  {
    id: 6,
    cover: "../images/list/p-6.png",
    name: "Fiscie Foundation",
    location: "Down Quarter",
    category: "For Rent",
    price: "240000Frs/yr",
    type: "Apartment/studio",
    details: ' lorem ipfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'

  }]
