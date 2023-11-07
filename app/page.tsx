import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="relative z-20 flex items-center overflow-hidden bg-white dark:bg-gray-800">
        <div className="container relative flex px-6 py-16 mx-auto">
          <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
            <span className="w-20 h-2 mb-12 bg-gray-800 dark:bg-white"></span>
            <h1 className="flex flex-col text-5xl font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-8xl dark:text-white">
              <span className="text-4xl sm:text-7xl">
                Your home for matchmaking
              </span>
              developer collaboration
            </h1>
            <p className="text-sm text-gray-700 sm:text-base dark:text-white">
              Built for developers – join and collaborate with hundreds of other
              GitHub users creating shared open source applications. We make it
              easier to find open source projects and making code contributions
              easier than ever.
            </p>
            <div className="flex mt-8">
              <a
                href="#"
                className="px-4 py-2 mr-4 text-white uppercase bg-blue-500 border-2 border-transparent rounded-full text-md hover:bg-blue-400"
              >
                Join now
              </a>
              <a
                href="#"
                className="px-4 py-2 text-blue-500 uppercase bg-transparent border-2 border-blue-500 rounded-full dark:text-white hover:bg-blue-500 hover:text-white text-md"
              >
                Read more
              </a>
            </div>
          </div>
          <div className="relative hidden sm:block sm:w-1/3 lg:w-3/5">
            <img
              src="https://cdn-blog.adafruit.com/uploads/2021/12/Ninjas_HiFive_5.gif"
              className="max-w-xs m-auto md:max-w-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
