import React, { useContext } from 'react';
import myContext from '../../Context/Data/MyContext';
import Layout from '../../Components/Layout/Layout';
import { useNavigate } from 'react-router-dom';

function AllBlogs() {
    const context = useContext(myContext);
    const { mode, getAllBlog } = context;
    const navigate = useNavigate();

    return (
        <Layout>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-10 mx-auto max-w-7xl">
                    <div className="mb-5">
                        <h1 className='text-center text-3xl font-extrabold'
                            style={{ color: mode === 'dark' ? 'white' : 'black' }}>
                            All Blogs
                        </h1>
                    </div>
                    <div className="flex flex-wrap justify-center -m-4 mb-5">
                        {getAllBlog.length > 0 ? (
                            getAllBlog.map((item, index) => {
                                const { thumbnail, id, date, blogs } = item;

                                return (
                                    <div className="p-4 md:w-1/3" key={index}>
                                        <div
                                            style={{
                                                background: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white',
                                            }}
                                            className={`h-full shadow-lg rounded-2xl overflow-hidden`}
                                        >
                                            <img 
                                                onClick={() => navigate(`/bloginfo/${id}`)} 
                                                className="w-full h-48 object-cover rounded-t-2xl" 
                                                src={thumbnail} 
                                                alt="blog" 
                                            />

                                            <div className="p-6">
                                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{ color: mode === 'dark' ? 'rgb(226, 232, 240)' : 'rgb(30, 41, 59)' }}>
                                                    {date}
                                                </h2>
                                                <h1 className="title-font text-xl font-semibold text-gray-900 mb-3" style={{ color: mode === 'dark' ? 'rgb(226, 232, 240)' : 'rgb(30, 41, 59)' }}>
                                                    {blogs && blogs.title ? blogs.title : 'No title available'}
                                                </h1>
                                                <p className="leading-relaxed mb-3" style={{ color: mode === 'dark' ? 'rgb(226, 232, 240)' : 'rgb(30, 41, 59)' }}>
                                                    {blogs && blogs.description ? blogs.description : 'No description available.'}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <h1 className='text-xl font-bold text-center'>No Blogs Found</h1>
                        )}
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default AllBlogs;
