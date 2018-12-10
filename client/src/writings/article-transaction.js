import React from 'react'
import { Article, Paragraph, Abstract, ExplainImage, Indentation } from '../article-widget'

class ArticleTransaction extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return <Article>
            <Paragraph>
                交易是指由外部账户签名的消息，它在Ethereum网络中传输，最终记录在Ethereum blockchain
                之中。这个基本的定义隐藏了许多令人惊喜，令人着迷的细节。换一个角度看到交易，它是唯一可以
                触发状态变化，驱动smart contract在虚拟机执行的东西。Ethereum是全球化的，单例管理的状
                态机，而交易推动状态机的运行，改变它的状态。合同不会自己运行，Ethereum不会自己运行，一切
                的运动都始于一个交易信息。
            </Paragraph>

            <Abstract>交易的结构</Abstract>
            <Paragraph>
                先来看看交易的基本结构。交易信息经过序列化在网络中传播，接受到交易信息的客户端把序列化的
                交易存储到内存中，解序列化成自身可以处理的数据。交易是序列化的二进制消息，它包含下面这些
                数据：
            </Paragraph>

            <Paragraph>Nonce</Paragraph>
            <Indentation>按顺序的一个数字，由发出交易的EOA产生，防止消息重发</Indentation>
            <Paragraph>Gas价格</Paragraph>
            <Indentation>交易发起者愿意支付的Gas价格</Indentation>
            <Paragraph>Gas限制</Paragraph>
            <Indentation>交易发起者愿意支付的Gas的数量</Indentation>
            <Paragraph>Recipient</Paragraph>
            <Indentation>交易的目的地</Indentation>
            <Paragraph>Value</Paragraph>
            <Indentation>发送给对方的ether的数量</Indentation>
            <Paragraph>Data</Paragraph>
            <Indentation>交易需要的二进制数据</Indentation>
            <Paragraph>v,r,s</Paragraph>
            <Indentation>交易的电子签名字段</Indentation>

            <Paragraph>
                交易消息使用RLP模式进行序列化，所有的数字使用big-endian的格式，长度为8位的整数倍。这是
                交易消息的底层格式，但在应用中，往往以别的名字来表示。例如，日常开发中，用'from'字段表示
                交易发起者的地址，这是因为账户地址从v,r,s这三个字段中计算出来的。
            </Paragraph>

            <Abstract>交易的Nonce</Abstract>
            <Paragraph>
                Nonce是交易消息中最重要的，但是最难理解的字段。Nonce是交易发起地址的一个属性，仅仅对发起
                地址有意思。这个值不会记录在blockchain里，是动态计算的，它记录了该地址发出的，被认证和记录
                在blockchain的交易信息的数目。在这两种情况下可以说明nonce的重要性。第一，它确保交易有序
                创建；第二，它避免交易重复。
            </Paragraph>
            <Paragraph>
                第一种情况，假设将要创建两个交易。第一个交易很重要，需要支付8个ether，然后进行第二个交易，
                需要支付6个ether。由于账户只有10个ether，这两个交易只能有一个成交，而你希望第一个重要性
                更高的交易首先成交。但是由于Ethereum网络分布式的特征，必然有一些节点先收到8个ether的交易，
                而另外一些节点，先收到6个ether的交易，无法确保8个ether的交易要先于6个ether的交易。对每个
                交易加上nonce字段，假设第一个交易nonce=3，第二个交易nonce=4，其它节点收到nonce=4的交易，
                但是没有看到nonce=3的交易记录，就会延迟处理，从而确保nonce=3的交易必然先于nonce=4的交易。
            </Paragraph>
            <Paragraph>
                第二种情况，你有100个ether,在网上看到有人卖汽车模型，每个2ether。你很喜欢这个汽车模型，
                花2ether买一个，创建了一个交易。此时，有一个黑客，把这个交易信息复制了一份，重复广播到网络
                之中，最后100ether全花光，买了差不多50个汽车模型。没有nonce字段，不能确定复制的数据到底
                是你再买一个，还是接受到重复的交易。加上nonce字段，无论黑客广播相同的消息多少次，只要nonce
                相同，则是同一个交易，如果交易已经验证了，记录在blockchain当中，则表明后面相同nonce的交易
                是多余的。
            </Paragraph>

            <Abstract>Nonce的间隔，重复的nonce与验证</Abstract>
            <Paragraph>
                如果交易是程序产生的，特别是多个独立的程序同时产生交易，跟踪nonce的变化显得非常必要。
                Ethereum按顺序处理各个交易，如果第一交易的nonce是0，第二个交易的nonce是2，那么第二
                个交易不会被执行，存储在内存池里，等nonce为1的交易处理后再处理它，因为其它节点会认为
                nonce=1的交易被延迟了，而不知道这是一个bug。如果把nonce=1的交易补上，那么后面的交易
                会相继执行。
            </Paragraph>
            <Paragraph>
                Nonce之所以会产生这种间隙，有可能是某个交易不合法，或者消耗的gas超出了限制被回退了。为了
                修复这种错误，必须亲自发一个交易，令它的nonce跟被拒绝的交易相同的nonce相同，填补这个
                空缺，才能使后面的交易正常工作。
            </Paragraph>
            <Paragraph>
                另外一种情况下，由于程序间的并行性，同时创建的连个不同的交易有着相同的nonce，则又一个交易
                会被接受，另外一个会被拒绝。因此，跟踪nonce的变化是很有必要的。不幸的事，在并发的情况下，
                管理nonce会变得更加复杂。
            </Paragraph>

            <Abstract>并发，交易源与Nonce</Abstract>
            <Paragraph>
                并发在计算机科学中是一个复杂的主题，在Ethereum这种去中心化的，分布式的，实时的网络
                之中，并发问题会出人意外的跑出来。
            </Paragraph>
            <Paragraph>
                简答来说，并发是指多个独立的系统同时进行计算。并发会发生在同一个程序之中，程序有多个
                线程运行；并发会发生在同一个cpu之中，cpu运行多个进程；并发会发生在多个计算机之中，如
                分布式系统。Ethereum，根据自身的定义，在一致性规则之下，允许节点，客户端，DApp执行
                并发操作，但只能有一个状态实例。
            </Paragraph>
            <Paragraph>
                假设现在有多个独立的钱包软件使用同一个地址创建交易，例如多个账户同时从一个合同中取出
                资金。一般来说，为了加速用户取款的速度，避免拥挤，会同时使用多台电脑回应取款操作。这
                就会导致一些并发问题，多台计算机如何同时创建，签名以及广播交易呢？
            </Paragraph>
            <Paragraph>
                如果我们使用一台计算机专门创建交易并且进行nonce的计算与赋值, 先到的交易请求，先赋值，
                其余的计算机同时对各个交易签名.这就会面临一台计算机不能工作导致所有服务都不能运行的问
                题。更严重的是，如果nonce赋值之后，这个交易由于数据不合法，或者gas超出了限制而被拒绝，
                那么后面的交易都不能够运行。另外一种方式，多台计算机都可以创建交易，但是不赋予nonce值，
                同时也不能进行签名。然后将这些交易排队放到另外一独立的计算机中进行nonce的赋值和验证。
                这种情况下，负责赋值和验证的那台计算机就是系统的瓶颈，只能在创建交易这一块实现并发。
                由于这些并发问题的存在，大多数系统都使用单独程序处理所有请求，匀速瓶颈的存在。或者把
                资金分配到多个钱包，共同而独立地处理各自的请求。
            </Paragraph>

            <Abstract>交易的Gas</Abstract>
            <Paragraph>
                Gas是驱动Ethereum的燃料。Gas不是ether，它是另外的一种虚拟货币，有它自身与ether
                兑换的汇率。Ethereum使用Gas控制每个独立的交易需要消耗多少资源，防止DoS攻击，同时
                避免错误的操作把资金花光了。Gas与ether独立，是为了防止网络的变动对ether的价格造成
                过大的波动，同时便于控制由于交易的执行而消耗的资源的价格。交易中的gasPrice字段用于
                接受发起者愿意接受的价格，以wei计价。钱包软件可以通过修改gasPrice来加速交易的执行。
                更高的价格会导致交易更快被执行。
            </Paragraph>

            <Abstract>分离交易的签名与发送(离线签名)</Abstract>
            <Paragraph>
                一旦交易完成了签名，就可以进入Ethereum网络中传输。一般来说，交易的三个阶段：创建，
                签名，发送会在一个操作中完成，例如，调用web3.eth.sendTransaction。但是，如果
                你知道底层的API，创建，签名，发送可以是各自独立的操作。为什么要将签名与发送分成
                独立的操作呢？一般是为了更高的安全性。因为签名必须要解锁私钥，而传输必须要连接网络。
                如果签名和传输都在同一台电脑上，相当于把私钥放到了网络之中，对于大账户，这是非常
                危险的。把签名这一步放到离线的计算机上操作，能够大大提高安全性。
                <ExplainImage><img src='/images/offline.jpg' /></ExplainImage>
            </Paragraph>

            <Abstract>交易的传播</Abstract>
            <Paragraph>
                交易信息在Ethereum网络的传播就像流水一样蔓延。每个Ethereum客户端就是一个节点，
                相互连接，形成了网格式的网络。所有的节点都是对等的，不存在特殊性。一个交易被签名
                之后，就开始在网络中传播。节点首先对交易进行验证，验证成功之后传递到与之相连的其它
                节点。每个节点平均与13个节点相连，相邻节点成为邻居，每个邻居节点收到交易信息之后
                开始对它进行验证，如果验证成功，在本地存储一个备份，同时传递给邻居节点，但不包括
                向它传递的那个邻居。结果，交易信息从一个节点，流动到网络上的全部节点中。节点可以
                过滤某些交易信息，默认是广播所有合法的交易。
            </Paragraph>
            <Paragraph>
                交易信息从一个节点流动到全网络的节点只需几秒种，对于每个节点来说，它无法辨别哪个
                节点是交易信息的源头。为了追踪交易信息的源头，或者干扰交易的传播，黑客必须控制
                相当百分比的节点。这是P2P网络，特别是blockchain在设计上需要面对的安全性和私密
                性的的问题。
            </Paragraph>

            <Abstract>记录在blockchain中</Abstract>
            <Paragraph>
                Ethereum所有的节点都是平等的，但在功能上，有的节点接受交易信息，打包成块数据，
                并且尝试将块数据挂在blockchain之中，这些节点被称为矿工，一般都拥有高性能
                GPU运算能力的设备。这些挖矿的节点把收到的交易信息添加到候选块数据里，并且尝试
                为候选块数据寻找一个证明，证明这个候选块数据是合法的，从而挂到blockchain上。
                一旦块数据被记录在blockchain上，这些交易也就记录在blockchain了，同时这些交易
                信息会修改Ethereum的状态，或是修改某个账户的资金数额，或是调用smart contract
                修改某些数据。
            </Paragraph>
            <Paragraph>
                从创建，到EOA签名，网络中传播，最后被挖矿成功，修改单例中的状态，写入到blockchain
                中永远无法被修改，一个交易完成了它的所有旅程。
            </Paragraph>

            <Abstract>多重签名交易</Abstract>
            <Paragraph>
                熟识Bitcoin脚本的朋友会知道，可以创建一个需要多重签名的Bitcoin账户，这个账户仅仅
                在多个第三方机构都签了名之后才能转移资金。Ethereum的账户没有这种设计，但可以用
                smart contract实现类似的功能。大体上，需要先把资金转移到smart contract的账户
                上，然后发起转账请求，再通知相关的人，让他们发送一个确定信号，当条件都满足了，资金
                从smart contract账户转出去。
            </Paragraph>
        </Article>
    }
}

export default ArticleTransaction