module.exports = {
    title: 'My Notes',
    description:"nulixuejishu的笔记",
    head: [
        ['link', { rel: 'icon', href: '/assets/img/ico.ico' }],
        ['mate', { name: 'author', content: 'nulixuejishu' }],
        ['mate', { name: 'keywords', content: '学习笔记、Java笔记、MySQL笔记' }],
      ],
    themeConfig: {
      sidebar: 'auto',
      logo: '/assets/img/logo.png',
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/about' },
        { 
          text: 'Java', link: '/Java/' ,
          items: [
            { text: 'Java基础', link: '/Java/Java基础/Java基础' },
            { text: 'Java基础语法', link: '/Java/Java基础语法/Java基础语法' },
            { text: 'Java面向对象', link: '/Java/Java面向对象/Java面向对象' },
            { text: '常用API', link: '/Java/常用API/常用API' },
            { text: '集合', link: '/Java/集合/集合' },
            { text: '异常', link: '/Java/异常/异常' },
            { text: 'IO', link: '/Java/IO/IO' },
            { text: '多线程', link: '/Java/多线程/多线程' },
            { text: '网络编程', link: '/Java/网络编程/网络编程' },
            { text: '数据库', link: '/Java/数据库/数据库' },
            { text: '反射', link: '/Java/类加载、反射/类加载、反射' },
            { text: '项目', link: '/Java/项目/项目' },
          ]
        },  
        { text: 'MySQL', link: '/MySQL/MySQL基础篇' },
        { text: 'GitHub', link: 'https://github.com' },
      ],
    }
  }