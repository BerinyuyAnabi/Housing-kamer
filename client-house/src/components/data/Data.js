import React from "react"
export const nav = [
    
    {
        text:"home",
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
      text: "Contact",
      path: "/contact",
  },
]

export const footer = [
    {
      title: "LAYOUTS",
      text: [{ list: "Home Page" }, { list: "About Page" }, { list: "Service Page" }, { list: "Property Page" }, { list: "Contact Page" }, { list: "Single Blog" }],
    },
    {
      title: "ALL SECTIONS",
      text: [{ list: "Headers" }, { list: "Features" }, { list: "Attractive" }, { list: "Testimonials" }, { list: "Videos" }, { list: "Footers" }],
    },
    {
      title: "COMPANY",
      text: [{ list: "About" }, { list: "Blog" }, { list: "Pricing" }, { list: "Affiliate" }, { list: "Login" }, { list: "Changelog" }],
    },
  ]
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
  ]

  export const location = [
    {
      id: 1,
      name: "New Orleans, Louisiana",
      Villas: "12 Villas",
      Apartments: "10 Apartments",
      Offices: "07 Offices",
      cover: "./images/location/city-1.png",
    },
    {
      id: 2,
      name: "Jerrsy, United State",
      Villas: "12 Villas",
      Apartments: "10 Apartments",
      Offices: "07 Offices",
      cover: "./images/location/city-2.png",
    },
    {
      id: 3,
      name: "Liverpool, London",
      Villas: "12 Villas",
      Apartments: " 10 Apartments",
      Offices: "07 Offices",
      cover: "./images/location/city-3.png",
    },
    {
      id: 4,
      name: "NewYork, United States",
      Villas: "12 Villas",
      Apartments: " 10 Apartments",
      Offices: "07 Offices",
      cover: "./images/location/city-4.png",
    },
    {
      id: 5,
      name: "Montreal, Canada",
      Villas: "12 Villas",
      Apartments: " 10 Apartments",
      Offices: "07 Offices",
      cover: "./images/location/city-5.png",
    },
    {
      id: 6,
      name: "California, USA",
      Villas: "12 Villas",
      Apartments: " 10 Apartments",
      Offices: "07 Offices",
      cover: "./images/location/city-6.png",
    },
  ]

  export const price = [
    {
      plan: "Basic",
      price: "19000",
      ptext: "per user, per month",
      list: [
        {
          icon: <i class='fa-solid fa-check'></i>,
          text: "99.5% Guarantee",
        },
        {
          icon: <i class='fa-solid fa-check'></i>,
          text: "Internal toilet",
        },
        {
          icon: <i class='fa-solid fa-check'></i>,
          text: "Internal kitchen",
        },
        { change: "color", icon: <i class='fa-solid fa-x'></i>, text: "Balcony" }
      ],
    },
    {
      best: "Best Value",
      plan: "Standard",
      price: "49000",
      ptext: "per user, per month",
      list: [
        {
          icon: <i class='fa-solid fa-check'></i>,
          text: "99.5% Guarantee",
        },
        {
          icon: <i class='fa-solid fa-check'></i>,
          text: "Balcony",
        },
        {
          icon: <i class='fa-solid fa-check'></i>,
          text: "Internal kitchen",
        },
        {
          icon: <i class='fa-solid fa-check'></i>,
          text: "Balcony",
        },
        {
          icon: <i class='fa-solid fa-check'></i>,
          text: "Uinterupted Electricity",
        },
      ],
    },
    {
      plan: "Platinum",
      price: "29000",
      ptext: "2 user, per month",
      list: [
        {
          icon: <i class='fa-solid fa-check'></i>,
          text: "100% Guarantee",
        },
        {
          icon: <i class='fa-solid fa-check'></i>,
          text: "Internal toilet plus shower",
        },
        {
          icon: <i class='fa-solid fa-check'></i>,
          text: "Internal Kitchen",
        },
        {
          icon: <i class='fa-solid fa-check'></i>,
          text: "Balcony", 
        },
        
      ],
    },
  ]
  export const list = [
    {
      id: 1,
      cover: "../images/list/p-1.png",
      name: "Red Carpet Real Estate",
      location: "210 Zirak Road, Canada",
      category: "For Rent",
      price: "$3,700",
      type: "Apartment",
    },
    {
      id: 2,
      cover: "../images/list/p-2.png",
      name: "Fairmount Properties",
      location: "5698 Zirak Road, NewYork",
      category: "For Sale",
      price: "$9,750",
      type: "Condos",
    },
    {
      id: 3,
      cover: "../images/list/p-7.png",
      name: "The Real Estate Corner",
      location: "5624 Mooker Market, USA",
      category: "For Rent",
      price: "$5,860",
      type: "Offices",
    },
    {
      id: 4,
      cover: "../images/list/p-4.png",
      name: "Herringbone Realty",
      location: "5621 Liverpool, London",
      category: "For Sale",
      price: "$7,540",
      type: "Homes & Villas",
    },
    {
      id: 5,
      cover: "../images/list/p-5.png",
      name: "Brick Lane Realty",
      location: "210 Montreal Road, Canada",
      category: "For Rent",
      price: "$4,850",
      type: "Commercial",
    },
    {
      id: 6,
      cover: "../images/list/p-6.png",
      name: "Banyon Tree Realty",
      location: "210 Zirak Road, Canada",
      category: "For Sale",
      price: "$2,742",
      type: "Apartment",
    },
  ]