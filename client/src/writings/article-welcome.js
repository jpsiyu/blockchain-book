import React from 'react'
import { Article, Abstract, Paragraph, RawText } from '../article-widget'

class ArticleWelcome extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <Article>
            <Paragraph>
                <RawText>
                    Blockchain, 是密码学，分布式系统，电子支付等等一些列技术的集大成者。
                    这些技术各自蕴含深奥的专业知识，有着广泛的应用基础。而Blockchain，
                    无论是技术复杂度，或是应用广泛性，都上升到更高的层面。它被视为“下一代互联网”。
                </RawText>
                <RawText>
                    为了更好地理解它，运用它；为了加快属于它的时代的来临，本小书收纳，
                    吸取和整理网络上优秀的文章，书籍及讨论，尝试用更加通俗的表达，
                    推动它的传播和发展。由于专业上的限制，本册子将以Ethereum Blockchain为主线，
                    对各个主题一一展开论述。
                </RawText>
                <RawText>
                    如果您发现本小书存在概念误解，编写错误；如果您想与本小书的作者交流；
                    如果您想谈谈对本小书的看法，建议，请Email联系：blockchainpirate@163.com
                </RawText>
            </Paragraph>
        </Article>
    }
}

export default ArticleWelcome
