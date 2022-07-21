# antd

## variable.less path

D:/proj/hzxc.github.com/tmpl-react-vercel/node_modules/antd/lib/style/themes

### pancake

- @font-size-base: 16px;
- @primary-color: rgb(31, 199, 212);
- @primary-color-hover: rgb(110, 219, 227);
- @primary-color-active: rgb(65, 208, 219);

## lessc

lessc --js --modify-var="ant-prefix=pancake" node_modules/antd/dist/antd.variable.less src/css/pancake.css
