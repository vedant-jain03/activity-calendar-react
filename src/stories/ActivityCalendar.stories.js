import React from 'react'
import { storiesOf } from '@storybook/react'
import { ActivityCalendar } from '../component/ActivityCalendar'

const stories = storiesOf('Activity Calendar', module)

const sampleData = [
  {
    day: "2023-01-01",
    activity: 5
  },
  {
    day: "2023-01-02",
    activity: 1
  },
  {
    day: "2023-01-03",
    activity: 1
  },
  {
    day: "2023-01-04",
    activity: 1
  },
  {
    day: "2023-01-05",
    activity: 1
  },
  {
    day: "2023-01-06",
    activity: 1
  },
  {
    day: "2023-01-07",
    activity: 1
  },
  {
    day: "2023-01-08",
    activity: 1
  },
  {
    day: "2023-01-09",
    activity: 2
  },
  {
    day: "2023-01-10",
    activity: 1
  },
  {
    day: "2023-02-09",
    activity: 5
  },
  {
    day: "2023-04-09",
    activity: 2
  },
  {
    day: "2023-12-31",
    activity: 3
  },
  {
    day: "2023-01-31",
    activity: 4
  },
  {
    day: "2023-02-01",
    activity: 2
  },
]

stories.add('Activity Calendar', () => {
  return (
    <div style={{ padding: '20px' }}>
      <ActivityCalendar sampleData={sampleData} showMonth={true} />
    </div>
  )
})
