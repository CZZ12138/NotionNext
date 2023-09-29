const CONFIG = {
  HOME_BANNER_ENABLE: true,

  SITE_CREATE_TIME: '2023-03-01', // 建站日期，用于计算网站运行的第几天

  // 首页顶部通知条滚动内容，如不需要可以留空 []
  NOTICE_BAR: [
    { title: '欢迎来到LUCEN', url: 'https://lucenczz.top' },
    { title: '知能行考研数学帮助40万+考生找到秒杀考研数学的乐趣', url: 'https://bestzixue.com/?app_referrer_id=WBH~atczhihu-lucen-editor_chengzz' }
  ],

  // 英雄区(首页顶部大卡)
  HERO_TITLE_1: '分享成长，考研，留学',
  HERO_TITLE_2: '与教育规划',
  HERO_TITLE_3: 'LUCENCZZ.TOP',
  HERO_TITLE_4: '清华大学｜斯坦福大学｜伊利诺伊州大学 团队打造',
  HERO_TITLE_5: '利用机器学习与大数据精准定位你的薄弱点',
  HERO_TITLE_LINK: 'https://bestzixue.com/?app_referrer_id=WBH~atczhihu-lucen-editor_chengzz',

  // 英雄区显示三个置顶分类
  HERO_CATEGORY_1: { title: '资源分享', url: '/tag/资源分享' },
  HERO_CATEGORY_2: { title: '考研必看', url: '/tag/考研必看' },
  HERO_CATEGORY_3: { title: '留学资讯', url: '/tag/留学资讯' },

  // 英雄区右侧推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
  HERO_RECOMMEND_POST_TAG: '推荐',
  HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: true, // 推荐文章排序，为`true`时将强制按最后修改时间倒序

  // 右侧个人资料卡牌欢迎语，点击可自动切换
  INFOCARD_GREETINGS: [
    '你好！我是',
    '🔍 分享与热心帮助',
    '🤝 专修成长与教育',
    '🏃 脚踏实地行动派',
    '🤖️ 数码科技爱好者',
    '🧱 优质信息收集能手'
  ],
  INFO_CARD_URL: 'https://lucenczz.top', // 个人资料底部按钮链接

  // 用户技能图标
  GROUP_ICONS: [
    {
      title_1: 'AfterEffect',
      img_1: '/images/heo/芝加哥.webp',
      color_1: '#ffffff',
      title_2: 'Sketch',
      img_2: '/images/heo/香港大学.webp',
      color_2: '#ffffff'
    },
    {
      title_1: 'Docker',
      img_1: '/images/heo/宾夕法尼亚.webp',
      color_1: '#57b6e6',
      title_2: 'Photoshop',
      img_2: '/images/heo/芝加哥.webp',
      color_2: '#4082c3'
    },
    {
      title_1: 'FinalCutPro',
      img_1: '/images/heo/加州大学伯克利.webp',
      color_1: '#ffffff',
      title_2: 'Python',
      img_2: '/images/heo/伦敦大学.webp',
      color_2: '#ffffff'
    },
    {
      title_1: 'Swift',
      img_1: '/images/heo/新加坡国立.webp',
      color_1: '#eb6840',
      title_2: 'Principle',
      img_2: '/images/heo/苏黎世联邦理工.webp',
      color_2: '#8f55ba'
    },
    {
      title_1: 'illustrator',
      img_1: '/images/heo/帝国理工.webp',
      color_1: '#f29e39',
      title_2: 'CSS3',
      img_2: '/images/heo/斯坦福.webp',
      color_2: '#2c51db'
    },
    {
      title_1: 'JS',
      img_1: '/images/heo/牛津.webp',
      color_1: '#f7cb4f',
      title_2: 'HTML',
      img_2: '/images/heo/剑桥.webp',
      color_2: '#e9572b'
    },
    {
      title_1: 'Git',
      img_1: '/images/heo/麻省理工.webp',
      color_1: '#df5b40',
      title_2: 'Rhino',
      img_2: '/images/heo/牛津.webp',
      color_2: '#ffffff'
    }
  ],

  SOCIAL_CARD: true, // 是否显示右侧，点击加入社群按钮
  SOCIAL_CARD_TITLE_1: '交流频道',
  SOCIAL_CARD_TITLE_2: '加入我们的社群讨论分享',
  SOCIAL_CARD_TITLE_3: '点击加入社群',
  SOCIAL_CARD_URL: 'https://bestzixue.com/?app_referrer_id=WBH~atczhihu-lucen-editor_chengzz',

  // *****  以下配置无效，只是预留开发 ****
  // 菜单配置
  MENU_INDEX: true, // 显示首页
  MENU_CATEGORY: true, // 显示分类
  MENU_TAG: true, // 显示标签
  MENU_ARCHIVE: true, // 显示归档
  MENU_SEARCH: true, // 显示搜索

  POST_LIST_COVER: true, // 列表显示文章封面
  POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大

  POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  POST_LIST_SUMMARY: true, // 文章摘要
  POST_LIST_PREVIEW: false, // 读取文章预览
  POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  ARTICLE_RECOMMEND: true, // 文章关联推荐

  WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  WIDGET_ANALYTICS: false, // 显示统计卡
  WIDGET_TO_TOP: true,
  WIDGET_TO_COMMENT: true, // 跳到评论区
  WIDGET_DARK_MODE: true, // 夜间模式
  WIDGET_TOC: true // 移动端悬浮目录
}
export default CONFIG
