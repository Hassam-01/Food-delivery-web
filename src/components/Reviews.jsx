import { GrNext, GrPrevious } from "react-icons/gr";
import ReviewBox from "./ReviewBox";
import { useDispatch, useSelector} from "react-redux";
import { setReviewPageAction } from "../action/Index";
import StarRating from "../Functions/StarRating";

function Reviews() {
  const dispatch = useDispatch();


  // const reviews = useSelector((state) => state.restaurants.reviews);
  const restaurantID = useSelector((state) => state.restaurants.restaurantID);
  const totalRating = useSelector((state) => state.restaurants.totalRating);
  const totalReviews = useSelector((state) => state.restaurants.totalReviews);

  console.log(totalRating);

  const handlePageChnage = (value) => {
    dispatch(setReviewPageAction(value));
    
  };

  return (
    restaurantID != 0 &&
   <div className="bg-[#d9d9d9] w-full pt-12 mt-8 relative pb-16 mb-32">
      <div className="md:mx-28 mx-14 mt-8 flex flex-col space-y-4" >
        <div className="flex justify-between py-2">
          <h3 className="text-2xl font-bold">Customer Reviews</h3>
          <div className="flex items-center gap-5">
            <div
              className="h-10 w-10 rounded-full flex justify-center items-center bg-[#FC8A06]"
              onClick={() => handlePageChnage(-1)}
            >
              <GrPrevious className="text-gray-800 h-5 w-5" />
            </div>
            <div
              className="h-10 w-10 rounded-full flex justify-center items-center bg-[#FC8A06]"
              onClick={() => handlePageChnage(1)}
            >
              <GrNext className="text-gray-800 h-5 w-5" />
            </div>
          </div>
        </div>
        <div className=" flex gap-3">
          <ReviewBox />
        </div>
      </div>
      <div className="bg-white w-fit py-4 px-2 mx-auto absolute rounded-xl -bottom-16 space-x-3 flex flex-col space-y-2 text-center items-center left-[650px]">
        <h2 className="text-3xl font-semibold">{totalRating}</h2>
        <StarRating rating ={totalRating}/>
        <p className="text-sm font-light">Total reviews: {totalReviews}</p>
      </div>
    </div>
  );
}

export default Reviews;
