import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navigation from "./Navbar/Navigation";
import './detail.css';
import RelatedPost from "./RelatedPost";

const Detail = () => {

    const { id } = useParams();
    const data = useSelector(state => state.post.data);
    const post = data.find((post) => post.id.toString() === id);

    const [showBody, setShowBody] = useState(true);
    const [showUserId, setShowUserId] = useState(false);
    const [activeButton, setActiveButton] = useState("details");

    const handleDetailsClick = () => {
        setShowBody(true);
        setShowUserId(false);
        setActiveButton("details");
    };

    const handleUserInfoClick = () => {
        setShowBody(false);
        setShowUserId(true);
        setActiveButton("userinfo");
    };

    const relatedPosts = data.filter((item) => item.id.toString() !== id);

    return (
        <div>
            <Navigation />
            <div className="detail-page-container">
                <div>
                    <h2 className="post-number"><span className="arrow">{`<`}</span> Post Number : {post.id}</h2>
                </div>
                <div className="selected-card-container">
                    <div>
                        <img src={`https://picsum.photos/200?random=${post.id}`} alt="altpic" className="selected-image-detail-component" />
                    </div>
                    <div>
                        <button
                            onClick={handleDetailsClick}
                            className={activeButton === "details" ? "active" : "infoBtn"}
                        >Details</button>

                        <button
                            onClick={handleUserInfoClick}
                            className={activeButton === "userinfo" ? "active" : "infoBtn"}
                        >User Info</button>
                        {showBody && <p className="para">{post.body}</p>}
                        {showUserId && <p className="para">Post was posted by UserId: {post.userId}</p>}
                    </div>
                </div>

            </div>
            <RelatedPost posts={relatedPosts}/>
        </div>
    )
}

export default Detail;