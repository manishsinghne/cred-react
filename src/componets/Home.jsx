import { Link } from 'react-router-dom';
function Home() {
  
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">Welcome to CRED App</h1>
        <p className="text-gray-600 text-lg mb-8">
           Create, read, update, and delete products with ease using our app.
        </p>
        <div className="space-x-4">
          <Link to="/create" className="bg-blue-500 text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-blue-600 transition duration-200">
            Create Product
          </Link>
          <Link to="/read" className="bg-green-500 text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-green-600 transition duration-200">
            View Products
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
