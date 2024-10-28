// ScrollToTop.js
import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Theo dõi vị trí cuộn của trang
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Xử lý sự kiện khi nhấp để cuộn lên đầu trang
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    isVisible && (
      <div className="scroll-to-top" onClick={scrollToTop} style={styles.scrollToTop}>
        ∧
      </div>
    )
  );
};

const styles = {
  scrollToTop: {
    position: 'fixed',
    bottom: '10px',
    right: '10px',
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    borderRadius: '50%',
    cursor: 'pointer',
    fontSize: '10px',
    zIndex: 1000
  }
};

export default ScrollToTop;
