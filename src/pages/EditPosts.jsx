import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DBService from "../appwrite/db";
import Container from "../components/container/Container";
import PostForm from "../components/post-form/PostForm";

function EditPosts() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      DBService.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
        } else {
          navigate("/");
        }
      });
    }
  }, [sulg, navigate]);

  return <div className="py-6">
<Container>
  <PostForm post={post}/>
</Container>


  </div>;
}

export default EditPosts;
