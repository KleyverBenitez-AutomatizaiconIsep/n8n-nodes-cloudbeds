import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { cloudbedsApiRequest } from '../../shared/transport';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function getAll(this: IExecuteFunctions, _index: number) {
	// Cloudbeds API uses /getHotelFeesAndAddons to fetch addons
	const response = await cloudbedsApiRequest.call(this, 'GET', '/getHotelFeesAndAddons');
	// Filter to return only addons if the response includes both fees and addons
	if (response.data && Array.isArray(response.data)) {
		return { ...response, data: response.data.filter((item: IDataObject) => item.type === 'addon') };
	}
	return response;
}

export async function addToReservation(this: IExecuteFunctions, index: number) {
	const reservationId = this.getNodeParameter('reservationId', index) as string;
	const addonId = this.getNodeParameter('addonId', index) as string;
	const quantity = this.getNodeParameter('quantity', index) as number;
	const amount = this.getNodeParameter('amount', index) as number;

	const body: IDataObject = {
		reservationID: reservationId,
		addonID: addonId,
		quantity,
		amount,
	};

	return await cloudbedsApiRequest.call(this, 'POST', '/postAddon', body);
}
