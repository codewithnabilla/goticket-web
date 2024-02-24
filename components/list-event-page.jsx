"use client";
import { useState } from "react";

export default function EventListPage({ events }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mt-10 mx-5 mb-10">
      <h1 className="text-2xl font-bold mb-5">Events List</h1>

      <input
        type="text"
        placeholder="Search events"
        value={searchQuery}
        onChange={handleSearchInputChange}
        className="border border-gray-300 rounded-md px-3 py-2 mb-5 w-full"
      />

      <div className="grid grid-flow-row md:grid-cols-4 gap-x-4 gap-y-8 justify-items-center">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="max-w-sm rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-md"
          >
            <img className="w-full" src={event.img} alt={event.alt} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{event.title}</div>
              <div>
                <p className="text-gray-700 text-base">{event.date}</p>
                <p className="font-bold">{event.price}</p>
              </div>
              <div className="border-t border-gray-200 my-4"></div>
              <p>{event.organize}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
