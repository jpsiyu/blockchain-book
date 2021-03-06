import React from 'react'
import { Article, RawText, Abstract, Indentation, Paragraph, SubAbstract } from '../article-widget'

class ArticleToken extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <Article>
            <Paragraph>
                <RawText>
                    Token派生于旧单词tacen，意为标记，符号。通常用它代表私人发行的，
                    有着特殊用途的，代表一些不是那么重要的东西的价值，类似货币的样子。
                    例如邮票，洗衣店票，游戏币等等。Blockchain对Token赋予了新的意义，
                    它是资产，现金，权益在Blockchain的抽象代表。过去物理版本的Token有很多限制，
                    只能用于某一种生意，在某个组织内有效，有地域限制，通常只有一个用途，交易困难。
                    Blockchain颠覆了过往Token的定义，它常常拥有多种用途，全球化通用，交易方便，
                    可以与其它货币兑换，在多个市场流通，再也不是什么没啥用的东西了。
                </RawText>
            </Paragraph>

            <Paragraph>
                <Abstract>Token如何使用</Abstract>
                <RawText>
                    Token最明显的用途是作为一种私人电子货币，但这只是它最基本的功能，
                    人们可以对它编程，赋予更多的功能，满足更多的需求。例如，
                    Token可以同时拥有投票权，产权，资源的拥有权。
                </RawText>

                <SubAbstract>货币</SubAbstract>
                <Indentation>
                    Token可以作为是一种货币，其价值由使用它的私人交易决定
                </Indentation>

                <SubAbstract>资源</SubAbstract>
                <Indentation>
                    Token可以作为一种资源，在开放的市场中被制作和交易，例如，CPU，
                    硬盘Token可以被视为网络中的计算资源
                </Indentation>

                <SubAbstract>资产</SubAbstract>
                <Indentation>
                    Token可以代表固定资产或者金融资产的所有权，如黄金，不动产，汽车，
                    石油，能源等等
                </Indentation>

                <SubAbstract>使用权</SubAbstract>
                <Indentation>
                    Token可以代表一种物品的使用权，例如论坛，网站，酒店，租赁汽车等等。
                </Indentation>

                <SubAbstract>权益</SubAbstract>
                <Indentation>
                    Token可以代表一家公司的股权
                </Indentation>

                <SubAbstract>投票权</SubAbstract>
                <Indentation>Token可以代表某个机构的投票权</Indentation>

                <SubAbstract>收藏品</SubAbstract>
                <Indentation>Token可以代表艺术收藏品</Indentation>

                <SubAbstract>身份</SubAbstract>
                <Indentation>Token可以代编一种身份</Indentation>

                <SubAbstract>证明</SubAbstract>
                <Indentation>
                    Token可以代表某些关系的证明，结婚证，出生证，大学学位等等
                </Indentation>

                <SubAbstract>工具</SubAbstract>
                <Indentation>Token可以用于访问某些服务，或者用于支付</Indentation>

                <RawText>
                    一种Token往往具有上述的多个功能，有时候这些功能之间难以区分，
                    常常是相互联系的。就像驾照，它证明了该人拥有驾驶的技术，同时也是该人的身份证明。
                    在电子Token的世界里，这些功能是可以独立开发的。
                </RawText>
            </Paragraph>

            <Paragraph>
                <Abstract>Token与可替代性</Abstract>
                <RawText>
                    经济学上，可替代性是商品的属性，商品作为特定的个体，是可以用其它特定的个体
                    取代的。如果每一个特定的Token，都可以用另外一个Token来替代，
                    而价值和功能没有发生变化，那么这种Token是可替代性的。如果Token的历史轨迹可以被追踪，
                    那么这种Token就不是可替代性的，不同历史轨迹的Token，价值和作用也许不相同。
                </RawText>
                <RawText>
                    不可替代Token通常代表唯一的资产，它们之间不是平等的，因此不能相互替代。
                    例如，代表梵高一幅画的Token，跟代表毕加索一幅画的Token是不等的，即使
                    它们都属于同一个艺术Token系统。著名的Blockchain游戏CryptoKitty的某一只宠物，
                    与另外一只宠物是不可替换的，尽管它们都属于该游戏里的收藏品。
                    每个不可替代Token都对应一个唯一的ID，例如一个唯一的哈希值。
                </RawText>
            </Paragraph>

            <Paragraph>
                <Abstract>交易对手风险</Abstract>
                <RawText>
                    交易对手风险是指交易中的另一方可能不履行义务。多于两个交易方的交易可能面临更大的风险。
                    举个例子，前不久你把一块金属卖入给某人，此刻正拿着他开给你的押金凭证。
                    此交易至少有三方，出售者，购买者，金属托管者，其中一方保管这块金属，
                    它成为了此次交易的履行方，增加了交易风险。托管人的到底有没有这块金属？
                    它能认可我手上的Token，把金属给我吗？在电子Token代表资产的交易市场里，
                    搞明白谁拥有某个资产和潜在的交易规则是非常重要的。
                </RawText>
            </Paragraph>

            <Paragraph>
                <Abstract>Token的内部价值与外部价值</Abstract>
                <RawText>
                    有一些Token代表的电子物品，其价值是在Blockchain内部的，
                    这些电子物品由Blockchain的共识规则管理，就像Token本身一样。这里有一个重要的意思，
                    Token代表Blockchain内部资产不会产生交易对手风险。例如，
                    你拥有CryptoKitty里的某一只宠物，不存在第三方帮你托管这只宠物，你直接拥有它，
                    Blockchain的共识规则认为，你是该私钥的拥有者，等同于你是该私钥控制的宠物的拥有者，
                    不需要第三方来做认证。
                </RawText>
                <RawText>
                    相对的是，有一些Token代表的是外部的资产，比如房地产，公司投票权，商标权，
                    金条等，这些资产的所有权不在Blockchain内部，而是由法律，规定，政策规定的，
                    不是Blockchain的共识规则决定的。换句话说，发行这种Token依赖于现实生活中的机构，
                    组织，因此，使用这种Token会存在交易风险，发行者可能为不会为Token兑换等价的资产，
                    具体的规则由现实世界的法律，政策，制度控制。
                </RawText>
                <RawText>
                    有一些Token能够把Blockchain外部的资产转化为内部管理的资产，从而移除交易风险。
                    举个例子，将公司的股票权，转化为DAO组织具有投票权的Token.
                </RawText>
            </Paragraph>

            <Paragraph>
                <Abstract>Token作为工具，作为权益</Abstract>
                <RawText>
                    Ethereum上几乎所有的项目都发行Token，但是他们真的需要吗？使用Token有没有不利之处呢？
                    或者就像人们欢呼的：将所有东西Token化？原则上，Token是一个管理工具，实际上，
                    Blockchain平台正在融入到社会框架之中，有很多地方需要互相适应调整。
                </RawText>
                <RawText>
                    在一个Blockchain项目中，Token有两种主要属性，功能性的Token与权益性的Token。
                    有时候同时是功能性与权益性的。功能性Token，一般用来访问某些服务，
                    使用某种应用，使用某种资源所需要的。权益性的Token，一般代表某种机构，
                    某些公司所有权的占比，也可以是利息与分红的所有权。
                </RawText>
                <RawText>
                    功能性Token会给初创公司带来巨大的风险和障碍。每个创新都代表这风险，
                    接受市场的洗礼，走少人走的路，孤独的路。如果走技术创新的路，比如在P2P网络上开发应用服务，
                    更是一条孤独得很的路。发行功能性的Token，让人民接受这种Token来使用你的服务，
                    真的风险很大，阻碍重重。
                </RawText>
            </Paragraph>

            <Paragraph>
                <Abstract>Ethereum上的Token</Abstract>
                <RawText>
                    Blockchain Token在Ethereum出现之前已经存在，最早的Blockchain货币，
                    比特币就是一种Token。然而，Ethereum上首个Token标准的发布，导致了Token爆发式的出现。
                    Ethereum上的Token不等于ether, 每个账户拥有多少ether是协议层控制管理的，
                    而Token的数目是由相对应的Smart Contract管理的。Token一旦发行，
                    相对应的Smart Contract控制着一切，包括所有权，使用权等等。
                </RawText>
                <RawText>
                    第一个个Token标准由Fabian Vogelsteller在2015年退出，名为ERC20。
                    目前绝大部分的Token都是依据ERC20标准开发的。ERC20标准开发的Token是可替代的，
                    每个Token的一个基本单元与其它单元可以互换，不存在特殊性。ERC20定义了一
                    系列的接口，要求Token开发必须实现这些接口，从而使各种Token在使用上都是一样的。
                    具体来说，必须实现下列的函数和事件：
                </RawText>

                <SubAbstract>totalSuppy</SubAbstract>
                <Indentation>返回当前所有Token的数目</Indentation>

                <SubAbstract>balanceOf</SubAbstract>
                <Indentation>输入地址，返回对应的Token的数目</Indentation>

                <SubAbstract>transfer</SubAbstract>
                <Indentation>
                    输入地址和数量，从发起这个交易的地址，将相应数量的Token转到参数地址
                </Indentation>

                <SubAbstract>transferFrom</SubAbstract>
                <Indentation>
                    输入转出地址，转入地址和数量，将Token从转出地址转到转入地址
                </Indentation>

                <SubAbstract>approve</SubAbstract>
                <Indentation>
                    输入地址和数量，批准该地址从自身的账户转移不超过指定数目的Token
                </Indentation>

                <SubAbstract>allowance</SubAbstract>
                <Indentation>
                    输入拥有者地址和使用者地址，返回使用者还能从拥有者那里获得多少Token
                </Indentation>

                <SubAbstract>Transfer</SubAbstract>
                <Indentation>
                    转账成功发出的事件
                </Indentation>

                <SubAbstract>Approval</SubAbstract>
                <Indentation>approve调用成功触发的事件</Indentation>

                <RawText>ERC20可选择实现的函数有以下</RawText>
                <SubAbstract>name</SubAbstract>
                <Indentation>返回Token的名字</Indentation>

                <SubAbstract>symbol</SubAbstract>
                <Indentation>返回代表该Token的符号</Indentation>

                <SubAbstract>decimals</SubAbstract>
                <Indentation>
                    小数位，例如，账户数目是1000，decimals为2，实际是
                    1000 / 100 = 10 Token
                </Indentation>
            </Paragraph>

            <Paragraph>
                <Abstract>ERC20存在的问题</Abstract>
                <RawText>
                    ERC20标准的诞生，使得Token爆发式出现，广泛用于新功能的开发与筹资。
                    然而也暴露除了Token自身的一些问题。首先，不同于ether，
                    ether的传输发生与一个交易之中，目的地是另外一个账户地址，
                    Token的传输发生在运行Token的contract程序状态之中，目的地也是这个contract的state，
                    不是Token接受者的地址。Token的从一个人，转移到另外一个人，
                    并没有交易消息发送给第二个人，仅仅修改了第二个人在Token contract中的状态。
                </RawText>
                <RawText>
                    现实生活中，人们会回跟踪自己在所有contract中Token的资金状况，
                    除了一些常用的Token得到关注，其它的大部分就像垃圾邮件一样。
                    Token Contract自动为用户们创建用户，是为了吸引他们使用，如果一个账号使用时间很长，
                    很有可能与之关联着一大推无用的Token。
                </RawText>
                <RawText>
                    Token的行为与ether也不同，在contract中，ether通过send函数发送，
                    通过payable函数接收;Token使用contract实现的transfer, apporve等函数转移，
                    不会触发自身的payable函数。另外，ether的转移需要用ether来支付gas，
                    而转移Token也需要ether来支付gas，不能用Token来支付gas，在用户体验上略微别扭。
                </RawText>
            </Paragraph>

            <Paragraph>
                <Abstract>Token与ICO</Abstract>
                <RawText>
                    所有技术刚刚开始的阶段，第一批产品，公司，几乎都会失败，有一些失败的非常壮观，
                    目前很多Token是通过诈骗，传销，钓鱼等手段骗钱的。各种疯狂ICO，关键是让人们相信它的未来一片光明，
                    然而，改变未来的，将会是ICO下面的平台和标准。
                </RawText>
            </Paragraph>
        </Article>
    }
}

export default ArticleToken