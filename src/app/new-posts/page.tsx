import Link from "next/link";
import React from "react";
export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
async function getAllPosts(): Promise<Array<Post>> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

async function NewPostsPage() {
  const posts = await getAllPosts();
  console.log(posts);

  return (
    <div>
      {posts.map((post) => (
        <div
          key={post.id}
          className="text-center border-b-[1px] border-b-slate-500"
        >
          <Link href={"/new-posts/" + post.id}>
            <h2 className="text-2xl hover:text-blue-500 cursor-pointer">
              {post.title}
            </h2>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default NewPostsPage;
