// |-- public                              # Static files
// |-- src                                 # Next.js source directory
// |   |-- app                             # Next.js App Router
// |   |   |-- (auth)                      # (Group) Private routes
// |   |   |   |-- layout.tsx              # Authenticated layout
// |   |   |   |-- profile                 # (Module) Profile page
// |   |   |   |   `-- page.tsx
// |   |   |-- (unauth)                    # (Group) Public routes
// |   |   |   |-- layout.tsx              # Unauthenticated layout
// |   |   |   |-- page.tsx                # Unauthenticated index page
// |   |   |   `-- products                # (Module) Product page
// |   |   |       |-- components          # Components for the product page
// |   |   |       |   `-- ProductCard.tsx
// |   |   |       |-- layout.tsx
// |   |   |       `-- page.tsx
// |   |   |-- layout.tsx                  # App layout
// |   |   |-- robots.ts                   # Robots.txt
// |   |   `-- sitemap.ts                  # Sitemap.xml
// |   |-- components                      # Global components
// |   |   |-- Footer.tsx
// |   |   |-- Header.tsx
// |   |   `-- ui                          # Atomic design components
// |   |       |-- Button.tsx
// |   |       `-- Tag.tsx
// |   |-- api                             # Global API route handlers
// |   |   `-- auth
// |   |-- styles
// |   |   `-- global.css                  # Global styles
// |   |-- types                           # Global types
// |   |   `-- global.ts
// |   |-- libs                            # 3rd-party libraries
// |   |   `-- auth.ts
// |   `-- utils                           # Global utility functions
// |       `-- helpers.ts
// |-- tailwind.config.ts                  # TailwindCSS configuration
// |-- .eslintrc.json                      # ESLint configuration
// |-- .prettierrc                         # Prettier configuration
// |-- LICENSE
// |-- README.md
// |-- commitlint.config.ts                # Commitlint configuration
// |-- lint-staged.config.js               # Lint-staged configuration
// |-- next-env.d.ts
// |-- next.config.mjs
// |-- package-lock.json
// |-- package.json
// |-- postcss.config.mjs                  # PostCSS configuration
// `-- tsconfig.json                       # Typescript configuration



{/* <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse relative"> */}
{" "}
{/* Added relative positioning */}
{/* <div ref={profileRef}> */}
  {/* <button
    type="button"
    className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
    id="user-menu-button"
    aria-expanded={isProfileOpen}
    onClick={toggleProfile}
  >
    <span className="sr-only">Open user menu</span>
    <img
      className="w-8 h-8 rounded-full"
      src="https://media.licdn.com/dms/image/v2/D4D35AQFVPMTUNJ5rWQ/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1738894027401?e=1741248000&v=beta&t=UcXNALegWof6z1TlWB47YWAhFTmPk5zC8RVMdXdSDYc"
      alt="user photo"
    />
  </button> */}
  {/* {isProfileOpen && (
    <div
      className={`z-50 absolute mt-2 w-48 bg-white rounded-md shadow-lg py-1 ${
        window.innerWidth < 768
          ? "left-1/2 -translate-x-1/2"
          : "right-0" // Conditional positioning
      }`}   
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="user-menu-button"
    >
      <div className="px-4 py-3">
        <span className="block text-sm ">Krishna</span>
        <span className="block text-sm">krishna@example.com</span>
      </div>
      <ul className="py-2" aria-labelledby="user-menu-button">
        <li>
          <a
            href="#"
            className="block px-4 py-2 text-sm  hover:bg-gray-100 dark:hover:bg-gray-600  dark:hover:text-white"
          >
            Profile
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600  dark:hover:text-white"
          >
            Settings
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600  dark:hover:text-white"
          >
            Sign out
          </a>
        </li>
      </ul>
    </div>
  )} */}
{/* </div> */}
{/* <button
  data-collapse-toggle="navbar-user"
  type="button"
  onClick={toggleMenu}
  className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
  aria-controls="navbar-user"
  aria-expanded={isMenuOpen}
>
  <span className="sr-only">Open main menu</span>
  <svg
    className="w-5 h-5"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 17 14"
  >
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M1 1h15M1 7h15M1 13h15"
    />
  </svg>
</button> */}
{/* </div> */}