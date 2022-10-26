import React from 'react'
import EventList from '../../components/events/EventList'
import { getAllEvents } from '../../DATA'

const EventsPage = () => {
    const events = getAllEvents()
    return <EventList events={events} />
}

export default EventsPage