import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import myContext from '../../Context/Data/MyContext';
import { addDoc, collection, doc, getDoc, onSnapshot, orderBy, query, Timestamp } from 'firebase/firestore';
import { fireDb } from '../../Firebase/FirebaseConfig';
import Layout from '../../Components/Layout/Layout';
import Loader from '../../Components/Loader/Loader';
import CommentComponent from '../../Components/Comment/Comment';
import toast from 'react-hot-toast';

function BlogInfo() {
  const context = useContext(myContext);
  const { mode, setloading, loading } = context;
  const params = useParams();

  const [getBlogs, setGetBlogs] = useState();

  const getAllBlogs = async () => {
    setloading(true);
    try {
      const productTemp = await getDoc(doc(fireDb, "blogPost", params.id));
      if (productTemp.exists()) {
        setGetBlogs(productTemp.data());
      } else {
        console.log("Document does not exist");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    getAllBlogs();
    window.scrollTo(0, 0);
  }, []);

  const [fullName, setFullName] = useState('');
  const [commentText, setCommentText] = useState('');
  
  const addComment = async () => {
    const commentRef = collection(fireDb, `blogPost/${params.id}/comment`);
    try {
      await addDoc(commentRef, {
        fullName,
        commentText,
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US", { month: "short", day: "2-digit", year: "numeric" }),
      });
      toast.success('Comment added successfully');
      setFullName("");
      setCommentText("");
    } catch (error) {
      console.log(error);
    }
  };

  const [allComment, setAllComment] = useState([]);
  
  const getcomment = async () => {
    const q = query(
      collection(fireDb, `blogPost/${params.id}/comment`),
      orderBy('time')
    );
    onSnapshot(q, (QuerySnapshot) => {
      let productsArray = [];
      QuerySnapshot.forEach((doc) => {
        productsArray.push({ ...doc.data(), id: doc.id });
      });
      setAllComment(productsArray);
    });
  };

  useEffect(() => {
    getcomment();
  }, []);

  return (
    <Layout>
      <section className="rounded-lg h-full overflow-hidden max-w-4xl mx-auto px-6 py-8 bg-white dark:bg-transparent">
        {loading ? (
          <Loader />
        ) : (
          <div>
            {/* Thumbnail */}
            <img
              alt="content"
              className="mb-6 rounded-lg shadow-md h-auto w-full"
              src={getBlogs?.thumbnail}
            />
            {/* Content */}
            <div>
              <div className="flex justify-between items-start mb-4">
                <h1 className={`text-3xl font-bold ${mode === 'dark' ? 'text-white' : 'text-black'}`}>
                  {getBlogs?.title}
                </h1>
                <p className={`${mode === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                  {getBlogs?.date}
                </p>
              </div>
              <hr className={`border-b mb-5 ${mode === 'dark' ? 'border-gray-600' : 'border-gray-400'}`} />
              {/* Blog Content */}
              <div className="content text-lg text-gray-800 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: getBlogs?.content }} />
            </div>
          </div>
        )}
      </section>

      <section className="max-w-4xl mx-auto mt-8">
        <h2 className={`text-xl font-semibold mb-4 ${mode === 'dark' ? 'text-white' : 'text-black'}`}>Comments</h2>
        <CommentComponent
          addComment={addComment}
          commentText={commentText}
          setCommentText={setCommentText}
          allComment={allComment}
          fullName={fullName}
          setFullName={setFullName}
        />
      </section>
    </Layout>
  );
}

export default BlogInfo;
