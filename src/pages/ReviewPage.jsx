import { useEffect, useState } from "react";
import Loading from "../modules/Loading";
import { FaEuroSign, FaStar } from "react-icons/fa6";
import { TbEngine } from "react-icons/tb";
import { GiCarWheel, GiGearStick } from "react-icons/gi";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";
import { MdDeleteForever, MdOutlineAirlineSeatLegroomExtra } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import AddReviewForm from "../modules/AddReview";
import { BiSolidEditAlt } from "react-icons/bi";

const ReviewPage = () => {
  const [car, setCar] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [editingReviewId, setEditingReviewId] = useState(null);
  const { id } = useParams();

  const fetchCarAndReviews = async () => {
    try {
      const carResponse = await fetch(`http://localhost:4000/cars/${id}`);
      const carData = await carResponse.json();
      setCar(carData);

      const reviewsResponse = await fetch(
        `http://localhost:4000/reviews?productId=${carData.id}`
      );
      const reviewsData = await reviewsResponse.json();
      setReviews(reviewsData);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    fetchCarAndReviews();
  }, [id]);

  const handleAddReview = async (newReview) => {
    try {
      const response = await fetch("http://localhost:4000/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newReview),
      });

      if (!response.ok) {
        throw new Error("Failed to add review");
      }

      fetchCarAndReviews();
    } catch (error) {
      console.error("Error adding review:", error.message);
    }
  };

  const handleEditReview = async (editedReview) => {
    try {
      const response = await fetch(`http://localhost:4000/reviews/${editingReviewId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedReview),
      });

      if (!response.ok) {
        throw new Error("Failed to edit review");
      }

      // Reset editing state after successful edit
      setEditingReviewId(null);

      fetchCarAndReviews();
    } catch (error) {
      console.error("Error editing review:", error.message);
    }
  };

  const handleDeleteReview = async (reviewId) => {
    try {
      const response = await fetch(`http://localhost:4000/reviews/${reviewId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete review");
      }

      fetchCarAndReviews();
    } catch (error) {
      console.error("Error deleting review:", error.message);
    }
  };

  const renderStars = (rating) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar key={i} color={i < rating ? "rgb(15, 165, 175)" : "#E0E0E0"} />
      );
    }
    return stars;
  };

  return (
    <>
      <div className="carnav">
        <Link to="/cars">
          <button className="button">
            <span>Go Back</span>
          </button>
        </Link>
      </div>
      <div className="reviewpage">
        {car ? (
          <div className="grid">
            <div className="addreview">
              <AddReviewForm
                onAddReview={handleAddReview}
                onEditReview={handleEditReview}
                initialReview={
                  editingReviewId ? reviews.find((r) => r.id === editingReviewId) : null
                }
              />
            </div>
            <div className="car">
              <div className="carname">
                <img src={car.carPicture} alt={car.carName} />
                <h2>{car.carName}</h2>
              </div>
              <div className="description">
                <div className="first-section">
                  <p>
                    <FaEuroSign /> {car.price}/24h
                  </p>
                  <p>
                    <TbEngine /> {car.engineLiters}l
                  </p>
                </div>
                <div className="second-section">
                  <p>
                    <GiCarWheel /> {car.carType}
                  </p>
                  <p>
                    <BsFillFuelPumpFill /> {car.gasType}
                  </p>
                </div>
                <div className="third-section">
                  <p>
                    <FaCalendarAlt /> {car.carYear}
                  </p>
                  <p>
                    <GiGearStick /> {car.transmissionType}
                  </p>
                  <p>
                    <MdOutlineAirlineSeatLegroomExtra /> {car.seatCount}
                  </p>
                </div>
              </div>
            </div>
            <div className="reviews">
              {reviews.map((review) => (
                <div className="review" key={review.id}>
                  <p>{review.author}</p>
                  <h3>{review.title}</h3>
                  <p>{review.comment}</p>
                  <p>{renderStars(review.rating)}</p>
                  <div className="ctrlbuttons">
                    {/* <button
                      className="editbtn"
                      onClick={() => setEditingReviewId(review.id)}
                    >
                      <BiSolidEditAlt />
                    </button> */}
                    <button
                      className="delbtn"
                      onClick={() => handleDeleteReview(review.id)}
                    >
                      <MdDeleteForever />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};

export default ReviewPage;
