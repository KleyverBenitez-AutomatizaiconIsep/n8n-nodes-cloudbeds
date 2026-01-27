import type { INodeProperties } from 'n8n-workflow';

export const reservationOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['reservation'],
			},
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				description: 'Get a reservation',
				action: 'Get a reservation',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get many reservations',
				action: 'Get many reservations',
			},
			{
				name: 'Update Room',
				value: 'updateRoom',
				description: 'Update room assignment for a reservation',
				action: 'Update reservation room',
			},
		],
		default: 'get',
	},
];

export const reservationFields: INodeProperties[] = [
	// Get
	{
		displayName: 'Reservation ID',
		name: 'reservationId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['reservation'],
				operation: ['get'],
			},
		},
		default: '',
		description: 'The ID of the reservation',
	},
	// Get Many
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['reservation'],
				operation: ['getAll'],
			},
		},
		default: false,
		description: 'Whether to return all results or only up to a given limit',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['reservation'],
				operation: ['getAll'],
				returnAll: [false],
			},
		},
		typeOptions: {
			minValue: 1,
			maxValue: 100,
		},
		default: 50,
		description: 'Max number of results to return',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['reservation'],
				operation: ['getAll'],
			},
		},
		options: [
			{
				displayName: 'Check-in Date From',
				name: 'checkinDateFrom',
				type: 'dateTime',
				default: '',
				description: 'Filter by check-in date from',
			},
			{
				displayName: 'Check-in Date To',
				name: 'checkinDateTo',
				type: 'dateTime',
				default: '',
				description: 'Filter by check-in date to',
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				options: [
					{ name: 'Canceled', value: 'canceled' },
					{ name: 'Checked In', value: 'checked_in' },
					{ name: 'Checked Out', value: 'checked_out' },
					{ name: 'Confirmed', value: 'confirmed' },
					{ name: 'No Show', value: 'no_show' },
				],
				default: 'confirmed',
				description: 'Filter by reservation status',
			},
		],
	},
	// Update Room
	{
		displayName: 'Reservation ID',
		name: 'reservationId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['reservation'],
				operation: ['updateRoom'],
			},
		},
		default: '',
		description: 'The ID of the reservation',
	},
	{
		displayName: 'Reservation Room ID',
		name: 'reservationRoomId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['reservation'],
				operation: ['updateRoom'],
			},
		},
		default: '',
		description: 'The ID of the reservation room',
	},
	{
		displayName: 'Room ID',
		name: 'roomId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['reservation'],
				operation: ['updateRoom'],
			},
		},
		default: '',
		description: 'The ID of the room to assign (leave empty to unassign)',
	},
];
