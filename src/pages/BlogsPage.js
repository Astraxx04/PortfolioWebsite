import React from 'react';
import '../assets/css/blogs.css';
import { Col } from 'react-bootstrap';

function BlogsPage() {
    const blogsList = [
        {
            title: 'Dockerizing a MERN App',
            description: `"It's working on my system" is a common phrase used by many programmers who encounter issues when trying to run their code on different machines. Docker is a tool that addresses this problem.`,
            imageUrl: require('../assets/img/blogs/blog1-docker.png'),
            pageUrl:
                'https://dev.to/astraxx04/dockerizing-mern-applications-4ho3',
        },
        {
            title: "Beginner's guide to Go",
            description: `Go, commonly known as GoLang, is a modern statically typed programming language developed by Google that emphasizes simplicity, efficiency, and concurrency.`,
            imageUrl: require('../assets/img/blogs/blog2-golang.png'),
            pageUrl:
                'https://medium.com/@gagan200254/beginners-guide-to-go-b62c7905e748',
        },
    ];

    const handleBlogPage = (page) => {
        window.open(page, '_blank');
    };

    return (
        <div className="blogs-container pt-24">
            <h2 className="text-center font-semibold">Blogs</h2>
            <div className="blogs flex flex-wrap justify-evenly">
                {blogsList.map((blog, index) => (
                    <Col
                        key={index}
                        xs={12}
                        sm={6}
                        md={4}
                        lg={3}
                        className="p-8"
                    >
                        <div className="blog-imgbx">
                            <img
                                src={blog.imageUrl}
                                alt={`projectImage${index}`}
                            />
                            <div className="blog-txtx bg-white h-60 p-3">
                                <h4 className="">{blog.title}</h4>
                                <span>{blog.description}</span>
                                <div className="ustify-center text-center mt-2">
                                    <button
                                        onClick={() =>
                                            handleBlogPage(blog.pageUrl)
                                        }
                                        className="button-blog py-2.5 px-8 font-semibold text-xl rounded-lg bg-black"
                                    >
                                        Read Full
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Col>
                ))}
            </div>
        </div>
    );
}

export default BlogsPage;
