# antd

## variable.less path

`/node_modules/antd/lib/style/themes/variable.less`

## pancake edit css

```css
.pancake-menu-horizontal:not(.pancake-menu-dark) > .pancake-menu-submenu-selected::after {
  /* border-bottom: 2px solid #7645d9; */
}
```

## lessc

```shell
lessc --js --modify-var="ant-prefix=pancake" themes/pancake/pancake.less src/css/pancake.css
lessc --js --modify-var="ant-prefix=pancake" node_modules/antd/dist/antd.variable.less src/css/pancake.css
```
