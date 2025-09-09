export interface City {
  slug: string
  name: string
  state: string
  fullName: string
  population?: string
  industries: string[]
}

export const cities: Record<string, City> = {
  'new-york-ny': { slug: 'new-york-ny', name: 'New York', state: 'NY', fullName: 'New York, NY', population: '8.8 million', industries: ['Finance', 'Technology', 'Healthcare'] },
  'los-angeles-ca': { slug: 'los-angeles-ca', name: 'Los Angeles', state: 'CA', fullName: 'Los Angeles, CA', population: '4 million', industries: ['Technology', 'Healthcare', 'Manufacturing'] },
  'chicago-il': { slug: 'chicago-il', name: 'Chicago', state: 'IL', fullName: 'Chicago, IL', population: '2.7 million', industries: ['Finance', 'Technology', 'Education'] },
  'houston-tx': { slug: 'houston-tx', name: 'Houston', state: 'TX', fullName: 'Houston, TX', industries: ['Energy', 'Healthcare', 'Technology'] },
  'phoenix-az': { slug: 'phoenix-az', name: 'Phoenix', state: 'AZ', fullName: 'Phoenix, AZ', industries: ['Technology', 'Healthcare', 'Real Estate'] },
  'philadelphia-pa': { slug: 'philadelphia-pa', name: 'Philadelphia', state: 'PA', fullName: 'Philadelphia, PA', industries: ['Healthcare', 'Education', 'Finance'] },
  'san-antonio-tx': { slug: 'san-antonio-tx', name: 'San Antonio', state: 'TX', fullName: 'San Antonio, TX', industries: ['Healthcare', 'Technology', 'Education'] },
  'san-diego-ca': { slug: 'san-diego-ca', name: 'San Diego', state: 'CA', fullName: 'San Diego, CA', industries: ['Technology', 'Healthcare', 'Manufacturing'] },
  'dallas-tx': { slug: 'dallas-tx', name: 'Dallas', state: 'TX', fullName: 'Dallas, TX', industries: ['Finance', 'Technology', 'Healthcare'] },
  'san-jose-ca': { slug: 'san-jose-ca', name: 'San Jose', state: 'CA', fullName: 'San Jose, CA', industries: ['Technology', 'Manufacturing', 'Finance'] },
  'austin-tx': { slug: 'austin-tx', name: 'Austin', state: 'TX', fullName: 'Austin, TX', industries: ['Technology', 'Education', 'Healthcare'] },
  'jacksonville-fl': { slug: 'jacksonville-fl', name: 'Jacksonville', state: 'FL', fullName: 'Jacksonville, FL', industries: ['Logistics', 'Healthcare', 'Finance'] },
  'fort-worth-tx': { slug: 'fort-worth-tx', name: 'Fort Worth', state: 'TX', fullName: 'Fort Worth, TX', industries: ['Aerospace', 'Energy', 'Healthcare'] },
  'columbus-oh': { slug: 'columbus-oh', name: 'Columbus', state: 'OH', fullName: 'Columbus, OH', industries: ['Education', 'Healthcare', 'Technology'] },
  'indianapolis-in': { slug: 'indianapolis-in', name: 'Indianapolis', state: 'IN', fullName: 'Indianapolis, IN', industries: ['Manufacturing', 'Healthcare', 'Technology'] },
  'charlotte-nc': { slug: 'charlotte-nc', name: 'Charlotte', state: 'NC', fullName: 'Charlotte, NC', industries: ['Finance', 'Energy', 'Technology'] },
  'san-francisco-ca': { slug: 'san-francisco-ca', name: 'San Francisco', state: 'CA', fullName: 'San Francisco, CA', industries: ['Technology', 'Finance', 'Healthcare'] },
  'seattle-wa': { slug: 'seattle-wa', name: 'Seattle', state: 'WA', fullName: 'Seattle, WA', industries: ['Technology', 'Aerospace', 'Healthcare'] },
  'denver-co': { slug: 'denver-co', name: 'Denver', state: 'CO', fullName: 'Denver, CO', industries: ['Energy', 'Technology', 'Healthcare'] },
  'washington-dc': { slug: 'washington-dc', name: 'Washington', state: 'DC', fullName: 'Washington, D.C.', industries: ['Government', 'Technology', 'Healthcare'] },
  'nashville-tn': { slug: 'nashville-tn', name: 'Nashville', state: 'TN', fullName: 'Nashville, TN', industries: ['Healthcare', 'Manufacturing', 'Technology'] },
  'oklahoma-city-ok': { slug: 'oklahoma-city-ok', name: 'Oklahoma City', state: 'OK', fullName: 'Oklahoma City, OK', industries: ['Energy', 'Aerospace', 'Healthcare'] },
  'el-paso-tx': { slug: 'el-paso-tx', name: 'El Paso', state: 'TX', fullName: 'El Paso, TX', industries: ['Manufacturing', 'Healthcare', 'Technology'] },
  'boston-ma': { slug: 'boston-ma', name: 'Boston', state: 'MA', fullName: 'Boston, MA', industries: ['Education', 'Healthcare', 'Technology'] },
  'portland-or': { slug: 'portland-or', name: 'Portland', state: 'OR', fullName: 'Portland, OR', industries: ['Technology', 'Manufacturing', 'Healthcare'] },
  'las-vegas-nv': { slug: 'las-vegas-nv', name: 'Las Vegas', state: 'NV', fullName: 'Las Vegas, NV', industries: ['Tourism', 'Entertainment', 'Healthcare'] },
  'detroit-mi': { slug: 'detroit-mi', name: 'Detroit', state: 'MI', fullName: 'Detroit, MI', industries: ['Automotive', 'Manufacturing', 'Technology'] },
  'memphis-tn': { slug: 'memphis-tn', name: 'Memphis', state: 'TN', fullName: 'Memphis, TN', industries: ['Logistics', 'Healthcare', 'Manufacturing'] },
  'louisville-ky': { slug: 'louisville-ky', name: 'Louisville', state: 'KY', fullName: 'Louisville, KY', industries: ['Manufacturing', 'Healthcare', 'Logistics'] },
  'baltimore-md': { slug: 'baltimore-md', name: 'Baltimore', state: 'MD', fullName: 'Baltimore, MD', industries: ['Healthcare', 'Education', 'Manufacturing'] },
  'milwaukee-wi': { slug: 'milwaukee-wi', name: 'Milwaukee', state: 'WI', fullName: 'Milwaukee, WI', industries: ['Manufacturing', 'Finance', 'Healthcare'] },
  'albuquerque-nm': { slug: 'albuquerque-nm', name: 'Albuquerque', state: 'NM', fullName: 'Albuquerque, NM', industries: ['Technology', 'Healthcare', 'Education'] },
  'tucson-az': { slug: 'tucson-az', name: 'Tucson', state: 'AZ', fullName: 'Tucson, AZ', industries: ['Education', 'Healthcare', 'Technology'] },
  'fresno-ca': { slug: 'fresno-ca', name: 'Fresno', state: 'CA', fullName: 'Fresno, CA', industries: ['Agriculture', 'Healthcare', 'Education'] },
  'sacramento-ca': { slug: 'sacramento-ca', name: 'Sacramento', state: 'CA', fullName: 'Sacramento, CA', industries: ['Government', 'Healthcare', 'Technology'] },
  'kansas-city-mo': { slug: 'kansas-city-mo', name: 'Kansas City', state: 'MO', fullName: 'Kansas City, MO', industries: ['Logistics', 'Healthcare', 'Technology'] },
  'mesa-az': { slug: 'mesa-az', name: 'Mesa', state: 'AZ', fullName: 'Mesa, AZ', industries: ['Technology', 'Healthcare', 'Manufacturing'] },
}

export function getCity(slug: string): City | undefined {
  return cities[slug]
}

export const citySlugs: string[] = Object.keys(cities)


