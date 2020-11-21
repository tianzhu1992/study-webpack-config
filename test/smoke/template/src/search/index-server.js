/* import React from 'react'
import ReactDOM from 'react-dom'

import {a} from './tree-sharking'

import TestImg from '../images/test.png'

import './index.less' */

const React = require('react')
const ReactDOM = require('react-dom')
const {a} = require('./tree-sharking')
const TestImg = require('../images/test.png')
require('./index.less')

class Search extends React.Component {

    constructor() {
        super(...arguments)

        this.state = {
            Text: null
        }
    }

    loadComponent() {
        import('./text.js').then((Text) => {
            this.setState({
                Text: Text.default
            })
        })
    }

    render() {
        const funA = a()
        const {Text} = this.state
        return <div className='search-text'>
            Search text3
            {funA}
            <p>
                {
                    Text ? <Text /> : null
                }
            </p>
            <img src={TestImg}  onClick={this.loadComponent.bind(this)}/>
        </div>
    }
}


module.exports = <Search />