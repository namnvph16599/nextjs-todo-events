export const getAllEvents = async () => {
    const data = await fetch('http://localhost:8080/events');
    const events =await data.json()
    return events
}

export async function getFeaturedEvents() {
    const data = await getAllEvents()
    return data.filter((event) => event.isFeatured);
}