import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { cloudbedsApiRequest } from '../../shared/transport';

export async function get(this: IExecuteFunctions, index: number) {
	const reservationId = this.getNodeParameter('reservationId', index) as string;

	return await cloudbedsApiRequest.call(
		this,
		'GET',
		'/getReservation',
		{},
		{ reservationID: reservationId },
	);
}

export async function getAll(this: IExecuteFunctions, index: number) {
	const returnAll = this.getNodeParameter('returnAll', index);
	const additionalFields = this.getNodeParameter('additionalFields', index) as IDataObject;

	const qs: IDataObject = {};

	if (additionalFields.checkinDateFrom) {
		qs.checkInFrom = additionalFields.checkinDateFrom;
	}

	if (additionalFields.checkinDateTo) {
		qs.checkInTo = additionalFields.checkinDateTo;
	}

	if (additionalFields.status) {
		qs.status = additionalFields.status;
	}

	if (!returnAll) {
		const limit = this.getNodeParameter('limit', index);
		qs.pageSize = limit;
	}

	const response = await cloudbedsApiRequest.call(
		this,
		'GET',
		'/getReservations',
		{},
		qs,
	);
	return response.data || [];
}

export async function updateRoom(this: IExecuteFunctions, index: number) {
	const reservationId = this.getNodeParameter('reservationId', index) as string;
	const roomId = this.getNodeParameter('roomId', index) as string;

	const body: IDataObject = {
		reservationID: reservationId,
		roomID: roomId,
	};

	return await cloudbedsApiRequest.call(
		this,
		'PUT',
		'/putReservationRoom',
		body,
	);
}
