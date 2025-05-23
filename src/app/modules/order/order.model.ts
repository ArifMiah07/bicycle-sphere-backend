import { model, Schema } from 'mongoose';
import { TOrder } from './order.interface';

const orderSchema = new Schema<TOrder>(
  {
    email: { type: String, required: true },
    title: { type: String, required: true },
    product: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Bicycle',
    },
    quantity: { type: Number, required: true },
    status: {
      type: String,
      enum: ['Pending', 'Paid', 'Cancelled'],
      default: 'Pending',
    },
    transaction: {
      id: { type: String },
      transactionStatus: { type: String },
      checkoutUrl: { type: String },
    },

    totalPrice: { type: Number, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Order = model<TOrder>('Order', orderSchema);
export default Order;
