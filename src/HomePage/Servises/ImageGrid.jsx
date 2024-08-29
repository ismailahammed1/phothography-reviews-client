import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const ImageGrid = () => {
  const [imageData, setImageData] = useState([]); // Initialize state

  useEffect(() => {
    // Fetch the JSON data from the public folder
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => setImageData(data))
      .catch((error) => console.error("Error fetching data:", error)); // Error handling
  }, []);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  if (imageData.length === 0) {
    return <p>Loading...</p>; // Display loading message while data is being fetched
  }

  // Organize data into rows (example: 3 columns per row)
  const rows = [];
  for (let i = 0; i < imageData.length; i += 3) {
    rows.push(imageData.slice(i, i + 3));
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="grid gap-4">
            {row.map((item) => (
              <div key={item.id}>
                <motion.img
                  ref={ref}
                  initial={{ y: "100%" }}
                  animate={inView ? { y: 0 } : {}}
                  exit={{ y: "-100%" }}
                  transition={{
                    duration: 0.8,
                  }}
                  className="h-auto max-w-full rounded-lg "
                  src={item.image_url}
                  alt={`Image ${item.id}`}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
