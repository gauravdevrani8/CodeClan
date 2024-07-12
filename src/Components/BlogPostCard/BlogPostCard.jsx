import { Button } from '@material-tailwind/react';
import React, { useContext } from 'react';
import myContext from '../../Context/Data/MyContext';
import { useNavigate } from 'react-router-dom';

function BlogPostCard() {
  const context = useContext(myContext);
  const { mode, getAllBlog } = context;
  const navigate = useNavigate();

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-10 mx-auto max-w-7xl">
        {/* Main Content */}
        <div className="flex flex-wrap justify-center -m-4 mb-5">
          {/* Card 1 */}
          {getAllBlog.length > 0 ? (
            getAllBlog.map((item, index) => {
              const { thumbnail, date, title, description, id } = item;
              return (
                <div className="p-4 md:w-1/3" key={index}>
                  <div
                    style={{
                      background: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white',
                    }}
                    className={`h-full shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer rounded-lg overflow-hidden border ${
                      mode === 'dark' ? 'border-gray-700' : 'border-gray-300'
                    }`}
                  >
                    {/* Blog Thumbnail */}
                    <img
                      onClick={() => navigate(`/bloginfo/${id}`)}
                      className="w-full h-48 object-cover"
                      src={thumbnail}
                      alt="blog"
                    />
                    {/* Top Items */}
                    <div className="p-6">
                      {/* Blog Date */}
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                        {date}
                      </h2>

                      {/* Blog Title */}
                      <h1 className="title-font text-xl font-bold text-gray-900 mb-2">
                        {title}
                      </h1>

                      {/* Blog Description */}
                      <p className="leading-relaxed mb-4 text-gray-600">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="flex justify-center w-full">
              <p className="text-gray-500">No blog posts available.</p>
            </div>
          )}
        </div>

        {/* See More Button */}
        <div className="flex justify-center my-5">
          <Button
            className="hover:bg-blue-600 hover:text-white transition-colors duration-300"
            style={{
              background: mode === 'dark' ? 'rgb(226, 232, 240)' : 'rgb(30, 41, 59)',
              color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'rgb(226, 232, 240)',
            }}
          >
            See More
          </Button>
        </div>
      </div>
    </section>
  );
}

export default BlogPostCard;
