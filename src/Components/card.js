import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const card = () => {
  return <>
        <div className="card mt-2">
              <Card className='d-flex flex-row justify-content-between'style={{padding:"1em", width:"70vw"}}  >
                <input className='checkbox-lg position-absolute top-1 start-1 bg-transparent' type="checkbox" />
                <Card.Img style={{ width: '10rem'}} variant="top" src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
                <Card.Body className='d-flex flex-column mx-5' >
                <Card.Title className='mb-auto'>Name</Card.Title>
                <Card.Text className='mb-auto'>
                  Lorem ipsum dolor sit.
                </Card.Text>
                <Card.Text className='mb-auto'>
                  Lorem ipsum dolor sit amet.
                </Card.Text>
                <Card.Header className='bg-transparent' style={{border:"none", color:"#000", fontWeight:"600", textAlign:"start"}}>Instagram</Card.Header>
                <div className="button d-flex justify-content-">
                  <Button className='mx-1'variant="primary">Accepted</Button>
                  <Button className='mx-1' variant="secondary">Barter</Button>
                </div>
                </Card.Body>
                <Card.Body className='d-flex flex-column'>
                    <Button className='btn-sm btn-primary' variant="primary">Detail</Button>
                    <Button className='btn-sm mt-2' variant="secondary">Invite</Button>
                    <Button variant="btn-sm tertiory">Analyse</Button>
                </Card.Body>
              </Card>
            </div>
    </>
  
}

export default card