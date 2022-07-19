import React from 'react';
import { Form, Input } from 'antd';
import { PersonSelect } from 'components/person-select';
import { ListRequest } from 'gen/ts/api/project/v1/project';

interface SearchPanelProps {
  param: Partial<Pick<ListRequest, 'name' | 'personId'>>;
  setParam: (param: SearchPanelProps['param']) => void;
}

export const SearchPanel = ({ param, setParam }: SearchPanelProps) => {
  return (
    <Form style={{ marginBottom: '2rem' }} layout={'inline'}>
      <Form.Item>
        <Input
          type='text'
          value={param.name}
          onChange={(event) =>
            setParam({
              ...param,
              name: event.target.value,
            })
          }
        />
      </Form.Item>
      <Form.Item>
        <PersonSelect
          defaultOptionName={'Select Person'}
          value={param.personId}
          onChange={(value) =>
            setParam({
              ...param,
              personId: value,
            })
          }
        />
      </Form.Item>
    </Form>
  );
};
