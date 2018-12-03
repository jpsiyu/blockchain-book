import React from 'react'
import { Article, Abstract, Paragraph } from '../article-widget'

class ArticleWelcome extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <Article>
            <Abstract>欢迎阅读本小册子</Abstract>
            <Paragraph>
                Blockchain，是一系列技术融合创造的结果。如密码学，分布式系统，电子货币等，每一项
                技术都对应着深刻的专业知识，各自有着广泛的应用基础。而Blockchain，无论是技术复杂度，
                或是应用广泛性，都将提升到更高的一个层次。它被视为“下一代互联网”。
            </Paragraph>
            <Paragraph>
                为了更好地理解它，运用它；为了加快属于它的时代的来临，本册子收纳，吸取和整理网络
                上优秀的文章，书籍及讨论，尝试用更加通俗的表达，使得它的理念得以更广泛地传播。由于
                专业上的限制，本册子将以Ethereum blockchain为主线，对个主题一一展开阐述。
            </Paragraph>
        </Article>
    }
}

export default ArticleWelcome
