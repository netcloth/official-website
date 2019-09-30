import React from 'react';
import classNames from 'classnames';
import withLocal from 'components/withLocal';
import { _t } from 'utils/lang';
import { faqs, features, swiper_right, swiper_left } from 'config/base';
import Swiper from 'react-id-swiper';
import 'react-id-swiper/lib/styles/css/swiper.css';
import { Link } from 'dva/router';
import Header from 'components/h5/header';
import Footer from 'components/h5/Footer';
import Application from 'components/h5/Application';
import style from './index.scss';

@withLocal()
export default class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
		this.downLoad = React.createRef();
	}

	handleClick = () => {
		const offset = this.downLoad.current.getBoundingClientRect();
		const { top } = offset;
		document.body.scrollTop = top;
		document.documentElement.scrollTop = top;
	};

	params_left = {
		direction: 'vertical',
		slidesPerView: 5,
		autoHeight: true,
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
						<Link to="/download" className={classNames(style.icon, style.iphone)} />
						<Link to="/download" className={classNames(style.icon, style.and)} />
					</div>
				</div>
				<div className={style.faq_box}>
					<span className={style.icon} />
					<p className={style.title}>{_t('faq.faq')}</p>
					<div className={style.content}>
						{faqs.slice(0, 6).map((item, key) => {
							const { text } = item;
							return (
								<Link to="/faq" className={style.content_item} key={key}>
									{_t(text)}
								</Link>
							);
						})}
						<Link to="/faq" className={style.more_btn}>
							{_t('faq.more')} >
						</Link>
					</div>
				</div>
				<div className={style.subscription_box}>
					<p className={style.info_one}>{_t('subscribe.title')}</p>
					<p className={style.info_two}>{_t('subscribe.content')}</p>
					<div className={style.input_wrapper}>
						<input type="text" placeholder={_t('subscribe.hint')} />
						<a className={style.btn}>{_t('subscribe.button')}</a>
					</div>
				</div>
				<Footer className={style.footerWrapper} />
			</div>
		);
	}
}
