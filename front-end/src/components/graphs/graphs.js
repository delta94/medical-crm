import React, { useEffect, useState } from 'react'
import { ResponsivePie } from "@nivo/pie"
import { ResponsiveBar } from '@nivo/bar'

import styles from './graphs.module.css'

const Graphs = () => {
  const [patients, setPatients] = useState([])
  const [objDisease, setObjDisease] = useState([])
  const [isCheckDisease, setIsCheckDisease] = useState(false)
  const [isCheckStatus, setIsCheckStatus] = useState(false)
  const [statuses, setStatuses] = useState([])
  const disease = {}
  const status = {}

  // Получаем всех пацентов
  useEffect(() => {
    fetch('http://localhost:5000/patients')
      .then(res => res.json())
      .then(json => setPatients(json))
  }, [setPatients])

  // Получаем и считаем все заболевания
  useEffect(() => {
    patients.map(patient => {
      if (!disease[patient.mainDisease]) {
        return disease[patient.mainDisease] = 1
      } else {
        return disease[patient.mainDisease] += 1
      }
    })
    const diseases = Object.entries(disease)
    for (let i = 0; i < diseases.length; i += 1) {
      const obj = {}
      obj.id = diseases[i][0]
      obj.value = diseases[i][1]
      setObjDisease(prev => [...prev, obj])
    }
  }, [patients])

  // Получаем и считаем всех с разбивкой оп статусу
  useEffect(() => {
    patients.map(patient => {
      if (!status[patient.status]) {
        return status[patient.status] = 1
      } else {
        return status[patient.status] += 1
      }
    })
    const stat = Object.entries(status)
    for (let i = 0; i < stat.length; i += 1) {
      const obj = {}
      obj.статус = stat[i][0]
      obj.котингент = stat[i][1]
      setStatuses(prev => [...prev, obj])
    }
  }, [patients])

  return (
    <div className='my-container'>
      <h2 className={styles.header} onClick={() => {
        setIsCheckDisease(false)
        setIsCheckStatus(false)
      }}>Выберите график для просмотра</h2>
      <div className={styles.wrapperChose}>
        <div className={styles.chose} onClick={() => {
          setIsCheckDisease(true)
          setIsCheckStatus(false)
        }}>Общая заболеваемость</div>
        <div className={styles.chose} onClick={() => {
          setIsCheckStatus(true)
          setIsCheckDisease(false)
        }}>Количетсво контингентов</div>
      </div>
      {isCheckDisease ? <div className={styles.wrapper}>
        <ResponsivePie
          data={objDisease}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          sortByValue={true}
          colors={{ scheme: 'pastel1' }}
          borderColor={{ from: 'color', modifiers: [['darker', '0.2']] }}
          radialLabelsSkipAngle={0}
          radialLabelsTextXOffset={5}
          radialLabelsTextColor="#333333"
          radialLabelsLinkOffset={0}
          radialLabelsLinkDiagonalLength={5}
          radialLabelsLinkHorizontalLength={10}
          radialLabelsLinkStrokeWidth={1}
          radialLabelsLinkColor={{ from: 'color', modifiers: [] }}
          slicesLabelsSkipAngle={10}
          slicesLabelsTextColor="#333333"
          animate={true}
          motionStiffness={90}
          motionDamping={15}
          defs={[
            {
              id: 'dots',
              type: 'patternDots',
              background: 'inherit',
              color: 'rgba(255, 255, 255, 0.3)',
              size: 4,
              padding: 1,
              stagger: true
            },
            {
              id: 'lines',
              type: 'patternLines',
              background: 'inherit',
              color: 'rgba(255, 255, 255, 0.3)',
              rotation: -45,
              lineWidth: 6,
              spacing: 10
            }
          ]}
          legends={[
            {
              anchor: 'left',
              direction: 'column',
              translateY: -150,
              itemWidth: 100,
              itemHeight: 50,
              itemTextColor: '#999',
              symbolSize: 20,
              symbolShape: 'circle',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemTextColor: '#000'
                  }
                }
              ]
            }
          ]}
        />
      </div> : null}
      {isCheckStatus ? <div className={styles.wrapper}>
        <ResponsiveBar
          data={statuses}
          keys={['котингент']}
          indexBy="статус"
          margin={{ top: 50, right: 150, bottom: 100, left: 100 }}
          padding={0.3}
          colors={{ scheme: 'accent' }}
          defs={[
            {
              id: 'dots',
              type: 'patternDots',
              background: 'inherit',
              color: '#38bcb2',
              size: 4,
              padding: 1,
              stagger: true
            },
            {
              id: 'lines',
              type: 'patternLines',
              background: 'inherit',
              color: '#eed312',
              rotation: -45,
              lineWidth: 6,
              spacing: 10
            }
          ]}
          borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
          axisTop={null}
          axisRight={null}
          // axisBottom={{
          //   tickSize: 5,
          //   tickPadding: 5,
          //   tickRotation: 0,
          //   legend: 'контингенты',
          //   legendPosition: 'middle',
          //   legendOffset: 32
          // }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'количество человек',
            legendPosition: 'middle',
            legendOffset: -40
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
          legends={[
            {
              dataFrom: 'keys',
              anchor: 'top-right',
              direction: 'column',
              justify: true,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: 'left-to-right',
              itemOpacity: 0.85,
              symbolSize: 20,
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemOpacity: 1
                  }
                }
              ]
            }
          ]}
          animate={true}
          motionStiffness={90}
          motionDamping={15}
        />
      </div> : null}
    </div>
  )
}

export default Graphs
