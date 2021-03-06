import React from 'react'
import { Article, RawText, Abstract, Paragraph, List } from '../article-widget'

class ArticleConsensus extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <Article>
            <Paragraph>
                <RawText>
                    共识规则，是为了让系统，以去中心化而又可确定性的方式运行，必须遵守的规则。在计算机科学领域，
                    共识一词先于Blockchain存在，与如何在分布式系统同步状态的问题相关联，
                    让分布式系统的参与者都认可唯一的系统状态，这个过程叫做“达成共识”。
                </RawText>
                <RawText>
                    以分布式架构的数据存储和认证系统，单个节点的数据信任度很低，
                    难以保证节点本地的数据状态与系统的最新状态是一致的。在去中心的网络中，这种问题更加突出，
                    没有任何可信的第三方提供认证服务。而这正是Blockchain的魅力之一，Blockchain分布式的，
                    去中心的架构，能够抵抗审查，无需权限认证地访问数据。为此付出的代价是，没有可信的公证人，
                    任何分歧，欺骗或者差异，都需要其它手段调解。共识算法就是用于调解安全问题，分散化问题的机制。
                </RawText>
                <RawText>
                    在Blockchain中，共识是极为重要的属性。简单来说，你的钱有危险！在Blockchain的世界里，
                    共识是指如何保持分散化的同时，达成一个共同的状态。换句话说，达成共识就是要创造一个系统，
                    让可能不遵守规则的玩家，在系统中只能遵循严格的规则进行交易。没有任何个人，机构，组织看管，
                    权力与控制分散在网络中的各个参与者之中，每个参与者必须遵守规则，讲信用才由可能满足自身的利益。
                </RawText>
                <RawText>
                    在分布式网络，存在竞争对手的条件，没有中心控制的情况下达成共识，
                    是所有开放式公共Blockchain的核心原则。在保持分散化价值的前提下如何解决这个问题，
                    Blockchain社区持续尝试了不同的共识模型。
                </RawText>
            </Paragraph>

            <Paragraph>
                <Abstract>工作量证明共识模型</Abstract>
                <RawText>
                    Blockchain的鼻祖Bitcoin，发明了共识算法，叫做工作量证明，PoW。许多认为，
                    PoW是Bitcoin最重要的支撑。PoW有更通俗的名称，挖矿，而挖矿一词混淆了共识的主要目的。
                    人们通常认为挖矿就是创造新的货币，真实的世界，挖矿就是取出宝贵的金属或者其它资源。实质上，挖矿，
                    或者其它共识模型的真正目的，是保护Blockchain的安全，系统越来越分散，越来越多参与者的同时，
                    保持对系统的控制。新挖出的货币，是用来诱惑矿工为系统的安全做贡献的。达到目的得有合适的手段，
                    奖励是手段，系统分散化而保持安全是目的。PoW共识模型同时存在惩罚，参与挖矿要消耗能量。
                    如果参与者不按规则行动，损失的是投入到挖矿的电费。
                </RawText>
                <RawText>
                    Ethereum目前是使用PoW共识模型的Blockchain，它使用PoW共识算法的目的也是一致的：
                    在Blockchain分散化的同时提供安全的保护。Ethereum的PoW与Bitcoin的PoW有轻微的区别，它叫Ethash。
                </RawText>
            </Paragraph>

            <Paragraph>
                <Abstract>权益证明共识模型</Abstract>
                <RawText>
                    PoW并不是第一个被提出的共识算法，PoW之前，许多研究人员根据金融权益提出了各种共识算法，
                    现在成为权益证明，PoS。从某些角度来看，PoW是PoS的一个可替代品。由于Bitcoin的成功，
                    许多其它的Blockchain模仿Bitcoin使用PoW。目前对共识算法大量的研究，使得PoS得以复苏。
                    Ethereum的创立者打算将共识算法由PoW转换到PoS，因为PoW又一个弱点，成为难度炸弹，
                    它导致挖矿的难度会越来越大。目前Ethereum的共识算法是PoW，不久的将来将会切换为PoS，
                    名字叫Casper。过去两年，Casper替代Ethash的安排推迟了好几次。
                </RawText>
                <RawText>
                    PoS算法执行过程大致是这样子的：Blockchain持续跟踪一组验证者，任何人都可以发送一笔保证金成为验证者，
                    对于下一个合法的块数据，认证者轮流建议和投票，认证人投票的权重由他们存放的保证金决定。
                    认证人又一个风险，如果他支持的块数据被其它大部分认证人拒绝，该认证人的保证金会被没收。
                    如果认证人的块数据被大家接受了，会根据该认证人保证金的比例给予一笔奖励。PoS通过系统的奖励和惩罚，
                    强迫认证人根据共识规则诚实办事。PoW和PoS最主要的区别是如何惩罚坏人，如果块数据被拒绝，
                    PoW下损失的是挖矿消耗的资源，而PoS下损失保证金。
                </RawText>
            </Paragraph>

            <Paragraph>
                <Abstract>Ethash，Ethereum的PoW算法</Abstract>
                <RawText>
                    Ethash是Ethereum的PoW算法，Ethash运行时，创建一大组数据，成为有向无环图DAG，根据DAG进行分析。
                    DAG最开始的大小是1G，然后慢慢变大，没过一段时间更新一次，大概是30,000个块数据，
                    125小时更新一次。DAG的目的，是让PoW算法的运行必须要维护一组很大的数据，这组数据还要频繁读取更新。
                    这会导致普通的ASCI硬件设备挖矿的速度比不上使用GPU挖矿的设备，防止某些大的ASCI硬件制作商，
                    或者拥有很多廉价ASCI设备的大公司成为垄断者，降低Blockchain的安全保护。
                </RawText>
                <RawText>
                    消费级别的GPU更容易处理PoW算法，意味着可以让世界上更多的人参与挖矿的过程。更多的独立的个体，
                    挖矿的力量就越分散，避免了Bitcoin现在出现的情况，绝大部分的挖矿力量集中在几个巨大的挖矿中心。
                    使用GPU挖矿也导致了一些不好的影响，造成了2017年GPU供应短缺，价格飞涨，还有游戏玩家的抗议。
                </RawText>
                <RawText>
                    对于Ethash对ASCI硬件的不友好，ASCI矿工的威胁目前大部分已经消失了，现在使用ASCI挖矿，
                    需要设计，制作，分布式架构昂贵的硬件。而且Ethereum正在打算把共识算法切换成PoS，
                    许多ASCI矿工可能会把目标转移到别的平台了。
                </RawText>
            </Paragraph>

            <Paragraph>
                <Abstract>Casper：Ethereum的权益证明共识算法</Abstract>
                <RawText>
                    Casper是Ethereum权益共识算法的名字，它目前仍然处于研究，开发状态。
                </RawText>
            </Paragraph>

            <Paragraph>
                <Abstract>共识算法的原则</Abstract>
                <RawText>
                    共识算法的设计和改进原则可能通过下面这些问题得到更好的理解：
                </RawText>
                <List>
                    <li>谁可以修改过去，怎么修改？</li>
                    <li>谁可以改变未来，怎么改变？</li>
                    <li>作出这些修改，谁付出最大？</li>
                    <li>作出这些修改，如果保证和增加分散化的力量？</li>
                    <li>谁会知道这些修改改变了什么东西，怎么知道？</li>
                </List>
            </Paragraph>

            <Paragraph>
                <Abstract>争议，竞争</Abstract>
                <RawText>
                    现在你可能会问，为什么开发了这么多的共识算法？哪个是最好的？后一个问题的答案，
                    是最近几十年来，在分布式领域的研究核心。它完全根据你对最好的定义。
                    似乎没有哪一个算法在各个方面都是最好的。如果有人说，这个共识算法比那个更好，
                    你应该问清楚，是哪一方面更好。是不可修改性？是最终结果吗？是分散化程度吗？
                    是消耗更少吗？目前还没有确定性的答案。目前在Blockchain的投资是巨大的，历史将会给我们答案！
                </RawText>
            </Paragraph>
        </Article>
    }
}

export default ArticleConsensus
