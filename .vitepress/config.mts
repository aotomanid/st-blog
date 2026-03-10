import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
// 使用 defineConfig 定义 VitePress 的配置
export default defineConfig({
  base: '/st-blog/', // 匹配路径
  outDir: 'docs/.vitepress/dist', // build 输出位置

  head: [['link', { rel: 'icon', href: '/favicon.ico' }]], // 网页标签icon
  title: "SingleThread Blog", // 网页标题
  description: "SingleThread的个人博客", // 网站的描述，通常用于 SEO 和元数据

  // https://vitepress.dev/reference/default-theme-config
  // 主题配置部分
  themeConfig: {
    logo: '/favicon.ico', // 网站图标
    siteTitle: 'SINGLE THREAD BLOG', // 网站标题，隐藏用false

    // 本地搜索
    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'VitePress', link: '/docs/VitePress/01.简介' }, // 这个名字会显示到导航栏中
      { text: 'Tools', items: [
        { text: 'VsCode', link: '/docs/Tools/VsCode/01.简介' },
        { text: 'Git', link: '/docs/Tools/Git/01.简介' },
      ] }
    ],

    sidebar: {
      '/docs/VitePress/': [
        {text: 'VitePress', 
         items: [
           { text: '简介', link: '/docs/VitePress/01.简介' },
           { text: '创建项目', link: '/docs/VitePress/02.创建项目' },
           { text: '全局配置', link: '/docs/VitePress/03.全局配置' },
           { text: '主题', link: '/docs/VitePress/04.主题' },
           { text: '插件', link: '/docs/VitePress/05.插件' },
           { text: '自动部署', link: '/docs/VitePress/06.自动部署' },
         ]
        }
      ],
      '/docs/Tools/': [
        {text: 'VsCode', 
         items: [
           { text: '简介', link: '/docs/Tools/VsCode/01.简介' },
           { text: '配置', link: '/docs/Tools/VsCode/02.配置' },
           { text: '插件', 
             items: [
               { text: '插件集', link: '/docs/Tools/VsCode/03.插件/01.插件集' },
               { text: 'clangd', link: '/docs/Tools/VsCode/03.插件/02.clangd' },
               { text: 'ESP-IDF', link: '/docs/Tools/VsCode/03.插件/03.ESP-IDF' },
             ]
            },
         ]
        },
        {text: 'Git', 
         items: [
           { text: '简介', link: '/docs/Tools/Git/01.简介' },
           { text: '安装和配置', link: '/docs/Tools/Git/02.安装和配置' },
           { text: 'SSH密钥', link: '/docs/Tools/Git/03.SSH密钥' },
         ]
        },
      ],
    },

    // 社交图标
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    //右侧内容导航栏
    outline: {
      level: [1, 3], // `'deep'` 与 `[2, 6]` 相同，将显示从 `<h2>` 到 `<h6>` 的所有标题。
      label: "页面导航"
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    //更新时间
    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
  }
})