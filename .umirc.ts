import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  ssr: {},
  exportStatic: {},
  routes: [{ path: '/', component: '@/pages/index' }],
});
