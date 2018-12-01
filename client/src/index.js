import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import Entry from './entry'
import LeftDirectory from './left-directory'

class Index extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div className='index'>
            <LeftDirectory />
            <Entry />
        </div>
    }
}

const app = new App()
app.start()

ReactDOM.render(
    <Index />,
    document.getElementById('root')
)