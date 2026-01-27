import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { cloudbedsApiRequest, cloudbedsApiRequestAllItems } from '../../shared/transport';

export async function create(this: IExecuteFunctions, index: number) {
	const eventType = this.getNodeParameter('eventType', index) as string;
	const payload = this.getNodeParameter('payload', index) as string;
	const additionalFields = this.getNodeParameter('additionalFields', index) as IDataObject;

	const body: IDataObject = {
		eventType,
		payload: typeof payload === 'string' ? JSON.parse(payload) : payload,
		...additionalFields,
	};

	return await cloudbedsApiRequest.call(this, 'POST', '/integration/v1/events', body);
}

export async function getAll(this: IExecuteFunctions, index: number) {
	const returnAll = this.getNodeParameter('returnAll', index);
	const filters = this.getNodeParameter('filters', index) as IDataObject;

	const qs: IDataObject = { ...filters };

	if (returnAll) {
		return await cloudbedsApiRequestAllItems.call(this, 'GET', '/integration/v1/events', {}, qs);
	} else {
		const limit = this.getNodeParameter('limit', index);
		qs.limit = limit;
		const response = await cloudbedsApiRequest.call(this, 'GET', '/integration/v1/events', {}, qs);
		return response.data || [];
	}
}

export async function retry(this: IExecuteFunctions, index: number) {
	const eventId = this.getNodeParameter('eventId', index) as string;
	return await cloudbedsApiRequest.call(this, 'POST', `/integration/v1/events/${eventId}/retry`);
}

export async function update(this: IExecuteFunctions, index: number) {
	const eventId = this.getNodeParameter('eventId', index) as string;
	const updateFields = this.getNodeParameter('updateFields', index) as IDataObject;

	if (updateFields.payload && typeof updateFields.payload === 'string') {
		updateFields.payload = JSON.parse(updateFields.payload as string);
	}

	return await cloudbedsApiRequest.call(this, 'PATCH', `/integration/v1/events/${eventId}`, updateFields);
}
