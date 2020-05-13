import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import auth0Client from '../authentication/Auth'

export class SubmitAnswer extends Component {

    state = {
        answer: ''
    }

    updateAnswer = e => {
        this.setState({
            answer: e.target.value
        })
    }

    submit = () => {
        const { answer } = this.state
        this.props.submitAnswer( answer )

        this.setState({
            answer: ''
        })
    }

    render() {
        
        if( !auth0Client.isAuthenticated() ) return null

        return (
            <Fragment>
                <div className='form-group text-center'>
                    <label htmlFor="exampleInputEmail1">Answer:</label>
                    <input
                        type="text"
                        onChange={ this.updateAnswer }
                        className="form-control"
                        placeholder="Share your answer."
                        value={this.state.answer}
                    />
                </div>
                <button
                className="btn btn-primary"
                onClick={ () => this.submit() }>
                Submit
                </button>
                <hr className="my-4" />
            </Fragment>
        )
    }
}

export default withRouter(SubmitAnswer)
