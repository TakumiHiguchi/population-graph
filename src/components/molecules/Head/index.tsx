import _Head from 'next/head';
import { FC } from 'react';
import { HeadType } from './types';

const Head: FC<HeadType> = ({ title, description, image, url }: HeadType) => {
	return (
		<_Head>
			<title>{title}</title>
			<meta property='og:title' content={title} />
			<meta property='og:description' content={description} />
			<meta property='og:type' content='blog' />
			<meta property='og:url' content={url} />
			<meta property='og:image' content={image} />
			<meta property='og:site_name' content={title} />
			<meta name='twitter:card' content='summary_large_image' />
			<meta name='twitter:site' content='@taku_remonziru' />
			<meta name='twitter:url' content={url} />
			<meta name='twitter:title' content={title} />
			<meta name='twitter:description' content={description} />
			<meta name='twitter:image' content={image} />
			<link rel='canonical' href={url} />
		</_Head>
	);
};

export default Head;
