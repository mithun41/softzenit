"use client";

import { useState } from "react";
import { MapPin, X, Navigation } from "lucide-react";

const LocationMap = () => {
  const [showInfo, setShowInfo] = useState(false);

  const latitude = 23.791946166699685;
  const longitude = 90.40540841421543;

  const address = "SoftZen IT";
  const fullAddress = "House 41, Road 13, Block D, Banani Dhaka 1213";

  // Google Maps embed URL
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.564891234567!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ3JzMxLjAiTiA5MMKwMjQnMTkuNSJF!5e0!3m2!1sen!2sbd!4v1234567890123!5m2!1sen!2sbd`;

  const openInGoogleMaps = () => {
    window.open(
      `https://www.google.com/maps?q=${latitude},${longitude}`,
      "_blank"
    );
  };

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 via-white to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
            Location
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Visit Our{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Office
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Find us at our location in Dhaka, Bangladesh
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Map Container */}
          <div className="lg:col-span-3">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white">
              {/* Google Map */}
              <div className="relative h-[500px] lg:h-[600px]">
                <iframe
                  src={mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>

                {/* Info Popup (appears when clicked) */}
                {showInfo && (
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto">
                    <div className="bg-white rounded-xl shadow-2xl p-6 min-w-[250px] relative animate-fadeIn">
                      <button
                        onClick={() => setShowInfo(false)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1.5 hover:bg-red-600 transition"
                      >
                        <X className="w-4 h-4" />
                      </button>
                      <div className="text-center">
                        <MapPin className="w-10 h-10 text-emerald-600 mx-auto mb-3" />
                        <h3 className="font-bold text-gray-900 text-xl mb-2">
                          SoftZen IT
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">
                          {fullAddress}
                        </p>
                        <button
                          onClick={openInGoogleMaps}
                          className="w-full px-4 py-2.5 bg-emerald-600 text-white text-sm font-semibold rounded-lg hover:bg-emerald-700 transition flex items-center justify-center gap-2"
                        >
                          <Navigation className="w-4 h-4" />
                          Get Directions
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Buttons */}
              <div className="absolute bottom-4 right-4 z-10 flex gap-3">
                <button
                  onClick={() => setShowInfo(!showInfo)}
                  className="px-4 py-2 bg-white text-emerald-600 font-semibold rounded-lg shadow-lg hover:bg-emerald-50 transition flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  Show Info
                </button>
                <button
                  onClick={openInGoogleMaps}
                  className="px-4 py-2 bg-emerald-600 text-white font-semibold rounded-lg shadow-lg hover:bg-emerald-700 transition flex items-center gap-2"
                >
                  <Navigation className="w-4 h-4" />
                  Open in Maps
                </button>
              </div>
            </div>
          </div>

          {/* Address Sidebar */}
          <div className="space-y-6">
            {/* Address Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition h-full">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Our Location
              </h3>
              <p className="text-gray-800 font-semibold text-lg mb-2">
                {address}
              </p>
              <p className="text-gray-600 mb-4">{fullAddress}</p>
              <button
                onClick={openInGoogleMaps}
                className="w-full mt-4 px-4 py-2.5 bg-emerald-50 text-emerald-600 font-semibold rounded-lg hover:bg-emerald-100 transition flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4" />
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;
