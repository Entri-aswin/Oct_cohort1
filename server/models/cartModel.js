import mongoose, { Schema } from "mongoose";

const cartSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    courses: [
        {
            courseId: {
                type: Schema.Types.ObjectId,
                ref: "Course",
                required: true,
            },
            price: {
                type: Number,
                required: true,
            },
        },
    ],
    totalPrice: {
        type: Number,
        required: true,
        default: 0,
    },
});

cartSchema.methods.calculateTotalPrice = function() {
    this.totalPrice = this.courses.reduce((total, course) => total + course.price, 0);
};

export const Cart =  mongoose.model("Cart",cartSchema);