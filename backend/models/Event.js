import { Schema, model } from "mongoose";
import moment from "moment"; 

const EventSchema = new Schema (
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        time: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        meetinglink: {
            type: String,
        },
        author: { type: Schema.Types.ObjectId, ref:'User' },
    }, {
        timestamps: true,
    }
);

// Middleware to convert date string to Date object before saving
EventSchema.pre('save', function (next) {
    // Use moment.js to parse the date string
    this.date = moment(this.date, "DD-MM-YYYY").toDate();
    next();
});

const Event = model("Event", EventSchema)
export default Event;