import React, {Component} from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faCheckSquare, faSquareCaretUp, faSquareCaretDown } from '@fortawesome/free-solid-svg-icons'

export default class Dropdown extends Component {
    constructor(props){
        super(props);
        let arr = new Array(props.options.length).fill(false)
        this.state = {
            value: arr,
            options: props.options,
            showOptions: false,
            multiselect: false
        }
        this.selectOption = this.selectOption.bind(this)
        this.generateText = this.generateText.bind(this)
    }

    selectOption(key) {
        let value = this.state.value
        value[key] = !value[key]
        console.log(value)
        this.setState({value})
    }

    buildList() {
        return (<div>
            {this.state.options.map((item, index) =>
                <Item key={item} value={item} onClick={()=>this.selectOption(index)} isSelected={this.state.value[index]}/>
            )}
        </div>)
    }
    generateText() {
        return this.state.options.filter((value, index) => this.state.value[index]).join(", ")
    }
    render() {
        return(
        <div className='dropmenu'>
            <div className='dropbox' onClick={()=>{this.setState({showOptions: !this.state.showOptions})}}>
                <div className='selectedText'>{this.generateText()}</div>
                {this.state.showOptions && <FontAwesomeIcon className='arrowIcon' icon={faSquareCaretUp}/>}
                {!this.state.showOptions && <FontAwesomeIcon className='arrowIcon' icon={faSquareCaretDown}/>}
            </div>
            {this.state.showOptions &&
            <div className='droplist'>
                {this.buildList()}
            </div>
            }
        </div>
        );
    }
}

function Item(props) {
    return (
      <div className='optionRow' onClick={props.onClick}>
        {!props.isSelected && <FontAwesomeIcon icon={faSquare} />}
        {props.isSelected && <FontAwesomeIcon icon={faCheckSquare} />}
        <div className='optionText'>{props.value}</div>
      </div>
    )
  }