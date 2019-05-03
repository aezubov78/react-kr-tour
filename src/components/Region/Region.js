import React, { Component } from 'react'
import './Region.scss'


export default class Region extends Component {
  state ={
    showInfo: false
  }

  handleInfo = () => {
    this.setState({
      showInfo:!this.state.showInfo
    })
  }

  render() {
    const {id, region, name, img, info} = this.props.region
    const {removeRegion} = this.props
    
    return (
     <article className='region'>
       <div className="img-container">
         <img src={img}
              alt="KR"              
         />
         <span className="close-btn" onClick={() => {removeRegion(id)}}>
           <i className="fas fa-window-close"/>
         </span>
       </div>
       <div className="region-info">
         <h3>{region}</h3>
         <h4>{name}</h4>
         <h5>Информация <span 
         onClick={this.handleInfo}
         className="fas fa-caret-square-down"></span>
         </h5>
         {this.state.showInfo && <p>{info}</p> }         
       </div>       
     </article>
    )
  }
}
