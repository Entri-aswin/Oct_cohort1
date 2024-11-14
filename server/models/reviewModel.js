import mongoose, { Schema } from "mongoose";

const reviewSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    courseId: {
        type: Schema.Types.ObjectId,
        ref: "Course",
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    comment: {
        type: String,
        trim: true,
        maxlength: 500,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export const Review = mongoose.model("Review",reviewSchema);