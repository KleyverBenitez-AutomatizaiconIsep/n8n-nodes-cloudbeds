import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { cloudbedsApiRequest, cloudbedsApiRequestAllItems } from '../../shared/transport';

// Group operations
export async function createGroup(this: IExecuteFunctions, index: number) {
	const name = this.getNodeParameter('name', index) as string;
	return await cloudbedsApiRequest.call(this, 'POST', '/market-segmentation/v1/groups', { name });
}

export async function getGroup(this: IExecuteFunctions, index: number) {
	const groupId = this.getNodeParameter('groupId', index) as string;
	return await cloudbedsApiRequest.call(this, 'GET', `/market-segmentation/v1/groups/${groupId}`);
}

export async function getGroups(this: IExecuteFunctions, index: number) {
	const returnAll = this.getNodeParameter('returnAll', index);

	if (returnAll) {
		return await cloudbedsApiRequestAllItems.call(this, 'GET', '/market-segmentation/v1/groups', {}, {});
	} else {
		const limit = this.getNodeParameter('limit', index);
		const response = await cloudbedsApiRequest.call(this, 'GET', '/market-segmentation/v1/groups', {}, { limit });
		return response.data || [];
	}
}

export async function updateGroup(this: IExecuteFunctions, index: number) {
	const groupId = this.getNodeParameter('groupId', index) as string;
	const updateFields = this.getNodeParameter('updateFields', index) as IDataObject;
	return await cloudbedsApiRequest.call(this, 'PATCH', `/market-segmentation/v1/groups/${groupId}`, updateFields);
}

export async function deleteGroup(this: IExecuteFunctions, index: number) {
	const groupId = this.getNodeParameter('groupId', index) as string;
	return await cloudbedsApiRequest.call(this, 'DELETE', `/market-segmentation/v1/groups/${groupId}`);
}

export async function enableGroup(this: IExecuteFunctions, index: number) {
	const groupId = this.getNodeParameter('groupId', index) as string;
	return await cloudbedsApiRequest.call(this, 'POST', `/market-segmentation/v1/groups/${groupId}/enable`);
}

export async function disableGroup(this: IExecuteFunctions, index: number) {
	const groupId = this.getNodeParameter('groupId', index) as string;
	return await cloudbedsApiRequest.call(this, 'POST', `/market-segmentation/v1/groups/${groupId}/disable`);
}

// Segment operations
export async function createSegment(this: IExecuteFunctions, index: number) {
	const name = this.getNodeParameter('segmentName', index) as string;
	const groupId = this.getNodeParameter('groupIdForSegment', index) as string;
	return await cloudbedsApiRequest.call(this, 'POST', '/market-segmentation/v1/segments', { name, groupId });
}

export async function getSegment(this: IExecuteFunctions, index: number) {
	const segmentId = this.getNodeParameter('segmentId', index) as string;
	return await cloudbedsApiRequest.call(this, 'GET', `/market-segmentation/v1/segments/${segmentId}`);
}

export async function getSegments(this: IExecuteFunctions, index: number) {
	const returnAll = this.getNodeParameter('returnAll', index);
	const enabledOnly = this.getNodeParameter('enabledOnly', index);

	const endpoint = `/market-segmentation/v1/segments/${enabledOnly ? 'true' : 'false'}`;

	if (returnAll) {
		return await cloudbedsApiRequestAllItems.call(this, 'GET', endpoint, {}, {});
	} else {
		const limit = this.getNodeParameter('limit', index);
		const response = await cloudbedsApiRequest.call(this, 'GET', endpoint, {}, { limit });
		return response.data || [];
	}
}

export async function updateSegment(this: IExecuteFunctions, index: number) {
	const segmentId = this.getNodeParameter('segmentId', index) as string;
	const updateFields = this.getNodeParameter('segmentUpdateFields', index) as IDataObject;
	return await cloudbedsApiRequest.call(this, 'PATCH', `/market-segmentation/v1/segments/${segmentId}`, updateFields);
}

export async function deleteSegment(this: IExecuteFunctions, index: number) {
	const segmentId = this.getNodeParameter('segmentId', index) as string;
	return await cloudbedsApiRequest.call(this, 'DELETE', `/market-segmentation/v1/segments/${segmentId}`);
}

export async function enableSegment(this: IExecuteFunctions, index: number) {
	const segmentId = this.getNodeParameter('segmentId', index) as string;
	return await cloudbedsApiRequest.call(this, 'POST', `/market-segmentation/v1/segments/${segmentId}/enable`);
}

export async function disableSegment(this: IExecuteFunctions, index: number) {
	const segmentId = this.getNodeParameter('segmentId', index) as string;
	return await cloudbedsApiRequest.call(this, 'POST', `/market-segmentation/v1/segments/${segmentId}/disable`);
}

export async function setDefaultSegment(this: IExecuteFunctions, index: number) {
	const segmentId = this.getNodeParameter('segmentId', index) as string;
	return await cloudbedsApiRequest.call(this, 'POST', `/market-segmentation/v1/segments/${segmentId}/default`);
}

export async function getSegmentReservations(this: IExecuteFunctions, index: number) {
	const segmentId = this.getNodeParameter('segmentId', index) as string;
	const returnAll = this.getNodeParameter('returnAll', index);
	const activeOnly = this.getNodeParameter('activeOnly', index);

	const endpoint = `/market-segmentation/v1/segments/${segmentId}/reservations/${activeOnly ? 'true' : 'false'}`;

	if (returnAll) {
		return await cloudbedsApiRequestAllItems.call(this, 'GET', endpoint, {}, {});
	} else {
		const limit = this.getNodeParameter('limit', index);
		const response = await cloudbedsApiRequest.call(this, 'GET', endpoint, {}, { limit });
		return response.data || [];
	}
}
