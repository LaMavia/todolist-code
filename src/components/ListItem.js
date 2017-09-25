import React, {Component} from 'react'
import '../css/List.css'

export default class ListItem extends Component{
  render(){
    return(
      <li className="list__item">
        <span className="list__item_text">{this.props.item.text}</span>
        <button className="list__item_btn" onClick={this.props.onDel.bind(this, this.props.item)}>X</button>
      </li>
    )
  }
}