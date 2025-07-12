"use client";
import style from "./Blogs.module.css";
import { useRouter } from "next/navigation";

const Blogs = () => {
  const router = useRouter();

  const blogData = [
    {
      id: 1,
      blogName: "The JavaScript Journey",
      description: "A complete guide for beginners to learn JavaScript from scratch."
    },
    {
      id: 2,
      blogName: "React Made Simple",
      description: "An in-depth tutorial series to understand React.js with real-world examples."
    },
    {
      id: 3,
      blogName: "Understanding Node.js",
      description: "Explore server-side development using Node.js, Express, and MongoDB."
    },
    {
      id: 4,
      blogName: "Web Design Principles",
      description: "Learn the fundamentals of UI/UX design, accessibility, and responsive layouts."
    },
    {
      id: 5,
      blogName: "Next.js Mastery",
      description: "Everything you need to build powerful full-stack applications using Next.js."
    }
  ];

  return (
    <div className={style.blog}>
      <h1>Blog</h1>
      <div className={style.cardcontainer}>
        {blogData.map((blog) => (
          <div className={style.card} key={blog.id}>
            <h2>{blog.blogName}</h2>
            <p>{blog.description}</p>
            <button
              onClick={() =>
                router.push(
                  `/disc?id=${blog.id}&title=${encodeURIComponent(
                    blog.blogName
                  )}&desc=${encodeURIComponent(blog.description)}`
                )
              }
            >
              Explore Me
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
