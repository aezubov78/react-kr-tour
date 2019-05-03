import React, { Component } from 'react'
import './RegionList.scss'
import Region from '../Region/Region'
import {regionData} from '../regionData'

export default class RegionList extends Component {
  state={
    regions: regionData
  }

  removeRegion = id => {
    const{regions} = this.state
    const filterRegions = regions.filter(item => item.id !== id)

    this.setState({
      regions: filterRegions
    })
  }


  render() {
    const {regions} = this.state
    const urlAmerica = './img/cityKR.jpeg'
    
    if (regions.length) {

      return (
        <section className='regionlist'>
          {
            regions.map(item => {
              return(
                <Region key={item.id} region={item} removeRegion={this.removeRegion}/>
              )
            })
          }
        </section>
    )
    }else {return(
    <div className="america">
    <div className="img-container1">
      <img className="amer" src={urlAmerica} alt='america'/>
      <h1 className="notToSee">Спасибо за уделенное Кривому Рогу время</h1>
    </div>
      </div>   
      )}
  }
}
