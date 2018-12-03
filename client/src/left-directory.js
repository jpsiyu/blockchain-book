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
                <h3>目录</h3>
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

}

export default LeftDirectory