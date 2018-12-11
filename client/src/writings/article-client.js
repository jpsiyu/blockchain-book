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
                    Ethereum客户端是实现了Ethereum规定功能的软件，在blockchain中与其它客户端进行
                    交流。实现了Ethereum参考规格的，使用标准的交流协议的不同的客户端之间可以相互交流。
                    这些客户端由不同的团队的开发，使用不同的编程语言开发，但它们交流的协议是相同的，遵循
                    的规则也是相同的。因此，它们都可以用于访问Ethereum blockchain。
                </RawText>
                <RawText>
                    Ethereum是开源项目，在开源证书的规定下，所有主要的客户端的源代码可以随意下载和修改。
                    开源不仅意味着可以免费使用，同时意味着Ethereum是由一组志愿者开发的，任何人都可以在
                    上面修改。更多人看到的代码，意味着更加信任的代码和软件。
                </RawText>
            </Paragraph>

            <Paragraph>
                <Abstract>Ethereum网络</Abstract>
                <RawText>
                    目前有许多基于Ethereum架构的网络，它们实现了大部分Ethereum黄页规格的功能，但是彼此
                    之间不能相互交流操作，包括Ethereum, Ethereum Classic, Ella, Expanse, Ubiq,
                    Musicoin等等。虽然它们运行的协议是相同的，但它们之间的交流，需要客户端做一定的适配。
                    因此，不是所有的客户端都可以访问所有的基于Ethereum架构的网络。当前主要有6个用不同
                    语言实现的客户端：
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
                    许许多多的独立运行，地理上隔离的全节点，是blockchain保持健康，保持弹性，避免被追踪
                    审查的关键。每个全节点能够帮助新进来的节点同步数据，引导它进入网络，同时对网络上的
                    交易进行验证。但是，运行全节点需要消耗硬盘资源，网络带宽。全节点必须下载80～100G的
                    数据，存储在本地磁盘中。随着新的交易和块数据的产生，要下载的数据会越来越多。
                </RawText>
                <RawText>
                    在应用开发阶段，没有必要运行主网的全节点。在本地使用Ganache搭建一个私有网络，或者连接
                    在云端提供服务的网络，几乎可以是一样的。还可以运行一个远程客户端，本地不需要下载验证的
                    交易数据和块数据。通过这些客户端可以发送交易信息，或者连接本地的私有网络。
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
                    <li>不需要第三方即可操作所有网络上的smart contract</li>
                    <li>不需要第三方即可部署自己的smart contract</li>
                    <li>可以访问网络的状态信息</li>
                    <li>随意的访问各种信息，不需要担心第三方追踪我们的行动</li>
                </List>
                <SubAbstract>
                    缺点
                </SubAbstract>
                <List>
                    <li>需要消耗越老越多的存储和网络带宽</li>
                    <li>首次启动，同步所有数据需要很多天</li>
                    <li>必须保持更新，在线同步后续的所有交易</li>
                </List>
            </Paragraph>

        </Article>
    }
}

export default ArticleClient