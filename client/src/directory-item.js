import React from 'react'
import { MacroEvent } from './macro'
import { getArticlesByIndex } from './config'

class DirectoryMainItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const ifSelected = this.props.selected ? 'bottom-dir-item-select' : ''
        return <div className={`bottom-dir-item ${ifSelected}`} onClick={this.onMainClick.bind(this)}>
            <h3 className='noselect bottom-dir-itemname'>{this.props.cfg.name}</h3>
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
        const ifSelected = this.props.selected ? 'bottom-dir-article-select' : ''
        return <div className={`bottom-dir-article-item ${ifSelected}`} onClick={this.onItemClick.bind(this)}>
            <p className='noselect'>{this.props.cfg.name}</p>
        </div>
    }

    onItemClick() {
        app.eventMgr.dispatch(MacroEvent.SelectArticle, this.props.cfg)
    }
}


class DirectoryExpendItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: false,
            articleCfg: null,
            showSubitem: false,
        }
    }

    render() {
        const ifSelected = this.state.selected ? 'left-dir-item-select' : ''
        return <div className='left-dir-item'>
            <div className={`left-dir-itemname ${ifSelected}`} onClick={this.onMainClick.bind(this)}>
                <img src='/images/chapter.png'></img>
                <h3 className='noselect'>{this.props.cfg.name}</h3>
            </div>
            {this.state.showSubitem ? this.renderSubitem() : null}
        </div>
    }

    renderSubitem() {
        const articls = getArticlesByIndex(this.props.cfg.id)
        const items = []
        for (let i = 0; i < articls.length; i++) {
            const cfg = articls[i]
            const selected = this.state.articleCfg
                ? this.state.articleCfg.id == cfg.id
                : false
            items.push(<DirectoryExpendSubItem key={i} cfg={cfg} selected={selected} />)
        }
        return <div className='left-dir-expend'>{items}</div>
    }

    componentDidMount() {
        app.eventMgr.subscribe(MacroEvent.SelectMainIndex, this, this.receiveMainIndexEvent.bind(this))
        app.eventMgr.subscribe(MacroEvent.SelectArticle, this, this.receiveSelectArticleEvent.bind(this))
    }

    componentWillUnmount() {
        app.eventMgr.unscribe(MacroEvent.SelectMainIndex, this)
        app.eventMgr.unscribe(MacroEvent.SelectArticle, this)
    }

    receiveMainIndexEvent(cfg) {
        const selected = this.props.cfg.id == cfg.id
        this.setState({ selected })
    }

    receiveSelectArticleEvent(cfg) {
        this.setState({ articleCfg: cfg })
    }

    onMainClick() {
        this.setState({ showSubitem: !this.state.showSubitem })
        app.eventMgr.dispatch(MacroEvent.SelectMainIndex, this.props.cfg)
    }
}

class DirectoryExpendSubItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const ifSelected = this.props.selected ? 'left-dir-expend-select' : ''
        return <div className={`left-dir-expend-item ${ifSelected}`} onClick={this.onItemClick.bind(this)}>
            <p className='noselect'>{this.props.cfg.name}</p>
        </div>
    }

    onItemClick() {
        app.eventMgr.dispatch(MacroEvent.SelectArticle, this.props.cfg)
    }
}

export { DirectoryMainItem, DirectoryArticleItem, DirectoryExpendItem }