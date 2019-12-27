import React, { Component } from 'react';
import Thumbnail from './Thumbnail'
import styled from 'styled-components'
import { Route, Link } from 'react-router-dom'

const Button = styled.a`
  display: inline-block;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 0;
  background: #fff;
  color: #333 !important;
  padding: 10px 20px;
  font-size: 20px;
  box-shadow: 0px 0px 0px 3px #473228,
              -6px 6px #ef5f17,
              -6px 6px 0px 3px #473228;
`

class Item extends Component {
  constructor(props){
    super()
    // debugger
    this.props = props
  }
  render(){
    return(
      <div className="row">
        <div className="col-md-10 offset-md-1">
          <div>
            <div className="card px-5">
              <div className="row">
                <div className="col-md-4">
                  <Thumbnail/>
                </div>
                <div className="col-md-8">
                  <div className="pt-4 pb-8">
                    <h4>{this.props.title}</h4>
                    <p>{this.props.description}</p>
                    <div className="cta-wrapper">
                      <Button onClick={this.props.handleVideoChange} className="btn cta-btn">Watch This Video</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )    
  }
}
export default Item