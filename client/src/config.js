import ArticleHemingway from './writings/article-hemingway'
import ArticleWelcome from './writings/article-welcome'

const cfgMainIndex = [
    { id: 1, name: 'Blockchain' },
    { id: 2, name: 'Ethereum' },
    { id: 3, name: 'Wallet' },
]

const cfgArticles = [
    { id: 1, mainIndex: 1, name: 'Welcome', article: ArticleWelcome },
    { id: 2, mainIndex: 1, name: 'Hemingway', article: ArticleHemingway },
    { id: 3, mainIndex: 2, name: 'Hally Potter', article: ArticleHemingway },
]

const getArticlesByIndex = (index) => {
    const articles = []
    cfgArticles.forEach(cfg => {
        if (cfg.mainIndex == index)
            articles.push(cfg)
    })
    return articles
}

const getFirstArticle = () => {
    return cfgArticles[0]
}

export {
    cfgMainIndex,
    cfgArticles,
    getArticlesByIndex,
    getFirstArticle,
}