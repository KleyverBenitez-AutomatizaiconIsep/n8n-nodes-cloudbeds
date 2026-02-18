import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { cloudbedsApiRequest } from '../../shared/transport';

export async function create(this: IExecuteFunctions, index: number) {
	const startDate = this.getNodeParameter('startDate', index) as string;
	const endDate = this.getNodeParameter('endDate', index) as string;
	const guestFirstName = this.getNodeParameter('guestFirstName', index) as string;
	const guestLastName = this.getNodeParameter('guestLastName', index) as string;
	const guestEmail = this.getNodeParameter('guestEmail', index) as string;
	const guestCountry = this.getNodeParameter('guestCountry', index) as string;
	const guestZip = this.getNodeParameter('guestZip', index) as string;
	const roomTypeId = this.getNodeParameter('roomTypeId', index) as string;
	const roomQuantity = this.getNodeParameter('roomQuantity', index) as number;
	const adults = this.getNodeParameter('adults', index) as number;
	const children = this.getNodeParameter('children', index) as number;
	const paymentMethod = this.getNodeParameter('paymentMethod', index) as string;
	const additionalFields = this.getNodeParameter('additionalFields', index) as IDataObject;

	// Format dates to YYYY-MM-DD
	const formatDate = (dateStr: string) => {
		const date = new Date(dateStr);
		return date.toISOString().split('T')[0];
	};

	const body: IDataObject = {
		startDate: formatDate(startDate),
		endDate: formatDate(endDate),
		guestFirstName,
		guestLastName,
		guestEmail,
		guestCountry,
		guestZip,
		paymentMethod,
		// Arrays for rooms configuration
		'rooms[0][roomTypeID]': roomTypeId,
		'rooms[0][quantity]': roomQuantity,
		'adults[0]': adults,
		'children[0]': children,
	};

	// Add optional fields
	if (additionalFields.guestPhone) {
		body.guestPhone = additionalFields.guestPhone;
	}
	if (additionalFields.guestGender) {
		body.guestGender = additionalFields.guestGender;
	}
	if (additionalFields.sourceID) {
		body.sourceID = additionalFields.sourceID;
	}
	if (additionalFields.thirdPartyIdentifier) {
		body.thirdPartyIdentifier = additionalFields.thirdPartyIdentifier;
	}
	if (additionalFields.estimatedArrivalTime) {
		body.estimatedArrivalTime = additionalFields.estimatedArrivalTime;
	}
	if (additionalFields.promoCode) {
		body.promoCode = additionalFields.promoCode;
	}
	if (additionalFields.sendEmailConfirmation !== undefined) {
		body.sendEmailConfirmation = additionalFields.sendEmailConfirmation;
	}

	return await cloudbedsApiRequest.call(this, 'POST', '/postReservation', body);
}

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
