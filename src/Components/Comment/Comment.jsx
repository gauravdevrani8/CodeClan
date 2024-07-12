import { Button } from '@material-tailwind/react';
import React, { useContext } from 'react';
import myContext from '../../Context/Data/MyContext';

function CommentComponent({ addComment, commentText, setCommentText, allComment, fullName, setFullName }) {
  const context = useContext(myContext);
  const { mode } = context;

  return (
    <div className="py-8 lg:py-16">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex justify-between items-center mb-5">
          <h2 className={`text-xl lg:text-2xl font-bold ${mode === 'dark' ? 'text-white' : 'text-black'}`}>
            Make a Comment
          </h2>
        </div>
        <form className="mb-6" onSubmit={(e) => { e.preventDefault(); addComment(); }}>
          {/* Full Name Input */}
          <div
            className={`py-3 px-4 mb-4 rounded-lg shadow-md border border-gray-300 transition-colors duration-200 ${
              mode === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-100 text-black'
            }`}
          >
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              placeholder="Enter Full Name"
              className="px-0 w-full text-base focus:outline-none bg-transparent"
              required
            />
          </div>

          {/* Text Area */}
          <div
            className={`py-3 px-4 mb-6 rounded-lg shadow-md border border-gray-300 transition-colors duration-200 ${
              mode === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-100 text-black'
            }`}
          >
            <label htmlFor="comment" className="sr-only">
              Your comment
            </label>
            <textarea
              id="comment"
              rows={6}
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              className="px-0 w-full text-base focus:outline-none bg-transparent"
              placeholder="Write a comment..."
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <Button
              type="submit"
              className="transition-colors duration-300 hover:bg-blue-600 hover:text-white"
              style={{
                background: mode === 'dark' ? '#4A5568' : '#2B6CB0',
                color: 'white',
              }}
            >
              Post Comment
            </Button>
          </div>
        </form>

        {/* Comments List */}
        {allComment.map((item) => (
          <article
            key={item.id}
            className="p-6 mb-6 rounded-lg shadow-md transition-colors duration-300"
            style={{ background: mode === 'dark' ? '#4A5568' : 'white' }}
          >
            <footer className="flex justify-between items-center mb-3">
              <div className="flex items-center">
                <p className={`mr-3 text-lg font-semibold ${mode === 'dark' ? 'text-white' : 'text-black'}`}>
                  {item.fullName}
                </p>
                <p className="text-sm text-gray-500">
                  {item.date}
                </p>
              </div>
            </footer>
          </article>
        ))}
      </div>
    </div>
  );
}

export default CommentComponent;
