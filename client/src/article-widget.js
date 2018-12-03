import React from 'react'

class Article extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div className='article'>
            {this.props.children}
        </div>
    }
}

class Paragraph extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div className='paragraph'>
            {this.props.children}
        </div>
    }
}

class Abstract extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div className='abstract'>
            <h2>{this.props.children}</h2>
        </div>
    }
}

class Indentation extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div className='indentation'>
            <p>{this.props.children}</p>
        </div>
    }
}

export { Article, Abstract, Paragraph, Indentation }