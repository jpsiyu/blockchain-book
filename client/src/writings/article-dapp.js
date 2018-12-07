import React from 'react'
import { Article, Paragraph, Abstract, SubAbstract, Indentation, ExplainImage, } from '../article-widget'

class ArticleDApp extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <Article>
            <Paragraph>
                Ethereum发展早起，创立者的愿景比smart contract的定义要宽广的多，甚至
                要重新创造互联网的世界，直接称之为Web3。而smart contract是实现控制逻辑
                与支付功能去中心的一种方式。Web3 DApp的目标是去中心化一切应用，包括存储，
                信息传递，命名等等。如图：
                <ExplainImage><img src='/images/dapp.jpg' /></ExplainImage>
            </Paragraph>

            <Abstract>什么是DApp?</Abstract>
            <Paragraph>
                DApp是去中心化的应用程序，一个应用程序，这些方面皆可去中心化：
                <ul>
                    <li>后端软件，应用逻辑</li>
                    <li>前段软件</li>
                    <li>数据存储</li>
                    <li>消息交互</li>
                    <li>命名解释</li>
                </ul>
            </Paragraph>

            <Paragraph>
                每一方面都可以使用中心化设计，或是去中心化设计。例如，前端软件可以设计成运行
                在中心化服务器的web应用，也可以设计成运行在各自的手机里；后端软件和数据存储
                可以放在私人的服务器和数据库上，也可以设计成smart contract运行在P2P的网络。
                DApp有一些优势，是中心化的架构无法拥有的：
            </Paragraph>

            <SubAbstract>弹性</SubAbstract>
            <Indentation>
                由于业务逻辑写在了smart contract，DApp后端程序在blockchain平台分布式部署
                和管理。与部署在中心服务器的程序不同，DApp永远不会下限，只要blockchain运行，
                它就运行。
            </Indentation>
            <SubAbstract>透明</SubAbstract>
            <Indentation>
                DApp在链上的自然属性，使得任何人都可以审查它的代码，功能。与DApp发生的任何交
                互都会永远记录在blockchain上。
            </Indentation>
            <SubAbstract>不受干扰</SubAbstract>
            <Indentation>
                用户只要使用Ethereum的节点，就可以使用DApp，不受任何权威机构的干扰。DApp一旦
                部署到网络中，服务的提供商，甚至smart contract的拥有者，都无法修改代码。
            </Indentation>
            <Paragraph>
                Ethereum生态系统直至今日，只有非常少的完全去中心化的应用，绝大部分应用部分
                依赖与中心服务器提供功能支持，我们希望未来的DApp能够完全去中心化。
            </Paragraph>

            <Abstract>后端(Smart Contract)</Abstract>
            <Paragraph>
                在DApp里，smart contract存储业务逻辑(程序代码)，运行状态。你可以将smart
                contract看作传统应用的服务端程序，它们主要的区别是，smarl contract的运行
                非常昂贵，应尽可能少访问。因此smart contract适合于开发高信任度的，在去中心
                平台运行的应用。
            </Paragraph>
            <Paragraph>
                Ethereum提供了这样子的一个网络，smart contract之间互相调用，互相传递信息，
                修改状态，逻辑的复杂度仅仅受到gas消耗的限制。在部署smart contract之后，它
                的逻辑能够被其它DApp使用。有一点值得我们细虑，smart contract一旦部署，无法
                被修改，如果contract实现了selfdestruct函数功能，它可以被销毁。除了被销毁，
                没有任何办法改变代码。另外值得细虑的是DApp的大小，整体庞大的DApp在部署和使用
                上会话费昂贵的gas，因此有些应用将计算量大的操作放到blockchain之外。如果DApp
                的核心逻辑不在blockchain上，使用它意味着你对服务提供商的信任。
            </Paragraph>

            <Abstract>前端(Web用户接口)</Abstract>
            <Paragraph>
                
            </Paragraph>
        </Article>
    }

}

export default ArticleDApp
