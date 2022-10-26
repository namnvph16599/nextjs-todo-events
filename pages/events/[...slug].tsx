import { useRouter } from 'next/router'
import React, { Fragment } from 'react'
import EventList from '../../components/events/EventList';
import ErrorAlert from '../../components/error-alert/error-alert'
import { getFilteredEvents } from '../../DATA';
import ButtonExplore from '../../components/ui/Button';
const SlugEventPage = () => {
    const router = useRouter()
    const query = router.query.slug;

    if (!query) {
        return <Fragment>
            <ErrorAlert><p>Not filter</p></ErrorAlert>
            <div className='center'><ButtonExplore link='/events'>Show All Events</ButtonExplore></div>
        </Fragment>
    }
    const year = Number(query[0]);
    const months = Number(query[1]);

    if (isNaN(year) || isNaN(months) || year !== 2022 && year !== 2021 || months < 1 || months > 12) {
        return <Fragment>
            <ErrorAlert><p>Invalid filter</p></ErrorAlert>
            <div className='center'><ButtonExplore link='/events'>Show All Events</ButtonExplore></div>
        </Fragment>
    }

    const events = getFilteredEvents({ year, month: months });

    if (!events || events.length === 0) {
        return <Fragment>
            <ErrorAlert><p>Not found events</p></ErrorAlert>
            <div className='center'><ButtonExplore link='/events'>Show All Events</ButtonExplore></div>
        </Fragment>
    }

    return (
        <EventList events={events} />
    )
}

export default SlugEventPage