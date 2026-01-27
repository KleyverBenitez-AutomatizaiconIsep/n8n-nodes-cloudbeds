import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { cloudbedsApiRequest, cloudbedsApiRequestAllItems } from '../../shared/transport';

export async function create(this: IExecuteFunctions, index: number) {
	const title = this.getNodeParameter('title', index) as string;
	const startDate = this.getNodeParameter('startDate', index) as string;
	const endDate = this.getNodeParameter('endDate', index) as string;
	const additionalFields = this.getNodeParameter('additionalFields', index) as IDataObject;

	const body: IDataObject = {
		title,
		startDate,
		endDate,
	};

	if (additionalFields.description) {
		body.description = additionalFields.description;
	}

	if (additionalFields.location) {
		body.location = additionalFields.location;
	}

	return await cloudbedsApiRequest.call(this, 'POST', '/events/v2/events', body);
}

export async function deleteEvent(this: IExecuteFunctions, index: number) {
	const eventId = this.getNodeParameter('eventId', index) as string;

	return await cloudbedsApiRequest.call(this, 'DELETE', `/events/v2/events/${eventId}`);
}

export async function get(this: IExecuteFunctions, index: number) {
	const eventId = this.getNodeParameter('eventId', index) as string;

	return await cloudbedsApiRequest.call(this, 'GET', `/events/v2/events/${eventId}`);
}

export async function getAll(this: IExecuteFunctions, index: number) {
	const returnAll = this.getNodeParameter('returnAll', index);
	const filters = this.getNodeParameter('filters', index) as IDataObject;

	const qs: IDataObject = {};

	if (filters.startDateFrom) {
		qs.startDateFrom = filters.startDateFrom;
	}

	if (filters.startDateTo) {
		qs.startDateTo = filters.startDateTo;
	}

	if (returnAll) {
		return await cloudbedsApiRequestAllItems.call(this, 'GET', '/events/v2/events', {}, qs);
	} else {
		const limit = this.getNodeParameter('limit', index);
		qs.limit = limit;
		const response = await cloudbedsApiRequest.call(this, 'GET', '/events/v2/events', {}, qs);
		return response.data || [];
	}
}

export async function update(this: IExecuteFunctions, index: number) {
	const eventId = this.getNodeParameter('eventId', index) as string;
	const updateFields = this.getNodeParameter('updateFields', index) as IDataObject;

	const body: IDataObject = {};

	if (updateFields.title) {
		body.title = updateFields.title;
	}

	if (updateFields.startDate) {
		body.startDate = updateFields.startDate;
	}

	if (updateFields.endDate) {
		body.endDate = updateFields.endDate;
	}

	if (updateFields.description) {
		body.description = updateFields.description;
	}

	if (updateFields.location) {
		body.location = updateFields.location;
	}

	return await cloudbedsApiRequest.call(this, 'PATCH', `/events/v2/events/${eventId}`, body);
}
