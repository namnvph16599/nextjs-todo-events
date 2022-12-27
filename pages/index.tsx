import type { NextPage } from 'next'
import EventList from '../components/events/EventList'
import {getFeaturedEvents} from '../utils/api'
const Home: NextPage = (props : {events : any}) => {
  return <EventList events={props.events} />
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
