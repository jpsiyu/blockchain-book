import React from 'react'
import { MacroEvent } from './macro'

class DirectoryMainItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const ifSelected = this.props.selected ? 'item-select' : ''
        return <div className={`d-item ${ifSelected}`} onClick={this.onMainClick.bind(this)}>
            <h3 className='noselect d-itemname'>{this.props.cfg.name}</h3>
        </div>
    }

    onMainClick() {
        app.eventMgr.dispatch(MacroEvent.SelectMainIndex, this.props.cfg)
    }
}

class DirectoryArticleItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const ifSelected = this.props.selected ? 'article-select' : ''
        return <div className={`d-article-item ${ifSelected}`} onClick={this.onItemClick.bind(this)}>
            <p className='noselect'>{this.props.cfg.name}</p>
        </div>
    }

    onItemClick() {
        app.eventMgr.dispatch(MacroEvent.SelectArticle, this.props.cfg)
    }
}

export { DirectoryMainItem, DirectoryArticleItem }