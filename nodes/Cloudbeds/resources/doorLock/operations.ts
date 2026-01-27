import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { cloudbedsApiRequest, cloudbedsApiRequestAllItems } from '../../shared/transport';

export async function getKeys(this: IExecuteFunctions, index: number) {
	const propertyId = this.getNodeParameter('propertyId', index) as string;
	const returnAll = this.getNodeParameter('returnAll', index);

	if (returnAll) {
		return await cloudbedsApiRequestAllItems.call(
			this,
			'GET',
			`/doorlock/v1/keys/${propertyId}`,
			{},
			{},
		);
	} else {
		const limit = this.getNodeParameter('limit', index);
		const response = await cloudbedsApiRequest.call(
			this,
			'GET',
			`/doorlock/v1/keys/${propertyId}`,
			{},
			{ limit },
		);
		return response.data || [];
	}
}

export async function createKey(this: IExecuteFunctions, index: number) {
	const roomId = this.getNodeParameter('roomId', index) as string;
	const reservationId = this.getNodeParameter('reservationId', index) as string;
	const startTime = this.getNodeParameter('startTime', index) as string;
	const endTime = this.getNodeParameter('endTime', index) as string;

	const body: IDataObject = {
		roomId,
		startTime,
		endTime,
	};

	if (reservationId) {
		body.reservationId = reservationId;
	}

	return await cloudbedsApiRequest.call(this, 'POST', '/doorlock/v1/keys', body);
}

export async function deleteKey(this: IExecuteFunctions, index: number) {
	const keyId = this.getNodeParameter('keyId', index) as string;
	return await cloudbedsApiRequest.call(this, 'DELETE', `/doorlock/v1/keys/${keyId}`);
}

export async function deleteKeysBatch(this: IExecuteFunctions, index: number) {
	const keyIds = this.getNodeParameter('keyIds', index) as string;
	return await cloudbedsApiRequest.call(this, 'DELETE', '/doorlock/v1/keys', {}, { keyIds });
}

export async function updateKey(this: IExecuteFunctions, index: number) {
	const keyId = this.getNodeParameter('keyId', index) as string;
	const updateFields = this.getNodeParameter('updateFields', index) as IDataObject;
	return await cloudbedsApiRequest.call(this, 'PATCH', `/doorlock/v1/keys/${keyId}`, updateFields);
}

export async function getSettings(this: IExecuteFunctions, index: number) {
	const propertyId = this.getNodeParameter('propertyId', index) as string;
	return await cloudbedsApiRequest.call(this, 'GET', `/doorlock/v1/settings/${propertyId}`);
}

export async function deleteSettings(this: IExecuteFunctions, index: number) {
	const propertyId = this.getNodeParameter('propertyId', index) as string;
	return await cloudbedsApiRequest.call(this, 'DELETE', `/doorlock/v1/settings/${propertyId}`);
}

export async function upsertSettings(this: IExecuteFunctions, index: number) {
	const propertyId = this.getNodeParameter('propertyId', index) as string;
	const settings = this.getNodeParameter('settings', index) as IDataObject;
	return await cloudbedsApiRequest.call(this, 'PUT', `/doorlock/v1/settings/${propertyId}`, settings);
}
