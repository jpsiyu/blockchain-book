import React from 'react'
import { Article, Paragraph, Abstract, ExplainImage } from '../article-widget'

class ArticleBasic extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <Article>
            <Paragraph>
                本文即将开始探索Ethereum，学习如何使用钱包，如何创建交易，如何运行简单的small contract
            </Paragraph>
            <Abstract>Ether货币单位</Abstract>
            <Paragraph>
                Ethereum的货币叫ether，它能够细分出更小的单元，最小的单位称作wei。1ether等于1*10^18wei。
                在Ethereum的内部，Ether的价值衡量单位是wei。当我们转1ether的货币，这1ether会转化为
                1000000000000000000 wei来传输。
            </Paragraph>
            <Paragraph>
                Ether的各种面值都有一个科学的名称和一个密码学上通俗的称呼。
                <ExplainImage><img src='/images/units.png'></img></ExplainImage>
            </Paragraph>
            <Abstract>选择Ethereum钱包</Abstract>
            <Paragraph>
                Wallet是管理Ethereum账号的软件，它是进入Ethereum的门关，它记录了账号的钥匙，我们通过
                它来创建交易，广播交易。选择一个合适钱包是很困难的，因为不同的钱包有不同的特点，有不同的
                设计。有一些适合新手使用，而另外一些则适合专业玩家使用。Ethereum平台自身不断改进中，最好
                的钱包通常是跟着平台的改进不断改进自身的钱包。
            </Paragraph>
            <Paragraph>
                即使选了一个钱包，但不喜欢它的运作方式；或是一开始喜欢，但后来想要尝试别的，换一个钱包还
                是很方便的。你需要做的，仅仅是把旧钱包的钱转送到新钱包里即可，或是把旧钱包的私钥导出来，再
                导入新钱包里即可。
            </Paragraph>
            <Paragraph>
                切记，钱包软件的正常运作必须要访问私钥，因此钱包软件必须从信得过的地方下载。一般来说，最流行
                的钱包，通常是最信得过的钱包。而且，经验告诉我们，不要将鸡蛋放在同一个篮子里，尽量将Ethereum
                账号分布在不同的钱包之中。
            </Paragraph>
            <Abstract>控制与责任</Abstract>
            <Paragraph>
                Ethereum是一个去中心化的系统，没有机构会对Ethereum的用户进行认证，管理，这意味着，每个Ethereum
                的用户必须保管好私钥，它是唯一证明你是该账户的凭证。如果私钥丢了，没有任何人能够将它回复，
                对应账户的所有资金都将永久封存在block chain当中。为此，提供一些tips帮助大家管理私钥:
                <ul>
                    <li>不要轻易相信任何软件，网站，要反复地尝试和测试</li>
                    <li>越是重要的账户，资金最多的账户，管理的smart contract作用越大的账户，安全测试程度要越高</li>
                    <li>最高等级的安全保护必须是离线的，但不是每个账户都需要这种等级的保护</li>
                    <li>切勿用明文记录私钥，特别是电子版本。幸运的是，目前大多数钱包软件都不会给你展示私钥明文</li>
                    <li>
                        私钥可以加密后存文档。加密后，需要密码才能解锁。选择密码时，尽量选择长的，随机的密码
                        并且做好备份，存放在私密安全的地方。每次访问账户，需要加密的私钥和密码。
                    </li>
                    <li>进行大金额的交易前，转一笔小钱测试对方是否能收到。</li>
                    <li>要创建一个新账户，先打一笔小钱到新账户，在从新账户打一笔小钱回来，测试可行性。账户创建
                        失败的原因很多，拿笔小钱测一测，以防万一。
                    </li>
                </ul>
            </Paragraph>

            <Abstract>外部账户与contract账户</Abstract>
            <Paragraph>
                外部账户是指拥有私钥的账户，拥有私钥意味着账户资金的所有权，账户合同的控制权。另一种账户是合同
                账户，合同账户没有私钥，但包含了实现合同细节的代码，可以说smart contract的逻辑控制这该合同
                账户。像外部账户一样，合同账户也有地址，也能够接受和发送资金。如果一个交易的接受者是一个合同账户，
                EVM就会加载该合同的代码运行，交易的数据会作为代码的输入。除了发送ether，一个交易可以传送数据，
                数据可以指定smart contract哪个函数执行，每个函数对应的参数是什么。通过这种方式，一个交易就可以
                调用smart contract的函数，完成相应的逻辑与功能。
            </Paragraph>
            <Paragraph>
                由于合同账户是没有私钥的，它不能发起一个交易。只有外部账户才能发起交易，但是合同账户可以根据
                交易的细节去调用其它合同，执行复杂的功能。典型的例子，一个外部账户发送一个交易请求，让一个多种
                签名的合同账户给另一个地址打钱。一个DApp程序让合同A到合同B处获取一些公共数据。
            </Paragraph>
        </Article>
    }
}

export default ArticleBasic