import React from 'react'
import { Article, Paragraph, Abstract, SubAbstract, Indentation, ExplainImage, } from '../article-widget'

class ArticleConsensus extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <Article>
            <Paragraph>
                共识规则，是为了让系统，以去中心化而又可确定性的方式运行，必须遵守的规则。在计算机科学领域，
                共识一词先于blockchain存在，与如何在分布式系统同步状态的问题相关联，让分布式系统的参与者都
                认可唯一的系统状态，这个过程叫做“达成共识”。
            </Paragraph>
            <Paragraph>
                以分布式架构的数据存储和认证系统，单个节点的数据信任度很低，难以保证节点本地的数据状态与系统
                的最新状态是一致的。在去中心的网络中，这种问题更加突出，没有任何可信的第三方提供认证服务。而
                这正是blockchain的魅力之一，blockchain分布式的，去中心的架构，能够抵抗审查，无需权限认证
                地访问数据。为此付出的代价是，没有可信的公证人，任何分歧，欺骗或者差异，都需要其它手段调解。
                共识算法就是用于调解安全问题，分散化问题的机制。
            </Paragraph>
            <Paragraph>
                在blockchain中，共识是极为重要的属性。简单来说，你的钱有危险！在blockchain的世界里，共识
                是指如何保持分散化的同时，达成一个共同的状态。换句话说，达成共识就是要创造一个系统，让可能不
                遵守规则的玩家，在系统中只能遵循严格的规则进行交易。没有任何个人，机构，组织看管，权力与控制
                分散在网络中的各个参与者之中，每个参与者必须遵守规则，讲信用才由可能满足自身的利益。
            </Paragraph>
            <Paragraph>
                在分布式网络，存在竞争对手的条件，没有中心控制的情况下达成共识，是所有开放式公共blockchain的
                核心原则。在保持分散化价值的前提下如何解决这个问题，blockchain社区持续尝试了不同的共识模型。
            </Paragraph>

            <Abstract>工作量证明共识模型</Abstract>
            <Paragraph>
                
            </Paragraph>
        </Article>

    }
}

export default ArticleConsensus
