import React from 'react'
import { Article, Paragraph, Abstract, ExplainImage, Indentation, RawText, SubAbstract } from '../article-widget'

class ArticleSecurity extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <Article>
            <Paragraph>
                <RawText>
                    编写smart contract，安全性是最重要的考虑因素之一。Smart contract编程领域，
                    错误会付出惨痛的代码。
                </RawText>
                <RawText>
                    像其它程序一样，smart contract根据编码直接运行，有些情况并非程序员初衷。所有
                    的smart contract都是公开的，所有人都可以通过交易操作它。所有漏洞都会暴露，许多
                    是无法挽回的。使用最好的实践，遵循经过良好测试的设计模式至关重要。
                </RawText>
            </Paragraph>

            <Paragraph>
                <Abstract>最安全的实践</Abstract>
                <RawText>
                    防御式编程最适合编写smart contract。它强调的以下这些最好的实践过程：
                </RawText>

                <SubAbstract>最简性</SubAbstract>
                <Indentation>
                    复杂度是安全性的敌人。代码越简单，逻辑越单一，出bug的概率越低。初次接触smart
                    contract编程，程序员倾向于写很多很多的代码。相反，应该尽量让它做的逻辑变
                    少，代码的数量变少，分离功能，降低复杂度。如果有人告诉你，它的smart contract
                    有好几千行代码，你需要为它的安全性担忧了。越简单，越安全。
                </Indentation>

                <SubAbstract>代码重用</SubAbstract>
                <Indentation>
                    不要重复造轮子。如果已经有一个库，或者smart contract满足你的需求，放心地
                    使用它。在自己的代码中，遵循DRY原则：Don't Repeat Yourself，不要重复！
                    每次看到相同的代码出现在不同的地方，想办法封装到库里，封装成函数调用。频繁
                    使用的代码，安全性比新写的代码要高。
                </Indentation>

                <SubAbstract>代码质量</SubAbstract>
                <Indentation>
                    Smart Contract代码是无情的。每个bug都可能导致资金损失。Smart contract编程
                    与一般的编程不能同等对待，创建DApp并不像用js编写一个组件。相反，它更像是盖一
                    间房子，建一座桥，需要遵循严格的工程学和软件开发学原则。一旦代码开始上线服务，几乎
                    没有什么机会去修复bug.
                </Indentation>

                <SubAbstract>可读性</SubAbstract>
                <Indentation>
                    你的代码需要容易被阅读和理解。越是容易阅读，越是容易审查。Smart contract是
                    公开的，任何人都可以获取源码，进行反编译。因此，把项目公开，使用开源的协作方式
                    去开发程序，运用集体的智慧来解决问题，同时留下开发文档。
                </Indentation>

                <SubAbstract>测试覆盖</SubAbstract>
                <Indentation>
                    测试所有能测试的。Smart contract运行在开放的环境之中，任何人可以输入任意数据，
                    永远不要假设函数应该输入什么数据，应该输出什么结果，尝试你认为无法理解的操作。
                </Indentation>
            </Paragraph>

            <Paragraph>
                <Abstract>安全风险与不好的设计模式</Abstract>
                <RawText>
                    Smart contract程序员要熟识最常见的安全风险，能够检测和避免导致安全漏洞的
                    编程模式。
                </RawText>
                <SubAbstract>重入</SubAbstract>
                <Indentation>
                    <RawText>
                        Smart contract可以调用外部的smart contract，可以发送ether给其它账户，
                        这些操作可能被黑客劫持，强迫调用者调用设计好的回调函数，这种攻击方式常用于
                        DAO攻击。
                    </RawText>
                    <RawText>
                        这种攻击有可能发生在转账给陌生用户的情景。攻击者在回调函数中设置恶意代码，当
                        其它contract转资金到攻击账户时，回调函数出发，恶意代码运行，恶意代码可能调用
                        原先contract的某些函数，把资金转走，修改原先的逻辑.
                    </RawText>
                    <ExplainImage><img src='/images/reentrancy.jpg ' /></ExplainImage>
                    <RawText>
                        上图第17行是转账到外部账户的调用，如果外部账户是一个smart contract，会触发
                        它的默认函数，默认函数可以再发起withdrawFunds函数调用，把资金源源不断第转走。
                    </RawText>
                    <RawText>
                        有很多中方法可以避免潜在的重入漏洞。第一个方法时调用内置的transfer函数转账，
                        调用这个函数的gasLimit是2300，不足以运行对方的回调函数的恶意代码。第二种方
                        发是先修改状态，再做转钱的操作。第三种方法是加一个状态锁，每次调用，状态只能
                        改变一次。
                    </RawText>
                </Indentation>

                <SubAbstract>数字溢出</SubAbstract>
                <Indentation>
                    整型在Ethereum虚拟机中是固定字节的，每个整型表示的数都有一个范围，举例，
                    uint8存储的数字的范围是[0, 255]，把256赋值给uint8变量，结果是0.
                    目前最有效的避免溢出的方法，是使用公共数据库的API取代内置的数学运算。例如
                    OpenZepplin的SafeMath库。
                </Indentation>

                <SubAbstract>超出预期的ether</SubAbstract>
                <Indentation>
                    <RawText>
                        一般来说，资金转移到contract上，会触发contract的回调函数。但有两个例外，
                        contract接受了资金却不触发回调函数，不执行任何代码。依赖于回调函数来检测
                        接收资金进行相关逻辑，可能会被黑客找到漏洞，进行攻击。
                    </RawText>
                    <RawText>
                        为了保证状态转换正确，确保操作合法，防御式编程有一招叫恒量检查。这种技术
                        设置一些不变的属性，参数，然后进行某些操作，回头检查属性参数是否发生了变
                        化。这是一种很好的设计方法。但是smart contarct编程中，有一些变量表面
                        上是恒定的，实际上却可以被外部修改，这个变量是contract存储ether的值。
                        Smart contract编程的初学者往往认为，必须通过payable函数给contract
                        转入资金，以此设计的逻辑是有漏洞的。有两种方式，ether被转入contract而
                        不经过contract的payable函数.
                    </RawText>
                    <RawText>
                        第一，析构函数，selfdestruct，销毁自身，删除所有代码，同时资金转入
                        参数定义的地址，如果该地址对应一个contract，contract上的回调函数不会
                        触发。黑客可以设计一个攻击方案，在selfdestruct函数中销毁自身，强迫
                        资金转入到攻击对象contract之中。
                    </RawText>
                    <RawText>
                        第二，提前向某个地址转钱，如果有新的contract正好在这个地址部署，新的
                        contract就是这笔钱的拥有者。contract的地址是可以提前计算出来的，
                        address=sha3(rlp.encode([account_address, transaction_nonce])).
                        黑客如果知道某个contract的细节，提前计算出contract的地址，则可以让
                        contract诞生之际即获得一笔资金。
                    </RawText>
                    <ExplainImage><img src='/images/unexpected.jpg' /></ExplainImage>
                    <RawText>
                        上面代码，大意是到达里程碑的玩家会获得一个奖励。如果黑客通过前面说的
                        两种方式，提前给这个contract转入一笔钱，this.balance字段的值是不可
                        预测的，那么这个contract的功能就不能正确实现了。例如，通过selfdestruct
                        函数给contract强制转入0.1ether，则if的判断不会出现刚到到达里程碑的值。
                        要解决这个问题，代码不能使用self.balance来做判断，可以在contract内部
                        创建另一个属性，此时这个属性只能在代码中修改，即可防止这种攻击。
                    </RawText>
                </Indentation>

                <SubAbstract>委托调用</SubAbstract>
                <Indentation>
                    <RawText>
                        调用与委托调用的操作方便开发者模块化代码，Ethereum用CALL操作处理标准外部消息，
                        代码运行在调用者contract的上下文中，委托调用的运行差不多，唯一的区别是它在
                        被调用的contract的上下文运行。委托调用的这个特点使得程序库的设计得以实现，
                        程序员可以将常用的代码部署到Ethereum中让其它contract重用。
                    </RawText>
                    <RawText>
                        由于委托调用保留上下文的特点，要开发没有漏洞的公共库不是那么简单。库代码
                        在自身中运行或许是安全的，没有漏洞的，但在其它contract的上下文中运行，可能
                        会出现意想不到的bug。
                    </RawText>
                    <ExplainImage><img src='/images/delegate.jpg' /></ExplainImage>
                    <RawText>
                        上面的contract，自身运行时，自身上下文的内存槽第一块分配start，第二块分配
                        calculateFibNumber；但在作为委托调用时，由于上下文切换到了其它contract，
                        start指向的第一内存不是它认为的start字段的值，从而会出现意外的结果。为了
                        避免这种库，Solidity提供了library关键字，libraray关键字的contract自身
                        无状态，没有析构函数。
                    </RawText>
                </Indentation>

                <SubAbstract>默认的访问等级</SubAbstract>
                <Indentation>
                    <RawText>
                        Solidity的函数有访问修饰器，表明它们在什么情况下可以被调用。访问修饰器
                        决定函数能够被外部用户调用，派生的contract调用，仅仅内部函数调用或者仅仅
                        外部调用。有4个修饰器，默认是public，允许所有人调用。
                    </RawText>
                    <ExplainImage><img src='/images/visibilities.jpg' /></ExplainImage>
                    <RawText>
                        Contract愿意是判断地址的最后8位如果为0，则可以获取资金，但是_sendWinnings
                        的访问属性是public，黑客可以直接调用它把资金转走。为了防止这种疏忽，编写
                        代码给没有函数都加上访问修饰器，即使它是public。
                    </RawText>
                </Indentation>

                <SubAbstract>随机数</SubAbstract>
                <Indentation>
                    <RawText>
                        Ethereum blockchain所有的交易信息导致的状态切换结果是确定的，可以预先
                        计算的，没有任何不确定性。这说明了Ethereum上一些随机数都不是真随机。Ethereum
                        最早的一批contract是赌博，而赌博都需要一定的不确定性。人们希望使用未来
                        的变量产生随机数，比如，下一个挂到blockchain的块数据最后一位是基数，则
                        可以获得一笔大奖。那么，下一个验证成功的块数据，如果不是基数，人们会选择把
                        它废弃。使用过往的或者现在的变量，更加糟糕。因此，所有的随机数只能从Ethereum
                        外部产生，不能使用Ethereum的状态信息，块数据的参数信息。
                    </RawText>
                </Indentation>

                <SubAbstract>引用外部contract</SubAbstract>
                <Indentation>
                    <RawText>
                        Ethereum开发中，通过调用外部的contract实现代码重用。导致的结果是大量的
                        外部contract引用，大量的外部消息调用，黑客可能从中找到攻击的目标。
                    </RawText>
                    <ExplainImage><img src='/images/ref.png' /></ExplainImage>
                    <RawText>
                        在1路线的引用是安全路线，在2路线上，函数及其功能是一样的，但是你需要
                        加密的数据已经被打印出来了。黑客可以通过放这样的钓鱼地址到工具上，从
                        而获取了用户的数据。
                    </RawText>
                    <RawText>
                        为了解决这个问题，其一，我们使用new关键字创建引用的对象，避免钓鱼地址；
                        其二，发布外部contract,库contract，把地址公开让大家验证。
                    </RawText>
                    <ExplainImage><img src='/images/ref2.jpg' /></ExplainImage>
                </Indentation>

                <SubAbstract>短地址参数攻击</SubAbstract>
                <Indentation>
                    <RawText>
                        传递给smart contract的参数根据ABI的定义序列化。如果ABI规定对应的参数
                        长度为20个字节，而你实际传递的参数只有19个字节，这也是可以的，EVM默认
                        补0.
                    </RawText>
                    <ExplainImage><img src='/images/addr.png' /></ExplainImage>
                    <RawText>
                        第一段序列化，调用函数向某个地址转100ether；第二段序列化参数，假设输入
                        地址的时候少了1个字节，整个序列化数据在最后补2个0，结果是给别的地址
                        转了25600个ether。因此，对函数的参数做检查非常有必要。
                    </RawText>
                </Indentation>

                <SubAbstract>未经检查的返回值</SubAbstract>
                <Indentation>
                    <RawText>
                        Solidity进行外部调用的方式有很多，转账到外部账号常用的方法是transfer，
                        有时候需要用到send或者call。Send和call返回布尔值，表示调用成功与否。
                        如果调用失败，会产生一个警告，但是资金不会回退。
                    </RawText>
                    <ExplainImage><img src='/images/return.jpg'></img></ExplainImage>
                    <RawText>
                        这个contract，大概是让winner拿奖金，剩下一些零钱，谁都可以转走。但是
                        代码没有对send的结果做检测，如果send返回的结果是false，资金并没有转
                        到winner的账户，而payOut会继续执行，其他人就可以把winnner的资金一并
                        带走了.一般来说，最好使用transfer，它可以回退资金，如果要使用send，一定
                        要检查返回的结果是否成功。
                    </RawText>
                </Indentation>

                <SubAbstract>竞争条件与抢先运行</SubAbstract>
                <Indentation>
                    <RawText>
                        Ethereum blockchain允许contract调用外部的contract，且存在同时多
                        个contract对同一个contract的调用，有可能出现竞争条件，导致状态的
                        变化超出预期的结果。Ethereum节点将交易信息存放到内存池，组装成块
                        数据，在矿工解决了一致性验证之后才是合法的，此矿工选择有权选择哪些
                        交易信息放到这个块数据中，一般来说优先选择gasPrice高的。假设一个
                        黑客监视内存池里面的交易，它发现其中一个交易解决了一个问题，于是把
                        这个交易的数据抓取，自己发送同样数据的一个交易，把gasPrice设置得
                        更高，那么黑客得交易信息会先于原本解决问题得那个交易进入块数据之中。
                    </RawText>
                    <ExplainImage><img src='/images/race.jpg' /></ExplainImage>
                    <RawText>
                        上面contract大意是，尝试找一个数，经过哈希函数计算，得出的结果等于
                        设定的结果，那么给他转1000eth。现在，有一个用户找出了这个数，发送
                        交易信息调用solve函数验证，黑客接收了这个交易，提前验证通过，于是
                        马上把这个数抓取，发送一个交易，使用更高的gasPrice。然后又一个miner
                        接受了这两个交易，于是把黑客的交易放在前面，那么钱就转到黑客账户了。
                    </RawText>
                    <RawText>
                        实际上发起这种攻击的可以是普通用户，可以矿工。对于普通用户发起的攻击，
                        可以设置一个gasPrice的最大值，找到解决方案的都使用最大值的gasPrice，
                        黑客不能改变它的顺序，如果是矿工发起的攻击，矿工可以无视gasPrice，
                        任意决定交易顺序，这种方式行不通了。另一种方式，不直接发送问题的答案，
                        而是将答案加密后发送出去，等这个消息写入了blokchain，再把解密的钥匙
                        发送出去，让contract去解密验证。这样黑客就无法验证答案，即使copy了
                        我们的数据，也没有正确的钥匙提供验证。
                    </RawText>
                </Indentation>

                <SubAbstract>DoS拒绝服务攻击</SubAbstract>
                <Indentation>
                    <RawText>
                        令一个contract停止服务的方式有很多！
                    </RawText>
                    <ExplainImage><img src='/images/dos1.jpg' /></ExplainImage>
                    <RawText>
                        上述例子，黑客可以创建很多账户，使得distribute的循环消耗超出gasLimit
                        而停止服务。
                </RawText>
                    <ExplainImage><img src='/images/dos2.jpg' /></ExplainImage>
                    <RawText>
                        上述例子，如果contract的持有者没有初始化，那么整个系统都无法运行了。
                </RawText>
                </Indentation>

                <SubAbstract>Blockchain时间戳修改</SubAbstract>
                <Indentation>
                    <RawText>
                        块数据的时间戳再很多应用中被使用，例如产生随机数，资金冻结一定时间，
                        根据时间的状态修改等等。矿工可以调整机器的时间戳，可能会对contract
                        产生意外的结果。
                    </RawText>
                    <ExplainImage><img src='/images/timestamp.jpg' /></ExplainImage>
                    <RawText>
                        上述contract，每次接受一个交易，判断它的时间戳是否是15的整数倍，如果是，
                        则可以奖励一笔资金。此时矿工可以略微调整block的时间戳使得刚好是15的倍数。
                        因此block.timestamp或者now不是一个好的选择。但是时间相关的应用很多，
                        可以使用block.number * 平均时间来衡量总体的时间。
                </RawText>
                </Indentation>

                <SubAbstract>构造函数</SubAbstract>
                <Indentation>
                    <RawText>
                        构造函数是一个特殊的函数，通常在初始化contract的时候执行一些关键的特殊的
                        任务。Solidity版本v0.4.22，构造函数的名称与contract的名称一致。日常
                        开发中，如果contract的名称改了，原本的构造函数就变成了一个普通函数。
                    </RawText>
                    <ExplainImage><img src='/images/constructor.jpg' /></ExplainImage>
                    <RawText>
                        上述示例，ownerWallet以小写开头，contract大写开头，这不是构造函数，而是
                        普通函数，任何人都可以调用这个代码，把自己设为owner，取钱走人。在版本v0.4.22
                        之后，构造函数名字统一为constructor，避免了这个问题
                </RawText>
                </Indentation>

                <SubAbstract>Storage指针未初始化</SubAbstract>
                <Indentation>
                    <RawText>
                        EVM存储数据有两种方式：storage和memory。了解内部机制对于每个开发者来说
                        都是很有必要的，错误的使用方式会留下漏洞，被黑客攻击。函数内部变量存储
                        在storage或是memory是由它的类型决定的。未初始化的storage变量可能
                        指向了contract的其它storage变量的值。
                    </RawText>
                    <ExplainImage><img src='/images/storage.jpg' /></ExplainImage>
                    <RawText>
                        上述例子中，unlocked字段存储在slot[0]，registerNameRecord存储在
                        slot[1]，在register函数里，newRecord定义了，但未赋值，后面的_name,
                        _mappedAddress会写入slot[0]，slot[1]，实际上修改了unlocked和
                        registerNameRecord的值。
                </RawText>
                </Indentation>

                <SubAbstract>Tx.Origin认证</SubAbstract>
                <Indentation>
                    <RawText>
                        Solidity有一个全局变量，tx.origin，它通过回溯所有的调用堆栈，找出
                        发起这次调用的地址。用这个变量去做认证可能会被钓鱼。
                    </RawText>
                    <ExplainImage><img src='/images/origin1.jpg' /></ExplainImage>
                    <ExplainImage><img src='/images/origin2.jpg' /></ExplainImage>
                    <RawText>
                        上述例子中，Phishable取款的函数用tx.origin判断是否是owner。假设
                        Phishable和AttackContract进行交易，Phishable向AttackContract
                        转一笔钱，AttackContract回调触发Phishable的取款操作，由于这个操作
                        最原始的发起者是Phishable，因此tx.origin == owner成立，钱却转到
                        了AttackContract的账户了。
                </RawText>
                </Indentation>
            </Paragraph>
        </Article >
    }
}

export default ArticleSecurity
