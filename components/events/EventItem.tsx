import Link from 'next/link'
import React from 'react'
import ButtonExplore from '../ui/Button'
import classes from './events.module.css'
import ArrowRightIcon from '../icons/arrow-right-icon'
import DateIcon from '../icons/date-icon'
import AddressIcon from '../icons/address-icon'



const EventItem = (props: any) => {
    const { event: { id, title, description, location, date, image } } = props
    const formatDate = new Date(date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })
    const fomattedLocation = location.replace(', ', '\n')
    const exploreLink = `events/${id}`
    return (
        <li className={classes.item}>
            <img src={'/' + image} alt="" />
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2 className={classes.title}>{title}</h2>
                    <div className={classes.date}>
                        <span><DateIcon /> </span>
                        <time>{formatDate}</time>
                    </div>
                    <div className={classes.address}>
                        <span><AddressIcon /></span>
                        <address>{fomattedLocation}</address>
                    </div>
                </div>
                <div className={classes.actions}>
                    <ButtonExplore link={exploreLink}>
                        <span>Explore Event</span>
                        <span><ArrowRightIcon /> </span>
                    </ButtonExplore>
                </div>
            </div>
        </li>
    )
}

export default EventItem