import { ReactComponent as PancakeIconSvg } from 'assets/pancake/icon.svg';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import Icon from '@ant-design/icons';

export const PancakeIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={PancakeIconSvg} {...props} />
);
