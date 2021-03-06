import React from 'react'
import { Article, Paragraph, Abstract, ExplainImage, RawText, List } from '../article-widget'

class ArticleOracle extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <Article>
            <Paragraph>
                <RawText>
                    此处的Oracle，是指为Ethereum Smart Contract提供外部数据源的系统。
                    Oracle一词起源于希腊神话，是可以与上帝交流，预见未来的人。而在Blockchain的上下文，
                    Oracle用于解答Ethereum平台之外的问题。最理想的Oracle系统是完全不需要被信任的，
                    完全遵循分散化原则的系统。
                </RawText>
            </Paragraph>

            <Paragraph>
                <Abstract>为何需要Oracle</Abstract>
                <RawText>
                    Ethereum虚拟机是Ethereum平台的核心组件。在共识规则的约束之下，
                    EVM在分散化网络上的每一个节点运行程序代码，更新Ethereum的状态。EVM的执行必须是确定的，
                    必须依据共享的Ethereum状态和已签名的交易信息。这导致了两个特别重要的后果：
                    第一，EVM内部没有真正的随机数；第二，外部数据只能够通过交易信息进入平台。
                </RawText>
                <RawText>
                    让我们更深层次地认识这两个后果的意义。为了理解，为什么要禁止Ethereum使用随机数，
                    假设现在要执行这样的操作：节点A执行了命令，得到了结果res=3，在Smart Contract中存储。
                    节点B执行同一个Smart Contract同一个函数，得到了结果res=7，这样一来，节点A，B无法达成共识，
                    尽管它们都的是同一件事。实际上，即使是同一个节点，每次运行同一个Smart Contract的同一个函数，
                    由于随机性，结果都是不同的。那么，在分布式网络里，各个节点就无法各自独立运行，同时达成共识了。
                </RawText>
                <RawText>
                    值得注意的是，即使是像加密安全哈希函数这样的伪随机函数，也常常满足不了应用软件的需求。
                    假设现在有一个赌博游戏，用抛硬币的方式决定谁输谁赢，用伪随机函数模拟硬币的正面反面。
                    矿工可以创造交易信息，然后把所有输钱的交易都丢弃，只保留赢钱的交易放到Block之中，
                    保证只赚不亏。该如何解决这一类问题呢？当然，所有的节点都会同意签名之后的交易，
                    可以把外部数据源，例如外部随机数，天气信息等等，通过交易信息传送到Blockchain，
                    而这类数据不能不防范，它们可能来自不受信任的数据源。而Oracle，正是为了解决这一类的问题的。
                </RawText>
            </Paragraph>

            <Paragraph>
                <Abstract>Oracle用例</Abstract>
                <RawText>
                    Oracle用于获取外部数据，这是外部数据是链下的，是不可靠的，例如足球比赛的结果，
                    黄金的价格，或者真正的随机数。提供给Ethereum的Smart Contract使用。因此，
                    Oracle实际上是链上的Smart Contract与链下的真实世界的连接者。
                    允许Smart Contract根据真实世界的事件和维持执行契约关系，极大地拓展了它的应用范围。
                    同时，这也为Ethereum带来了极大的危险。考虑考虑这种情况，有一个执行遗嘱的Smart Contract，
                    在人死后，自动给继承者转移遗产。如果遗产的金额巨大，就会吸引黑客攻击，尝试在此人死之前，
                    找出这个Smart Contract的漏洞，把钱转走。
                </RawText>
                <RawText>
                    有一些Oracle提供的数据，来源于特定的隐私数据，如学术证明，政府ID等等。这类数据的源头，
                    通常是大学或者政府部门，是绝对可靠的，它们提供的数据也是客观真实的，权威认证的。
                    通常认为这些数据源也是Oracle，它们也是Smart Contract与真实世界的连接。另外，
                    提供这些数据的也属于Oracle：
                </RawText>
                <List>
                    <li>真随机数</li>
                    <li>与自然灾害相关的参数触发器</li>
                    <li>汇率</li>
                    <li>资本市场相关数据</li>
                    <li>基准参考数据</li>
                    <li>静态，伪静态数据</li>
                    <li>时间，时间间隔</li>
                    <li>天气数据</li>
                    <li>政治事件</li>
                    <li>体育运动数据</li>
                    <li>地理信息</li>
                    <li>伤害定损</li>
                    <li>其它Blockchain发生的事件</li>
                    <li>Ether的市场价格</li>
                    <li>航线统计</li>
                </List>
            </Paragraph>

            <Paragraph>
                <Abstract>Oracle设计模式</Abstract>
                <RawText>
                    根据定义，所有的Oracle都要提供几个关键功能，包括：
                </RawText>
                <List>
                    <li>链下收集数据</li>
                    <li>链上通过交易信息传播数据</li>
                    <li>将数据存储在Smart Contract中，供大家使用</li>
                </List>
                <RawText>
                    一旦数据存储于Smart Contract之中，其它Smart Contract可以通过消息调用访问它，
                    也可以在Ethereum节点中，直接读取Smart Contract的存储空间访问它。配置Oracle，
                    可以分为三大类：1. 请求-回应； 2.发布-订阅； 3.直接读取。
                </RawText>
                <RawText>
                    最简单的Oracle是直接提供数据让Smart Contract读取的Oracle。它们提供的数据一般用于直接的判断，
                    例如，ethereumbook.info的地址是什么？这个人超过18岁了吗？读取这种Oracle数据的操作，
                    一般都是实时的操作，拿完数据就走，也许也就读取一次，再也不需要了。这些Oracle的提供者，
                    一般是企业，机构，它们存储认证数据，机构成员关系，机场认证，机构ID等。这种类型的Oracle，
                    数据写入了一次，其它Smart Contract多次读取。当然数据也可以被更新。除了通过发送交易信息获取数据，
                    也可以直接通过节点访问对应Smart Contract的存储。商店可以使用这种Oracle，检查买酒的顾客是否满18岁。
                    有些公司，机构很喜欢这种Oracle，否则就要开发和维护自己的服务器，给用户提供信息。
                    Oracle存储的，很有可能不是原始的数据，而是对应数据的哈希，保持信息的隐秘。
                </RawText>
                <RawText>
                    第二种Oracle采取发布-订阅的配置方式，对所有感兴趣的Smart Contract广播数据。
                    每次Oracle更新了数据，就发送一个通知，订阅者接收到通知，自己决定是否拉取最新的数据。
                    订阅者轮询获取数据，在传统的中心服务器框架的Web应用中，效率很低。而在Ethereum之中，
                    由于客户端必须时刻更新保持自身的状态，轮询只发生在单个节点内部，不存在这个问题。
                </RawText>
                <RawText>
                    第三种方式是请求-回应的方式，这是最复杂的，一般由于数据非常巨大，不方便存储在Blockchain之中，
                    由Ethereum外部的服务器提供数据源，Smart Contract每次读取一部分。具体的步骤如下，
                    EOA账户访问Smart Contract，然后从实现Oracle接口的Smart Contract获取数据，
                    Oracle的Smart Contract发起请求，访问外部Oracle的数据库，获取数据，然后执行回调函数。
                    当消息被认证之后，这个请求可以看作是Oracle的Smart Contract发起的事件，或者状态转换。
                    这种Oracle做的事情，可以细分为：
                </RawText>
                <List>
                    <li>接收DApp的请求</li>
                    <li>解释请求</li>
                    <li>检查访问权限</li>
                    <li>从数据库获取数据</li>
                    <li>对包含数据的交易信息签名</li>
                    <li>广播交易信息</li>
                    <li>执行后续的操作，发时间，写日志等</li>
                </List>
            </Paragraph>

            <Paragraph>
                <Abstract>数据认证</Abstract>
                <RawText>
                    假设DApp请求的数据的来源是权威和值得信任的，仍然无法确定拿到的数据是正确的，
                    因此数据在传输的过程中，可能丢失，可能被黑客替换。来自链下的数据，必须能够证明它的完整性。
                    有两个常用的数据认证的方法，真实性证明和可信任执行环境。
                </RawText>
                <RawText>
                    真实性证明是数据没有被修改的密码认证，基于一些列的证明方法，如签名认证等，
                    把数据的信任值，从数据的运送者转移到数据的证明者，使得验证的方法转移到链上，
                    Smart Contract可以根据数据的完整性，决定是否使用该数据。详细情况，
                    可以了解TLSNotary证明。
                    而可信任执行环境，这种方法利用基于硬件的安全包来确保数据的完整性，
                    如Town Crier。
                </RawText>
            </Paragraph>

            <Paragraph>
                <Abstract>运算型Oracle</Abstract>
                <RawText>
                    除了用于收集和传送数据，Oracle也可以用来进行复杂的数学运算，避免过高的gas消耗。
                </RawText>
            </Paragraph>

            <Paragraph>
                <Abstract>Oracle的接口</Abstract>
                <RawText>
                    下面的例子，展示了Oracle的基本用法：
                </RawText>
                <ExplainImage><img src='/images/oracle.png' /></ExplainImage>
                <RawText>
                    一般使用Oraclize库，继承父类usingOraclize，用oraclize_query发起请求，
                    __callback是请求之后的回调方法。
                </RawText>
            </Paragraph>

        </Article>
    }
}

export default ArticleOracle
