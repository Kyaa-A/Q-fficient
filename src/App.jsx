import { AdsSlider } from './components/AdsSlider';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Ads Slider Section - Fixed height */}
      <div className="w-full h-[30vh] sm:h-[35vh] md:h-[40vh] lg:h-[45vh] overflow-hidden">
        <AdsSlider />
      </div>

      {/* User Position Section */}
      <div className="flex-1 flex items-center justify-center bg-white p-4">
        <div className="text-center">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
            User Position
          </h2>
          <p className="text-sm sm:text-base md:text-lg">123 Example Street</p>
        </div>
      </div>

      {/* Estimated Range Time Section */}
      <div className="w-full p-4 bg-gray-100">
        <div className="text-center">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
            Estimated Range Time
          </h2>
          <p className="text-sm sm:text-base md:text-lg">15-20 minutes</p>
        </div>
      </div>
    </div>
  );
}

export default App;
