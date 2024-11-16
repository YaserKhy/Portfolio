import React from 'react'
import '@splidejs/react-splide/css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Card, Stack } from 'react-bootstrap'
import AreasDict from './AreasDict'

function Areas({ numCards }) {
  return (
    <Stack className='section' id='Areas' style={{ backgroundColor: 'var(--SecondColor)' }}>
      <h1 className='sectionHeader text-center mb-4'>Interests</h1>
      <Splide
        className='AreasSplide mw-100 pb-4'
        style={{ left: '1.7rem' }}
        options={{ type: 'loop', perPage: numCards, perMove: 1, arrowScale: 1, arrowPosition: 'end', focus: 0 }}
      >
        {Object.entries(AreasDict).map(([key, value]) => {
          return (
            <SplideSlide key={key}>
              <Card className='p-4 m-3 align-items-center justify-content-center' key={key}>
                <Card.Img variant='top' src={value[0]} alt={value[1]} style={{ width: '5rem' }} />
                <Card.Body className='text-center'>
                  <Card.Title className='cardTitle'>{key}</Card.Title>
                  <Card.Text className='cardText' style={{ width: '15rem' }}>{value[2]}</Card.Text>
                </Card.Body>
              </Card>
            </SplideSlide>
          )
        })}
      </Splide>
    </Stack>
  )
}

export default Areas