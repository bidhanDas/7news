"use client"
import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import CommentForm from './CommentForm'

const CommentsList = (props) => {
  return (
    <div className='container'>
      <Tabs
      defaultActiveKey="comments"
      id="uncontrolled-tab-example"
      className="mb-3"
      >
        <Tab eventKey="comments" title="Comments">
          <ul className="list-group list-group-flush">
            {
              props.data.data.map((item)=>{
                return (
                  <li className='list-group-item'>
                    <h6 className="text-dark"><i className="bi bi-person-circle"></i> {item.users.firstName}</h6>
                    <p className='text-secondary'>{item.descriptions}</p>
                  </li>
                )
              })
            }
          </ul>
        </Tab>

        <Tab eventKey="create" title="Create">
          <CommentForm postID={props.postID}></CommentForm>
        </Tab>

      </Tabs>
    </div>
  )
}

export default CommentsList
