import React from "react";
import blogData from "../data/blog";
// ! line break
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";


console.log(blogData);

function App() {
  return (
    <div className="App">
      {/* You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck! */}
      <Header name={blogData.name}></Header>
      <About image={blogData.image} about={blogData.about}></About>
      <ArticleList posts={blogData.posts}></ArticleList>
    </div>
  );
}

export default App;
