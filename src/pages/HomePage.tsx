import GlobePage from '@/components/common/GlobePage';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 bg-opacity-50 py-20">
      <h1 className="text-5xl font-bold mb-8">Share Your Success Story</h1>
      <p className="max-w-2xl text-center text-lg mb-8">
        We are looking for success stories from innovative enterprises who have created positive impact in their fields and communities.
        If you are one of them, we invite you to share your story with us and our audience.
      </p>
      <Link to="/about-you" className="bg-blue-500 px-6 py-3 rounded-full hover:bg-blue-600">
        Start Your Story
      </Link>
      <div className="w-full mt-12">
        <GlobePage />
      </div>
    </div>
  );
}

export default HomePage;