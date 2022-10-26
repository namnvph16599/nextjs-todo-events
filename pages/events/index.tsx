import { useRouter } from 'next/router'
import React, { Fragment } from 'react'
import EventList from '../../components/events/EventList'
import EventsSearch from '../../components/events/EventsSearch'
import { getAllEvents } from '../../DATA'

const EventsPage = () => {
    const events = getAllEvents();
    const router = useRouter()
    const handlerSearch = (year: any, months: any) => {
        const path = `/events/${year}/${months}`;
        router.push(path)
    }
    return <Fragment>
        <EventsSearch onSearch={handlerSearch} />
        <EventList events={events} />
    </Fragment>
}

export default EventsPage