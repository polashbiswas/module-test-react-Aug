import React from "react";
import { Link } from "react-router-dom";


const RelatedPost = ({posts}) => {

    const maxTitleLength = 20;
    const maxBodyLength = 50;

    return (
        <div>
            <h1 className="heading">More Post</h1>
            <div className="home-container">


                {
                    posts.map((post) => (
                        <div key={post.id} className="home-card">
                            <img src={` https://picsum.photos/200?random=${post.id}`} alt="poster" />
                            <div className="home-details-container">
                                <div>
                                <h2>{post.title.slice(0, maxTitleLength)}</h2>
                                <p className="body-home">{post.body.slice(0, maxBodyLength)}
                                <span className="read-more"><Link to={`/item/${post.id}`}>. Read More...</Link></span></p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default RelatedPost;