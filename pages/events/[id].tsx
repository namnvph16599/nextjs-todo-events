import { useRouter } from 'next/router'
import React, { Fragment } from 'react'
import { getEventById } from '../../DATA';
import EventSummary from '../../components/event-detail/event-summary'
import EventLogistics from '../../components/event-detail/event-logistics'
import EventContent from '../../components/event-detail/event-content'

const EventPage = () => {
    const router = useRouter()
    const eventId = router.query['id']
    const event = getEventById(eventId)
    if (!event) {
        return <p>Not found event!</p>
    }
    return <Fragment>
        <EventSummary title={event.title} />
        <EventLogistics data={event.date} image={event.image} address={event.location} imageAlt={event.title} />
        <EventContent ><p>{event.description}</p></EventContent>

    </Fragment>
}

export default EventPage