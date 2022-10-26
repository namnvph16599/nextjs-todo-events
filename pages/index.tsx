import type { NextPage } from 'next'
import EventList from '../components/events/EventList'
import { getFeaturedEvents } from '../DATA'

const Home: NextPage = () => {
  const featuredEvent = getFeaturedEvents()
  return <EventList events={featuredEvent} />
}

export default Home
