import Link from 'next/link'
import React from 'react'
import Subscriber from './Subscriber'

async function getData(){
  const options={method:'GET'}
  const res = await fetch(`${process.env.HOST}/api/subscriber`,options,{cache:'no-cache'});
  return res.json();
}

const Footer = async (props) => {
  const x =await getData();
  return (
    <div className='section-footer'>
      <div className='py-5 bg-dark'>

        <div className='container'>
          <div className='row'>

            <div className="col-md-3 col-sm-6 p-3"> {/* col-sm-6 bakita auto responsive */}
              <h5 className="text-white fw-bold my-3"> ABOUT </h5>
              <p className="text-white">{props.data2.data[0].about}</p>

              <div className='d-flex justify-content-sm-start justify-content-center'> {/* SM and SM thika uporer device */}
                <ul className='d-flex list-unstyled'>
                  <li><a target='_blank' href={props.data2.data[0].facebook}><i className="h3 text-white bi bi-facebook"></i></a></li>
                  <li className='ms-3'><a target='_blank' href={props.data2.data[0].youtube}><i className="h3 text-white bi bi-youtube"></i></a></li>
                  <li className='ms-3'><a target='_blank' href={props.data2.data[0].twitter}><i className="h3 text-white bi bi-twitter"></i></a></li>
                  <li className='ms-3'><a target='_blank' href={props.data2.data[0].linkedin}><i className="h3 text-white bi bi-linkedin"></i></a></li>
                </ul>
              </div>

            </div>

            <div className="col-md-3 col-sm-6 p-3">
              <h5 className="text-white fw-bold my-3">RECOMMENDED</h5>
              <ul className='list-unstyled'>
              {
                props.data.data.map((item,i)=>{
                  if(i<4){
                    return <li><Link key={i} className="nav-link text-white my-1 d-inline-block" href={`/category?id=${item.id}`} >{item.name}</Link></li>
                  }
                })
              }
              </ul>
            </div>

            <div className="col-md-3 col-sm-6 p-3">
              <h5 className="text-white fw-bold my-3">LEGAL</h5>
              <ul className="list-unstyled text-white">
                <li className="my-1">
                  <Link href="/privacy" className="nav-link d-inline-block">Privacy Policy</Link>
                </li>
                <li className="my-1">
                  <Link href="/terms" className="nav-link d-inline-block">Terms & Conditions</Link>
                </li>
              </ul>
            </div>

            <div className="col-md-3 col-sm-6 p-3">
              <Subscriber data={x}></Subscriber>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer