import React from 'react'
import { Article, RawText, Abstract, Paragraph, List, SubAbstract, ExplainImage, Indentation } from '../article-widget'

class ArticleCrytography extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <Article>
            <Paragraph>
                <RawText>
                    密码学是Ethereum的基础技术之一，可以说是一大堆数学公式的集合，广泛应用于计算机安全领域。
                    在希腊语，密码学的意思是“秘密的写作”，指的是加密。当今密码学不仅仅是加密，它的含义广泛得多。
                    人们能够在不解开密文的情况下，证明该密文是否由哪个人加密，这就是电子签名的应用；
                    人们能够证明某个数据是否完好的，未被修改的，这就是电子指纹，又叫哈希的应用。这些用于证明的密码学工具，
                    对Ethereum，或者说所有Blockchain平台的运作，是极为重要的。
                </RawText>
                <RawText>
                    值得一提的是，目前Ethereum协议层没有任何一个地方使用了加密。节点之间的信息交流，包括交易信息，
                    都是没有加密的，任何人都可以看到消息的内容。因此，每个人都可以验证状态的更新是否正确，从而达成共识。
                    未来，更加高级的密码学工具将会被使用，像零知识加密，同态加密等工具，会允许人们将加密后的数据写入Blockchain，
                    同时一样可以达成共识。
                </RawText>
            </Paragraph>

            <Paragraph>
                <Abstract>钥匙与地址</Abstract>
                <RawText>
                    Ethereum有两种类型的账户：外部拥有人账户(EOA)，Contract账户。EOA账户对ether的控制权，
                    是通过电子私钥，Ethereum地址，电子签名确定的。私钥是与Ethereum交互的核心。实际上，
                    账户地址由私钥直接派生，一个私钥决定了唯一的Ethereum地址，也就是我们通常所说的账户。
                </RawText>
                <RawText>
                    私钥不是直接在Ethereum系统中使用的，它们永远也不会在Ethereum中存储，传输。也就是说，私钥应该保持私密，
                    不会在消息中传递，不会记录在Blockchain中。在网络中存储，传输的是账户地址和电子签名。
                </RawText>
                <RawText>
                    使用和控制资金由电子签名完成，电子签名由私钥产生，添加到Blockchain的交易信息，都必须附加合法的电子签名。
                    任何持有私钥的人，都可以控制对应账户的资金。基于公钥的加密系统，钥匙是成对的，分为私钥和公钥。
                    公钥类似银行卡的账号数字，私钥类似登陆该账号的PIN码。整个账号是由后者控制的，前者用于唯一鉴定。
                    Ethereum的用户绝大部分都没见过账户的私钥，私钥或是加密后存储在本地文件，或是由钱包软件秘密管理。
                </RawText>
            </Paragraph>

            <Paragraph>
                <Abstract>公钥密码学与加密币</Abstract>
                <RawText>
                    公钥密码学，又称非对称密码学，是现代信息安全的一个核心组成。这个密钥交换协议，在19世纪70年代，
                    由Martin Hellman, Whitfield Diffie, RalphMerkle首次发表，在当时引起巨大的震撼，
                    掀起了第一次密码学研究热潮。此前，强大的密码学工具仅掌握在政府手中。
                </RawText>
                <RawText>
                    公钥密码学使用很独特的钥匙确保信息安全，这些钥匙是根据有特殊属性的数学函数计算的，
                    使用钥匙加密的过程很容易计算，根据密文计算明文的过程无比困难。密码学就是根据这些独特的函数，
                    对需要保密的数据进行加密，产生密文和电子签名。
                </RawText>
                <RawText>
                    举个例子，求两个大素数相乘的结果，很容易计算。如果给出两个大素数相乘的结果，找出对应的素数，
                    那就难多了。8,018,009，是两个素数的乘积，你能找出对应的两个素因子吗？如果你知道其中一个素数，
                    那么很容易知道另外一个。这里其中一个是2,003，另外一个就是8,018,009 / 2,003 = 4,003。
                </RawText>
                <RawText>
                    密码学有一类更高级的数学函数是基于椭圆曲线上的算术运算的。在椭圆曲线算术中，
                    素数的模n乘法容易计算，反过来基本不可能，这就是离散对数问题。椭圆曲线加密广泛应用于现代计算机系统，
                    也是Ethereum私钥加密和电子签名的基础算法。
                </RawText>
                <RawText>
                    电子签名可以对任意数据签名。对于Ethereum的交易而言，进行电子签名的是交易的所有细节数据。
                    密码学的数学公式，这里用的就是椭圆曲线加密公式，以交易数据和私钥作为输入，输出一串数字，
                    这串数字只能由该交易数据和私钥计算出来，它就叫做电子签名。Ethereum的交易必须附上电子签名。
                    任何人都可以把电子签名和账户地址作为参数，输入椭圆曲线加密公式，验证交易是否合法。
                    验证的过程不需要密钥参与，但可以判断是否是该密钥签名的数据，这就是公钥密码学的魅力所在。
                </RawText>
            </Paragraph>

            <Paragraph>
                <Abstract>私钥</Abstract>
                <RawText>
                    私钥就是一串随机的数字。私钥的所有权和控制权，是使用账户资金，使用账户上Contract的最根本权限。
                    私钥必须绝对保密，将私钥交给第三方，相当于把账户的资金和Contract的控制权都交给了别人。
                    必须对私钥备份，防止意外的事故，导致私钥丢失，导致资金和Contract的控制权永远的失去。
                </RawText>
                <SubAbstract>用随机数产生私钥</SubAbstract>
                <RawText>
                    创建私钥最重要的步骤是确定随机数源的是安全的。创建Ethereum的私钥，可以看作是从1到2^256的范围内选择一个数。
                    具体使用什么函数并不重要，只要它的结果是不可预测的，不确定的。Ethereum软件使用底层操作系统的随机数产生器，
                    创建256个随机的位。一般来说，系统随机数产生器，需要用户输入一串随机数进行初始化，
                    因此会要求鼠标输入，键盘输入，甚至是声音输入。
                </RawText>
                <RawText>
                    私钥的创建过程是完全线下执行的，不要在Ethereum网络中做任何的请求，与任何人没有关系。
                    因此，为了确保你产生的私钥不会跟别人产生的一样，必须确保产生的过程是绝对随机的。
                    如果你自己选择一串数字作为私钥，很可能被人也会使用这串数字作为私钥，那么他也可以访问你的账户了。
                    使用效果不好的随机数产生器，结果更是悲剧，例如，许多编程语言都有rand函数，
                    用于产生伪随机数，别人可以轻松地运用这个函数，重复私钥的创建过程。私钥必须不能被猜到，
                    幸运的是，日常使用中并不需要记住这个私钥，所以尽可能确保随机吧。
                </RawText>
            </Paragraph>

            <Paragraph>
                <Abstract>公钥</Abstract>
                <RawText>
                    Ethereum公钥是椭圆曲线上的点，私钥和公钥相当于满足椭圆曲线数学关系的一组(x, y)。
                    公钥实际上是两个数拼接在一起形成的，这两个数是椭圆曲线数学函数以私钥作为输入的输出值。
                    具体的表达式：K = k * G，小写k是私钥，G是生成点常数，大写K是公钥，这里的*是椭圆曲线乘法，
                    跟平常的两个整数相乘的乘法不是同一个东西。
                </RawText>
                <SubAbstract>椭圆曲线密码学解释</SubAbstract>
                <RawText>
                    椭圆曲线密码学是非对称密码学，或者说公钥密码学的一种，基于椭圆曲线上的点相加和相乘的离散对数问题。
                    如图：
                </RawText>
                <ExplainImage><img src='/images/curve.jpg' /></ExplainImage>
                <RawText>
                    由于函数的取值不是全体实数，实际上是一个椭圆形状的散点图：
                </RawText>
                <ExplainImage><img src='/images/curve2.jpg' /></ExplainImage>
                <RawText>
                    这个曲线的具体函数公式为：
                </RawText>
                <ExplainImage><img src='/images/formular.jpg' /></ExplainImage>
            </Paragraph>

            <Paragraph>
                <Abstract>加密哈希函数</Abstract>
                <RawText>
                    加密哈希函数的应用贯穿于Ethereum，实际上，哈希函数广泛应用于几乎所有的密码系统中。
                    密码学研究者Bruse Schneier曾经说过，单方向哈希函数在现代密码学做的工作最多，
                    比加密算法多得多。
                </RawText>
                <RawText>
                    简单来说，所有将任意大小的输入映射到固定大小的输出的函数，都叫哈希函数。
                    哈希函数的输入叫做原象，消息，或者就叫输入数据，输出叫哈希值。加密哈希函数是其特殊的子类，
                    由于其自身的特性，被用来保障平台的安全，例如Ethereum。
                </RawText>
                <RawText>
                    密码学的哈希函数是单向的哈希函数，单向意味着，仅仅知道输出的哈希值，是不能计算出输入的。
                    唯一找到输入的方法是暴力遍历所有可能的候选数据，判断候选数据的哈希值是否等于目标哈希值。
                    如果候选的集合是近乎无限的，那么相当于说，几乎不可能找出真是的输入。即使你找到一个候选数据，
                    输出的结果等于目标哈希值，也不能确定它就是真是的输入，因为哈希函数是多对一的函数。
                    找到两个不同的输入，具有相同的哈希值，叫做找到哈希冲突，越优秀的哈希函数，
                    找到哈希冲突的机会越稀有。
                </RawText>
                <RawText>
                    加密哈希函数的主要特征如下：
                </RawText>

                <SubAbstract>确定性</SubAbstract>
                <Indentation>相同的输入，对应的哈希值是唯一的</Indentation>

                <SubAbstract>可验证</SubAbstract>
                <Indentation>哈希函数非常高效，线形复杂度</Indentation>

                <SubAbstract>不相关</SubAbstract>
                <Indentation>输入的微小变化，对应哈希值的差异是巨大的</Indentation>

                <SubAbstract>不可逆</SubAbstract>
                <Indentation>几乎不可能根据哈希值计算出函数输入</Indentation>

                <SubAbstract>冲突保护</SubAbstract>
                <Indentation>不可能有两个不同的输入产生相同的哈希值</Indentation>

                <RawText>
                    在Ethereum中，为了避免签名伪造，使用的哈希函数必须防止哈希冲突。由于拥有上述的特性，
                    加密哈希函数广泛应用于安全领域的应用，如：
                </RawText>
                <List>
                    <li>数据指纹</li>
                    <li>消息完整性检测</li>
                    <li>工作量证明PoW</li>
                    <li>系统认证</li>
                    <li>伪随机数生成器</li>
                    <li>消息委托，提交-披露机制</li>
                    <li>唯一身份</li>
                </List>

                <SubAbstract>Ethereum的加密哈希函数：Keccak-256</SubAbstract>
                <RawText>
                    Ethereum在很多地方使用了加密哈希函数Keccak-256。Keccak-256是2007年度SHA-3加密哈希函数竞赛的胜出者，
                    在2015年成为联邦信息处理标准之一。
                </RawText>
            </Paragraph>

            <Paragraph>
                <Abstract>Ethereum地址</Abstract>
                <Paragraph>
                    <RawText>
                        Ethereum地址是账户的唯一标识，由公钥经过Keccak-256单向加密哈希函数计算出来。
                        地址的产生过程如下：
                    </RawText>
                    <List>
                        <li>1. 随机产生私钥：k=f8f8a2f43c8376ccb0871305060d7b27b0554d2cc72bccf41b2705608452f315</li>
                        <li>2. 根据椭圆曲线公式得到公钥：K=6e145ccef1033dea239875dd00dfb4fee6e3348b84985c92f103444683bae07b83b5c38e5e...</li>
                        <li>3. 用Keccak-256求哈希值: Keccak256(K)=2a5bc342ed616b5ba5732269001d3f1ef827552ae1114027bd3ecf1f086ba0f9</li>
                        <li>4. 保留最后20位：001d3f1ef827552ae1114027bd3ecf1f086ba0f</li>
                        <li>5. 一般0x开头表明是16进制：0x001d3f1ef827552ae1114027bd3ecf1f086ba0f9</li>
                    </List>
                </Paragraph>
            </Paragraph>
        </Article>
    }

}

export default ArticleCrytography