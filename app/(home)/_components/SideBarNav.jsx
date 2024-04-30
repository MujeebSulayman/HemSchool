import Image from 'next/image';
import React from 'react';

const SideBarNav = () => {
	const menuList = [
		{
			id: 1,
			name: 'Browse',
			icon: Search,
			path: '/browse',
		},
		{
			id: 2,
			name: 'Dashboard',
			icon: Layout,
			path: '/dashboard',
		},
		{
			id: 3,
			name: 'Upgarde',
			icon: Shield,
			path: '/upgrade',
		},
		{
			id: 4,
			name: 'Newsletter',
			icon: Mail,
			path: '/newsletter',
		},
	];

	return (
		<div className='h-full b-hiwte border-r flex-col flex overflow-y-auto shadow-md'>
			<div className='p-5 border-b'>
				<Image
					src='/hoobank.svg'
					alt='logo'
					width={170}
					height={100}
				/>
			</div>
		</div>
	);
};

export default SideBarNav;
