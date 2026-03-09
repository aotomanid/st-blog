import DefaultTheme from 'vitepress/theme-without-fonts' // 默认主题
import './custom.css' // 自定义样式
import { EnhanceAppContext, useData, useRoute } from 'vitepress';
import codeblocksFold from 'vitepress-plugin-codeblocks-fold'; // 导入方法
import 'vitepress-plugin-codeblocks-fold/style/index.css'; // 导入样式

export default {
    ...DefaultTheme,
    enhanceApp(ctx: EnhanceAppContext) {
        DefaultTheme.enhanceApp(ctx);
        // ...
    },
    setup() {
        // 获取前言和路由
        const { frontmatter } = useData();
        const route = useRoute();
        // 基础使用
        codeblocksFold({ route, frontmatter });
        // 可配置参数
        // codeblocksFold({ route, frontmatter }, true, 400);
    }
};