import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const card = () => {
  return <>
        <div className="card bg-light mt-2">
              <Card className='bg-white d-flex flex-row justify-content-between'style={{padding:"1em", width:"70vw"}}  >
                <div className="check position-absolute top-0 start-0 bg-white d-flex align-items-center justify-content-center rounded" style={{width:"2em",height:"2em"}}>
                    <input className='checkbox' style={{width:"2em"}} type="checkbox" />
                </div>
                <Card.Img style={{ width: '10rem'}} variant="top" src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
                <Card.Body className='d-flex flex-column mx-5' >
                <Card.Title className='mb-auto'>Name</Card.Title>
                <Card.Text className='mb-auto'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, explicabo.
                </Card.Text>
                <Card.Text className='mb-auto'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat architecto maxime eveniet dolor velit quae nam molestiae quas harum?
                </Card.Text>
                <Card.Header className='bg-transparent' style={{border:"none", color:"#000", fontWeight:"600", textAlign:"start"}}>Instagram</Card.Header>
                <div className="button d-flex justify-content-">
                  <Button className='mx-1'variant="primary">Accepted</Button>
                  <Button className='mx-1' style={{background:"purple", border:"transparent"}}>Barter</Button>
                </div>
                </Card.Body>
                <Card.Body className='d-flex flex-column align-items-around column-reverse'>
                    <Button className='btn-sm btn-primary' variant="primary">Detail</Button>
                    <Button className='btn-sm mt-3' variant="secondary" style={{background:"white", color:"blue"}}>Invite</Button>
                    <Button className='btn-sm mt-3' style={{color:"blue"}} variant="tertiory">Analyse</Button>
                </Card.Body>
              </Card>
            </div>
    </>
  
}

export default card