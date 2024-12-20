// App.jsx
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="homepage">
      {/* Header Section */}
      <header className="header">
        <div className="logo">SkillConnect</div>
        <input type="text" className="search-bar" placeholder="Search services..." />
      </header>

      {/* Categories Section */}
      <section className="categories">
        <h2 className="section-title">Categories</h2>
        <div className="category-list">
          <div className="category-item">Handyman</div>
          <div className="category-item">Cleaning</div>
          <div className="category-item">Pet Care</div>
          <div className="category-item">Tutoring</div>
        </div>
      </section>

      {/* Featured Providers Section */}
      <section className="featured">
        <h2 className="section-title">Top Rated Providers</h2>
        <div className="provider-list">
          <div className="provider-card">
            <img src="https://thumbs.dreamstime.com/b/headshot-handsome-bearded-man-smiling-standing-against-white-background-headshot-handsome-bearded-man-smiling-standing-202880713.jpg" alt="Provider 1" />
            <div className="name">John Doe</div>
            <div className="job-title">Plumber</div>
          </div>
          <div className="provider-card">
            <img src="https://t4.ftcdn.net/jpg/04/32/89/63/360_F_432896398_99o08tTgBYj8YP2eatvF4zaJu3AdF40E.jpg" alt="Provider 2" />
            <div className="name">Jane Smith</div>
            <div className="job-title">Electrician</div>
          </div>
          <div className="provider-card">
            <img src="https://t3.ftcdn.net/jpg/03/91/34/72/360_F_391347204_XaDg0S7PtbzJRoeow3yWO1vK4pnqBVQY.jpg" alt="Provider 3" />
            <div className="name">Mike Johnson</div>
            <div className="job-title">Carpenter</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
