import type { NextPage } from 'next'
import Head from 'next/head'
import { Fragment } from 'react'
import EventList from '../components/events/EventList'
import {getFeaturedEvents} from '../utils/api'
const Home: NextPage = (props : {events : any}) => {
  return <Fragment>
     <Head>
            <title>Home Event</title>
            <meta name='description' content="home Events ...."/>
        </Head>
    <EventList events={props.events} />
    </Fragment>
} 
// why this should use getStaticProps?
//SEO
// du lieu it thay doi

export async function getStaticProps() {
  const events = await getFeaturedEvents()
  return {
    props : {
      events
    },
    revalidate: 1800 //tim nap du lieu sau 30p
  }
}

export default Home
