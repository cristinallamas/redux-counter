import counter from './data/counter.json';

export const counterLoadFromAPI = () =>
  new Promise(resolve => {
    resolve(counter.initalValue);
  });
