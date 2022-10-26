import React from 'react'
import EventItem from './EventItem'
import classes from './events.module.css'

const EventList = (props: any) => {
    const { events } = props;
    return <ul className={classes.list}>
        {events.map((event: any) => <EventItem event={event} key={event.id} />)}
    </ul>
}

export default EventList