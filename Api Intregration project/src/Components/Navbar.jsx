import React, { useEffect, useState } from "react";
import Cards from "./Cards";

const Navbar = () => {
  const [search, setSearch] = useState("india");
  const [newsdata, setNewsdata] = useState([]);

  const API_KEY = "3b1b4eb982a044169853c3c9e2ff97ee";

  // 🔹 Common fetch function
  const fetchNews = async (query) => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${query}&apikey=${API_KEY}`
      );
      const data = await response.json();
      setNewsdata(data.articles || []);
    } catch (error) {
      console.error(error);
    }
  };

  // Initial load
  useEffect(() => {
    fetchNews(search);
  }, []);

  const handleSearch = () => {
    fetchNews(search);
  };

  const handleCategory = (category) => {
    setSearch(category);
    fetchNews(category);
  };

  return (
    <>
      <nav>
        <h1>Trendy News</h1>

        <ul>
          <li>All News</li>
          <li>Trending</li>
        </ul>

        <div className="searchBar">
          <input
            type="text"
            placeholder="Search News"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </nav>

      <p className="head">Stay Update with TrendyNews</p>

      <div className="categoryBtn">
        <button onClick={() => handleCategory("sports")}>Sports</button>
        <button onClick={() => handleCategory("politics")}>Politics</button>
        <button onClick={() => handleCategory("entertainment")}>Entertainment</button>
        <button onClick={() => handleCategory("health")}>Health</button>
        <button onClick={() => handleCategory("fitness")}>Fitness</button>
      </div>

      {newsdata.length > 0 && <Cards data={newsdata} />}
    </>
  );
};

export default Navbar;
