import React from 'react'
import parse from 'html-react-parser';
// import HTMLReactParser from 'html-react-parser';

const NewsDetails = (props) => {
  return (
    <div className="container">
      <h4 className="my-3">{props.details.data.title}</h4>
      <hr className="" />
      <div className="row">
        <div className="col-md-12 col-lg-12">
          <img className="w-100" src={props.details.data.img1} />
          {parse(props.details.data.long_des)}
          {/* {HTMLReactParser(props.details.data.long_des)} */}
        </div>
      </div>
    </div> 
  )
}

export default NewsDetails