import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import image1 from "./../../assets/image1.png";

const Review = () => {
  const service = useLoaderData();
  const [comment, setComment] = useState("");
  const [reviews, setReviews] = useState(service.reviews || []);
  const { user } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newReview = { comment, author: user.displayName || user.email };
    const response = await fetch(
      `http://localhost:5000/services/${service._id}/review`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newReview),
      }
    );

    if (response.ok) {
      setReviews([...reviews, newReview]);
      setComment("");
    } else {
      console.error("Failed to add the review");
    }
  };

  return (
    <div className="max-w-[120rem] mx-auto bg-slate-600 h-auto flex flex-col items-center p-6">
      {/* Banner Section */}
      <div className="h-80 mt-12 lg:mt-28 w-full max-w-7xl">
        <img
          src={image1}
          alt="Banner"
          className="w-full h-full object-cover rounded-3xl opacity-70"
        />
      </div>

      <div className="flex flex-col items-center text-center w-full max-w-7xl mt-10">
        <h1 className="text-3xl lg:text-5xl font-bold mb-4 text-white">
          {service.title}
        </h1>
        <p className="text-white text-xl lg:text-3xl">{service.description}</p>
        <motion.img
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          src={service.image}
          className="h-full w-full lg:w-3/4 object-cover mt-6 rounded-xl"
          alt="Service Image"
        />
      </div>

      {/* Review Submission Form */}
      <form
        onSubmit={handleSubmit}
        className="my-8 p-6 bg-white rounded-md shadow-md w-full max-w-4xl"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-4xl font-bold mb-2">
            Your Review:
          </label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-3xl font-semibold"
            placeholder="Write your review"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-transparent text-black font-semibold py-2 px-4 border border-black hover:bg-slate-400 rounded tracking-wide text-xl md:text-2xl w-64 md:w-80"
        >
          Submit Review
        </button>
      </form>

      {/* Display Reviews */}
      <div className="mt-8 w-full max-w-4xl mb-28">
        <h2 className="text-2xl lg:text-4xl font-semibold text-white mb-4">
          Reviews:
        </h2>
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div
              key={index}
              className="border p-4 my-4 rounded-md bg-white shadow-md"
            >
              <p>{review.comment}</p>
              <p className="text-gray-500">- {review.author}</p>
            </div>
          ))
        ) : (
          <p className="text-white text-lg lg:text-2xl">No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default Review;
