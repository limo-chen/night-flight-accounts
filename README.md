# 夜航记账

## 部署

```bash
pnpm run build --base /
bin/coscli-linux cp -r dist/ cos://navigation-1316941730
```

## 编码规范

### ref 默认值

推荐使用

```tsx
const div = ref<HTMLDivElement>();
```

不推荐使用

```tsx
const div = ref<HTMLDivElement | null>(null);
```

## 如何开发

## 如何打包
