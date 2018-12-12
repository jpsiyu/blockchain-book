import React from 'react'
import { cfgMainIndex, getArticlesByIndex } from './config'
import { DirectoryMainItem, DirectoryArticleItem } from './directory-item'
import { MacroEvent } from './macro'

class BottomDirectory extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mainIndexCfg: null,
            articleCfg: null,
            articles: [],
        }
    }

    render() {
        return <div className='bottom-root'>
            <div className='bottom-space' onClick={this.onSpaceClick.bind(this)}></div>
            <div className='bottom-dir'>
                <div className='bottom-dir-left'>
                    {this.renderMainIndex()}
                </div>
                <div className='bottom-dir-right'>
                    {this.renderArticleItem()}
                </div>
            </div>
        </div>
    }

    renderMainIndex() {
        const items = []
        for (let i = 0; i < cfgMainIndex.length; i++) {
            const cfg = cfgMainIndex[i]
            const selected = this.state.mainIndexCfg
                ? this.state.mainIndexCfg.id == cfg.id
                : false
            items.push(<DirectoryMainItem key={i} cfg={cfg} selected={selected} />)
        }
        return items
    }

    renderArticleItem() {
        const items = []
        for (let i = 0; i < this.state.articles.length; i++) {
            const cfg = this.state.articles[i]
            const selected = this.state.articleCfg
                ? this.state.articleCfg.id == cfg.id
                : false
            items.push(<DirectoryArticleItem key={i} cfg={cfg} selected={selected} />)
        }
        return items
    }

    componentDidMount() {
        app.eventMgr.subscribe(MacroEvent.SelectMainIndex, this, this.receiveMainIndexEvent.bind(this))
        app.eventMgr.subscribe(MacroEvent.SelectArticle, this, this.receiveArticleEvent.bind(this))
    }

    componentWillUnmount() {
        app.eventMgr.unsubscribe(MacroEvent.SelectMainIndex, this)
        app.eventMgr.unsubscribe(MacroEvent.SelectArticle, this)
    }

    receiveMainIndexEvent(args) {
        const cfg = args
        const articles = getArticlesByIndex(cfg.id)
        this.setState({ articles, mainIndexCfg: cfg })
    }

    receiveArticleEvent(args) {
        const cfg = args
        this.setState({ articleCfg: cfg })
    }

    onSpaceClick(){
        app.eventMgr.dispatch(MacroEvent.SpaceClick)
    }
}

export default BottomDirectory