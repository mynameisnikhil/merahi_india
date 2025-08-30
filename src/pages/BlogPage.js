import React from "react";
import Blog from "../components/Blog";
import Team from "../components/Team";

const BlogPage = () => {
  return (
    <div>
      <div className="container-fluid bg-primary py-5 mb-5 page-header">
        <div className="container py-5 text-center">
          <h1 className="display-3 text-white">Our Blog</h1>
          <p className="lead text-white">Latest travel news, tips and guides</p>
        </div>
      </div>

      <Blog />
      <Team />
    </div>
  );
};

export default BlogPage;
