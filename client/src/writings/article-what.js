import React from 'react'
import { Article, Abstract, Paragraph, Indentation } from '../article-widget'

class ArticleWhat extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <Article>
            <Paragraph>
                Ethereum俗称“全球计算机“。从计算机科学的角度来看，它本质上是一台状态机，拥有无限种状态，
                每一次状态的变化只能由一个特定的对象完成，这些对象运行在虚拟机当中。这就是它最基本的构成。
                从实用性的角度来看，它是全球化，去中心化基础运算设施，运行其上的程序被称作smart contract.
                small contract状态的存储，更改，同步，由底层的blockchain实现。执行这些操作会消耗一定的
                计算资源，因此需要为此支付一笔小费，用加密货币ether作为支付媒介。Ethereum的运行生态具有
                高可用性，可认证性，高透明度，中立性等等优点，同时降低了审查，降低了交易对手不确定性的风险,
                使得开发者得以构建强大的去中心化的应用.
            </Paragraph>

            <Abstract>对比Bitcoin</Abstract>
            <Paragraph>
                很多人在接触Ethereum之前，已经有使用加密货币的经验，特别是Bitcoin。Ethereum与其它公共
                的blockchain有着很多相似的之处：使用点对点连接网络，使用拜占庭容错的一致性算法用于同步更
                新状态，广泛运用密码学基本元素，如电子签名，哈希函数，加密货币等。但在很多方面，包括它的目
                的和架构，Ethereum与之前的其它公共blockchain都有着惊人的差异。
            </Paragraph>
            <Paragraph>
                Bitcoin是一个电子加密货币系统，它的脚本语言的功能性非常有限，只能做简单的true/false条件判断.
                Ethereum的主要目的不是成为一个电子支付网络。电子货币ether自身是一个运行整体，是Ethereum
                运行的必要因素。但从设计上，它为了Ethereum这台“全球计算机“的运行需要而生，仅仅是一工具货币
                而已。Ethereum的目标是设计具有普遍性的可编程的blockchain，在其上运行虚拟机，执行数学运算
                和复杂的逻辑操做。Ethereum上的脚本语言是图灵完整的，Ethereum从功能性上是一台具有普遍实用
                性的计算机。
            </Paragraph>

            <Abstract>blockchain构成组件</Abstract>
            <Paragraph>
                一个开放的，公共的blockchain通常具有以下组件:
                <ul>
                    <li>点对点的网络(P2P)，连接各个参与者，在其中广播交易消息和验证数据</li>
                    <li>消息，类似交易数据的格式，是最后形成状态的中间过渡数据</li>
                    <li>一致性规则，规定交易的组成元素，判定交易的合法性</li>
                    <li>状态机，在一致性规则下执行各种交易</li>
                    <li>多个交易数据组合成的，经过加密的块数据，形成数据链，记录了所有的经过验证且被接受的交易信息</li>
                    <li>一致性算法，强制所有参与者遵守一致性规则，从而达到去中心化</li>
                    <li>运用博弈论的激励机制，给予参与验证的主体一定的奖励，防止blockchain被私人篡改</li>
                    <li>实现上述功能的客户端软件</li>
                </ul>
            </Paragraph>

            <Abstract>Ethereum: 通用型blockchain</Abstract>
            <Paragraph>
                最原始的blockchain是Bitcoin blockchain，它追踪Bitcoin的所有权和状态变化。Bitcoin
                本质上是一个分布式的一致性的状态机，每一个交易都导致了状态的切换，最终改变的是货币所有权的
                更变。每次状态的切换，必须在一致性规则约束下完成，同时所有的参与者都会进入相同的状态下。Ethereum
                也是一个分布式的状态机，不同于Bitcoin追踪货币在某一状态下的所有权，Ethereum追踪的数据具有
                一般普遍性，包括所有可以用键值对表示的数据。换句话说，跟普通计算机使用的RAM数据存储模型是一样的。
                Ethereum存储着数据和代码，使用blockchain来跟踪这些存储的变化，能够将代码加载进虚拟机中运行，
                并将产生的结果写入blockchain之中。Ethereum跟普通计算机有两个关键性的区别，其一，Ethereum
                的运行必须遵循一致性规则；其二，Ethereum的状态是全球化分布式的。Ethereum解决的是这样的问题：
                如果我们能够在特定的共识下，追踪程序的任意状态，并且对状态机进行编程，创造一个全球化的计算机系
                统，会发生什么呢？
            </Paragraph>

            <Abstract>Ethereum的组件</Abstract>
            <Paragraph>Ethereum blockchain的组件，具体来说，包括以下部分：</Paragraph>
            <Paragraph>P2P网络</Paragraph>
            <Indentation>Ethereum的主网的协议叫做DEVp2p，运行在TCP之上，端口为30303</Indentation>
            <Paragraph>一致性规则</Paragraph>
            <Indentation>Ethereum的一致性规则定义在其黄页的参考规格中</Indentation>
            <Paragraph>交易</Paragraph>
            <Indentation>Ethereum的交易用网络消息实现，包含发送者，接受者，价值，数据负载等</Indentation>
            <Paragraph>状态机</Paragraph>
            <Indentation>
                Ethereum的状态切换由Ethereum虚拟机(EVM)处理，EVM基于堆栈的架构，执行字节码。EVM运行的
                程序叫做"smart contract"，由高级语言，比如Solidity编写而成，经过编译，编程字节码，再由
                EVM执行
            </Indentation>
            <Paragraph>数据结构</Paragraph>
            <Indentation>
                Ethereum的状态存储在每个节点本地的数据库之中，通常是Google LevelDB，存储的数据包括交易
                数据和系统状态，经过哈希函数序列化，形成Merkle Particia Tree。
            </Indentation>
            <Paragraph>一致性算法</Paragraph>
            <Indentation>
                Ethereum使用Bitcoin的Nakamoto一致性模型，用PoW算法对按顺序排列的单独签名的信息块加
                权重，决定出最长的区块链，为当前的合法状态。然而，Ethereum正计划用PoS加权投票系统来代
                替它.
            </Indentation>
            <Paragraph>经济安全性</Paragraph>
            <Indentation>
                Ethereum目前使用名为Ethash的PoW算法保证自身的安全，但在不久的将来会用PoS算法取替
            </Indentation>
            <Paragraph>客户端</Paragraph>
            <Indentation>Ethereum有多个使用不同语言开发的客户端程序，最流行的是Geth和Parity</Indentation>

        </Article>
    }
}

export default ArticleWhat