<<<<<<< HEAD
// hotelDetails.js - Dynamic Hotel Details Page with Meal Selection

// Complete hotel database with all details
const hotelDatabase = {
  "nile-luxury": {
    id: "nile-luxury",
    name: "Nile Luxury Resort",
    location: "Corniche El Nil, Cairo, Egypt",
    shortLocation: "Cairo, Egypt",
    price: 1200,
    rating: 5,
    reviews: 248,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200",
    description: "Experience the ultimate luxury on the banks of the majestic Nile River. Our five-star resort offers breathtaking views of the pyramids and combines modern elegance with authentic Egyptian hospitality.",
    amenities: [
      { icon: "fa-swimming-pool", name: "Swimming Pool" },
      { icon: "fa-spa", name: "Spa & Wellness" },
      { icon: "fa-utensils", name: "Restaurant" },
      { icon: "fa-dumbbell", name: "Fitness Center" },
      { icon: "fa-wifi", name: "Free WiFi" },
      { icon: "fa-parking", name: "Free Parking" },
      { icon: "fa-concierge-bell", name: "Room Service" },
      { icon: "fa-cocktail", name: "Bar & Lounge" },
      { icon: "fa-desktop", name: "Business Center" },
    ],
    rooms: [
      {
        name: "Single Room",
        description: "Perfect for solo travelers",
        price: 1200,
        image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400",
        beds: "1 Single Bed",
        guests: 1,
        size: "25 m²",
      },
      {
        name: "Double Room",
        description: "Comfortable stay for couples",
        price: 1500,
        image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=400",
        beds: "1 Double Bed",
        guests: 2,
        size: "35 m²",
      },
      {
        name: "Executive Suite",
        description: "Spacious luxury with living area",
        price: 2000,
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400",
        beds: "1 King Bed",
        guests: 3,
        size: "55 m²",
        extras: ["Living Room"],
      },
    ],
  },
  "red-sea": {
    id: "red-sea",
    name: "Red Sea Paradise",
    location: "Hurghada, Red Sea",
    shortLocation: "Hurghada, Red Sea",
    price: 900,
    rating: 4.5,
    reviews: 180,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200",
    description: "Beachfront resort with world-class diving, crystal clear waters and luxurious amenities for a relaxing Red Sea getaway.",
    amenities: [
      { icon: "fa-swimming-pool", name: "Swimming Pool" },
      { icon: "fa-dumbbell", name: "Fitness Center" },
      { icon: "fa-umbrella-beach", name: "Private Beach" },
      { icon: "fa-utensils", name: "Restaurant" },
      { icon: "fa-wifi", name: "Free WiFi" }
    ],
    rooms: [
      { name: "Standard Sea View", description: "Cozy room with sea view", price: 900, image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400", beds: "1 Double Bed", guests: 2, size: "30 m²" },
      { name: "Deluxe Sea View", description: "Larger room with balcony and sea view", price: 1150, image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=400", beds: "1 King Bed", guests: 3, size: "40 m²" }
    ]
  },

  "alexandria-bay": {
    id: "alexandria-bay",
    name: "Alexandria Bay Hotel",
    location: "Alexandria, Mediterranean",
    shortLocation: "Alexandria, Mediterranean",
    price: 750,
    rating: 4.4,
    reviews: 132,
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200",
    description: "Modern hotel overlooking the Mediterranean with easy access to historic sites and seaside promenades.",
    amenities: [
      { icon: "fa-wifi", name: "Free WiFi" },
      { icon: "fa-parking", name: "Parking" },
      { icon: "fa-utensils", name: "Restaurant" }
    ],
    rooms: [
      { name: "City View", description: "Comfortable room with city or sea views", price: 750, image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200", beds: "1 Double Bed", guests: 2, size: "28 m²" },
      { name: "Family Room", description: "Spacious room for families", price: 980, image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400", beds: "2 Double Beds", guests: 4, size: "45 m²" }
    ]
  },

  "aswan-oasis": {
    id: "aswan-oasis",
    name: "Aswan Oasis Retreat",
    location: "Aswan, Upper Egypt",
    shortLocation: "Aswan, Upper Egypt",
    price: 850,
    rating: 5,
    reviews: 98,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200",
    description: "Boutique hotel near ancient temples with Nile views and traditional hospitality.",
    amenities: [
      { icon: "fa-swimming-pool", name: "Pool" },
      { icon: "fa-spa", name: "Spa" },
      { icon: "fa-concierge-bell", name: "Concierge" }
    ],
    rooms: [
      { name: "Classic Room", description: "Comfortable stay with Nile view options", price: 850, image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400", beds: "1 Double Bed", guests: 2, size: "30 m²" },
      { name: "Suite", description: "Spacious suite with sitting area", price: 1300, image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=400", beds: "1 King Bed", guests: 3, size: "50 m²", premium: true }
    ]
  },

  "luxor-valley": {
    id: "luxor-valley",
    name: "Luxor Valley Resort",
    location: "Luxor, Upper Egypt",
    shortLocation: "Luxor, Upper Egypt",
    price: 1100,
    rating: 4.9,
    reviews: 210,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200",
    description: "Elegant resort steps away from the Valley of the Kings and ancient wonders, offering refined comfort and concierge services.",
    amenities: [
      { icon: "fa-parking", name: "Parking" },
      { icon: "fa-dumbbell", name: "Fitness Center" },
      { icon: "fa-utensils", name: "Fine Dining" }
    ],
    rooms: [
      { name: "Standard", description: "Classic comfort near heritage sites", price: 1100, image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200", beds: "1 Double Bed", guests: 2, size: "32 m²" },
      { name: "Royal Suite", description: "Luxurious suite for a memorable stay", price: 2200, image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=400", beds: "1 King Bed", guests: 4, size: "75 m²", premium: true }
    ]
  },

  "sharm-paradise": {
    id: "sharm-paradise",
    name: "Sharm Paradise Beach",
    location: "Sharm El Sheikh, Sinai",
    shortLocation: "Sharm El Sheikh, Sinai",
    price: 950,
    rating: 4.5,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200",
    description: "All-inclusive beach resort with spectacular coral reefs, water sports and desert excursions.",
    amenities: [
      { icon: "fa-umbrella-beach", name: "Private Beach" },
      { icon: "fa-swimming-pool", name: "Pool" },
      { icon: "fa-utensils", name: "Restaurants" }
    ],
    rooms: [
      { name: "Beachfront Room", description: "Direct access to the beach", price: 950, image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400", beds: "1 Double Bed", guests: 2, size: "35 m²" },
      { name: "Family Suite", description: "Room for families with extra space", price: 1400, image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400", beds: "2 Double Beds", guests: 4, size: "55 m²" }
    ]
  }
};

// Meal options database
const mealOptions = [
  {
    id: "full-board",
    name: "Full Board",
    subtitle: "All meals included",
    price: 85,
    icon: "fa-utensils",
    color: "#E4D00A",
    bgColor: "#F9F6C1",
    hoverColor: "#C9B609",
    features: [
      "Breakfast buffet",
      "Lunch (3-course menu)",
      "Dinner (4-course menu)",
      "Complimentary tea & coffee"
    ]
  },
  {
    id: "half-board",
    name: "Half Board",
    subtitle: "Breakfast & dinner",
    price: 55,
    icon: "fa-coffee",
    color: "#C0C0C0",
    bgColor: "#F0F0F0",
    hoverColor: "#A8A8A8",
    features: [
      "Breakfast buffet",
      "Dinner (3-course menu)",
      "Complimentary tea & coffee"
    ]
  },
  {
    id: "breakfast-only",
    name: "Breakfast Only",
    subtitle: "Start your day right",
    price: 25,
    icon: "fa-bread-slice",
    color: "#CD7F32",
    bgColor: "#FFE2C4",
    hoverColor: "#B56F28",
    features: [
      "Full breakfast buffet",
      "Fresh juices & beverages",
      "Continental & Egyptian options"
    ]
  },
  {
    id: "room-only",
    name: "Room Only",
    subtitle: "Accommodation without meals",
    price: 0,
    icon: "fa-bed",
    color: "#6B7280",
    bgColor: "#F3F4F6",
    hoverColor: "#4B5563",
    features: []
  }
];

// Current hotel data and selected meal
let currentHotel = null;
let selectedMeal = null;

// Load hotel details on page load
document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const hotelId = urlParams.get("hotel");

  if (hotelId && hotelDatabase[hotelId]) {
    currentHotel = hotelDatabase[hotelId];
    loadHotelDetails(currentHotel);
    setupDateListeners();
    setupMealButtons();
  } else {
    window.location.href = "home.html";
  }
});

// Setup meal selection buttons
function setupMealButtons() {
  mealOptions.forEach(meal => {
    const buttons = document.querySelectorAll(`[data-meal="${meal.id}"]`);
    buttons.forEach(button => {
      button.addEventListener('click', () => selectMeal(meal.id));
    });
  });
}

// Select a specific meal option
function selectMeal(mealId) {
  const meal = mealOptions.find(m => m.id === mealId);
  if (!meal) return;

  selectedMeal = meal;

  // Update all meal buttons to show selection state
  mealOptions.forEach(m => {
    const button = document.querySelector(`[data-meal="${m.id}"]`);
    const card = button.closest('.border');
    
    if (m.id === mealId) {
      // Selected state
      button.textContent = 'Selected ✓';
      button.style.backgroundColor = m.color;
      card.style.borderColor = m.color;
      card.style.borderWidth = '3px';
    } else {
      // Unselected state
      button.textContent = 'Select';
      button.style.backgroundColor = m.color;
      card.style.borderColor = '#E5E7EB';
      card.style.borderWidth = '1px';
    }
  });

  // Recalculate total with meal included
  calculateTotal();

  // Scroll to booking form
  document.querySelector('.sticky').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Load hotel details into page
function loadHotelDetails(hotel) {
  document.getElementById("pageTitle").textContent = `${hotel.name} - Hotelia`;
  document.getElementById("breadcrumbHotel").textContent = hotel.name;
  document.getElementById("hotelMainImage").src = hotel.image;
  document.getElementById("hotelMainImage").alt = hotel.name;
  document.getElementById("hotelName").textContent = hotel.name;
  document.getElementById("hotelLocation").textContent = hotel.location;
  document.getElementById("hotelPrice").textContent = `$${hotel.price}`;
  document.getElementById("hotelDescription").textContent = hotel.description;

  const starsHtml = generateStars(hotel.rating);
  document.getElementById("hotelStars").innerHTML = `
    ${starsHtml}
    <span class="ml-2 text-gray-600 font-medium">${hotel.rating} (${hotel.reviews} reviews)</span>
  `;

  const amenitiesContainer = document.getElementById("hotelAmenities");
  amenitiesContainer.innerHTML = hotel.amenities
    .map(amenity => `
      <div class="flex items-center space-x-3">
        <div class="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center">
          <i class="fas ${amenity.icon} text-[#003262]"></i>
        </div>
        <span class="text-gray-700 font-medium">${amenity.name}</span>
      </div>
    `).join("");

  const roomsContainer = document.getElementById("availableRooms");
  roomsContainer.innerHTML = hotel.rooms
    .map(room => `
      <div class="border ${room.premium ? "border-gray-200 bg-blue-50" : "border-gray-200"} rounded-lg p-4 hover:shadow-md transition">
        <div class="flex flex-col md:flex-row gap-4">
          <div class="relative">
            <img src="${room.image}" alt="${room.name}" class="w-full md:w-48 h-32 object-cover rounded-lg" />
            ${room.premium ? '<span class="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded font-semibold">Premium</span>' : ""}
=======
const API_URL = "http://localhost:3001";
let currentHotel = null;
let selectedMeal = null;
let selectedRoom = null;

// Load hotel details on page load
document.addEventListener("DOMContentLoaded", async function () {
  const urlParams = new URLSearchParams(window.location.search);
  const hotelId = urlParams.get("hotel");

  console.log("Hotel ID from URL:", hotelId);

  if (hotelId) {
    try {
      const response = await fetch(`${API_URL}/hotels/${hotelId}`);
      if (response.ok) {
        currentHotel = await response.json();
        console.log("Hotel loaded:", currentHotel);
        loadHotelDetails(currentHotel);
        setupDateListeners();
        setupMealButtons();
      } else {
        console.error("Failed to load hotel");
        showError();
      }
    } catch (error) {
      console.error("Error loading hotel:", error);
      showError();
    }
  } else {
    console.error("No hotel ID provided");
    window.location.href = "home.html";
  }
});

// Show error message
function showError() {
  const container = document.getElementById("hotelContainer");
  container.innerHTML = `
        <div class="text-center py-12">
          <i class="fas fa-exclamation-circle text-4xl text-red-600"></i>
          <p class="mt-4 text-gray-600">Error loading hotel details</p>
          <a href="home.html" class="mt-4 inline-block text-blue-600 hover:underline">Back to Hotels</a>
        </div>
      `;
}

// Load hotel details into page
function loadHotelDetails(hotel) {
  const container = document.getElementById("hotelContainer");

  container.innerHTML = `
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Left Column - Hotel Info -->
          <div class="lg:col-span-2 space-y-8">
            <!-- Hotel Header -->
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="${hotel.image}" alt="${
    hotel.name
  }" class="w-full h-96 object-cover" />
              <div class="p-8">
                <div class="flex justify-between items-start mb-4">
                  <div>
                    <h1 class="text-3xl font-bold text-gray-900 mb-2">${
                      hotel.name
                    }</h1>
                    <p class="text-lg text-gray-600 flex items-center">
                      <i class="fas fa-map-marker-alt mr-2"></i>
                      ${hotel.location}
                    </p>
                  </div>
                  <div class="text-right">
                    <div class="flex items-center mb-2">
                      ${generateStars(hotel.rating)}
                      <span class="ml-2 text-base font-semibold">(${
                        hotel.rating
                      })</span>
                    </div>
                    <p class="text-xs text-gray-500">${
                      hotel.reviews || 0
                    } reviews</p>
                  </div>
                </div>
                
                <p class="text-gray-700 text-base leading-relaxed">${
                  hotel.description
                }</p>
                
                <div class="mt-6 flex items-center">
                  <span class="text-2xl font-bold text-[#0047AB]">${
                    hotel.price
                  }</span>
                  <span class="text-gray-600 text-sm ml-2">per night</span>
                </div>
              </div>
            </div>

            <!-- Amenities Section -->
            ${
              hotel.amenities && hotel.amenities.length > 0
                ? `
            <div class="bg-white rounded-lg shadow-lg p-8">
              <h2 class="text-xl font-bold text-gray-900 mb-6">
                <i class="fas fa-star text-yellow-400 mr-2"></i>
                Hotel Amenities
              </h2>
              <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                ${hotel.amenities
                  .map(
                    (amenity) => `
                  <div class="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:border-[#0047AB] hover:shadow-md transition">
                    <div class="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-[#0047AB] to-[#003262]">
                      <i class="fas ${amenity.icon} text-white text-sm"></i>
                    </div>
                    <span class="text-gray-700 text-sm font-medium">${amenity.name}</span>
                  </div>
                `
                  )
                  .join("")}
              </div>
            </div>
            `
                : ""
            }

            <!-- Available Rooms Section -->
            ${
              hotel.rooms && hotel.rooms.length > 0
                ? `
            <div class="bg-white rounded-lg shadow-lg p-8">
              <h2 class="text-xl font-bold text-gray-900 mb-6">
                <i class="fas fa-bed text-[#0047AB] mr-2"></i>
                Available Rooms
              </h2>
              <div class="space-y-6">
                ${hotel.rooms
                  .map(
                    (room, index) => `
                  <div class="border-2 rounded-lg p-6 hover:shadow-lg transition cursor-pointer" id="room-card-${index}">
                    <div class="flex flex-col md:flex-row gap-6">
                      <div class="relative flex-shrink-0">
                        <img src="${room.image}" alt="${
                      room.name
                    }" class="w-full md:w-64 h-48 object-cover rounded-lg" />
                        ${
                          room.premium
                            ? '<span class="absolute top-2 right-2 bg-yellow-500 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-lg">Premium</span>'
                            : ""
                        }
                      </div>
                      <div class="flex-1">
                        <div class="flex justify-between items-start mb-3">
                          <div>
                            <h3 class="text-xl font-bold text-gray-900 mb-2">${
                              room.name
                            }</h3>
                            <p class="text-sm text-gray-600">${
                              room.description
                            }</p>
                          </div>
                          <div class="text-right ml-4">
                            <p class="text-2xl font-bold text-[#0047AB]">${
                              room.price
                            }</p>
                            <p class="text-xs text-gray-500">per night</p>
                          </div>
                        </div>
                        <div class="flex flex-wrap gap-4 mb-4">
                          <span class="flex items-center text-sm text-gray-700">
                            <i class="fas fa-bed mr-2 text-[#0047AB]"></i> ${
                              room.beds
                            }
                          </span>
                          <span class="flex items-center text-sm text-gray-700">
                            <i class="fas fa-${
                              room.guests > 1 ? "users" : "user"
                            } mr-2 text-[#0047AB]"></i> ${room.guests} Guest${
                      room.guests > 1 ? "s" : ""
                    }
                          </span>
                          <span class="flex items-center text-sm text-gray-700">
                            <i class="fas fa-ruler-combined mr-2 text-[#0047AB]"></i> ${
                              room.size
                            }
                          </span>
                        </div>
                        <button onclick="selectRoom(${index}, '${room.name}', ${
                      room.price
                    })" class="bg-[#0047AB] text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#003072] transition">
                          Select Room
                        </button>
                      </div>
                    </div>
                  </div>
                `
                  )
                  .join("")}
              </div>
            </div>
            `
                : ""
            }

            <!-- Meal Plans Section -->
            ${
              hotel.meals && hotel.meals.length > 0
                ? `
            <div class="bg-white rounded-lg shadow-lg p-8">
              <h2 class="text-xl font-bold text-gray-900 mb-6">
                <i class="fas fa-utensils text-[#0047AB] mr-2"></i>
                Meal Plans
              </h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                ${hotel.meals
                  .filter((m) => m.available)
                  .map(
                    (meal, index) => `
                  <div class="border-2 rounded-lg p-5 hover:shadow-lg transition" id="meal-card-${index}">
                    <div class="flex items-start mb-4">
                      <div class="w-12 h-12 rounded-lg flex items-center justify-center mr-3 flex-shrink-0" style="background-color: ${
                        meal.bgColor || "#F3F4F6"
                      }">
                        <i class="fas ${meal.icon} text-xl" style="color: ${
                      meal.color
                    }"></i>
                      </div>
                      <div class="flex-1">
                        <h3 class="text-lg font-bold text-gray-900 mb-1">${
                          meal.name
                        }</h3>
                        <p class="text-xs text-gray-600">${meal.subtitle}</p>
                      </div>
                    </div>
                    <div class="mb-4">
                      <span class="text-2xl font-bold" style="color: ${
                        meal.color
                      }">
                        ${meal.price > 0 ? `+${meal.price}` : "Included"}
                      </span>
                      ${
                        meal.price > 0
                          ? '<span class="text-xs text-gray-500 ml-1">/person/day</span>'
                          : ""
                      }
                    </div>
                    ${
                      meal.features && meal.features.length > 0
                        ? `
                      <ul class="space-y-1.5 mb-5">
                        ${meal.features
                          .map(
                            (feature) => `
                          <li class="text-xs text-gray-700 flex items-start">
                            <i class="fas fa-check-circle mr-2 mt-0.5 flex-shrink-0 text-sm" style="color: ${meal.color}"></i>
                            <span>${feature}</span>
                          </li>
                        `
                          )
                          .join("")}
                      </ul>
                    `
                        : ""
                    }
                    <button onclick="selectMeal(${index}, '${meal.name}', ${
                      meal.price
                    }, '${meal.color}')" 
                      style="background-color: ${meal.color}"
                      class="w-full text-white px-4 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition">
                      Select
                    </button>
                  </div>
                `
                  )
                  .join("")}
              </div>
            </div>
            `
                : ""
            }
>>>>>>> 62d28c0 (last version yarab y3ny)
          </div>
          <div class="flex-1">
            <div class="flex justify-between items-start mb-2">
              <div>
                <h3 class="text-xl font-bold text-gray-900">${room.name}</h3>
                <p class="text-gray-600 text-sm mt-1">${room.description}</p>
              </div>
              <div class="text-right">
                <p class="text-2xl font-bold text-[#0047AB]">$${room.price}</p>
                <p class="text-sm text-gray-500">per night</p>
              </div>
            </div>
            <div class="flex flex-wrap gap-3 mt-3 mb-3">
              <span class="flex items-center text-sm text-gray-600">
                <i class="fas fa-bed mr-1 text-[#0047AB]"></i> ${room.beds}
              </span>
              <span class="flex items-center text-sm text-gray-600">
                <i class="fas fa-${room.guests > 1 ? "users" : "user"} mr-1 text-[#0047AB]"></i> ${room.guests} Guest${room.guests > 1 ? "s" : ""}
              </span>
              <span class="flex items-center text-sm text-gray-600">
                <i class="fas fa-ruler-combined mr-1 text-[#0047AB]"></i> ${room.size}
              </span>
            </div>
            <button onclick="selectRoom('${room.name}', ${room.price})" class="bg-[#0047AB] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#003072] transition text-sm">
              Select Room
            </button>
          </div>
        </div>
      </div>
    `).join("");

<<<<<<< HEAD
  const roomSelect = document.getElementById("roomTypeSelect");
  roomSelect.innerHTML = hotel.rooms
    .map(room => `<option value="${room.name}" data-price="${room.price}">${room.name} - $${room.price}/night</option>`)
    .join("");

  calculateTotal();
}

// Generate star rating HTML
function generateStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;
  let stars = "";
  for (let i = 0; i < fullStars; i++) {
    stars += '<i class="fas fa-star text-yellow-400"></i>';
  }
  if (hasHalf) {
    stars += '<i class="fas fa-star-half-alt text-yellow-400"></i>';
  }
  for (let i = Math.ceil(rating); i < 5; i++) {
    stars += '<i class="far fa-star text-yellow-400"></i>';
  }
  return stars;
}

// Select a specific room
function selectRoom(roomName, roomPrice) {
  const roomSelect = document.getElementById("roomTypeSelect");
  roomSelect.value = roomName;
  calculateTotal();
  document.querySelector(".sticky").scrollIntoView({ behavior: "smooth" });
}

// Setup date change listeners
function setupDateListeners() {
  const checkIn = document.getElementById("checkInDate");
  const checkOut = document.getElementById("checkOutDate");
  const roomSelect = document.getElementById("roomTypeSelect");

  checkIn.addEventListener("change", calculateTotal);
  checkOut.addEventListener("change", calculateTotal);
  roomSelect.addEventListener("change", calculateTotal);

  const today = new Date().toISOString().split("T")[0];
  checkIn.min = today;
  checkOut.min = today;
}

// Calculate total price including meal option
function calculateTotal() {
  const checkIn = document.getElementById("checkInDate").value;
  const checkOut = document.getElementById("checkOutDate").value;
  const roomSelect = document.getElementById("roomTypeSelect");
  const selectedOption = roomSelect.options[roomSelect.selectedIndex];
  const roomPrice = parseInt(selectedOption.getAttribute("data-price"));
  const guests = parseInt(document.getElementById("numGuests").value.split(" ")[0]) || 1;

  let nights = 1;
  if (checkIn && checkOut) {
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    nights = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    if (nights < 1) nights = 1;
  }

  const roomSubtotal = roomPrice * nights;
  const serviceFee = 50;
  
  // Calculate meal cost (per person per day)
  let mealCost = 0;
  if (selectedMeal && selectedMeal.price > 0) {
    mealCost = selectedMeal.price * guests * nights;
  }

  const total = roomSubtotal + serviceFee + mealCost;

  // Update the display
  document.getElementById("nightsLabel").textContent = `${nights} night${nights > 1 ? "s" : ""}`;
  document.getElementById("nightsPrice").textContent = `$${roomSubtotal.toLocaleString()}`;
  
  // Add meal cost display if selected
  const existingMealRow = document.getElementById("mealCostRow");
  if (existingMealRow) {
    existingMealRow.remove();
  }

  if (selectedMeal && selectedMeal.price > 0) {
    const serviceFeeRow = document.querySelector('.border-t.pt-4.mt-4').children[1];
    const mealRow = document.createElement('div');
    mealRow.id = "mealCostRow";
    mealRow.className = "flex justify-between items-center mb-2";
    mealRow.innerHTML = `
      <span class="text-gray-600">${selectedMeal.name} (${guests} guest${guests > 1 ? 's' : ''} × ${nights} night${nights > 1 ? 's' : ''})</span>
      <span class="text-gray-900 font-semibold">$${mealCost.toLocaleString()}</span>
    `;
    serviceFeeRow.parentNode.insertBefore(mealRow, serviceFeeRow);
  }

  document.getElementById("totalPrice").textContent = `$${total.toLocaleString()}`;
}

// Add current hotel to cart
function addCurrentHotelToCart() {
  const checkIn = document.getElementById("checkInDate").value;
  const checkOut = document.getElementById("checkOutDate").value;
  const guests = parseInt(document.getElementById("numGuests").value.split(" ")[0]) || 1;
  const roomType = document.getElementById("roomTypeSelect").value;

  if (!checkIn || !checkOut) {
    alert("Please select check-in and check-out dates");
    return;
  }
  // Add hotel booking (type defaults to 'hotel')
  cart.addItem({
    id: currentHotel.id,
    name: currentHotel.name,
    location: currentHotel.shortLocation,
    price: currentHotel.price,
    image: currentHotel.image,
    rating: currentHotel.rating,
    checkIn: checkIn,
    checkOut: checkOut,
    guests: guests,
    roomType: roomType,
    mealOption: selectedMeal ? selectedMeal.name : "Room Only",
    mealPrice: selectedMeal ? selectedMeal.price : 0
  });

  // If a meal option is selected and has a price, add it as a separate meal item
  if (selectedMeal && selectedMeal.price > 0) {
    // calculate nights
    let nights = 1;
    if (checkIn && checkOut) {
      const start = new Date(checkIn);
      const end = new Date(checkOut);
      nights = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
      if (nights < 1) nights = 1;
    }

    // total meal cost = per-person price * guests * nights
    const mealTotal = (selectedMeal.price || 0) * guests * nights;

    const mealId = `${currentHotel.id}-meal-${selectedMeal.id}`;

    cart.addMeal({
      id: mealId,
      name: `${selectedMeal.name} (${currentHotel.name})`,
      price: mealTotal,
      quantity: 1,
      image: currentHotel.image || '',
      notes: `${guests} guest${guests > 1 ? 's' : ''} × ${nights} night${nights > 1 ? 's' : ''} @ $${selectedMeal.price} per guest/night`
    });
  }
}

// Helper function to navigate to hotel details page
function viewHotelDetails(hotelId) {
  window.location.href = `hotelDetails.html?hotel=${hotelId}`;
}
=======
  calculateTotal();
}

// Generate star rating
function generateStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;
  let stars = "";
  for (let i = 0; i < fullStars; i++) {
    stars += '<i class="fas fa-star text-yellow-400"></i>';
  }
  if (hasHalf) {
    stars += '<i class="fas fa-star-half-alt text-yellow-400"></i>';
  }
  const emptyStars = 5 - Math.ceil(rating);
  for (let i = 0; i < emptyStars; i++) {
    stars += '<i class="far fa-star text-yellow-400"></i>';
  }
  return stars;
}

// Select a room
function selectRoom(index, roomName, roomPrice) {
  selectedRoom = { name: roomName, price: roomPrice };

  // Update UI - reset all cards
  document.querySelectorAll('[id^="room-card-"]').forEach((card) => {
    card.style.borderWidth = "2px";
    card.style.borderColor = "#E5E7EB";
    card.classList.remove("bg-blue-50");
  });

  // Highlight selected card
  const selectedCard = document.getElementById(`room-card-${index}`);
  if (selectedCard) {
    selectedCard.style.borderWidth = "3px";
    selectedCard.style.borderColor = "#0047AB";
    selectedCard.classList.add("bg-blue-50");
  }

  // Update display field
  document.getElementById("selectedRoomDisplay").value = roomName;

  // Recalculate total
  calculateTotal();

  // Smooth scroll to booking form
  document
    .querySelector(".sticky")
    .scrollIntoView({ behavior: "smooth", block: "nearest" });
}

// Select a meal
function selectMeal(index, mealName, mealPrice, color) {
  // selectedMeal = { name: mealName, price: mealPrice };

  selectedMeal = selectedMeal = {
    id: mealName.toLowerCase().replace(/\s+/g, "-"),
    name: mealName,
    price: mealPrice,
  };

  // Update UI - reset all cards
  document.querySelectorAll('[id^="meal-card-"]').forEach((card) => {
    card.style.borderWidth = "2px";
    card.style.borderColor = "#E5E7EB";
    const btn = card.querySelector("button");
    btn.textContent = "Select";
  });

  // Highlight selected card
  const selectedCard = document.getElementById(`meal-card-${index}`);
  if (selectedCard) {
    selectedCard.style.borderWidth = "3px";
    selectedCard.style.borderColor = color;
    selectedCard.querySelector("button").textContent = "Selected ✓";
  }

  // Recalculate total
  calculateTotal();

  // Smooth scroll to booking form
  document
    .querySelector(".sticky")
    .scrollIntoView({ behavior: "smooth", block: "nearest" });
}

// Setup meal buttons
function setupMealButtons() {
  setTimeout(() => {
    const mealButtons = document.querySelectorAll('[id^="meal-card-"] button');
    mealButtons.forEach((button, index) => {
      button.addEventListener("click", function () {
        const card = this.closest('[id^="meal-card-"]');
        const cardIndex = card.id.replace("meal-card-", "");
        // Get meal data from the hotel object
        if (currentHotel && currentHotel.meals) {
          const meal = currentHotel.meals.filter((m) => m.available)[cardIndex];
          if (meal) {
            selectMeal(cardIndex, meal.name, meal.price, meal.color);
          }
        }
      });
    });
  }, 100);
}

// Setup date listeners
function setupDateListeners() {
  setTimeout(() => {
    const checkIn = document.getElementById("checkInDate");
    const checkOut = document.getElementById("checkOutDate");
    const guests = document.getElementById("numGuests");

    if (checkIn) checkIn.addEventListener("change", calculateTotal);
    if (checkOut) checkOut.addEventListener("change", calculateTotal);
    if (guests) guests.addEventListener("change", calculateTotal);

    const today = new Date().toISOString().split("T")[0];
    if (checkIn) checkIn.min = today;
    if (checkOut) checkOut.min = today;
  }, 100);
}

// Calculate total price
function calculateTotal() {
  if (!currentHotel) return;

  const checkIn = document.getElementById("checkInDate")?.value;
  const checkOut = document.getElementById("checkOutDate")?.value;
  const guestsText = document.getElementById("numGuests")?.value || "2 Guests";
  const guests = parseInt(guestsText.split(" ")[0]) || 2;

  let nights = 1;
  if (checkIn && checkOut) {
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    nights = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    if (nights < 1) nights = 1;
  }

  const roomPrice = selectedRoom ? selectedRoom.price : currentHotel.price;
  const roomSubtotal = roomPrice * nights;
  const serviceFee = 50;

  let mealCost = 0;
  if (selectedMeal && selectedMeal.price > 0) {
    mealCost = selectedMeal.price * guests * nights;
  }

  const total = roomSubtotal + serviceFee + mealCost;

  // Update displays
  const nightsLabel = document.getElementById("nightsLabel");
  const nightsPrice = document.getElementById("nightsPrice");
  const totalPrice = document.getElementById("totalPrice");
  const mealCostRow = document.getElementById("mealCostRow");

  if (nightsLabel)
    nightsLabel.textContent = `${nights} night${nights > 1 ? "s" : ""}`;
  if (nightsPrice)
    nightsPrice.textContent = `$${roomSubtotal.toLocaleString()}`;
  if (totalPrice) totalPrice.textContent = `$${total.toLocaleString()}`;

  // Update meal cost display
  if (mealCostRow) {
    if (selectedMeal && selectedMeal.price > 0) {
      mealCostRow.innerHTML = `
            <div class="flex justify-between items-center">
              <span class="text-gray-600 text-sm">${
                selectedMeal.name
              } (${guests} × ${nights})</span>
              <span class="text-gray-900 font-semibold">$${mealCost.toLocaleString()}</span>
            </div>
          `;
    } else {
      mealCostRow.innerHTML = "";
    }
  }
}

// Add to cart
function addCurrentHotelToCart() {
  if (!currentHotel) {
    alert("Hotel data not loaded");
    return;
  }

  const checkIn = document.getElementById("checkInDate")?.value;
  const checkOut = document.getElementById("checkOutDate")?.value;
  const guestsText = document.getElementById("numGuests")?.value || "2 Guests";
  const guests = parseInt(guestsText.split(" ")[0]) || 2;

  if (!checkIn || !checkOut) {
    alert("Please select check-in and check-out dates");
    return;
  }

  if (!selectedRoom) {
    alert("Please select a room type");
    return;
  }

  if (typeof cart !== "undefined" && cart.addItem) {
    cart.addItem({
      id: currentHotel.id,
      name: currentHotel.name,
      location: currentHotel.shortLocation,
      price: selectedRoom.price,
      image: currentHotel.image,
      rating: currentHotel.rating,
      checkIn: checkIn,
      checkOut: checkOut,
      guests: guests,
      roomType: selectedRoom.name,
      // mealOption: selectedMeal ? selectedMeal.name : "Room Only",
      // mealPrice: selectedMeal ? selectedMeal.price : 0
      meal: selectedMeal,
    });
  } else {
    alert("Cart system not loaded. Please refresh the page.");
  }
}
>>>>>>> 62d28c0 (last version yarab y3ny)
