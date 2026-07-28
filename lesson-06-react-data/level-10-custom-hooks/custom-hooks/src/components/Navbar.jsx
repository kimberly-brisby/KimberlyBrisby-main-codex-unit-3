import { useEffect } from "react";
import { useCollapseTWE } from "../hooks/useCollapseTWE";

export function Navbar() {
useCollapseTWE();
    return (
//         <!-- Main navigation container -->
<nav
  className="flex-no-wrap relative flex w-full items-center justify-between bg-zinc-50 py-2 shadow-dark-mild dark:bg-neutral-700 lg:flex-wrap lg:justify-start lg:py-4">
  <div className="flex w-full flex-wrap items-center justify-between px-3">
    {/* <!-- Hamburger button for mobile view --> */}
    <button
      className="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
      type="button"
      data-twe-collapse-init
      data-twe-target="#navbarSupportedContent1"
      aria-controls="navbarSupportedContent1"
      aria-expanded="false"
      aria-label="Toggle navigation">
      {/* <!-- Hamburger icon --> */}
      <span
        className="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor">
          <path
            fillRule="evenodd"
            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
            clipRule="evenodd" />
        </svg>
      </span>
    </button>

    {/* <!-- Collapsible navigation container --> */}
    <div
      className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
      id="navbarSupportedContent1"
      data-twe-collapse-item>
      {/* <!-- Logo --> */}
      <NavLink
        className="mb-4 me-5 ms-2 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
        href="#">
        
      </NavLink>
      {/* <!-- Left navigation links --> */}
      <ul
        className="list-style-none me-auto flex flex-col ps-0 lg:flex-row"
        data-twe-navbar-nav-ref>
        <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
          {/* <!-- Home link --> */}
          <NavLink
            className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
            to="/"
            data-twe-nav-link-ref
            >Home</NavLink
          >
        </li>
        {/* <!-- About link --> */}
        <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
          <NavLink
            className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
            to="/about"
            data-twe-nav-link-ref
            >About</NavLink
          >
        </li>
        {/* <!-- Slides link --> */}
        <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
          <NavLink
            className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
            to="/slides"
            data-twe-nav-link-ref
            >Slides</NavLink
          >
        </li>
        
      </ul>
     

      {/* <!-- First dropdown container --> */}
      <div
        className="relative"
        data-twe-dropdown-ref
        data-twe-dropdown-alignment="end">
        {/* <!-- First dropdown trigger --> */}
        <NavLink
          className="me-4 flex items-center text-neutral-600 dark:text-white"
          href="#"
          id="dropdownMenuButton1"
          role="button"
          data-twe-dropdown-toggle-ref
          aria-expanded="false">
          {/* <!-- Dropdown trigger icon --> */}
          <span className="[&>svg]:w-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor">
              <path
                fillRule="evenodd"
                d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                clipRule="evenodd" />
            </svg>
          </span>
          {/* <!-- Notification counter --> */}
          <span
            className="absolute -mt-4 ms-2.5 rounded-full bg-danger px-[0.35em] py-[0.15em] text-[0.6rem] font-bold leading-none text-white"
            ></span
          >
        </NavLink>
        {/* <!-- First dropdown menu --> */}
        <ul
          className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-surface-dark"
          aria-labelledby="dropdownMenuButton1"
          data-twe-dropdown-menu-ref>
          {/* <!-- First dropdown menu items --> */}
          
        
          
        </ul>
      </div>

      {/* <!-- Second dropdown container --> */}
      <div
        className="relative"
        data-twe-dropdown-ref
        data-twe-dropdown-alignment="end">
        {/* <!-- Second dropdown trigger --> */}
        <NavLink
          className="flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
          href="#"
          id="dropdownMenuButton2"
          role="button"
          data-twe-dropdown-toggle-ref
          aria-expanded="false">
          
        </NavLink>
        {/* <!-- Second dropdown menu --> */}
        <ul
          className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-surface-dark"
          aria-labelledby="dropdownMenuButton2"
          data-twe-dropdown-menu-ref>
          {/* <!-- Second dropdown menu items --> */}
          
        
        </ul>
      </div>
    </div>
    {/* <!-- Right elements --> */}
  </div>
</nav>

);



}


