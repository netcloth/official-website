import dva from 'dva';
import createLodaing from 'dva-loading';


const app = dva({
  ...createLodaing({
    effects: true,
  }),
});


export default app;
