import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { cloudbedsApiRequest, cloudbedsApiRequestAllItems } from '../../shared/transport';

export async function create(this: IExecuteFunctions, index: number) {
	const firstName = this.getNodeParameter('firstName', index) as string;
	const lastName = this.getNodeParameter('lastName', index) as string;
	const additionalFields = this.getNodeParameter('additionalFields', index) as IDataObject;

	const body: IDataObject = {
		guestFirstName: firstName,
		guestLastName: lastName,
		...additionalFields,
	};

	return await cloudbedsApiRequest.call(this, 'POST', '/postGuest', body);
}

export async function get(this: IExecuteFunctions, index: number) {
	const guestId = this.getNodeParameter('guestId', index) as string;
	return await cloudbedsApiRequest.call(this, 'GET', '/getGuest', {}, { guestID: guestId });
}

export async function getAll(this: IExecuteFunctions, index: number) {
	const returnAll = this.getNodeParameter('returnAll', index);
	const filters = this.getNodeParameter('filters', index) as IDataObject;

	const qs: IDataObject = { ...filters };

	if (returnAll) {
		return await cloudbedsApiRequestAllItems.call(this, 'GET', '/getGuestsByFilter', {}, qs);
	} else {
		const limit = this.getNodeParameter('limit', index);
		qs.pageSize = limit;
		const response = await cloudbedsApiRequest.call(this, 'GET', '/getGuestsByFilter', {}, qs);
		return response.data || [];
	}
}

export async function search(this: IExecuteFunctions, index: number) {
	const query = this.getNodeParameter('query', index) as string;
	const returnAll = this.getNodeParameter('returnAll', index);

	const qs: IDataObject = { guestName: query };

	if (returnAll) {
		return await cloudbedsApiRequestAllItems.call(this, 'GET', '/getGuestsByFilter', {}, qs);
	} else {
		const limit = this.getNodeParameter('limit', index);
		qs.pageSize = limit;
		const response = await cloudbedsApiRequest.call(this, 'GET', '/getGuestsByFilter', {}, qs);
		return response.data || [];
	}
}

export async function update(this: IExecuteFunctions, index: number) {
	const guestId = this.getNodeParameter('guestId', index) as string;
	const updateFields = this.getNodeParameter('updateFields', index) as IDataObject;
	const body: IDataObject = {
		guestID: guestId,
		...updateFields,
	};
	return await cloudbedsApiRequest.call(this, 'PUT', '/putGuest', body);
}
