import React, { useEffect, useState } from 'react'
import './styles.css'

export function ActivityCalendar({ sampleData, colorCustomization }) {
  const [graphData, setGraphData] = useState([]);
  const tempGraphData = Array(366).fill(0);
  const [currentYear, setCurrentYear] = useState(2023)
  const [dateText, setDayText] = useState([]);
  const getDayOfYear = (date) => {
    var days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var year = parseInt(date.substring(0, 4));
    setCurrentYear(year);
    var month = parseInt(date.substring(5, 7));
    var day = parseInt(date.substring(8));
    if (month > 2 && year % 4 === 0
      && (year % 100 !== 0 || year % 400 === 0)) {
      day = day + 1;
    }
    while (month > 0) {
      month = month - 1
      if (month !== 0) day = day + days[month - 1];
    }
    return day;
  }
  function dateFromDay(day) {
    var date = new Date(currentYear, 0);
    let newDate = new Date(date.setDate(day)).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' });
    return newDate;
  }
  function initialiseDateText() {
    let tempDateTextList = Array(366).fill("");
    for (let i = 1; i <= 365; i++) {
      tempDateTextList[i] = dateFromDay(i);
    }
    setDayText(tempDateTextList);
  }
  const initialise = async () => {
    sampleData.map((item) => {
      let activityDay = getDayOfYear(item.day);
      tempGraphData[activityDay] = item.activity;
    })
    setGraphData(tempGraphData);
  }
  useEffect(() => {
    initialiseDateText();
  }, [])
  useEffect(() => {
    initialise();
  }, [])
  const matchColorComb = (colorId) => {
    if(!colorCustomization) {
      if (colorId >= 4) return "#5105fd"
      else if (colorId == 0) return "#dadada"
      else if (colorId == 2) return "#5105fd69"
      else if (colorId == 1) return "#5105fd52"
      else return "#5105fd99"
    }
    if (colorId >= 4) return colorCustomization.activity4
    else if (colorId == 0) return colorCustomization.activity0
    else if (colorId == 1) return colorCustomization.activity1
    else if (colorId == 2) return colorCustomization.activity2
    else return colorCustomization.activity3
  }
  return (
    <div className='activity-calender'>
      <div className='ac-wrapper'>
        {
          [...Array(52)].map((e, i) => {
            return (
              <div className="aci-wrapper">
                <div className={`ac-item day-${i * 7 + 1} ${graphData[i * 7 + 1] !== 0 ? `active activity-${graphData[i * 7 + 1] < 4 ? graphData[i * 7 + 1] : 4}` : ''}`}
                  style={{
                    background: matchColorComb(graphData[i * 7 + 1])
                  }}
                >
                  <span className="tooltiptext">{graphData[i * 7 + 1]} activity on {dateText.length !== 0 ? dateText[i * 7 + 1].toString() : ''}</span>
                </div>
                <div className={`ac-item day-${i * 7 + 2} ${graphData[i * 7 + 2] !== 0 ? `active activity-${graphData[i * 7 + 2] < 4 ? graphData[i * 7 + 2] : 4}` : ''}`}
                  style={{
                    background: matchColorComb(graphData[i * 7 + 2])
                  }}
                >
                  <span className="tooltiptext">{graphData[i * 7 + 2]} activity on {dateText.length !== 0 ? dateText[i * 7 + 2].toString() : ''}</span>
                </div>
                <div className={`ac-item day-${i * 7 + 3} ${graphData[i * 7 + 3] !== 0 ? `active activity-${graphData[i * 7 + 3] < 4 ? graphData[i * 7 + 3] : 4}` : ''}`}
                  style={{
                    background: matchColorComb(graphData[i * 7 + 3])
                  }}>
                  <span className="tooltiptext">{graphData[i * 7 + 3]} activity on {dateText.length !== 0 ? dateText[i * 7 + 3].toString() : ''}</span>
                </div>
                <div className={`ac-item day-${i * 7 + 4} ${graphData[i * 7 + 4] !== 0 ? `active activity-${graphData[i * 7 + 4] < 4 ? graphData[i * 7 + 4] : 4}` : ''}`} style={{
                  background: matchColorComb(graphData[i * 7 + 4])
                }}>
                  <span className="tooltiptext">{graphData[i * 7 + 4]} activity on {dateText.length !== 0 ? dateText[i * 7 + 4].toString() : ''}</span>
                </div>
                <div className={`ac-item day-${i * 7 + 5} ${graphData[i * 7 + 5] !== 0 ? `active activity-${graphData[i * 7 + 5] < 4 ? graphData[i * 7 + 5] : 4}` : ''}`} style={{
                  background: matchColorComb(graphData[i * 7 + 5])
                }}>
                  <span className="tooltiptext">{graphData[i * 7 + 5]} activity on {dateText.length !== 0 ? dateText[i * 7 + 5].toString() : ''}</span>
                </div>
                <div className={`ac-item day-${i * 7 + 6} ${graphData[i * 7 + 6] !== 0 ? `active activity-${graphData[i * 7 + 6] < 4 ? graphData[i * 7 + 6] : 4}` : ''}`} style={{
                  background: matchColorComb(graphData[i * 7 + 6])
                }}>
                  <span className="tooltiptext">{graphData[i * 7 + 6]} activity on {dateText.length !== 0 ? dateText[i * 7 + 6].toString() : ''}</span>
                </div>
                <div className={`ac-item day-${i * 7 + 7} ${graphData[i * 7 + 7] !== 0 ? `active activity-${graphData[i * 7 + 7] < 4 ? graphData[i * 7 + 7] : 4}` : ''}`} style={{
                  background: matchColorComb(graphData[i * 7 + 7])
                }}>
                  <span className="tooltiptext">{graphData[i * 7 + 7]} activity on {dateText.length !== 0 ? dateText[i * 7 + 7].toString() : ''}</span>
                </div>
              </div>
            )
          }
          )
        }
        <div className="aci-wrapper">
          <div className={`ac-item day-365 ${graphData[365] !== 0 ? `active activity-${graphData[365] < 4 ? graphData[365] : 4}` : ''}`} style={{
            background: matchColorComb(graphData[365])
          }}>
            <span className="tooltiptext">{graphData[365]} activity on {dateText.length !== 0 ? dateText[365].toString() : ''}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
