import React from 'react'
import BottomDirectory from './bottom-directory'
import { MacroEvent } from './macro'
import { getArticleById } from './config'

class Entry extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showDirectory: false,
            articleCfg: null,
        }
    }

    render() {
        const getArticle = () => {
            if (this.state.articleCfg) {
                const ArticleComponent = this.state.articleCfg.article
                return <ArticleComponent />
            } else {
                return null
            }
        }
        const title = this.state.articleCfg ? this.state.articleCfg.name : ''

        return <div className='entry'>
            <div className='e-title'>
                <h3 className='noselect'>{title}</h3>
            </div>
            <div className='e-content'>
                {getArticle()}
            </div>
            <div className='e-bottom' onClick={this.onDirectoryClick.bind(this)}>
                <p className='noselect'>目录</p>
            </div>
            {this.state.showDirectory
                ? <div className='e-panel'>  <BottomDirectory /> </div>
                : null
            }
        </div>
    }

    componentDidMount() {
        app.eventMgr.subscribe(MacroEvent.SelectArticle, this, this.onSelectArticle.bind(this))
        app.eventMgr.subscribe(MacroEvent.SpaceClick, this, this.onReceSpaceEvent.bind(this))
        this.initArticle()
    }

    componentWillUnmount() {
        app.eventMgr.unsubscribe(MacroEvent.SelectArticle, this)
        app.eventMgr.unsubscribe(MacroEvent.SpaceClick, this)
    }

    initArticle() {
        const timeout = 300
        setTimeout(() => {
            const cfg = getArticleById(1)
            app.eventMgr.dispatch(MacroEvent.SelectArticle, cfg)

        }, (timeout));
    }

    onSelectArticle(args) {
        this.setState({ articleCfg: args })
        setTimeout(
            () => { this.setState({ showDirectory: false }) },
            300,
        )
    }

    onReceSpaceEvent() {
        this.setState({
            showDirectory: false
        })
    }

    onDirectoryClick() {
        this.setState({
            showDirectory: !this.state.showDirectory
        })
    }
}

export default Entry