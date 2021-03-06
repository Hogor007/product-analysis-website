import React from "react";
import { Link } from "react-router-dom";
import beef from "../../assests/images/beef.jpg";
import useReviews from "../../assests/hooks/useReviews";
import Rating from "react-rating";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const [review, setReview] = useReviews();
  return (
    <div>
      <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6">
        <div className="flex flex-col items-center w-full md:flex-row md:w-1/2">
          <div className="max-w-lg md:mx-12 md:order-2">
            <h1 className="text-3xl font-serif font-medium tracking-wide text-gray-800 dark:text-white md:text-6xl">
              Bengal<span className=" text-yellow-400">Meat</span>
            </h1>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              With expert check-points placed every step of the way, we aimed to ensure supreme tasting quality meats from the farm all the way to your plate.
            </p>
            <div className="mt-6">
              <Link
                to="/about"
                className="block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-yellow-400 rounded-md md:inline hover:bg-yellow-500"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full h-96 md:w-1/2">
          <img
            className="object-cover w-full h-full max-w-2xl rounded-md"
            src={beef}
            alt=""
          />
        </div>
      </div>
      <div className="mt-6">
        <h1 className="text-center text-4xl">Satisfied Customers</h1>
        <hr className="container mx-auto w-1/3 my-4" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 container gap-4 mx-auto ">
        {review.slice(0, 3).map((data) => (
          <div
            className="flex flex-col items-center pb-10 border-4 rounded-lg p-6"
            key={data.id}
          >
            <img
              className="mb-3 w-24 h-24 rounded-full shadow-lg"
              src={data.img}
              alt=""
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {data.name}
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {data.profession}
            </span>
            <p>{data.comment}</p>
            <p>
              Rating : <strong>{data.rating}</strong>
            </p>
            <Rating
              initialRating={data.rating}
              emptySymbol={<FontAwesomeIcon icon={faStar} />}
              fullSymbol={
                <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar} />
              }
              readonly
            ></Rating>
          </div>
        ))}
      </div>
      <div className="mt-4 grid place-items-center">
        <Link
          to="/reviews"
          className="block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-yellow-400 rounded-md md:inline hover:bg-yellow-500 w-64"
        >
          See all
        </Link>
      </div>
    </div>
  );
};

export default Header;
