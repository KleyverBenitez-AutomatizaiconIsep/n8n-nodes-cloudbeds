import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { cloudbedsApiRequest } from '../../shared/transport';

export async function get(this: IExecuteFunctions, index: number) {
	const itemId = this.getNodeParameter('itemId', index) as string;
	return await cloudbedsApiRequest.call(this, 'GET', '/getItem', {}, { itemID: itemId });
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function getAll(this: IExecuteFunctions, _index: number) {
	return await cloudbedsApiRequest.call(this, 'GET', '/getItems');
}

export async function addToReservation(this: IExecuteFunctions, index: number) {
	const reservationId = this.getNodeParameter('reservationId', index) as string;
	const itemId = this.getNodeParameter('itemId', index) as string;
	const quantity = this.getNodeParameter('quantity', index) as number;

	const body: IDataObject = {
		reservationID: reservationId,
		itemID: itemId,
		quantity,
	};

	return await cloudbedsApiRequest.call(this, 'POST', '/postItem', body);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function getCategories(this: IExecuteFunctions, _index: number) {
	return await cloudbedsApiRequest.call(this, 'GET', '/getItemCategories');
}
