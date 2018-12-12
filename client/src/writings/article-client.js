import React from 'react'
import { Article, Paragraph, Abstract, RawText, List, SubAbstract } from '../article-widget'

class ArticleClient extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <Article>
            <Paragraph>
                <RawText>
                    Ethereum客户端，是指按照Ethereum参考规格，实现了各种功能的软件，在Blockchain中，
                    可以与其它客户端进行交流。这些客户端由不同的团队的开发，使用不同的编程语言开发，
                    由于它们使用相同的交流协议，遵循的规则也是相同的。因此，它们都可以用于访问Ethereum Blockchain。
                </RawText>
                <RawText>
                    Ethereum是开源项目，在开源证书的规定下，所有主要的客户端的源代码可以随意下载和修改。
                    开源不仅意味着可以免费使用，同时意味着Ethereum是由一组志愿者开发的，
                    任何人都可以在上面修改。更多人看到的代码，意味着更加信任的软件。
                </RawText>
            </Paragraph>

            <Paragraph>
                <Abstract>Ethereum网络</Abstract>
                <RawText>
                    由于Ethereum的成功，许多其它Blockchain采取类似Ethereum的架构，实现了大部分Ethereum黄页里规定的功能，
                    且把它们称为类似Ethereum的网络。然而，这些类似Ethereum的网络，如Ethereum Classic, Ella, Expanse,
                    Ubiq, Musicoin等等，它们之间不能够直接交流，尽管它们使用的交流协议是一样的。有一些功能强大的客户端，
                    根据类似Ethereum网络之间的差异，做适配，从而可以访问多个网络。当前主要有6个，使用不同编程语言开发的客户端：
                </RawText>
                <List>
                    <li>Parity, Rust语言开发</li>
                    <li>Geth, Go语言开发</li>
                    <li>cpp-ethereum, C++语言开发</li>
                    <li>pyethereum, Python语言开发</li>
                    <li>Mantis, Scala语言开发</li>
                    <li>Harmony, Java语言开发</li>
                </List>
            </Paragraph>

            <Paragraph>
                <Abstract>是否应该运行一个全节点</Abstract>
                <RawText>
                    许许多多的独立运行，地理上隔离的全节点，是Blockchain保持健康，保持弹性，避免被追踪审查的关键。
                    每个全节点能够帮助新进来的节点同步数据，引导它进入网络，同时对网络上的交易进行验证。但是，
                    运行全节点需要消耗硬盘资源，网络带宽。全节点必须下载80～100G的数据，存储在本地磁盘中。
                    随着新的交易和Block的产生，要下载的数据会越来越多。
                </RawText>
                <RawText>
                    在应用开发阶段，没有必要运行主网的全节点。在本地使用Ganache搭建一个私有网络，
                    或者连接云端提供服务的网络，提供的功能几乎是一样的。还可以运行远程客户端，
                    本地不需要下载已验证的交易数据和Block，可以通过远程客户端可以发送交易信息，或者连接本地的私有网络。
                </RawText>
            </Paragraph>

            <Paragraph>
                <Abstract>全节点的优缺点</Abstract>
                <RawText>
                    运行全节点，可以使用网络的全部功能，但会消耗本地的资源，下面列出优点和缺点：
                </RawText>
                <SubAbstract>
                    优点
                </SubAbstract>
                <List>
                    <li>支持Ethereum保持弹性，避免追踪审查</li>
                    <li>绝对可信地验证所有的交易</li>
                    <li>不需要第三方即可调用网络上全部Smart Contract</li>
                    <li>不需要第三方即可部署自己的Smart Contract</li>
                    <li>可以访问当前网络的环境状态信息</li>
                    <li>随意访问各种信息，不需要担心第三方追踪我们的行动</li>
                </List>
                <SubAbstract>
                    缺点
                </SubAbstract>
                <List>
                    <li>需要消耗越老越多的存储和网络带宽</li>
                    <li>首次启动，同步所有数据需要很多天</li>
                    <li>必须保持更新，保持在线，以同步后续的所有交易</li>
                </List>
            </Paragraph>

        </Article>
    }
}

export default ArticleClient