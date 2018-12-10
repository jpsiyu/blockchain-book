import React from 'react'
import { Article, Paragraph, Abstract, ExplainImage } from '../article-widget'

class ArticleWallet extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <Article>
            <Paragraph>
                Ethereum中的"钱包"用来描述好几样不同的东西。从应用层次观察，钱包是应用软件，提供
                访问Ethereum服务的用户接口。钱包控制着钥匙的访问权，保管钥匙，设置地址，追踪记录
                钱包的资产，创建交易，为交易签名。部分钱包可以运行合同。从程序员层次观察，钱包是存储
                和管理用户钥匙的系统。每一个钱包都有一个钥匙管理组件，对于某些钱包来说，它只有这个
                组件，而另外一些钱包功能强大得多，像浏览器一样，是Ethereum Dapp的用户接口。我们
                把钱包视为私钥的容器，私钥的管理系统。
            </Paragraph>

            <Abstract>钱包技术概览</Abstract>
            <Paragraph>
                使用方便与私密保护之间的平衡，是设计钱包的核心考虑因素。一个私钥，一个地址，重复使用，
                这种设计是最简单便捷的。而从私密性来看，则是一场噩梦。任何人都可以轻松地追踪和关联你
                所有的交易。相对的是，每一次交易都使用不同的私钥，不同的账户，隐私保护是最好的，但是
                钥匙的管理，备份非常复杂，容易丢失钥匙。恰当的均衡很难，这正是优秀钱包所追求的。
            </Paragraph>
            <Paragraph>
                很多人会误以为Ethereum钱包里面有ether或者token，实际上钱包里只有钥匙。ether或是
                token是被记录在blockchain之中的，用户用私钥对交易签名，从而使用私钥对应的账户上的
                ether或token。传统的支付模式，客户告诉银行转账，银行检查账户余额，确认后转账到对方
                账户。在blockchain中，只需要私钥签名，即可将资金转到对方的账户。所有人都可以对这个
                交易进行验证，所有人都可以知道这个账户有多少资金，但是他们不知道该账户是哪个人的。实际
                应用当中，检查一个账户有多少资金是一个独立的操作，无需经过钱包的钥匙验证。
            </Paragraph>
            <Paragraph>
                总体上钱包可以分为两大类，钥匙之间有关联的钱包和无关联的钱包。第一种是非确定性钱包，每
                个私钥是根据随机数独立产生的，私钥间无任何关联，简称JBOK钱包，"Just a Bunch of Keys",
                仅仅是一堆钥匙放在一起而已。第二种是确定性钱包，所有的私钥都是一个主钥匙根据一定的算法
                派生的，这个主钥匙又成为种子。这些派生的私钥互相之间有关联，可以根据种子计算出来。确定
                性钱包又派生出几种不同的类型，最流行的是一中树状结构的派生方式，BIP32/44。
            </Paragraph>
            <Paragraph>
                某些情况下，主钥匙也有可能丢失，例如手机丢了，或者掉进厕所了。为了应对这种事故，确定
                性钱包通常将种子加密为一串单词，被称为钱包的助记词。根据这一串有序的助记词，可以解密
                出主钥匙，从而派生出相应的私钥和公钥。因此，一定要把助记词备份到纸上，藏好。
            </Paragraph>

            <Abstract>非确定性(随机的)钱包</Abstract>
            <Paragraph>
                第一代钱包软件，有一个文件专用于存储随机产生的私钥，这种老式的钱包由于自身的缺陷，正在
                被确定性钱包替代。举个例子，为了更好地保护隐私，账号的地址不应该被重用，每次进行交易都
                应该用一个新的地址。为了更新地址，非确定性的老式钱包，必须再次创建一个私钥，同时对新的
                私钥进行备份。如果在备份之前，发生硬盘损坏，丢失，对应的账户就费了，里面的资金和合同都
                将永久封锁。这种设计给管理私钥造成了很大的压力。
            </Paragraph>
            <Abstract>确定性(有种子的)钱包</Abstract>
            <Paragraph>
                确定性的钱包，或者说有种子的钱包，它管理的所有私钥，都是来自于一个主钥匙，或者说种子。
                种子是根据某些数据随机产生的，用于派生私钥。根据种子来产生私钥的算法非常高效，因此只需
                要对种子进行备份，就能确保所有的资金和合同的安全。种子也很容易导入和导出，使得私钥在
                钱包之间的迁移非常方便。
            </Paragraph>

            <Abstract>层次式确定性钱包</Abstract>
            <Paragraph>
                确定性钱包的设计目标是简化种子派生私钥的过程。目前最先进的设计是Bitcoin的BIP-32标准
                所定义的层次式确定性钱包，简称HD钱包。HD钱包的设计是树状的，父亲私钥派生出孩子私钥，
                孩子私钥派生出孙子私钥，以此类推。
            </Paragraph>
            <ExplainImage><img src='/images/hdwallet.png'></img></ExplainImage>
            <Paragraph>
                HD钱包相对于简单的非确定性钱包有几个关键的优势。首先，树状的设计在结构上有方便之处，
                用户根据设置某些分支用于资金的出口，另外一些分支用于资金的入口。其次，账户公钥可以
                委托给第三方，第三方根据公钥产生其它公钥，用于接受资金，但是不暴露私钥，第三方无法
                转移资金。
            </Paragraph>
            <Abstract>种子与助记词</Abstract>
            <Paragraph>
                为了确保私钥的安全，需要对私钥进行加密，加密的方式有很多种，目前推荐的是使用一串有序
                单词对私钥加密，这一串单词按照正确的顺序，能够解密出私钥，因此也被成为私钥的助记词，
                这种方法在BIP-39中被标准化。如今这个标准广泛应用于钱包软件中。
            </Paragraph>
            <Paragraph>
                为了理解这种方法为什么如此流行，来看一个例子：
                <ExplainImage><img src='/images/mnemonic.jpg' /></ExplainImage>
            </Paragraph>
            <Paragraph>
                实际应用当中，抄错这一长串16进制数字的概率非常高，相反，抄写12个单词容易得多，这些
                单词都是日常生活中最常用的。某些情况下，我们把其中的单词insert抄写成了inzect，这
                中错误也很容易被察觉，因为inzect不是合法的单词，没有意思的。把单词抄下来，藏好是
                非常有必要的，如果发生硬盘丢失，损坏，这串单词导入到别的钱包软件中，所有的资金和合同
                都会恢复。总的来说，用助记词加密种子，使HD钱包用起来方便，安全，容易迁移，有效避免
                私钥抄写错误。
            </Paragraph>
        </Article>
    }
}

export default ArticleWallet