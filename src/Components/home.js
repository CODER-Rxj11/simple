import React from 'react'
import { Container } from 'react-bootstrap'
import Box from '@mui/material/Box';

import Card from './card';

// function valuetext(value: number) {
//   return `${value}°C`;
// }

const home = () => {

//  const [value, setValue] = React.useState();

//   const handleChange = (event: Event, newValue: 0 | 10M) => {
//     setValue(newValue as number[]);
//   };

  return (
    <div>
      <Container className='d-flex mx-5 mt-2'>
        <div className="left bg-white w-25 ">
          <div className="container ">
            <div className="sidebar d-flex align-items-start flex-column">
              <h6 className='mt-2 mb-1'>POPULARITY</h6>
              <div className="checkboxes d-flex align-items-start flex-column">
        <label className='mt-1'>
          <input className='mt-1' type="checkbox" />
          {''} Nano(1k-9k)
        </label>
        <label className='mt-1'>
          <input className='mt-1' type="checkbox" />
          {''} Micro(100k-999k)
        </label>
        <label className='mt-1'>
          <input className='mt-1' type="checkbox" />
          {''} Macro(1M-10M)
        </label>
        <label className='mt-1'>
          <input className='mt-1' type="checkbox" checked />
          Custom
        </label>
              </div>
              <h6 className='mt-2 mb-1'>CAMPAIGN PREFERNCE</h6>
              <div className="checkboxes d-flex align-items-start flex-column">
              <label className='mt-1'>
              <input className='mt-1' type="checkbox" />
              {''} Barter
              </label>
              <label className='mt-1'>
              <input className='mt-1' type="checkbox" checked />
              {''} Paid
              </label>
              </div>
              <h6 className='mt-2 mb-1'>PLATFORM</h6>
              <div className="checkboxes d-flex align-items-start flex-column">
              <label className='mt-1'>
              <input className='mt-1' type="checkbox" />
              {''} Youtube
              </label>
              <label className='mt-1'>
              <input className='mt-1' type="checkbox" checked />
              {''} Instagram
              </label>
              </div>
              <h6 className='mt-2 mb-1'>ENGAGEMENT RATE</h6>
              <div className="value-bar">
                  <Box sx={{ width: 300 }}>
                    {/* <Slider
                      getAriaLabel={() => 'Temperature range'}
                      value={value}
                      onChange={handleChange}
                      valueLabelDisplay="auto"
                      getAriaValueText={valuetext}
                /> */}
    </Box>
              </div>
              <h6 className='mt-2 mb-1'>AVERAGE</h6>
              <div className="value-bar">
                  <Box sx={{ width: 300 }}>
                    {/* <Slider
                      getAriaLabel={() => 'Temperature range'}
                      value={value}
                      onChange={handleChange}
                      valueLabelDisplay="auto"
                      getAriaValueText={valuetext}
                /> */}
    </Box>
              </div>
              <h6 className='mt-2 mb-1'>CATEGORIES</h6>
              <input className='mt-2 mb-1' style={{border:"grey", borderBottom:"1px solid black"}} type="search" name="search" id="search" placeholder='Search Category'/>
              <div className="checkboxes d-flex align-items-start flex-column">
                <label className='mt-1'>
                <input className='mt-1' type="checkbox" />
                {''} Autos & Vehicles
                </label>
                <label className='mt-1'>
                <input className='mt-1' type="checkbox" />
                {''} Animation
                </label>
                <label className='mt-1'>
                <input className='mt-1' type="checkbox" />
                {''} Agriculture & Allied Sectors
                </label>
                <label className='mt-1'>
                <input className='mt-1' type="checkbox" />
                {''} Art & Craft
                </label>
                <label className='mt-1'>
                <input className='mt-1' type="checkbox" />
                {''} Beauty
                </label>
                <label className='mt-1'>
                <input className='mt-1' type="checkbox" />
                {''} Blog & Travel
                </label>
                <label className='mt-1'>
                <a href="#home">More Category</a>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="top">
            <div className="lft"></div>
            <div className="rgt"></div>
          </div>
          <div className="cards d-flex flex-column mx-3">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default home