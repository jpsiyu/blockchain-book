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

class RawText extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div className='raw-text'>
            <p>{this.props.children}</p>
        </div>
    }
}

class Abstract extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div className='abstract'>
            <p>{this.props.children}</p>
        </div>
    }
}

class List extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <ul className='list'>
            {this.props.children}
        </ul>
    }
}


class SubAbstract extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div className='sub-abstract'>
            <p>{this.props.children}</p>
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

class ExplainImage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div className='explain-image'>
            <p>{this.props.children}</p>
        </div>
    }
}

export {
    Article,
    Abstract,
    SubAbstract,
    Paragraph,
    RawText,
    Indentation,
    ExplainImage,
    List,
}