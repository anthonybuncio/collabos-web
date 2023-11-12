import { Logo } from "./Icons";

const Header = () => {
  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="flex items-center text-xl" href="/">
              <span className="sr-only">Home</span>
              {/* <Logo className="h-12 w-12" /> */}
              <img
                src="https://img.icons8.com/pulsar-color/96/operating-system.png"
                alt="operating-system"
                className="h-12 w-12 mr-2"
              />
              CollabOS
            </a>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a className="transition hover:text-gray-500/75" href="/">
                    Home
                  </a>
                </li>

                <li>
                  <a
                    className="transition hover:text-gray-500/75"
                    href="/discover"
                  >
                    Discover
                  </a>
                </li>

                <li>
                  <a className="transition hover:text-gray-500/75" href="/">
                    Members
                  </a>
                </li>

                <li>
                  <a className="transition hover:text-gray-500/75" href="/">
                    How It Works
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a className="px-5 py-2.5 text-sm font-medium" href="/">
                Login
              </a>

              <div className="hidden sm:flex">
                <a
                  className=" rounded-full px-5 py-2.5 text-sm font-medium text-blue-700 border border-blue-700"
                  href="/"
                >
                  Sign Up
                </a>
              </div>
            </div>

            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
