import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../redux/actions/post.actions";
import './home.css';
import { Link } from "react-router-dom";
import Navigation from "./Navbar/Navigation";

const Home = () => {

    let loading = useSelector(state => state.post.loading)
    let data = useSelector(state => state.post.data)
    let error = useSelector(state => state.post.error)

    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <p>{error}</p>
    }

    const maxTitleLength = 20;
  const maxBodyLength = 50;

    return (
        <div>
            <Navigation />
            <div>
            <h1>Social Media For Travellers</h1>
            <input type="text" className="search"/>
            </div>
            <div className="home-container">
                
            
            {
                data.map((post) => (
                    <div key={post.id} className="home-card">
                        <img src={` https://picsum.photos/200?random=${post.id}`} alt="poster" />
                        <div>
                        <h2>{post.title.slice(0, maxTitleLength)}</h2>
                        <p>{post.body.slice(0, maxBodyLength)}</p>
                        <p>
                            <Link to={`/item/${post.id}`}>Read More...</Link>
                        </p>
                        </div>
                    </div>
                ))
            }
            </div>

        </div>
    )
}

export default Home;