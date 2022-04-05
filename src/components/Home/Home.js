
import { Link } from 'react-router-dom';
import img from '../../images/image1.jpg'
import useReviews from '../hooks/useReviews';
import Review from '../Review/Review';

import './Home.css'

const Home = () => {

    const [reviews, setReviews] = useReviews();

    const slicedReviews = [...reviews.slice(0, 3)];

    console.log(slicedReviews);

    return (
        <div className='home'>
            <div className="product-container">
                <div className="title">
                    <h1 className='title1'>Computer Hut</h1>
                    <h2 className='title2'>Choose Your Laptop</h2>
                    <p className='product-details'>Laptops are compact enough to carry with you, yet versatile enough to run demanding applications. Notebooks are the best tool for doing serious work or play whether you're at home, on the road or in a college classroom. For those reasons, we've compiled lists of the best business laptops and best college laptops, not to mention our best laptops rankings for most users. </p>
                    <button className='btn'>Live Demo</button>
                </div>
                <div className="product-img">
                    <img src={img} alt="" />
                </div>
            </div>
            <div className="product-review">
                <h2 className='review-title'>Customer Reviews: {slicedReviews.length}</h2>
                {
                    slicedReviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
                <Link to="/reviews"><button className='btn'>See all reviews</button></Link>
            </div>

        </div>
    );
};

export default Home;