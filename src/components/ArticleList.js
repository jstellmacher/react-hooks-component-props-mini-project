import React from "react";
import Article from "./Article"
// ! this is the parent of article.js thats why we import it - if you notice Jai, App.js is overacrhing parent so it imports all components

function ArticleList({posts}){
    const articles = posts.map(post => (
        <Article
            key={post.id}
            title={post.title}
            date={post.date}
            preview={post.preview}
        />
    ));
    return(
        <main>{articles}</main>
    );
};

export default ArticleList;