import React, {Component} from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faCheckSquare, faSquareCaretUp, faSquareCaretDown } from '@fortawesome/free-solid-svg-icons'

export default class Dropdown extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: [],
            showOptions: false
        }
    }


    buildList(options) {
        return (<div>
            {options.map((item) =>
                <Item key={item} value={item}/>
            )}
        </div>)


    }
    render() {
        let {options, multiselect = false} = this.props;
        return(
        <div className='dropmenu'>
            <div className='dropbox'>
                <div className='selectedText'>{this.state.value}</div>
                <FontAwesomeIcon className='arrowIcon' icon={faSquareCaretUp} />
            </div>
            <div className='droplist'>
                {this.buildList(options)}
            </div>
        </div>
        );
    }
}

function Item(props) {
    return (
      <div className='optionRow' onClick={()=>{}}>
        <FontAwesomeIcon icon={faSquare} />
        <div className='optionText'>{props.value}</div>
      </div>
    )
  }