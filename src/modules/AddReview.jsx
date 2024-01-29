import { useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

const AddReviewForm = ({ onAddReview }) => {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState(1);
    const [author, setAuthor] = useState("");

    const handleSubmit = async (e) => {
    e.preventDefault();

    const newReview = {
        title,
        author,
        comment,
        rating,
        productId: id,
    };
    onAddReview(newReview);
        setTitle("");
        setComment("");
        setRating(1);
        setAuthor("");
    };

return (
<form className="addreview" onSubmit={handleSubmit}>
    <h3>Add a New Review</h3>
    <label>
    Name:
    <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
    />
    </label>
    <label>
    Title:
    <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
    />
    </label>
    <label>
    Comment:
    <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        required
    />
    </label>
    <label>
    Rating 1-5:
    <input
        type="number"
        value={rating}
        min="1"
        max="5"
        onChange={(e) => setRating(parseInt(e.target.value))}
        required
    />
    </label>
    <button className="clearbutton" type="submit">Submit Review</button>
</form>
    );
};

AddReviewForm.propTypes = {
onAddReview: PropTypes.func.isRequired,
};

export default AddReviewForm;
