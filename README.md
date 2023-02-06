# activity-calendar-react

`activity-calendar-react` is a library that provides a component to render user's yearly activity on a calendar. 
This is similar to what we see in out GitHub profile. The component can be customized with different colors, styles, and 
features to fit the needs of the application

![chrome-capture-2023-1-6](https://user-images.githubusercontent.com/76901313/217016756-2610036b-88f5-4f72-8251-74a85cb4d302.gif)

Tech stack: React, Storybook, Rollup(for bundling)

# Usage:

## install package

`npm i activity-calendar-react`

## Import the component and use it

```
import React from 'react'
import { ActivityCalendar } from 'activity-calendar-react'

function App() {
  return (
    <div className="App">
      <ActivityCalendar />
    </div>
  );
}

export default App;

```
## Props to pass

### Grid color customization

Refer this `colorCustomization` object for GitHub based design. 

> `colorCustomization` is mendatory prop to pass.

```
const colorCustomization = {
  activity0: '#dadada',
  activity1: '#0e4429',
  activity2: '#006d32',
  activity3: '#26a641',
  activity4: '#39d353',
}
```

### data to render

The data will be in the form of Array objects.

#### sample data

```
const sampleData = [
  {
    day: "2023-01-01",
    activity: 5
  },
  {
    day: "2023-01-02",
    activity: 1
  }
]
```

### Pass it in the component

```
<ActivityCalendar sampleData={sampleData} colorCustomization={colorCustomization} />
```

# Contribute:

The package is initialised with the `storybook`, you can start the story book by running:
```
npm run storybook
```
