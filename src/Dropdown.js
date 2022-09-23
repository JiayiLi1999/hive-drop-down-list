import React, {Component} from 'react';

export default class Dropdown extends Component {
    constructor(props){
        super(props);
        this.prepareData(props);
        this.nextOne = this.nextOne.bind(this);
    }
}
