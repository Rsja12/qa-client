import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import auth0Client from '../authentication/Auth'
import axios from 'axios'

export class QuestionCreate extends Component {

    state = {
        disabled: false,
        title: '',
        description: ''
    }

    updateDescription = e => {
        this.setState({
            description: e.target.value 
        })
    }

    updateTitle = e => {
        this.setState({
            title: e.target.value
        })
    }

    async submit() {

        this.setState({
            disabled: true
        })

        await axios.post('http://localhost:8081', {
            title: this.state.title,
            description: this.state.description
        }, {
            headers: { 'Authorization': `Bearer ${auth0Client.getIdToken()}` }
        })

        this.props.history.push('/')

    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='card border-primary'>
                            <div className='card-header'>New Question</div>
                            <div className='card-body text-left'>
                                <div className='form-group'>
                                    <label htmlFor='exampleInputEmail1'>Title: </label>
                                    <input 
                                        disabled={this.state.disabled}
                                        type='text'
                                        onBlur={ this.updateTitle }
                                        className='form-control'
                                        placeholder="Give your question a title"
                                    />
                                    <div className='form-group'>
                                    <label htmlFor='exampleInputEmail1'>Description: </label>
                                    <input 
                                        disabled={this.state.disabled}
                                        type='text'
                                        onBlur={ this.updateDescription }
                                        className='form-control'
                                        placeholder="Give more context to your question"
                                    />
                                    </div>
                                    <button 
                                        disabled={this.state.disabled}
                                        className='btn btn-primary'
                                        onClick={ this.submit } >
                                            Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(QuestionCreate)
