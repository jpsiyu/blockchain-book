import React from 'react'
import { Article, RawText, Abstract, SubAbstract, Indentation, ExplainImage, Paragraph, List } from '../article-widget'

class ArticleEVM extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <Article>
            <Paragraph>
                <RawText>
                    Ethereum虚拟机，简称EVM，处于Ethereum协议操作的核心地位。从名字看得出来，
                    它是一台计算引擎，与微软的 .Net Framework相似，与Java语言的虚拟机相似。
            </RawText>
            </Paragraph>

            <Paragraph>
                <Abstract>EVM是什么</Abstract>
                <RawText>
                    EVM在Ethereum生态中，负责smart conract的部署和执行。最简单的转钱交易不需要EVM，
                    其它的操作都需要EVM执行，修改状态。从整体的视角看，EVM是一台全球化分布式的计算机，
                    七百万的对象在里面运行，每个对象都有自己的存储空间。
                </RawText>
                <RawText>
                    EVM是准图灵完整状态机，Smart Contract的执行进程，由于受到gasLimit的约束，
                    其计算步骤是有限的，因此进程不会无限地进行，避免Ethereum自身停机。EVM基于堆栈的设计架构，
                    所有内存中的变量存放在一个堆栈里，每一块数据的大小是256位，里面细分了几大数据寻址组件：
                </RawText>
                <List>
                    <li>不可变的代码ROM，用于加载Smart Contract代码运行</li>
                    <li>一块频繁修改的内存，每次寻址默认初始化0值</li>
                    <li>一块永久的存储，记录了Ethereum的状态</li>
                </List>
                <RawText>
                    每次运行，有一组环境变量和数据提供访问。下图是EVM的架构和运行上下文:
                </RawText>
                <ExplainImage><img src='/images/evm.png' /></ExplainImage>
            </Paragraph>

            <Paragraph>
                <Abstract>与现有技术的对比</Abstract>
                <RawText>
                    虚拟机一词，通常指真正的一台电脑的虚拟化，特别是像VirtualBox，QEMU这样的虚拟程序，
                    或者是一个完整的操作系统实例，如Linux KVM。它们必须提供真实硬件的软件层抽象，
                    系统调用，和其它kernel功能。
                </RawText>
                <RawText>
                    相比之下，EVM提供非常有限的虚拟化，它仅仅是一个计算引擎，因此仅提供计算和存储的抽象，
                    类似Java的虚拟机JVM。JVM抽象出运行环境，里面的对象运行时不需要知道底层的操作系统，
                    具体硬件是什么，从而使得程序跨平台运行。高级语言被编译成对应虚拟机的机器指令集，
                    如Java和Scala编译后是JVM的机器指令集，C#编译后是.net的机器指令集。类似这样，
                    Smart Contract的编程语言，如Solidiy，Serpent，LLL，Mutan会被编译成EVM的程序指令集。
                </RawText>
                <RawText>
                    Ethereum不能进行系统调度，程序的运行顺序由外部因素决定，
                    Ethereum客户端依据验证的块数据里面的交易信息，决定哪些Smart Contract运行，
                    以什么样的顺序运行。从这个角度看，Ethereum是一个单线程的计算机。
                    Ethereum没有系统处理接口，也没有硬件支持，没有物理机器与之交互，完全虚拟的。
                </RawText>
            </Paragraph>

            <Paragraph>
                <Abstract>EVM指令集</Abstract>
                <RawText>
                    EVM指令集提供了绝大多数你想要的操作，包括：
                </RawText>
                <List>
                    <li>算术操作，按位逻辑操作</li>
                    <li>执行上下文询问</li>
                    <li>堆栈，内存，存储访问</li>
                    <li>控制流程控制</li>
                    <li>日志，调用</li>
                </List>
                <RawText>
                    除了特定的字节码操作，EVM可以访问账号信息，如地址，余额等，可以访问块数据相关的信息，
                    如块的序号，当前gas的价格等等。EVM的计算单元从堆栈读取，结果写入堆栈头，
                    具体的操作码可以分为以下几类：
                </RawText>

                <SubAbstract>算数操作</SubAbstract>
                <Indentation>
                    算数操作包括指令集：
                <ExplainImage><img src='/images/arithmetic.jpg' /></ExplainImage>
                </Indentation>

                <SubAbstract>堆栈操作</SubAbstract>
                <Indentation>
                    堆栈，内存，存储管理指令：
                <ExplainImage><img src='/images/stack.jpg' /></ExplainImage>
                </Indentation>

                <SubAbstract>进程流程操作</SubAbstract>
                <Indentation>
                    流程控制指令集：
                <ExplainImage><img src='/images/flow.jpg' /></ExplainImage>
                </Indentation>

                <SubAbstract>系统操作</SubAbstract>
                <Indentation>
                    系统运行程序的操作：
                <ExplainImage><img src='/images/system.jpg' /></ExplainImage>
                </Indentation>

                <SubAbstract>逻辑操作</SubAbstract>
                <Indentation>
                    比较与按位操作：
                <ExplainImage><img src='/images/logic.jpg' /></ExplainImage>
                </Indentation>

                <SubAbstract>环境操作</SubAbstract>
                <Indentation>
                    处理运行环境信息的操作：
                <ExplainImage><img src='/images/env.jpg' /></ExplainImage>
                </Indentation>

                <SubAbstract>块数据操作</SubAbstract>
                <Indentation>
                    访问当前块数据信息的操作：
                <ExplainImage><img src='/images/block.jpg' /></ExplainImage>
                </Indentation>
            </Paragraph>

            <Paragraph>
                <Abstract>Ethereum状态</Abstract>
                <RawText>
                    EVM的工作处理合法验证的交易，计算并更新Ethereum的状态，作为执行Smart Contract的结果。
                    Ethereum又被称为基于交易的状态机，外部账户通过创建交易，接受交易，进行状态的转换。
                    在最上层的是Ethereum的世界级状态，它是地址到账户的映射。往下一层，每个Ethereum地址代表一个账户，
                    记录着ether的余额；记录着nonce的值，对与外部账户，nonce代表了成功发送的交易的数目,
                    对于contract账户，它代表创建的交易的数据;还记录着账户的存储，特指Smart Contract的永久性存储；
                    记录着账户的程序代码，特指Smart Contract。而外部账户没有程序代码和存储空间。
                </RawText>
                <RawText>
                    如果交易导致Smart Contract代码执行，就会实例化一个EVM，
                    其中包含了与当前交易所在的块数据相关的所有信息。具体来说，contract被调用的函数代码的ROM被加载，
                    程序计数器初始化为0，存储信息从contract的存储块加载，内存寄存器清0，块数据，运行环境数据初始化。
                    其中一个关键变量是gas的值，一开始等于用户发送这个交易指定的值，随着代码的执行，gas持续消耗，
                    如果降到0，就会触发GAS用完的异常。这时候Ethereum的状态并没有变化，而用户的nonce值增加了，
                    余额因为执行计算操作被消耗了。从这个过程来看，可以将EVM的运行是Ethereum全球状态的沙盒复制版本，
                    由于某些原因，该沙盒版本没有完成，被丢弃了。如果运行成功，那么这个沙盒版本就会更新当前的全球状态。
                </RawText>
                <RawText>
                    注意，Smart Contract可以初始化交易信息，因此代码的执行是递归过程。Contract可以调用其它contract，
                    每次调用导致另一个EVM实例的创建，每个EVM都有独立的沙盒状态，都有各自的gas供应，
                    gas的供应不是最开始发送交易的指定值，而是上一个EVM处理过程的剩余值，
                    都有可能因为gas不足导致自身停止运行。这种情况下，全部EVM的修改都会丢弃，恢复最原始的状态。
                </RawText>
            </Paragraph>

            <Paragraph>
                <Abstract>Gas</Abstract>
                <RawText>
                    Gas是Ethereum上执行的操作消耗的计算资源，存储资源的测量单位。
                    Bitcoin的交易小费仅仅考虑交易数据的大小，Ethereum对Smart Contract每一步的执行都计算费用。
                    每一步操作消耗固定的gas，如：
                </RawText>
                <List>
                    <li>两个数相加消耗3个单元的gas</li>
                    <li>进行Keccak-256哈希过程消耗30个gas，每个输入+6个gas</li>
                    <li>发送交易消耗21,000个gas</li>
                </List>
                <RawText>
                    Gas是Ethereum很重要的组成，有双重角色，一是对于矿工的奖励，而是防止DoS攻击。
                    为了避免恶意程序或者无心之失导致的程序无限循环，每个交易都有一个gas的上限，由用户指定。
                    整套机制可以制止攻击者发送垃圾交易，因为每个交易都是有成本的。
                </RawText>

                <SubAbstract>运行时Gas核算</SubAbstract>
                <RawText>
                    每次交易初始化一个EVM实例，最开始的EVM的gas供应等于用户指定的gasLimit，
                    每次执行指令消耗一定的gas，随着程序的运行，gas越来越少。每次执行之前，
                    EVM计算剩余的gas是否能够支付本次操作，如果余额不足，EVM决绝继续执行，
                    停止，交易会退。如果所有指令执行完毕，所有消耗的gas，将作为矿工的小费，
                    根据gas与ether的汇率转换，发送到矿工的账户。而剩余的gas则会转回发送者的账户。
                    而在gas不足，交易停止的情况下，所有的gas是要付给矿工的。
                </RawText>

                <SubAbstract>Gas消耗与Gas价格</SubAbstract>
                <RawText>
                    Gas的消耗用于测量消耗的计算资源，同时，Gas也是有价格的，由ether计价。
                    用户可以指定gas的价格。矿工在组装块数据的时候，可以选择gas价格高的交易，
                    因此高价格可以让交易执行得更快。Ethereum为了鼓励用户主动删除无用的存储和地址，设置了一笔奖励。
                </RawText>
                <List>
                    <li>删除一个contract，获得24,000个gas</li>
                    <li>将一个地址指向0，获得15,000个gas</li>
                </List>

                <SubAbstract>块数据的Gas上限</SubAbstract>
                <RawText>
                    块数据的gas上限是其包含的所有交易数据可能消耗的gas的总和，它限制了块数据组合交易的上线。
                    举个例子，现在有5个交易，gasLimit分别设置为30,000，30,000，40,000，50,000，50,000，
                    如果块数据的gas上限是180,000，那么最多只能放4个交易，第5个交易将由未来的块数据处理。
                    如果交易的gas上限总和大于快数据的gas限制，该块数据会被网络拒绝接收。
                </RawText>

                <SubAbstract>谁决定块数据的Gas上限</SubAbstract>
                <RawText>
                    块数据的gas上限由网络上的矿工共同决定。Ethereum协议有一个内建的投票系统在运行着，
                    矿工一起投票决定上限增加或者减少。
                </RawText>
            </Paragraph>
        </Article>
    }

}

export default ArticleEVM
