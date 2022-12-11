import React from 'react'
import { useParams } from 'react-router-dom';
import { BlogsData } from './BlogsData';
const BlogPost = () => {
    const { blogpost } = useParams();


    const blog = BlogsData.filter((blog) => blog.Id === blogpost);


    return (
        <>
            <div className="container" style={{
                color: "black",
            }}>
                <div className="row">
                    <div className="col-12">

                        <img src={blog[0]?.img}
                            className="img-fluid" alt="..." />
                        <h1 className="text-center " style={{
                            color: "black",
                            fontWeight: "bold",
                            fontSize: "50px"

                        }}>
                            {blog[0]?.title}
                        </h1>

                        <div className="mb-3">
                            <div className="float-start">
                                Author = "Rahul"
                            </div>
                            <div className="float-end">
                                Date = "12/12/2021"
                            </div>
                        </div>
                         

                        <p className="mt-5" style={{
                            color: "black",
                            fontWeight: "bold",
                            fontSize: "20px"
                        }}>
                            {blog[0]?.description}
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

//  image adderss
// https://static.autox.com/uploads/2021/11/Ola-Electric-S1-Pro.jpg

export default BlogPost