import React from 'react'
import { Article, Paragraph, Abstract, ExplainImage, Indentation } from '../article-widget'

class ArticleSecurity extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <Article>
            <Paragraph>
                编写smart contract，安全性是最重要的考虑因素之一。Smart contract编程领域，
                错误会付出惨痛的代码。
            </Paragraph>
            <Paragraph>
                像其它程序一样，smart contract根据编码直接运行，有些情况并非程序员初衷。所有
                的smart contract都是公开的，所有人都可以通过交易操作它。所有漏洞都会暴露，许多
                是无法挽回的。使用最好的实践，遵循经过良好测试的设计模式至关重要。
            </Paragraph>

            <Abstract>最安全的实践</Abstract>
            <Paragraph>
                防御式编程最适合编写smart contract。它强调的以下这些最好的实践过程：
            </Paragraph>

            <Paragraph>最简性</Paragraph>
            <Indentation>
                复杂度是安全性的敌人。代码越简单，逻辑越单一，出bug的概率越低。初次接触smart
                contract编程，程序员倾向于写很多很多的代码。相反，应该尽量让它做的逻辑变
                少，代码的数量变少，分离功能，降低复杂度。如果有人告诉你，它的smart contract
                有好几千行代码，你需要为它的安全性担忧了。越简单，越安全。
            </Indentation>

            <Paragraph>代码重用</Paragraph>
            <Indentation>
                不要重复造轮子。如果已经有一个库，或者smart contract满足你的需求，放心地
                使用它。在自己的代码中，遵循DRY原则：Don't Repeat Yourself，不要重复！
                每次看到相同的代码出现在不同的地方，想办法封装到库里，封装成函数调用。频繁
                使用的代码，安全性比新写的代码要高。
            </Indentation>

            <Paragraph>代码质量</Paragraph>
            <Indentation>
                Smart Contract代码是无情的。每个bug都可能导致资金损失。Smart contract编程
                与一般的编程不能同等对待，创建DApp并不像用js编写一个组件。相反，它更像是盖一
                间房子，建一座桥，需要遵循严格的工程学和软件开发学原则。一旦代码开始上线服务，几乎
                没有什么机会去修复bug.
            </Indentation>

            <Paragraph>可读性</Paragraph>
            <Indentation>
                你的代码需要容易被阅读和理解。越是容易阅读，越是容易审查。Smart contract是
                公开的，任何人都可以获取源码，进行反编译。因此，把项目公开，使用开源的协作方式
                去开发程序，运用集体的智慧来解决问题，同时留下开发文档。
            </Indentation>

            <Paragraph>测试覆盖</Paragraph>
            <Indentation>
                测试所有能测试的。Smart contract运行在开放的环境之中，任何人可以输入任意数据，
                永远不要假设函数应该输入什么数据，应该输出什么结果，尝试你认为无法理解的操作。
            </Indentation>

            <Abstract>安全风险与不好的设计模式</Abstract>
            <Paragraph>
                Smart contract程序员要熟识最常见的安全风险，能够检测和避免导致安全漏洞的
                编程模式。
            </Paragraph>
            <Paragraph>重入</Paragraph>
            <Indentation>
                Smart contract可以调用外部的smart contract，可以发送ether给其它账户，
                这些操作可能被黑客劫持，强迫调用者调用设计好的回调函数，这种攻击方式常用于
                DAO攻击。
            </Indentation>
            <Indentation>
                这种攻击有可能发生在转账给陌生用户的情景。攻击者在回调函数中设置恶意代码，当
                其它contract转资金到攻击账户时，回调函数出发，恶意代码运行，恶意代码可能调用
                原先contract的某些函数，把资金转走，修改原先的逻辑.
                <ExplainImage><img src='/images/reentrancy.jpg ' /></ExplainImage>
            </Indentation>
            <Indentation>
                上图第17行是转账到外部账户的调用，如果外部账户是一个smart contract，会触发
                它的默认函数，默认函数可以再发起withdrawFunds函数调用，把资金源源不断第转走。
            </Indentation>
            <Indentation>
                有很多中方法可以避免潜在的重入漏洞。第一个方法时调用内置的transfer函数转账，
                调用这个函数的gasLimit是2300，不足以运行对方的回调函数的恶意代码。第二种方
                发是先修改状态，再做转钱的操作。第三种方法是加一个状态锁，每次调用，状态只能
                改变一次。
            </Indentation>

            <Paragraph>数字溢出</Paragraph>
            <Indentation>
                整型在Ethereum虚拟机中是固定字节的，每个整型表示的数都有一个范围，举例，
                uint8存储的数字的范围是[0, 255]，把256赋值给uint8变量，结果是0.
                目前最有效的避免溢出的方法，是使用公共数据库的API取代内置的数学运算。例如
                OpenZepplin的SafeMath库。
            </Indentation>
            
            <Paragraph>超出预期的ether</Paragraph>
            <Indentation>
                
            </Indentation>
        </Article>
    }
}

export default ArticleSecurity
