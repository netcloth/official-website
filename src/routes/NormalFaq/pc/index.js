import React from 'react';
import { Collapse, Icon, Layout } from 'antd';
import withLocal from 'components/withLocal';
import { _t, _tHtml } from 'utils/lang';
import { faqs } from 'config/base';
import Header from 'components/pc/Header';
import Footer from 'components/pc/Footer';
import style from './style.less';

const { Panel } = Collapse;

@withLocal()
export default class NormalFaq extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      activeKey: 'a',
    };
  }
  genExtra = (activeKey, key) => {
    if(+activeKey === +key) {
      return (<Icon style={{ color: 'rgba(07,121,142,1)' }} type="minus" />);
    }
    return (<Icon style={{ color: 'rgba(07,121,142,1)' }} type="plus" />);
    
  };
  handleChange = (key) => {
    this.setState({
      activeKey: key,
    })
  };
  renderPanel = () => {
    const {  activeKey } = this.state;
    return faqs.map((item, key) => {
      const { text, content } = item;
      return (
        <Panel header={_t(text)} key={key} extra={this.genExtra(activeKey, key)}>
          <div className={style.panel}>
            {_tHtml(content)}
          </div>
        </Panel>
      );
    })
  };
  render() {
    const { activeKey } = this.state;
    return (
      <Layout className={style.layout_wrapper}>
        <Header node={this.myRef} diff={120} />
        <Layout.Content className={style.layout_content}>
          <div className={style.faq_wrapper}>
            <div className={style.top_box} ref={this.myRef}>
              <div className={style.title}>
                <p>{_t('faq.faq')}</p>
                <p>NetCloth帮您解决疑虑，给您更好的体验！</p>
              </div>
            </div>
            <div className={style.faq_wrapper_content}>
              <div className={style.content}>
                <Collapse
                  accordion
                  activeKey={activeKey}
                  onChange={this.handleChange}
                  expandIconPosition="left"
                >
                  {this.renderPanel()}
                </Collapse>
              </div>
            </div>
          </div>
        </Layout.Content>
        <Layout.Footer className={style.layout_footer}>
          <Footer />
        </Layout.Footer>
      </Layout>
    );
  }
}
