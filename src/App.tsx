import {
	CaretDownFilled,
	DoubleRightOutlined,
	GithubFilled,
	InfoCircleFilled,
	PlusCircleFilled,
	QuestionCircleFilled,
	SearchOutlined,
} from '@ant-design/icons';
import type { ProSettings } from '@ant-design/pro-components';
import {
	PageContainer,
	ProCard,
	ProConfigProvider,
	ProLayout,
	SettingDrawer,
} from '@ant-design/pro-components';
import { css } from '@emotion/css';
import { Button, ConfigProvider, Divider, Input, Popover, theme } from 'antd';
import React, { useState } from 'react';
import defaultProps from './Config/_defaultProps';

import locale from 'antd/locale/fr_FR';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import _routes from './Routes/_routes';
const router = createBrowserRouter(_routes);

const Item: React.FC<{ children: React.ReactNode }> = props => {
	const { token } = theme.useToken();
	return (
		<div
			className={css`
				color: ${token.colorTextSecondary};
				font-size: 14px;
				cursor: pointer;
				line-height: 22px;
				margin-bottom: 8px;
				&:hover {
					color: ${token.colorPrimary};
				}
			`}
			style={{
				width: '33.33%',
			}}>
			{props.children}
			<DoubleRightOutlined
				style={{
					marginInlineStart: 4,
				}}
			/>
		</div>
	);
};

const List: React.FC<{
	title: string;
	style?: React.CSSProperties;
}> = props => {
	const { token } = theme.useToken();

	return (
		<div
			style={{
				width: '100%',
				...props.style,
			}}>
			<div
				style={{
					fontSize: 16,
					color: token.colorTextHeading,
					lineHeight: '24px',
					fontWeight: 500,
					marginBlockEnd: 16,
				}}>
				{props.title}
			</div>
			<div
				style={{
					display: 'flex',
					flexWrap: 'wrap',
				}}>
				{new Array(6).fill(1).map((_, index) => {
					return <Item key={index}>具体的解决方案-{index}</Item>;
				})}
			</div>
		</div>
	);
};

const MenuCard = () => {
	const { token } = theme.useToken();
	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
			}}>
			<Divider
				style={{
					height: '1.5em',
				}}
				type="vertical"
			/>
			<Popover
				placement="bottom"
				overlayStyle={{
					width: 'calc(100vw - 24px)',
					padding: '24px',
					paddingTop: 8,
					height: '307px',
					borderRadius: '0 0 6px 6px',
				}}
				content={
					<div style={{ display: 'flex', padding: '32px 40px' }}>
						<div style={{ flex: 1 }}>
							<List title="金融解决方案" />
							<List
								title="其他解决方案"
								style={{
									marginBlockStart: 32,
								}}
							/>
						</div>

						<div
							style={{
								width: '308px',
								borderInlineStart:
									'1px solid ' + token.colorBorder,
								paddingInlineStart: 16,
							}}>
							<div
								className={css`
									font-size: 14px;
									color: ${token.colorText};
									line-height: 22px;
								`}>
								DOCUMENTS
							</div>
							{new Array(3).fill(1).map((name, index) => {
								return (
									<div
										key={index}
										className={css`
											border-radius: 4px;
											padding: 16px;
											margin-top: 4px;
											display: flex;
											cursor: pointer;
											&:hover {
												background-color: ${token.colorBgTextHover};
											}
										`}>
										<img src="https://gw.alipayobjects.com/zos/antfincdn/6FTGmLLmN/bianzu%25252013.svg" />
										<div
											style={{
												marginInlineStart: 14,
											}}>
											<div
												className={css`
													font-size: 14px;
													color: ${token.colorText};
													line-height: 22px;
												`}>
												Ant Design
											</div>
											<div
												className={css`
													font-size: 12px;
													color: ${token.colorTextSecondary};
													line-height: 20px;
												`}>
												杭州市较知名的 UI 设计语言
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				}>
				<div
					style={{
						color: token.colorTextHeading,
						fontWeight: 500,
						cursor: 'pointer',
						display: 'flex',
						gap: 4,
						paddingInlineStart: 8,
						paddingInlineEnd: 12,
						alignItems: 'center',
					}}
					className={css`
						&:hover {
							background-color: ${token.colorBgTextHover};
						}
					`}>
					<span> Centre d'apprentissage</span>
					<CaretDownFilled />
				</div>
			</Popover>
		</div>
	);
};

const SearchInput = () => {
	const { token } = theme.useToken();
	return (
		<div
			key="SearchOutlined"
			aria-hidden
			style={{
				display: 'flex',
				alignItems: 'center',
				marginInlineEnd: 24,
			}}
			onMouseDown={e => {
				e.stopPropagation();
				e.preventDefault();
			}}>
			<Input
				style={{
					borderRadius: 4,
					marginInlineEnd: 12,
					backgroundColor: token.colorBgTextHover,
				}}
				prefix={
					<SearchOutlined
						style={{
							color: token.colorTextLightSolid,
						}}
					/>
				}
				placeholder="搜索方案"
				bordered={false}
			/>
			<PlusCircleFilled
				style={{
					color: token.colorPrimary,
					fontSize: 24,
				}}
			/>
		</div>
	);
};

export default () => {
	const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
		fixSiderbar: true,
		layout: 'mix',
		splitMenus: true,
	});

	const [pathname, setPathnamex] = useState(router.state.location.pathname);

	const setPathname = (path: string) => {
		setPathnamex(path);
		router.navigate(path);
	};

	router.subscribe(location => {
		// Fix for when the user is redirected
		setPathnamex(location.location.pathname);
	});

	const [num, setNum] = useState(40);
	return (
		<div
			id="test-pro-layout"
			style={{
				height: '100vh',
			}}>
			<ConfigProvider locale={locale}>
				<ProConfigProvider hashed={false}>
					<ProLayout
						prefixCls="my-prefix"
						bgLayoutImgList={[
							{
								src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
								left: 85,
								bottom: 100,
								height: '303px',
							},
							{
								src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
								bottom: -68,
								right: -45,
								height: '303px',
							},
							{
								src: 'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
								bottom: 0,
								left: 0,
								width: '331px',
							},
						]}
						{...defaultProps}
						location={{
							pathname,
						}}
						siderMenuType="group"
						menu={{
							collapsedShowGroupTitle: true,
						}}
						avatarProps={{
							src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
							size: 'small',
							title: '七妮妮',
						}}
						actionsRender={props => {
							if (props.isMobile) return [];
							return [
								props.layout !== 'side' &&
									document.body.clientWidth > 1400 ? (
									<SearchInput />
								) : undefined,
								<InfoCircleFilled key="InfoCircleFilled" />,
								<QuestionCircleFilled key="QuestionCircleFilled" />,
								<GithubFilled key="GithubFilled" />,
							];
						}}
						headerTitleRender={(logo, title, _) => {
							const defaultDom = (
								<a>
									{logo}
									{title}
								</a>
							);
							if (document.body.clientWidth < 1400) {
								return defaultDom;
							}
							if (_.isMobile) return defaultDom;
							return (
								<>
									{defaultDom}
									<MenuCard />
								</>
							);
						}}
						menuFooterRender={props => {
							if (props?.collapsed) return undefined;
							return (
								<div
									style={{
										textAlign: 'center',
										paddingBlockStart: 12,
									}}>
									<div>© 2021 Made with love</div>
									<div>by Ant Design</div>
								</div>
							);
						}}
						onMenuHeaderClick={e => console.log(e)}
						menuItemRender={(item, dom) => (
							<div
								onClick={() => {
									setPathname(item.path || '/welcome');
								}}>
								{dom}
							</div>
						)}
						{...settings}>
						<PageContainer
							token={{
								paddingInlinePageContainerContent: num,
							}}
							extra={[
								<Button key="3">操作</Button>,
								<Button key="2">操作</Button>,
								<Button
									key="1"
									type="primary"
									onClick={() => {
										setNum(num > 0 ? 0 : 40);
									}}>
									主操作
								</Button>,
							]}
							subTitle="简单的描述"

							footer={[
								<Button key="3">重置</Button>,
								<Button key="2" type="primary">
									提交
								</Button>,
							]}>
							<ProCard
								loading={false}
								style={{
									height: '200vh',
									minHeight: 500,
								}}>
								<RouterProvider router={router} />
								<div />
							</ProCard>
						</PageContainer>

						<SettingDrawer
							pathname={pathname}
							enableDarkTheme
							getContainer={() =>
								document.getElementById('test-pro-layout')
							}
							settings={settings}
							onSettingChange={changeSetting => {
								setSetting(changeSetting);
							}}
							disableUrlParams={false}
						/>
					</ProLayout>
				</ProConfigProvider>
			</ConfigProvider>
		</div>
	);
};
