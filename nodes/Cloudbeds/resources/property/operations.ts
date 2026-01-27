import type { IExecuteFunctions } from 'n8n-workflow';
import { cloudbedsApiRequest } from '../../shared/transport';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function getSystem(this: IExecuteFunctions, _index: number) {
	return await cloudbedsApiRequest.call(this, 'GET', '/getHotels');
}
