import React from 'react'
import { cfgMainIndex, getfirstMainIndex, getArticlesByIndex, getFirstArticle } from './config'
import { DirectoryExpendItem } from './directory-item'
import { MacroEvent } from './macro'

class LeftDirectory extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div className='left-dir'>
            <div className='left-dir-title'>
                <h3>Directory</h3>
            </div>
            {this.renderMainIndex()}
        </div>
    }

    renderMainIndex() {
        const items = []
        for (let i = 0; i < cfgMainIndex.length; i++) {
            const cfg = cfgMainIndex[i]
            items.push(<DirectoryExpendItem key={i} cfg={cfg} />)
        }
        return items
    }

    componentDidMount() {
        const firstIndex = getfirstMainIndex()
        app.eventMgr.dispatch(MacroEvent.SelectMainIndex, firstIndex)
        const firstArticle = getFirstArticle()
        app.eventMgr.dispatch(MacroEvent.SelectArticle, firstArticle)
    }

}

export default LeftDirectory