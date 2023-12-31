import React, { useState, useEffect } from 'react';

// scroll direction hook
function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    }
  }, [scrollDirection]);

  return scrollDirection;
};

// header component
function Header() {
  const scrollDirection = useScrollDirection();
  
  return (
    <header className={`header ${scrollDirection === "down" ? "hide" : "show"}`}>
      <div className={`header-content ${scrollDirection === "down" ? 'hide' : 'show'}`}>
        <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
          <div>
            <h1>Joseph Teixeira Portfolio</h1>
          </div>
        </div>
      </div>
      <div>
        <nav>
      <h1 style={{ textAlign: 'center', color: 'blue'}}>Hello!</h1>
        </nav>
      </div>
    </header>
  );
};

export default Header;