import ArticleWelcome from './writings/article-welcome'
import ArticleWhat from './writings/article-what'
import ArticleBasic from './writings/article-basic'
import ArticleClient from './writings/article-client'
import ArticleWallet from './writings/article-wallet'
import ArticleTransaction from './writings/article-transaction'
import ArticleSecurity from './writings/article-security'

const cfgMainIndex = [
    { id: 1, name: '前言' },
    { id: 2, name: 'Ethereum' },
]

const cfgArticles = [
    { id: 1, mainIndex: 1, name: '欢迎', article: ArticleWelcome },
    { id: 2, mainIndex: 2, name: 'Ethereum是什么', article: ArticleWhat },
    { id: 3, mainIndex: 2, name: 'Ethereum基础', article: ArticleBasic },
    { id: 4, mainIndex: 2, name: 'Ethereum客户端', article: ArticleClient },
    { id: 5, mainIndex: 2, name: '钱包', article: ArticleWallet },
    { id: 6, mainIndex: 2, name: '交易', article: ArticleTransaction },
    { id: 7, mainIndex: 2, name: 'Smart Contract安全', article: ArticleSecurity},
]

const getArticlesByIndex = (index) => {
    const articles = []
    cfgArticles.forEach(cfg => {
        if (cfg.mainIndex == index)
            articles.push(cfg)
    })
    return articles
}

const getFirstMainIndex = () => {
    return cfgMainIndex[0]
}

const getArticleById = (id) => {
    let target
    for (let i = 0; i < cfgArticles.length; i++) {
        const cfg = cfgArticles[i]
        if (cfg.id == id) {
            target = cfg
            break
        }
    }
    return target
}

export {
    cfgMainIndex,
    cfgArticles,
    getArticlesByIndex,
    getFirstMainIndex,
    getArticleById,
}