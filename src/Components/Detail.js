import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navigation from "./Navbar/Navigation";

const Detail = () => {

    const { id } = useParams();
    const data = useSelector(state => state.post.data);
    const post = data.find((post) => post.id.toString() === id);

    const [showBody, setShowBody] = useState(true);
    const [showUserId, setShowUserId] = useState(false);

    const handleDetailsClick = () => {
        setShowBody(true);
        setShowUserId(false);
    };

    const handleUserInfoClick = () => {
        setShowBody(false);
        setShowUserId(true);
    };


    return (
        <div>
            <Navigation />
            <div>
                <h4>Post Number : {post.id}</h4>
            </div>
            <div>
                <img src={`https://picsum.photos/200?random=${post.id}`} alt="altpic" />
            </div>
            <div>
                {/* <p>{post.title}</p>
                <p>{post.body}</p> */}
                <button onClick={handleDetailsClick}>Details</button>
                <button onClick={handleUserInfoClick}>UserInfo</button>
            </div>
            {showBody && <p>{post.body}</p>}
            {showUserId && <p>Post was posted by UserId: {post.userId}</p>}
        </div>
    )
}

export default Detail;