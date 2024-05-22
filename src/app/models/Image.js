import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  itemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Item",
    required: true,
  },
});

export default mongoose.models.Image || mongoose.model("Image", ImageSchema);
