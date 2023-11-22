/*
 * @Author: fyfe0203 freeser@live.cn
 * @Date: 2022-06-11 10:26:17
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-11-22 10:30:07
 * @Description:
 * @FilePath: /nuxt-blog-example/utils/index.ts
 */
export const convertDate = (published: string): string => {
	const months: { [key: number]: string } = {
		1: 'Jan',
		2: 'Feb',
		3: 'Mar',
		4: 'Apr',
		5: 'May',
		6: 'Jun',
		7: 'Jul',
		8: 'Aug',
		9: 'Sep',
		10: 'Oct',
		11: 'Nov',
		12: 'Dec',
	};
	if (!published) return '';
	const date = published.substring(0, 10);
	const [year, month, day] = date.split('-');
	return `${day}-${months[parseInt(month)]}-${year}`;
};

export const getJsonFromStr = (str: string) => {
	try {
		const toObj = JSON.parse(str);
		if (toObj && typeof toObj === 'object') {
			return toObj;
		}
	} catch {}
	return false;
};
