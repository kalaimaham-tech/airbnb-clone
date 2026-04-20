import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [search, setSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minRating, setMinRating] = useState("");
  

  const properties = [
    {
      id: 1,
      title: "Beachfront Villa",
      location: "Goa, India",
      price: 1200,
      rating: 4.8,
      image:
        "https://a0.muscache.com/im/pictures/81dca5d6-5a86-49bc-8eca-4a8610a07d27.jpg?im_w=960"
    },
    {
      id: 2,
      title: "Modern Apartment",
      location: "Bengaluru, India",
      price: 1800,
      rating: 4.6,
      image:
        "https://a0.muscache.com/im/pictures/81dca5d6-5a86-49bc-8eca-4a8610a07d27.jpg?im_w=1440"
    },
    {
      id: 3,
      title: "Cozy Mountain Cabin",
      location: "Manali, India",
      price: 1900,
      rating: 4.9,
      image:
        "https://a0.muscache.com/im/pictures/b15844dd-9149-46cc-9340-2cffa371d82e.jpg?im_w=720"
    },
    {
      id: 4,
      title: "City Studio",
      location: "Mumbai, India",
      price: 2000,
      rating: 4.4,
      image:
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1541094627296807371/original/4b40ede9-58bb-43aa-838a-f389f6b912d6.jpeg?im_w=1200"
    },
    {
      id: 5,
      title: "Countryside Cottage",
      location: "Ooty, India",
      price: 3500,
      rating: 4.7,
      image:
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1003416902734385550/original/7c86c24a-612a-4bb6-a392-c63b688cbf9a.jpeg?im_w=1200"
    },
    {
      id: 6,
      title: "Luxury Loft",
      location: "Delhi, India",
      price: 4000,
      rating: 4.9,
      image:
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1209453770041863537/original/d30de605-d7f8-4f29-9458-7df18b237a5c.jpeg?im_w=1200"
    }
  ];

  const filteredProperties = properties.filter((p) => {
    const matchesSearch =
      search === "" ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.location.toLowerCase().includes(search.toLowerCase());

    const matchesPrice = maxPrice === "" || p.price <= Number(maxPrice);
    const matchesRating = minRating === "" || p.rating >= Number(minRating);

    return matchesSearch && matchesPrice && matchesRating;
  });

  return (
    <div>
       
      {/* Filters */}
      <div className="flex gap-4 px-6 py-4 bg-gray-50 sticky top-16 z-40">
        <input
          type="text"
          placeholder="Search place..."
          className="border px-3 py-2 rounded-lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <input
          type="number"
          placeholder="Max Price"
          className="border px-3 py-2 rounded-lg"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />

        <select
          className="border px-3 py-2 rounded-lg"
          value={minRating}
          onChange={(e) => setMinRating(e.target.value)}
        >
          <option value="">Min Rating</option>
          <option value="4.0">4.0+</option>
          <option value="4.5">4.5+</option>
          <option value="4.8">4.8+</option>
        </select>
      </div>

      {/* Property Grid */}
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((place) => (
            <Link
              key={place.id}
              to={`/property/${place.id}`}
              className="rounded-xl overflow-hidden shadow hover:shadow-lg transition bg-white"
            >
              <div className="h-60 w-full bg-gray-200 overflow-hidden">
                <img
                  src={place.image}
                  alt={place.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-3">
                <h2 className="font-semibold text-lg">{place.title}</h2>
                <p className="text-gray-500">{place.location}</p>

                <div className="mt-2 flex items-center justify-between">
                  <span className="font-bold">₹{place.price}</span>
                  <span className="text-sm text-gray-600">
                    ⭐ {place.rating}
                  </span>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-gray-500 col-span-3 text-center mt-10">
            No properties found.
          </p>
        )}
      </div>
    </div>
  );
}
