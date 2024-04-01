const Timeline = () => {
  return (
    <div className="flex flex-col md:flex-row ">
      <div className="ml-20 md:w-1/2 ">
        <div className="relative md:mx-auto md:max-w-lg">
          {/* ////////////////////////Timeline elements/////////////////////////////// */}
          <div className="relative flex items-center group">
            <div className="flex-shrink-0 w-6 h-6 rounded-full -mt-7 bg-white">
              <div className="mt-7 ml-2.5 text-xs">|</div>
              <div className="mt-7 ml-2.5 text-xs">|</div>
              <div className="mt-7 ml-2.5 text-xs">|</div>
              <div className="mt-7 ml-2.5 text-xs">|</div>
            </div>
            <div className="ml-6 mt-24">
              <h4 className="text-3xl font-semibold text-white">
                ESTABLISHING AND INNOVATING
              </h4>
              <p className="mt-3 text-white">
                Operational Setup and Platform Development
              </p>
              <ul className="mt-2 list-disc pl-5 text-white">
                <li>Focusing on foundational AI algorithms</li>
                <li>
                  Emphasizing core features of smart contract verification
                </li>
              </ul>
            </div>
          </div>

          {/* Add more timeline items as needed */}

          <div className="relative flex items-center group">
            <div className="flex-shrink-0 w-6 h-6 rounded-full -mt-7 bg-white">
              <div className="mt-7 ml-2.5 text-xs">|</div>
              <div className="mt-7 ml-2.5 text-xs">|</div>
              <div className="mt-7 ml-2.5 text-xs">|</div>
              <div className="mt-7 ml-2.5 text-xs">|</div>
            </div>
            <div className="ml-6 mt-16">
              <h4 className="text-3xl font-semibold text-white">
                TESTING AND LAUNCHING
              </h4>
              <p className="mt-3 text-white">
                Beta Insights and Platform Debut
              </p>
              <ul className="mt-2 list-disc pl-5 text-white">
                <li>Beta Testing</li>
                <li>Finalization and Launch</li>
              </ul>
            </div>
          </div>

          {/* Add more timeline items as needed */}
          <div className="relative flex items-center group">
            <div className="flex-shrink-0 w-6 h-6 rounded-full -mt-7 bg-white">
              <div className="mt-7 ml-2.5 text-xs">|</div>
              <div className="mt-7 ml-2.5 text-xs">|</div>
              <div className="mt-7 ml-2.5 text-xs">|</div>
              <div className="mt-7 ml-2.5 text-xs">|</div>
            </div>
            <div className="ml-6 mt-16">
              <h4 className="text-3xl font-semibold text-white">
                SCALING AND EVOLVING
              </h4>
              <p className="mt-3 text-white">
                User Growth and Market Penetration
              </p>
              <ul className="mt-2 list-disc pl-5 text-white">
                <li>Beta Testing</li>
                <li>Finalization and Launch</li>
              </ul>
            </div>
          </div>

          {/* Add more timeline items as needed */}
          <div className="relative flex items-center group">
            <div className="flex-shrink-0 w-6 h-6 rounded-full -mt-7 bg-white">
              <div className="mt-7 ml-2.5 text-xs">|</div>
              <div className="mt-7 ml-2.5 text-xs">|</div>
              <div className="mt-7 ml-2.5 text-xs">|</div>
              <div className="flex-shrink-0 w-3 h-3 rounded-full ml-1.5 bg-white"></div>
            </div>
            <div className="ml-6 mt-16">
              <h4 className="text-3xl font-semibold text-white">
                BROADENING HORIZONS
              </h4>
              <p className="mt-3 text-white">
                Global Reach and Strategic Vision
              </p>
              <ul className="mt-2 list-disc pl-5 text-white">
                <li>Diversifying services and platform</li>
                <li>Laying the groundwork for future roadmaps</li>
              </ul>
            </div>
          </div>

          {/* Add more timeline items as needed */}
        </div>
      </div>
      <div className="mt-40 ml-16">3D Model</div>
    </div>
  );
};

export default Timeline;
