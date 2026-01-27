import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { cloudbedsApiRequest } from '../../shared/transport';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function getStatus(this: IExecuteFunctions, _index: number) {
	return await cloudbedsApiRequest.call(
		this,
		'GET',
		'/getHousekeepingStatus',
		{},
		{},
	);
}

export async function getAssignments(this: IExecuteFunctions, index: number) {
	const filters = this.getNodeParameter('filters', index) as IDataObject;
	const qs: IDataObject = { ...filters };
	return await cloudbedsApiRequest.call(
		this,
		'GET',
		'/getHousekeepingAssignments',
		{},
		qs,
	);
}

export async function updateRoomCondition(this: IExecuteFunctions, index: number) {
	const roomId = this.getNodeParameter('roomId', index) as string;
	const roomCondition = this.getNodeParameter('roomCondition', index) as string;

	const body: IDataObject = {
		roomID: roomId,
		roomCondition,
	};

	return await cloudbedsApiRequest.call(
		this,
		'PUT',
		'/putRoomCondition',
		body,
	);
}
