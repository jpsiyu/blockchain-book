import React from 'react'
import { Article, Paragraph, Abstract, Indentation, } from '../article-widget'

class ArticleToken extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <Article>
            <Paragraph>
                Token派生于旧单词tacen，意为标记，符号。通常用它代表私人发行的，
                有着特殊用途的，代表一些不是那么重要的东西的价值，类似货币的样子。
                例如邮票，洗衣店票，游戏币等等。Blockchain对token赋予了新的意义，
                它是资产，现金，权益在blockchain的抽象代表。过去物理版本的token
                有很多限制，只能用于某一种生意，在某个组织内有效，有地域限制，通常
                只有一个用途，交易困难。Blockchain颠覆了过往token的定义，它常常
                拥有多种用途，全球化通用，交易方便，可以与其它货币兑换，在多个市场
                流通，再也不是什么没啥用的东西了。
            </Paragraph>
            <Abstract>Token如何使用</Abstract>
            <Paragraph>
                Token最明显的用途是作为一种私人电子货币，但这只是它最基本的功能，
                人们可以对它编程，赋予更多的功能，满足更多的需求。例如，Token可以
                同时拥有投票权，产权，资源的拥有权。
            </Paragraph>
            <Paragraph>货币</Paragraph>
            <Indentation>
                Token可以作为是一种货币，其价值由私用它的私人交易决定
            </Indentation>
            <Paragraph>资源</Paragraph>
            <Indentation>
                Token可以作为一种资源，在开放的市场中被制作和交易，例如，CPU，硬盘
                token可以被视为网络中的计算资源
            </Indentation>
            <Paragraph>资产</Paragraph>
            <Indentation>
                Token可以代表固定资产或者金融资产的所有权，如黄金，不动产，汽车，
                石油，能源等等
            </Indentation>
            <Paragraph>使用权</Paragraph>
            <Indentation>
                Token可以代表一种物品的使用权，例如论坛，网站，酒店，租赁汽车等等。
            </Indentation>
            <Paragraph>权益</Paragraph>
            <Indentation>
                Token可以代表一家公司的股权
            </Indentation>
            <Paragraph>投票权</Paragraph>
            <Indentation>Token可以代表某个机构的投票权</Indentation>
            <Paragraph>收藏品</Paragraph>
            <Indentation>Token可以代表艺术收藏品</Indentation>
            <Paragraph>身份</Paragraph>
            <Indentation>Token可以代编一种身份</Indentation>
            <Paragraph>证明</Paragraph>
            <Indentation>
                Token可以代表某些关系的证明，结婚证，出生证，大学学位等等
            </Indentation>
            <Paragraph>工具</Paragraph>
            <Indentation>Token可以用于访问某些服务，或者用于支付</Indentation>
            <Paragraph>
                一种token往往具有上述的多个功能，有时候这些功能之间难以区分，常常是
                相互联系的。就像驾照，它证明了该人拥有驾驶的技术，同时也是该人的身份
                证明。在电子token的世界里，这些功能是可以独立开发的
            </Paragraph>
            <Abstract>Token与可替代性</Abstract>
            <Paragraph>
                经济学上，可替代性是商品的属性，它作为特定的个体是可以用其它特定的个体
                取代的。如果每一个特定的token，都可以用另外一个token来替代，而价值和
                功能没有发生变化，那么这种token是可替代性的。如果Token的历史轨迹可以
                被追踪，那么这种token就不是可替代性的，不同历史轨迹的token，价值和作用
                也许不相同。
            </Paragraph>
            <Paragraph>
                不可替代token通常代表唯一的资产，它们之间不是平等的，因此不能相互替代。
                例如，代表梵高一幅画的token，跟代表毕加索一幅画的token是不等的，即使
                它们都属于同一个艺术Token系统。著名的Blockchain游戏CryptoKitty的
                某一只宠物，与另外一只宠物是不可替换的，尽管它们都属于该游戏里的收藏品。
                每个不可替代token都对应一个唯一的ID，例如一个唯一的哈希值。
            </Paragraph>

            <Abstract>交易对手风险</Abstract>
            <Paragraph>
                交易对手风险是指交易中的另一方可能不履行义务。多于两个交易方的交易可能
                面临更大的风险。举个例子，前不久你把一块金属卖入给某人，此刻正拿着他开
                给你的押金凭证。此交易至少有三方，出售者，购买者，金属托管者，其中一方
                保管这块金属，它成为了此次交易的履行方，增加了交易风险。托管人的到底有
                没有这块金属？它能认可我手上的token，把金属给我吗？在电子token代表资产
                的交易市场里，搞明白谁拥有某个资产和潜在的交易规则是非常重要的。
            </Paragraph>
            <Abstract>Token的内部价值与外部价值</Abstract>
            <Paragraph>
                有一些Token代表的电子物品，其价值是在blockchain内部的，这些电子物品
                由blockchain的一致性规则管理，就像token本身一样。这里有一个重要的意思，
                token代码blockchain内部资产不会产生交易对手风险。例如，你拥有CryptoKitty
                里的某一只宠物，不存在第三关帮你托管这只宠物，你直接拥有它，blockchain
                的一致性规则认为，你是该私钥的拥有者，等同于你是该私钥控制的宠物的拥有者，
                不需要第三方来做认证。
            </Paragraph>
            <Paragraph>
                相对的是，有一些token代表的是外部的资产，比如房地产，公司投票权，商标权，
                金条等，这些资产的所有权不在blockchain内部，而是由法律，规定，政策规定
                的，不是blockchain的一致性规则决定的。换句话说，发行这种token依赖于现实
                生活中的机构，组织，因此，使用这种token会存在交易风险，发行者可能为不会
                为token兑换等价的资产，具体的规则由现实世界的法律，政策，制度控制。
            </Paragraph>
            <Paragraph>
                有一些token能够把blockchain外部的资产转化为内部管理的资产，从而移除
                交易风险。举个例子，将公司的股票权，转化为DAO组织具有投票权的token.
            </Paragraph>
            <Abstract>Token作为工具，作为权益</Abstract>
            <Paragraph>
                Ethereum上几乎所有的项目都发型token，但是他们真的需要吗？使用Token有
                没有不利之处呢？或者就像人么欢呼的：将所有东西token化？原则上，token是
                一个管理工具，实际上，blockchain平台正在融入到社会框架之中，有很多地方
                需要互相适应调整。
            </Paragraph>
            <Paragraph>
                在一个blockchain项目中，token有两种主要属性，功能性的token与权益性的
                token。有时候同时是功能性与权益性的。功能性token，一般用来访问某些
                服务，使用某种应用，使用某种资源所需要的。权益性的token，一般代表某种
                机构，某些公司所有权的占比，也可以是利息与分红的所有权。
            </Paragraph>
            <Paragraph>
                功能性token会给初创公司带来巨大的风险和障碍。每个创新都代表这风险，接受
                市场的洗礼，走少人走的路，孤独的路。如果走技术创新的路，比如在P2P网络
                上开发应用服务，更是一条孤独得很的路。发行功能性的token，让人民接受
                这种token来使用你的服务，真的是风险很大，阻碍重重。
            </Paragraph>
            <Abstract>Ethereum上的token</Abstract>
            <Paragraph>
                Blockchain token在Ethereum出现之前已经存在，最早的blockchain货币
                比特币就是一种token。然而，Ethereum上首个token标准的发布，导致了token
                爆发式的出现。Ethereum上的token不等于ether, 每个账户拥有多少ether是
                协议层控制管理的，而token的数目是由相对应的smart contract管理的。Token
                一旦发型，相对应的smart contract控制着一切，包括所有权，使用权等等。
            </Paragraph>
            <Paragraph>
                首个token标准由Fabian Vogelsteller在2015年退出，名为ERC20。目前绝
                大部分的token都是依据ERC20标准开发的。ERC20标准开发的token是可替代的，
                每个token的一个基本单元与其它单元可以互换，不存在特殊性。ERC20定义了一
                系列的接口，要求token开发必须实现这些接口，从而使各种token在使用上都是
                一样的。具体来说，必须实现下列的函数和事件：
            </Paragraph>
            <Paragraph>totalSuppy</Paragraph>
            <Indentation>返回当前所有token的数目</Indentation>
            <Paragraph>balanceOf</Paragraph>
            <Indentation>输入地址，返回对应的token的数目</Indentation>
            <Paragraph>transfer</Paragraph>
            <Indentation>
                输入地址和数量，从发起这个交易的地址，将相应数量的token转到参数地址
            </Indentation>
            <Paragraph>transferFrom</Paragraph>
            <innerHeight>
                输入转出地址，转入地址和数量，将token从转出地址转到转入地址
            </innerHeight>
            <Paragraph>approve</Paragraph>
            <Indentation>
                输入地址和数量，批准该地址从自身的账户转移不超过指定数目的token
            </Indentation>
            <Paragraph>allowance</Paragraph>
            <Indentation>
                输入拥有者地址和使用者地址，返回使用者还能从拥有者那里获得多少token
            </Indentation>
            <Paragraph>Transfer</Paragraph>
            <Indentation>
                转账成功发出的事件
            </Indentation>
            <Paragraph>Approval</Paragraph>
            <Indentation>approve调用成功触发的事件</Indentation>
            <Paragraph>ERC20可选择实现的函数有以下</Paragraph>
            <Paragraph>name</Paragraph>
            <Indentation>返回token的名字</Indentation>
            <Paragraph>symbol</Paragraph>
            <Indentation>返回代表该token的符号</Indentation>
            <Paragraph>decimals</Paragraph>
            <Indentation>
                小数位，例如，账户数目是1000，decimals为2，实际是
                1000 / 100 = 10 token
            </Indentation>

            <Abstract>ERC20存在的问题</Abstract>
            <Paragraph>
                ERC20标准的诞生，使得token爆发式出现，广泛用于新功能的开发与筹资。
                然而也暴露除了token自身的一些问题。首先，不同于ether，ether的传输
                发生与一个交易之中，目的地是另外一个账户地址，token的传输发生在运行
                token的contract程序状态之中，目的地也是这个contract的state，不是
                token接受者的地址。Token的从一个人，转移到另外一个人，并没有交易
                消息发送给第二个人，仅仅修改了第二个人在token contract中的状态。
            </Paragraph>
            <Paragraph>
                现实生活中，人们会回跟踪自己在所有contract中token的资金状况，除了一些
                常用的token得到关注，其它的大部分就像垃圾邮件一样。Token contract自动
                为用户们创建用户，是为了吸引他们使用，如果一个账号使用时间很长，很有可能
                与之关联着一大推无用的token。
            </Paragraph>
            <Paragraph>
                Token的行为与ether也不同，在contract中，ether通过send函数发送，通过
                payable函数接收;token使用contract实现的transfer, apporve等函数
                转移，不会触发自身的payable函数。另外，ether的转移需要用ether来支付
                gas，而转移token也需要ether来支付gas，不能用token来支付gas，在用户
                体验上略微别扭。
            </Paragraph>
            <Abstract>Token与ICO</Abstract>
            <Paragraph>
                所有技术刚刚开始的阶段，第一批产品，公司，几乎都会失败，有一些失败的
                非常壮观，目前很多token是通过诈骗，传销，钓鱼等手段骗钱的。各种疯狂
                ICO，关键是让人们相信它的未来一片光明，然而，改变未来的，将会是ICO下面
                的平台和标准。
            </Paragraph>
        </Article>
    }
}

export default ArticleToken