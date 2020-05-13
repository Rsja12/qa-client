import React, { Component } from 'react'
import axios from 'axios'

import SubmitAnswer from './SubmitAnswer'
import auth0Client from '../authentication/Auth'

export class QuestionShow extends Component {

    state = {
        question: null
    }

    async componentDidMount() {
        await this.refreshQuestion()
        console.log(this.state)
    }

    async refreshQuestion() {
        const { params } = this.props.match
        const question = ( await axios.get(`http://localhost:8081/${params.id}`) ).data

        this.setState({
            question
        })
    }

    submitAnswer = async answer => {
        await axios.post(`http://localhost:8081/answer/${this.state.question.id}`, {
            answer
        }, {
            headers: { 'Authorization': `Bearer ${auth0Client.getIdToken()}` }
        })

        await this.refreshQuestion()
    }

    renderAnswers() {
        const { question } = this.state
        console.log(question)
        return question.answers.map( (ans, idx) => (
            <p className='lead' key={idx}>{ ans.answer }</p>
        ) )
    }

    renderQuestion() {
        const { question } = this.state
        return(
            <div className='container'>
                <div className='row'>
                    <div className='jumbotron col-12'>
                        <h1 className='display-3'>{ question.title }</h1>
                        <p className='lead'>{ question.description }</p>
                        <hr className='my-4' />
                        <SubmitAnswer questionId={question.id} submitAnswer={ this.submitAnswer } />
                        <p>Answers:</p>
                        { this.renderAnswers() }
                    </div>
                </div>
            </div>
        )
    }

    render() {
        const { question } = this.state
        if ( !question ) return <div>Loading...</div>

        return (
            <div>
                { this.renderQuestion() }
            </div>
        )
    }
}

export default QuestionShow
