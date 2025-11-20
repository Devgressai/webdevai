// Quick test to verify environment variables are accessible
require('dotenv').config({ path: '.env.local' })

console.log('\n🔍 Environment Variables Check:\n')
console.log('SANITY_API_TOKEN:', process.env.SANITY_API_TOKEN ? '✅ SET (length: ' + process.env.SANITY_API_TOKEN.length + ')' : '❌ NOT SET')
console.log('ADMIN_USERNAME:', process.env.ADMIN_USERNAME ? '✅ SET (' + process.env.ADMIN_USERNAME + ')' : '❌ NOT SET')
console.log('ADMIN_PASSWORD:', process.env.ADMIN_PASSWORD ? '✅ SET (length: ' + process.env.ADMIN_PASSWORD.length + ')' : '❌ NOT SET')
console.log('NEXT_PUBLIC_SANITY_PROJECT_ID:', process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'Using default: oz98vynm')
console.log('\n')

// Test Sanity connection
const { createClient } = require('@sanity/client')

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'oz98vynm',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

console.log('🧪 Testing Sanity Connection...\n')

client
  .fetch('count(*[_type == "contact"])')
  .then(count => {
    console.log('✅ Sanity connection successful!')
    console.log('📊 Total contact entries in database:', count)
    console.log('\n✅ ALL ENVIRONMENT VARIABLES WORKING!\n')
  })
  .catch(error => {
    console.error('❌ Sanity connection failed:', error.message)
    console.error('\nPossible issues:')
    console.error('- SANITY_API_TOKEN is invalid or expired')
    console.error('- Token does not have correct permissions')
    console.error('- Project ID is incorrect\n')
  })

