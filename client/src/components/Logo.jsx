import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import logo from '../../public/quickexport.png';

const Logo = () => {
  return (
    <div>
      <div className="bg-white">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav
            className="flex items-center justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <Link to="/" className="-m-1.5 p-1.5">
                <img
                  className="h-12 w-auto"
                  src={logo}
                  alt="Logo Iaroslav Lasiichuk"
                />
              </Link>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Logo;
