import { Link } from 'react-router-dom';

export default function Component() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-12 text-center space-y-8 w-[600px]">
        <div>
          <h2 className="text-lg font-medium text-[#d32f2f] dark:text-[#ff8a80] mb-4">Oops! Something went wrong.</h2>
          <h1 className="text-8xl font-bold text-gray-900 dark:text-gray-50">404</h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-8">The page you're looking for doesn't exist.</p>
          <Link
            to="/"
            className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-gray-900 text-gray-50 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-300"
          >
            Return to Menu
          </Link>
        </div>
      </div>
    </div>
  )
}