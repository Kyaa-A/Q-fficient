import { AdsSlider } from './components/AdsSlider';
import { FaUsers, FaClock } from "react-icons/fa"; // Import queue and time icons

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Ads Slider Section - Fixed height */}
      <div className="w-full h-[30vh] sm:h-[35vh] md:h-[40vh] lg:h-[45vh] overflow-hidden">
        <AdsSlider />
      </div>

      {/* Position in Queue Section - Updated */}
      <div className="min-h-[20vh] flex items-center justify-center bg-white p-6">
        <div className="text-center bg-gray-50 shadow-md rounded-lg p-6 w-11/12 max-w-md">
          <FaUsers className="text-blue-500 text-4xl mx-auto mb-2" />
          <h2 className="text-2xl font-bold text-gray-800">Your Queue Position</h2>
          <p className="text-lg text-gray-600">👥 You are <span className="font-semibold text-gray-700">3rd</span> in line.</p>
          <p className="text-sm text-gray-500 mt-1">Please wait until it's your turn.</p>
        </div>
      </div>

      {/* Estimated Wait Time Section */}
      <div className="w-full p-6 bg-gray-100 flex justify-center">
        <div className="text-center bg-white shadow-md rounded-lg p-6 w-11/12 max-w-md">
          <FaClock className="text-orange-500 text-4xl mx-auto mb-2" />
          <h2 className="text-2xl font-semibold text-gray-800">Estimated Wait Time</h2>
          <p className="text-lg text-gray-600">⏳ 10-20 minutes</p>
        </div>
      </div>
    </div>
  );
}

export default App;
