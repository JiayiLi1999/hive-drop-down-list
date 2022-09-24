import React, {Component} from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faCheckSquare, faSquareCaretUp, faSquareCaretDown } from '@fortawesome/free-solid-svg-icons'

export default class Dropdown extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: '',
            showOptions: false
        }
    }

    selectOption(key) {
        this.setState({value:key})
    }

    buildList(options) {
        return (<div>
            {options.map((item) =>
                <Item key={item} value={item} onClick={()=>this.selectOption(item)} isSelected={item===this.state.value}/>
            )}
        </div>)


    }
    render() {
        let {options, multiselect = false} = this.props;
        return(
        <div className='dropmenu'>
            <div className='dropbox' onClick={()=>{this.setState({showOptions: !this.state.showOptions})}}>
                <div className='selectedText'>{this.state.value}</div>
                {this.state.showOptions && <FontAwesomeIcon className='arrowIcon' icon={faSquareCaretUp}/>}
                {!this.state.showOptions && <FontAwesomeIcon className='arrowIcon' icon={faSquareCaretDown}/>}
            </div>
            {this.state.showOptions &&
            <div className='droplist'>
                {this.buildList(options)}
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