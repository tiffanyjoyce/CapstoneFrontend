import React from 'react'
import Itinerary, {
    ItinerarySegment,
    ItineraryStatus,
    ItineraryBadgeList,
    ItinerarySegmentStop,
    ItinerarySegmentDetail,
  } from "@kiwicom/orbit-components/lib/Itinerary";

const Calendar = () => {
  return (
    <div>
      <Itinerary>
        <ItinerarySegment spaceAfter='large'>
          <ItinerarySegmentStop
          city='Tulum'
          date='5-10'
          />
        </ItinerarySegment>
        <ItinerarySegment>
          <ItinerarySegmentStop
          city="Tulum"
          date='5-11'
          />
        </ItinerarySegment>
      </Itinerary>
    </div>
  )
}

export default Calendar
