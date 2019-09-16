import app from 'utils/createDva';
import router from './router';
import ModelApp from 'models/app';
import 'utils/flexible';
import './index.less';

app.model(ModelApp);
app.router(router);
app.start('#root');
