import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Box from '@mui/material/Box';
import Button from 'react-bootstrap/Button';
import card from 'react-bootstrap/Card';
import Card from './card';

// function valuetext(value: number) {
//   return `${value}°C`;
// }

const home = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [value, setValue] = useState(50);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

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
                  <div className='range-bar'>
                    <input
                      type="range"
                      min={0}
                      max={100}
                      value={value}
                      onChange={handleChange}
                      className="slider"
                    />
                  <div className="slider-bar">
                    <div className="range-indicator" style={{ left: `${value}%` }}></div>
                  </div>
                  <div className="value d-flex justify-content-between">
                    <h6>0</h6>
                    <h6>10M</h6>
                  </div>
                  </div>
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
              <div className='range-bar'>
                    <input
                      type="range"
                      min={0}
                      max={100}
                      value={value}
                      onChange={handleChange}
                      className="slider"
                    />
                  <div className="slider-bar">
                    <div className="range-indicator" style={{ left: `${value}%` }}></div>
                  </div>
                  <div className="value d-flex justify-content-between">
                    <h6>0</h6>
                    <h6>10M</h6>
                  </div>
                  </div>
              <h6 className='mt-2 mb-1'>AVERAGE</h6>
              <div className='range-bar'>
                    <input
                      type="range"
                      min={0}
                      max={100}
                      value={value}
                      onChange={handleChange}
                      className="slider"
                    />
                  <div className="slider-bar">
                    <div className="range-indicator" style={{ left: `${value}%` }}></div>
                  </div>
                  <div className="value d-flex justify-content-between">
                    <h6>0</h6>
                    <h6>10M</h6>
                  </div>
                  </div>
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
          <div className="top d-flex justify-content-between ">
            <div className="lft">
              <div className="container">
                <p className='mx-2 pb-0' style={{fontWeight:"600"}}>Sort By</p>
                <div className="buttons d-flex align-items-start">
                  <button className='btn bg-white' style={{borderRadius:"50px"}}>High to low</button>
                  <button className='btn bg-white mx-2' style={{borderRadius:"50px"}}>Low to high</button>
                  <button className='btn bg-white mx-2' style={{borderRadius:"50px"}}>Newest</button>
                  <button className='btn bg-primary mx-2' style={{borderRadius:"50px", color:"#FFF"}}>Popular</button>
                </div>
              </div>
            </div>
            <div className="rgt">
                <div className="container">
                  <card.Body className='d-flex my-2'>
                    <Button className='btn-sm mx-1 my-1' style={{color:"blue",fontWeight:"600"}} variant="tertiory">SELECT ALL</Button>
                    <Button className='btn-sm mx-1' variant="secondary" style={{background:"white", color:"blue", fontWeight:"600"}}>INVITE</Button>
                    <Button style={{fontWeight:"600"}} className='btn-sm btn-primary mx-2' variant="primary">ADD CAMPAIGN</Button>
                </card.Body>
                </div>
            </div>
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