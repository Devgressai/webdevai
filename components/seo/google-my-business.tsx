'use client'

import { Star, MapPin, ExternalLink } from 'lucide-react'
import Link from 'next/link'

interface GoogleMyBusinessProps {
  profileUrl?: string
  businessName?: string
  rating?: number
  reviewCount?: number
  address?: string
}

export function GoogleMyBusiness({
  profileUrl = 'https://www.google.com/maps/place/?q=place_id:ChIJu2PDWQAfm4ARz5y6qVtIYPk',
  businessName = 'Web Vello',
  rating = 4.9,
  reviewCount = 127,
  address,
}: GoogleMyBusinessProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
      <div className="flex items-start justify-between mb-6">
        <div>
          <div className="flex items-center mb-2">
            <div className="h-8 w-8 bg-gradient-to-br from-blue-500 via-red-500 to-yellow-500 rounded-lg mr-3 flex items-center justify-center">
              <span className="text-white font-bold text-sm">G</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Google My Business</h3>
          </div>
          <p className="text-gray-600 text-sm">
            Find us on Google Maps
          </p>
        </div>
      </div>

      {/* Rating Display */}
      <div className="flex items-center mb-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
        <div className="flex items-center mr-4">
          <div className="text-4xl font-bold text-gray-900 mr-3">{rating}</div>
          <div>
            <div className="flex items-center mb-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <p className="text-sm text-gray-600">
              Based on {reviewCount}+ reviews
            </p>
          </div>
        </div>
      </div>

      {/* Address */}
      {address && (
        <div className="flex items-start mb-6 p-4 bg-gray-50 rounded-xl">
          <MapPin className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm font-medium text-gray-900 mb-1">Business Location</p>
            <p className="text-sm text-gray-600">{address}</p>
          </div>
        </div>
      )}

      {/* Action Button */}
      <div>
        <Link
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg w-full"
        >
          <MapPin className="w-4 h-4 mr-2" />
          View on Google Maps
          <ExternalLink className="w-4 h-4 ml-2" />
        </Link>
      </div>

      {/* Trust Badge */}
      <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-200">
        <div className="flex items-start">
          <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
            <Star className="w-5 h-5 text-white fill-white" />
          </div>
          <div>
            <p className="text-sm font-semibold text-green-900 mb-1">
              Verified Google Business Profile
            </p>
            <p className="text-xs text-green-700">
              {businessName} is verified on Google My Business. Customers can find us, see our hours, read reviews, and get directions.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

