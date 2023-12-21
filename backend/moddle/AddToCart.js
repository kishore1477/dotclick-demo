import mongoose from "mongoose";
const AddToCartSchema = new mongoose.Schema({
    userId: {
        type: Number,
        required: true,
        trim: true
    },
    products: [
        {
            productId: { type: String, required: true },
            quantity: {
                type:  Number, required: true,    },
                productName: { type: String, required: true },
            price: { type: Number, required: true },
            variant: {
                type: String,
                required: true,
                trim: true
            },
        }
    ],






});
const AddToCart = mongoose.model('AddToCart', AddToCartSchema);
export default AddToCart