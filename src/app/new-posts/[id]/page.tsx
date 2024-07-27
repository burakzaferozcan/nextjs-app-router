import React from "react";
import { Post } from "../page";
async function getPostById(id: number): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
}
interface DynamicPageProps {
  params: {
    id: number;
  };
}

async function DynamicPost(props: DynamicPageProps) {
  const singlePost = await getPostById(props.params.id);
  console.log(singlePost);

  return (
    <div className="flex flex-col items-center justify-center gap-4 h-screen">
      <h1 className="text-3xl">{singlePost.title}</h1>
      <p>{singlePost.body}</p>
    </div>
  );
}

export default DynamicPost;
