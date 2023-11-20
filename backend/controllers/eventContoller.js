import Event from "../models/Event.js";

const createEvent = async(req, res, next) => {
    try{
        const { title, description, location, time, date, meetinglink} = req.body;

        const event = new Event({
            title,
            description,
            location,
            time,
            date,
            meetinglink,
            author: req.user._id
        })

        const createdEvent = await event.save()

        res.status(201).json(createdEvent)
    } catch(error) {
        next(error)
    };
}

export { createEvent}