import React, {Component} from 'react'
import '../css/List.css'

export default class ListItem extends Component{
  render(){
    return(
      <li className="list__item">
        <span className="list__item_text">{this.props.text}</span>
        <button className="list__item_btn" onClick={this.props.onDel.bind(this, this.props.text)}>X</button>
      </li>
    )
  }
}