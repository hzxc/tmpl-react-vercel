import React from 'react';
import { IdSelect } from 'components/id-select';
import { usePeople } from 'utils/use-people';

export const PersonSelect = (props: React.ComponentProps<typeof IdSelect>) => {
  const { data: people } = usePeople();
  return <IdSelect options={people?.data || []} {...props} />;
};
