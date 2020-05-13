import React from 'react'
import { Route } from 'react-router-dom'

import NavBar from './NavBar'
import QuestionsIndex from './questions/QuestionsIndex'
import QuestionShow from './questions/QuestionShow'
import { Callback } from './Callback'
import SecuredRoute from './private-routes/SecuredRoute'
import { QuestionCreate } from './questions/QuestionCreate'

const App = () => {
    return (
        <div>
            <NavBar />
            <Route exact path='/' component={QuestionsIndex} />
            <Route exact path='/question/:id' component={QuestionShow} />
            <Route exact path='/callback' component={Callback} />
            <SecuredRoute path='/questions/new' component={QuestionCreate} />
        </div>
    )
}

export default App
