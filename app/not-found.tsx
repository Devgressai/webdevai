export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl font-bold mb-2">Page not found</h1>
      <p className="text-secondary-600 mb-6">The page you’re looking for doesn’t exist or was moved.</p>
      <a href="/" className="px-6 py-3 rounded-lg bg-primary-600 text-white hover:bg-primary-700">Return Home</a>
    </div>
  )
}


