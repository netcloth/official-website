import React from 'react';
import { Collapse, Icon } from 'antd';
import withLocal from 'components/withLocal';
import { _t, _tHtml } from 'utils/lang';
import Header from 'components/h5/header';
import Footer from 'components/h5/Footer';
import { faqs } from 'config/base';
import style from './index.scss';

const { Panel } = Collapse;

@withLocal()
class NormalFaq extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  state = {
    activeKey: 'a',
  };
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
    const { activeKey } = this.state;
    return faqs.map((item, key) => {
      const { text, content, pic } = item;
			if (undefined !== pic) {
				return (
					<Panel header={_t(text)} key={key} extra={this.genExtra(activeKey, key)}>
						<div className={style.panel}>
							<img src={pic} alt="FAQ" className={style.image} />
						</div>
					</Panel>
				);
			} else {
				return (
					<Panel header={_t(text)} key={key} extra={this.genExtra(activeKey, key)}>
						<div className={style.panel}>{_tHtml(content)}</div>
					</Panel>
				);
			}
    })
  };
  render() {
    const { activeKey } = this.state;
    return (
      <div className={style.container}>
        <Header node={this.myRef} />
        <div className={style.top_box} ref={this.myRef}>
          <p className={style.title}>
            {_t('faq.faq')}
          </p>
          <p className={style.info}>NetCloth帮您解决疑虑，给您更好的体验！</p>
        </div>
        <div className={style.content_box}>
          <Collapse
            accordion
            activeKey={activeKey}
            onChange={this.handleChange}
            expandIconPosition="left"
          >
            {this.renderPanel()}
          </Collapse>
        </div>
        <Footer className={style.footer_wrapper}/>
      </div>
    );
  }
}

export default NormalFaq;
