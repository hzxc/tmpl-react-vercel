import { Button, DatePicker, Radio, RadioChangeEvent, Space, version } from 'antd';
import { useState } from 'react';

export const TestDynamicTheme = () => {
  const [prefix, setPrefix] = useState('ant');
  // const { rootPrefixCls } = useContext(ConfigContext);

  const handlePrefixChange = (e: RadioChangeEvent) => {
    // console.log(e.target.value);
    // console.log(rootPrefixCls);
    setPrefix(e.target.value);
  };
  return (
    <>
      <h1>
        <Space>
          Change Theme:
          <Radio.Group onChange={handlePrefixChange} value={prefix}>
            <Radio value='ant'>Ant Style</Radio>
            <Radio value='custom'>Custom Style</Radio>
          </Radio.Group>
        </Space>
      </h1>

      <h1>antd version: {version}</h1>
      <DatePicker />
      <Button type='primary' style={{ marginLeft: 8 }}>
        Primary Button
      </Button>
    </>
  );
};
