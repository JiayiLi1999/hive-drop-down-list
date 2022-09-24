import React, {Component} from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faSquareCaretUp, faSquareCaretDown } from '@fortawesome/free-solid-svg-icons'

export default class Dropdown extends Component {
    constructor(props){
        super(props);
        let arr = new Array(props.options.length).fill(false)
        this.state = {
            choices: arr, // for multiselection
            value: '', // for single selection
            options: props.options,
            multiselect: props.multiselect,
            showOptions: false
        }
        this.selectOption = this.selectOption.bind(this)
        this.generateText = this.generateText.bind(this)
    }

    selectOption(index, value) {
        if(this.state.multiselect) {
            let choices = this.state.choices
            choices[index] = !choices[index]
            this.setState({choices})
        } else {
            this.setState({value})
        }

    }

    buildList() {
        const {options, multiselect, choices, value} = this.state
        return (<div>
            {options.map((item, index) =>
                <Item key={index} choices={item} multiselect={multiselect} onClick={()=>this.selectOption(index, item)} 
                isSelected={multiselect ? choices[index] : value===item}/>
            )}
        </div>)
    }
    generateText() {
        if(!this.state.multiselect) return this.state.value
        return this.state.options.filter((choices, index) => this.state.choices[index]).join(", ")
    }
    render() {
        const {showOptions} = this.state
        return(
        <div className='dropmenu'>
            <div className='dropbox' onClick={()=>{this.setState({showOptions: !showOptions})}}>
                <div className='selectedText'>{this.generateText()}</div>
                {showOptions && <FontAwesomeIcon className='arrowIcon' icon={faSquareCaretUp}/>}
                {!showOptions && <FontAwesomeIcon className='arrowIcon' icon={faSquareCaretDown}/>}
            </div>
            {showOptions &&
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
        {props.multiselect && props.isSelected && <FontAwesomeIcon className='icon' icon={faCheckSquare} />}
        <div className='optionText'>{props.choices}</div>
      </div>
    )
  }