import React, { Component } from 'react'
import axios from 'axios'

export class QuestionShow extends Component {

    state = {
        question: null
    }

    async componentDidMount() {
        const { params } = this.props.match
        const question = ( await axios.get(`http://localhost:8081/${params.id}`) ).data

        this.setState({
            question
        })
    }

    renderAnswers() {
        const { question } = this.state
        return question.answers.map( answer => (
            <p className='lead' key={answer.answer}></p>
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
                        <p>Answers:</p>
                        { this.renderAnswers() }
                    </div>
                </div>
            </div>
        )
    }

    render() {
        console.log(this.props)
        const { question } = this.state
        if ( !question ) return <div>Loading...</div>

        console.log(question)
        return (
            <div>
                { this.renderQuestion() }
            </div>
        )
    }
}

export default QuestionShow
