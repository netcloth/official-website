import React from 'react';
import classNames from 'classnames';
import withLocal from 'components/withLocal';
import { _t } from 'utils/lang';
import { faqs, features, swiper_right, swiper_left } from 'config/base';
import Swiper from 'react-id-swiper';
//import 'react-id-swiper/lib/styles/css/swiper.css';
import { Link } from 'dva/router';
import Header from 'components/h5/header';
import Footer from 'components/h5/Footer';
import Application from 'components/h5/Application';
import style from './index.scss';
import axios from "axios"

@withLocal()
export default class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
		this.downLoad = React.createRef();
	}
	handleSubscribe = () => {
		let email =  document.getElementById("email_input").value;
		var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
		console.log(this.props)
		console.log(this.props.currentLocale)
		console.log(this.props.currentLocale=="zh_CN"?"zh":"en")
		if(!reg.test(email)){
			let xxx = _t("mail.msg_faild1");
			alert(xxx); 
			return;
		}
		let ok_msg = _t("mail.msg_ok");
		let faild_msg2 = _t("msg_faild2");
		let faild_msg3 = _t("msg_faild3");
		let url = '/config/email.php?language='+(this.props.currentLocale=="zh_CN"?"zh":"en")+'&email='+email
		axios.get(
			url,
			{
			method:'get',
			withCredentials:true,
			})
		.then( (response) => {
			console.log(response);
			let res_obj = response.data;
			if(res_obj.result){
			alert(ok_msg);
			}else{
			alert(faild_msg2);
			}
		})
		.catch( (error) => {
			console.log(error)
			alert(error)
		});
	};

	handleClick = () => {
		const offset = this.downLoad.current.getBoundingClientRect();
		const { top } = offset;
		document.body.scrollTop = top;
		document.documentElement.scrollTop = top;
	};

	params_left = {
		direction: 'vertical',
		slidesPerView: 5,
		heigth:50,
		centeredSlides: true,
		initialSlide: 0,
		on: {
			slideChangeTransitionEnd: () => {
				this.handleSlideLeftChange();
			}
		}
	};

	params_right = {
		direction: 'vertical',
		initialSlide: 0,
		on: {
			slideChangeTransitionEnd: () => {
				this.handleSlideRightChange();
			}
		}
	};

	handleSlideLeftChange = () => {
		const { activeIndex } = this.swiperInstance_left;
		this.swiperInstance_right.slideTo(activeIndex);
	};

	handleSlideRightChange = () => {
		const { activeIndex } = this.swiperInstance_right;
		this.swiperInstance_left.slideTo(activeIndex);
	};

	updateleftSwiper = (swiperInstance) => {
		this.swiperInstance_left = swiperInstance;
	};

	updateRightSwiper = (swiperInstance) => {
		this.swiperInstance_right = swiperInstance;
	};

	switchSwiper = (next) => {
		if (next) {
			this.swiperInstance_left.slideNext();
		} else {
			this.swiperInstance_left.slidePrev();
		}
	};

	render() {
		const { currentLocale } = this.props;
		return (
			<div className={style.container}>
				<Header node={this.myRef} />
				<div className={style.top_box} ref={this.myRef}>
					<span className={style.icon} />
					<p className={style.title}>{_t('netcloth')}</p>
					<p className={classNames(style.tips, style[currentLocale])}>{_t('tips')}</p>
					<div className={style.try_btn}>
						<a onClick={this.handleClick}>{_t('try.btn')}</a>
					</div>
					<p className={style.more}>
						<a className={style.mouse}>
							<span className={style.dot} />
						</a>
						<span>{_t('more.btn')}</span>
					</p>
				</div>
				<Application />
				<div className={style.feature_box}>
					<p className={style.title}>{_t('feature.title')}</p>
					<div className={style.content}>
						{features.map((item, key) => {
							const { cls, title } = item;
							return (
								<div className={style.content_item} key={key}>
									<span className={classNames(style.item_icon, style[cls])} />
									<p className={style.item_title}>{_t(title)}</p>
								</div>
							);
						})}
					</div>
				</div>
				<div className={style.swiper_box}>
					<div className={style.swiper_year}>
						<div className={style.activeItem}>
							<i className={style.symbol} />
							<i
								className={style.up}
								onClick={() => {
									this.switchSwiper(false);
								}}
							/>
							<i
								onClick={() => {
									this.switchSwiper(true);
								}}
								className={style.down}
							/>
						</div>
						<Swiper {...this.params_left} getSwiper={this.updateleftSwiper}>
							{swiper_left.map((item, idx) => {
								return (
									<div key={idx}>
										<div className={style.swiper_year_wrapper}>
											<div className={style.year}>{_t(item.title)}</div>
										</div>
									</div>
								);
							})}
						</Swiper>
					</div>
					<div className={style.content_year}>
						<p className={style.content_year_title}>{_t('swiper.tips')}</p>
						<div className={style.content_wrapper}>
							<Swiper {...this.params_right} getSwiper={this.updateRightSwiper}>
								{swiper_right.map((item, idx) => {
									return (
										<div key={idx}>
											<div className={style.content}>
												<div className={style.im}>
													<i className={style.im_icon} />
													<div className={style.im_content}>
														<span>{_t('swiper.im')}</span>
														<p>{_t(item.im)}</p>
													</div>
												</div>
												<div className={style.now}>
													<div className={style.now_icon}>
														<span />
													</div>
													<div className={style.now_content}>
														<span>NetCloth</span>
														<p>{_t(item.now)}</p>
													</div>
												</div>
											</div>
										</div>
									);
								})}
							</Swiper>
						</div>
					</div>
				</div>
				<div className={style.down_box} id="down" ref={this.downLoad}>
					<p className={style.title}>{_t('down.title')}</p>
					<p className={style.info_one}>{_t('down.tips1')}</p>
					<p className={style.info_two}>{_t('down.tips2')}</p>
					<div className={style.download_icons}>
						
						<a href="https://apps.apple.com/cn/app/netcloth/id1481045375" target="_blank" className={classNames(style.icon, style.iphone)}> </a>

						<a href="http://47.52.103.194/netcloth1.1.10.apk" download="netcloth1.1.10.apk" className={classNames(style.icon, style.and)}> </a> 

						<a href="https://play.google.com/store/apps/details?id=com.netcloth.chat" target="_blank" className={classNames(style.icon, style.google)}> </a>
					</div>
				</div>
				<div className={style.faq_box}>
					<span className={style.icon} />
					<p className={style.title}>{_t('faq.faq')}</p>
					<div className={style.content}>
						{faqs.slice(0, 6).map((item, key) => {
							const { text } = item;
							return (
								<a href={_t('faq.src')} target="_blank" className={style.content_item} key={key}>
									{_t(text)}
								</a>
							);
						})}
						<a href={_t('faq.src')} target="_blank" className={style.more_btn}>
							{_t('faq.more')} >
						</a>
					</div>
				</div>
				<div className={style.subscription_box}>
					<p className={style.info_one}>{_t('subscribe.title')}</p>
					<p className={style.info_two}>{_t('subscribe.content')}</p>
					<div className={style.input_wrapper}>
						<input type="text" id="email_input" placeholder={_t('subscribe.hint')} />
						<a className={style.btn} onClick={this.handleSubscribe}>{_t('subscribe.button')}</a>
					</div>
				</div>
				<Footer className={style.footerWrapper} />
			</div>
		);
	}
}
