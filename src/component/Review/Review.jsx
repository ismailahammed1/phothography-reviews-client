import { useLoaderData } from "react-router";

const Review = () => {
  const service = useLoaderData(); // Get the service details for the specific ID

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{service.title}</h1>
      <p>{service.description}</p>
      {/* You can display reviews and other service details here */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold">Reviews:</h2>
        {/* Assuming the service object contains a "reviews" field */}
        {service.reviews && service.reviews.length > 0 ? (
          service.reviews.map((review, index) => (
            <div key={index} className="border p-4 my-4 rounded-md">
              <p>{review.comment}</p>
              <p className="text-gray-500">- {review.author}</p>
            </div>
          ))
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default Review;
