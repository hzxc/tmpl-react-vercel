import {
  Button,
  ConfigProvider,
  DatePicker,
  Input,
  Menu,
  MenuProps,
  Radio,
  RadioChangeEvent,
  Space,
  version,
  Typography,
} from 'antd';
import { useAuth } from 'pages/context/auth-context';
import { useState } from 'react';
import { SettingOutlined, MailOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';

const { Title, Text, Link } = Typography;

export const TestDynamicTheme = () => {
  const { prefixCls: prefix, setTheme } = useAuth();
  // const { rootPrefixCls } = useContext(ConfigContext);

  const handlePrefixChange = (e: RadioChangeEvent) => {
    // console.log(e.target.value);
    // console.log(rootPrefixCls);
    console.log(e.target.value);
    setTheme(e.target.value);
    // setPrefix(e.target.value);
  };

  // menu

  const items: MenuProps['items'] = [
    {
      label: 'Trade',
      key: 'Trade',
      popupClassName: '',
      children: [
        {
          label: 'Swap',
          key: 'Swap',
        },
        {
          label: 'Limit',
          key: 'Limit',
        },
        {
          label: 'Liquidity',
          key: 'Liquidity',
        },
        {
          label: 'Perpetual',
          key: 'Perpetual',
        },
      ],
    },
    {
      label: 'Navigation - Submenu',
      key: 'SubMenu',
      icon: <SettingOutlined />,
      children: [
        {
          type: 'group',
          label: 'Item 1',
          children: [
            {
              label: 'Option 1',
              key: 'setting:1',
            },
            {
              label: 'Option 2',
              key: 'setting:2',
            },
          ],
        },
        {
          type: 'group',
          label: 'Item 2',
          children: [
            {
              label: 'Option 3',
              key: 'setting:3',
            },
            {
              label: 'Option 4',
              key: 'setting:4',
            },
          ],
        },
      ],
    },
  ];

  const [current, setCurrent] = useState('setting:1');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <Container>
      <Space>
        <Title level={2}>Change Theme:</Title>
        <Radio.Group onChange={handlePrefixChange} value={prefix}>
          <Radio value='ant'>Ant Style</Radio>
          <Radio value='pancake'>Pancake Style</Radio>
        </Radio.Group>
      </Space>
      <Title level={2}>antd version: {version}</Title>
      <DatePicker />
      <Button size='large' style={{ marginLeft: 8 }} type='primary'>
        Primary Button
      </Button>
      <Title level={2}>Menu</Title>
      <Menu onClick={onClick} selectedKeys={[current]} mode='horizontal' items={items} />
      <Title level={2}>Input</Title>
      <Input placeholder='Basic usage' />
    </Container>
  );
};

const Container = styled.div`
  padding: 3.2rem;
`;
