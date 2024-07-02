import { useEffect, useState } from "react";
import StarRating from "../Functions/StarRating";
import { useDispatch, useSelector } from "react-redux";
import { setMaxReviewPageAction, setTotalRatingAction, setTotalReviewAction } from "../action/Index";

import customer from "../assets/Customer.png";

function ReviewBox() {
  const [reviews, setReviews] = useState([]);
  const dispatch = useDispatch();

  const reviewPageNumber = useSelector((state) => state.restaurants.reviewPage);
  const restaurantID = useSelector((state) => state.restaurants.restaurantID);

  useEffect(() => {
    const endpoint = `http://localhost:50002/reviews`;

    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          const filteredReviews = data.filter(
            (review) => review.restaurant_id === restaurantID
          );
          setReviews(filteredReviews);

          // Calculate max pages after setting reviews
          const maxPages = Math.ceil(filteredReviews.length / 3);
          dispatch(setMaxReviewPageAction(maxPages));
          const totalReview = filteredReviews.length;
          const totalRating = filteredReviews.reduce((acc, review) => {
              return acc + review.rating;
              }, 0) / (filteredReviews.length);
              
              dispatch(setTotalReviewAction(totalReview));
              dispatch(setTotalRatingAction(totalRating));


        } else {
          console.error("Invalid data format:", data);
        }
      })
      .catch((error) => console.error("Error fetching reviews:", error));
  }, [dispatch, restaurantID]);


  const reviewsPerPage = 3;
  const displayedReviews = reviews.slice(
    reviewPageNumber * reviewsPerPage,
    (reviewPageNumber + 1) * reviewsPerPage
  );

  return (
    <div className="reviews-container flex overflow-x-auto no-scrollbar gap-4">
      {displayedReviews.map((item, index) => (
        <div
          key={index}
          className="bg-white flex flex-col space-y-4 p-4 mb-4 rounded shadow"
        >
          <div className="flex justify-between mb-2">
            <div className="profile flex items-center">
              <img
                src={customer}
                alt="Profile"
                className="w-10 h-10 rounded-full mr-4"
              />
              <div className="flex flex-col">
                <p className="font-semibold">{item.customer_name}</p>
                <p className="text-sm text-gray-600">{item.restaurant_name}</p>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <StarRating rating={item.rating} />
              <p className="text-sm text-gray-600">{item.date}</p>
            </div>
          </div>
          <div className="text-gray-800 w-4/6">{item.review}</div>
        </div>
      ))}
    </div>
  );
}

export default ReviewBox;
