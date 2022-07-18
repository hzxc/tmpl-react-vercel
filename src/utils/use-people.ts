import { useHttp } from 'utils/http';
import { useQuery } from 'react-query';
import { PeopleResponse, Person } from 'gen/ts/api/project/v1/project';

export const usePeople = (param?: Partial<Person>) => {
  const client = useHttp();

  return useQuery<PeopleResponse>(['people', param], () =>
    client('ProjectService', 'people', { data: param })
  );
};
