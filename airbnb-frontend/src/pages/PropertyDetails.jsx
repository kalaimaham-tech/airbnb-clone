import { useParams } from "react-router-dom";
import { useState } from "react";
import BookingModal from "../components/BookingModal";

export default function PropertyDetails() {
  const { id } = useParams();
  const [open, setOpen] = useState(false);

  const properties = [
    {
      id: 1,
      title: "Beachfront Villa",
      location: "Goa, India",
      price: 1200,
      rating: 4.8,
      image:
        "https://a0.muscache.com/im/pictures/81dca5d6-5a86-49bc-8eca-4a8610a07d27.jpg?im_w=960",
      description: "Beautiful villa with beach access and amazing sunrise view."
    },
    {
      id: 2,
      title: "Modern Apartment",
      location: "Bengaluru, India",
      price: 1800,
      rating: 4.6,
      image:
        "https://a0.muscache.com/im/pictures/81dca5d6-5a86-49bc-8eca-4a8610a07d27.jpg?im_w=1440",
      description: "Modern apartment in the heart of Bengaluru city."
    },
    {
      id: 3,
      title: "Cozy Mountain Cabin",
      location: "Manali, India",
      price: 1900,
      rating: 4.9,
      image:
        "https://a0.muscache.com/im/pictures/b15844dd-9149-46cc-9340-2cffa371d82e.jpg?im_w=720",
      description: "Perfect wooden cabin surrounded by snow and mountains."
    },
    {
      id: 4,
      title: "City Studio",
      location: "Mumbai, India",
      price: 2000,
      rating: 4.4,
      image:
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1541094627296807371/original/4b40ede9-58bb-43aa-838a-f389f6b912d6.jpeg?im_w=1200",
      description: "Compact studio in downtown Mumbai."
    },
    {
      id: 5,
      title: "Countryside Cottage",
      location: "Ooty, India",
      price: 3500,
      rating: 4.7,
      image:
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1003416902734385550/original/7c86c24a-612a-4bb6-a392-c63b688cbf9a.jpeg?im_w=1200",
      description: "Relax in this peaceful cottage with a garden view."
    },
    {
      id: 6,
      title: "Luxury Loft",
      location: "Delhi, India",
      price: 4000,
      rating: 4.9,
      image:
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1209453770041863537/original/d30de605-d7f8-4f29-9458-7df18b237a5c.jpeg?im_w=1200",
      description: "A stylish loft in central Delhi with premium amenities."
    }
  ];

  const place = properties.find((p) => p.id === Number(id));

  if (!place) return <h1 className="text-center mt-10">Property Not Found</h1>;

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">

      {/* LEFT IMAGE */}
      <div>
        <img
          src={place.image}
          className="w-full h-80 md:h-[450px] object-cover rounded-xl"
          alt={place.title}
        />
      </div>

      {/* RIGHT DETAILS */}
      <div className="w-full overflow-y-auto">
        <h1 className="text-3xl font-bold mt-2">{place.title}</h1>
        <p className="text-gray-600">{place.location}</p>

        <div className="flex justify-between mt-4">
          <span className="font-bold text-xl">₹{place.price} / night</span>
          <span className="text-lg">⭐ {place.rating}</span>
        </div>

        <p className="mt-4 text-gray-700">{place.description}</p>

        {/* BOOK NOW BUTTON */}
        <button
          className="mt-6 w-full px-6 py-3 bg-red-500 text-white rounded-xl"
          onClick={() => setOpen(true)}
        >
          Book Now
        </button>

        {/* BOOKING MODAL */}
        {open && (
          <BookingModal
            price={place.price}
            propertyId={place.id}   // ⬅ ADDED FOR MONGODB
            onClose={() => setOpen(false)}
            onConfirm={(details) => {
              console.log("BOOKING DETAILS:", details);
              setOpen(false);
              alert("Booking Confirmed!");
            }}
          />
        )}
      </div>

    </div>
  );
}
