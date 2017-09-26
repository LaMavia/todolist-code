import React, {Component} from 'react'
import '../css/List.css'

export default class ListItem extends Component{
  clickHandler(e){
    e.preventDefault()
    this.props.onDel(this.props.item)
  }

  render(){
    return(
      <li className="list__item">
        <span className="list__item_text">{this.props.item.text}</span>
        <button className="list__item_btn" onClick={this.clickHandler.bind(this)}>X</button>
      </li>
    )
  }
}