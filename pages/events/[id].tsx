import { useRouter } from 'next/router'
import React, { Fragment } from 'react'
import EventSummary from '../../components/event-detail/event-summary'
import EventLogistics from '../../components/event-detail/event-logistics'
import EventContent from '../../components/event-detail/event-content'
import ErrorAlert from '../../components/error-alert/error-alert';
import ButtonExplore from '../../components/ui/Button';
import { getAllEvents, getEventById, getFeaturedEvents } from '../../utils/api';
import Head from 'next/head'

const EventPage = (props: {
    event: {
        title: String,
        date?: Date,
        image?: String,
        location?: String,
        description?: String
    }
}) => {
    const event = props.event

    let baseHeader = <Head>
        <title>Event detali</title>
        <meta name='description' content={`Event detail`} />
    </Head>

    if (!event) {
        return <Fragment>
            {baseHeader}
            <ErrorAlert><p>Event Not Found</p></ErrorAlert>
            <div className='center'><ButtonExplore link='/events'>Show All Events</ButtonExplore></div>
        </Fragment>
    }

    baseHeader = <Head>
        <title>Event detali</title>
        <meta name='description' content={`Event name ${event.title}`} />
    </Head>
    return <Fragment>
        {baseHeader}
        <EventSummary title={event.title} />
        <EventLogistics data={event.date} image={event.image} address={event.location} imageAlt={event.title} />
        <EventContent ><p>{event.description}</p></EventContent>

    </Fragment>
}

export async function getStaticProps(context: any) {
    const eventId = context.params.id
    const event = await getEventById(eventId)
    console.log('eventId', eventId);
    return {
        props: {
            event
        }
    }
}

export async function getStaticPaths() {
    const events = await getFeaturedEvents()
    console.log('events', events);

    //pre render nhung event noi bat
    const paths = events.map((event: any) => ({ params: { id: event.id } }))
    return { paths, fallback: false }
}

export default EventPage