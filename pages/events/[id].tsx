import { useRouter } from 'next/router'
import React, { Fragment } from 'react'
import { getEventById } from '../../DATA';
import EventSummary from '../../components/event-detail/event-summary'
import EventLogistics from '../../components/event-detail/event-logistics'
import EventContent from '../../components/event-detail/event-content'
import ErrorAlert from '../../components/error-alert/error-alert';
import ButtonExplore from '../../components/ui/Button';

const EventPage = () => {
    const router = useRouter()
    const eventId = router.query['id']
    const event = getEventById(eventId)
    if (!event) {
        return <Fragment>
            <ErrorAlert><p>Event Not Found</p></ErrorAlert>
            <div className='center'><ButtonExplore link='/events'>Show All Events</ButtonExplore></div>
        </Fragment>
    }
    return <Fragment>
        <EventSummary title={event.title} />
        <EventLogistics data={event.date} image={event.image} address={event.location} imageAlt={event.title} />
        <EventContent ><p>{event.description}</p></EventContent>

    </Fragment>
}

export default EventPage