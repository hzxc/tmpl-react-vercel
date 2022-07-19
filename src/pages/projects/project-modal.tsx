import styled from '@emotion/styled';
import { Button, Drawer, Form, Input, Spin } from 'antd';
import { ErrorBox } from 'components/lib';
import { PersonSelect } from 'components/person-select';
import { useEffect } from 'react';
import { useAddProject, useEditProject } from 'utils/use-project';
import { useProjectModal, useProjectsQueryKey } from './project-utils';

export const ProjectModal = () => {
  const { projectModalOpen, close, editingProject, isLoading } = useProjectModal();

  const useMutateProject = editingProject ? useEditProject : useAddProject;

  const { mutateAsync, error } = useMutateProject(useProjectsQueryKey());
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    mutateAsync({ ...{ pin: false, description: '' }, ...editingProject, ...values }).then(() => {
      // form.resetFields();
      form.resetFields(['name', 'organization']);
      form.setFieldsValue({ personId: 0 });
      close();
    });
  };
  const closeModal = () => {
    // form.resetFields();

    form.resetFields(['name', 'organization']);
    form.setFieldsValue({ personId: 0 });
    // console.log(form.getFieldValue('personId'));
    close();
  };

  const title = editingProject ? 'Edit Project' : 'Create Project';

  useEffect(() => {
    form.setFieldsValue(editingProject);
  }, [editingProject, form]);

  return (
    <Drawer onClose={closeModal} visible={projectModalOpen} width={'70%'} forceRender={true}>
      <Container>
        {isLoading ? (
          <Spin size={'large'} />
        ) : (
          <>
            <h1>{title}</h1>
            <ErrorBox error={error} />
            <Form form={form} layout={'vertical'} style={{ width: '30rem' }} onFinish={onFinish}>
              <Form.Item
                name='name'
                label={'name'}
                rules={[{ required: true, message: 'project name required' }]}
              >
                <Input type='text' id='name' placeholder={'project name'} />
              </Form.Item>
              <Form.Item
                name='organization'
                label={'organization'}
                rules={[{ required: true, message: 'project organization required' }]}
              >
                <Input type='text' id='organization' placeholder={'project organization'} />
              </Form.Item>
              <Form.Item
                name='personId'
                initialValue={0}
                label={'person'}
                rules={[{ required: true, message: 'person required' }]}
              >
                <PersonSelect defaultOptionName={'Select Person'} />
              </Form.Item>
              <Form.Item>
                <Button type={'primary'} htmlType={'submit'}>
                  submit
                </Button>
              </Form.Item>
            </Form>
          </>
        )}
      </Container>
    </Drawer>
  );
};

const Container = styled.div`
  flex-direction: column;
  /* height: 100%; */
  /* height: 100vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: aquamarine;
`;
