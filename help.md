# antd

## variable.less path

D:/proj/hzxc.github.com/tmpl-react-vercel/node_modules/antd/lib/style/themes

### pancake

```css
.pancake-menu-horizontal:not(.pancake-menu-dark) > .pancake-menu-submenu-selected::after {
  /* border-bottom: 2px solid #7645d9; */
}
```

## lessc

lessc --js --modify-var="ant-prefix=pancake" node_modules/antd/dist/antd.variable.less src/css/pancake.css
