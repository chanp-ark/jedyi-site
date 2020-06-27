import {format} from 'date-fns'

export default {
  name: 'event',
  title: 'Events',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Event Name',
      type: 'string'
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'date'
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'date'
    },
    {
      name: 'location',
      title: 'Location',
      description: 'City, State',
      type: 'string'
    }
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
      location: 'location'
    },
    prepare ({title, location, date}) {
      const dateSegment = format(date, 'YYYY/MM')
      return {
        title,
        dateSegment,
        location
      }
    }
  }
}
