import type { INodeProperties } from 'n8n-workflow';

export const integrationEventOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['integrationEvent'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new integration event',
				action: 'Create an integration event',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get many integration events',
				action: 'Get many integration events',
			},
			{
				name: 'Retry',
				value: 'retry',
				description: 'Retry a failed integration event',
				action: 'Retry an integration event',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update an integration event',
				action: 'Update an integration event',
			},
		],
		default: 'getAll',
	},
];

export const integrationEventFields: INodeProperties[] = [
	// ----------------------------------
	//         integrationEvent: create
	// ----------------------------------
	{
		displayName: 'Event Type',
		name: 'eventType',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['integrationEvent'],
				operation: ['create'],
			},
		},
		description: 'The type of integration event to create',
	},
	{
		displayName: 'Payload',
		name: 'payload',
		type: 'json',
		required: true,
		default: '{}',
		displayOptions: {
			show: {
				resource: ['integrationEvent'],
				operation: ['create'],
			},
		},
		description: 'The JSON payload for the integration event',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['integrationEvent'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Reference ID',
				name: 'referenceId',
				type: 'string',
				default: '',
				description: 'External reference ID for the event',
			},
			{
				displayName: 'Scheduled At',
				name: 'scheduledAt',
				type: 'dateTime',
				default: '',
				description: 'When to schedule the event for processing',
			},
		],
	},

	// ----------------------------------
	//         integrationEvent: getAll
	// ----------------------------------
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['integrationEvent'],
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
				resource: ['integrationEvent'],
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
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		default: {},
		displayOptions: {
			show: {
				resource: ['integrationEvent'],
				operation: ['getAll'],
			},
		},
		options: [
			{
				displayName: 'Event Type',
				name: 'eventType',
				type: 'string',
				default: '',
				description: 'Filter by event type',
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				options: [
					{ name: 'Pending', value: 'pending' },
					{ name: 'Processing', value: 'processing' },
					{ name: 'Completed', value: 'completed' },
					{ name: 'Failed', value: 'failed' },
				],
				default: 'pending',
				description: 'Filter by event status',
			},
			{
				displayName: 'Start Date',
				name: 'startDate',
				type: 'dateTime',
				default: '',
				description: 'Filter events created after this date',
			},
			{
				displayName: 'End Date',
				name: 'endDate',
				type: 'dateTime',
				default: '',
				description: 'Filter events created before this date',
			},
		],
	},

	// ----------------------------------
	//         integrationEvent: retry
	// ----------------------------------
	{
		displayName: 'Event ID',
		name: 'eventId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['integrationEvent'],
				operation: ['retry'],
			},
		},
		description: 'The ID of the integration event to retry',
	},

	// ----------------------------------
	//         integrationEvent: update
	// ----------------------------------
	{
		displayName: 'Event ID',
		name: 'eventId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['integrationEvent'],
				operation: ['update'],
			},
		},
		description: 'The ID of the integration event to update',
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['integrationEvent'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				options: [
					{ name: 'Pending', value: 'pending' },
					{ name: 'Processing', value: 'processing' },
					{ name: 'Completed', value: 'completed' },
					{ name: 'Failed', value: 'failed' },
				],
				default: 'pending',
				description: 'The new status for the event',
			},
			{
				displayName: 'Payload',
				name: 'payload',
				type: 'json',
				default: '{}',
				description: 'Updated JSON payload for the event',
			},
		],
	},
];
