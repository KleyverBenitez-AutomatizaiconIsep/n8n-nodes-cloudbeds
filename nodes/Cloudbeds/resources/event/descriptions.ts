import type { INodeProperties } from 'n8n-workflow';

export const eventOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['event'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new event',
				action: 'Create an event',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete an event',
				action: 'Delete an event',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get an event',
				action: 'Get an event',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get many events',
				action: 'Get many events',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update an event',
				action: 'Update an event',
			},
		],
		default: 'get',
	},
];

export const eventFields: INodeProperties[] = [
	// Create
	{
		displayName: 'Title',
		name: 'title',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['event'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'The title of the event',
	},
	{
		displayName: 'Start Date',
		name: 'startDate',
		type: 'dateTime',
		required: true,
		displayOptions: {
			show: {
				resource: ['event'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'The start date and time of the event',
	},
	{
		displayName: 'End Date',
		name: 'endDate',
		type: 'dateTime',
		required: true,
		displayOptions: {
			show: {
				resource: ['event'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'The end date and time of the event',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['event'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				typeOptions: {
					rows: 4,
				},
				default: '',
				description: 'Description of the event',
			},
			{
				displayName: 'Location',
				name: 'location',
				type: 'string',
				default: '',
				description: 'Location of the event',
			},
		],
	},
	// Get
	{
		displayName: 'Event ID',
		name: 'eventId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['event'],
				operation: ['get', 'delete'],
			},
		},
		default: '',
		description: 'The ID of the event',
	},
	// Get Many
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['event'],
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
				resource: ['event'],
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
				resource: ['event'],
				operation: ['getAll'],
			},
		},
		options: [
			{
				displayName: 'Start Date From',
				name: 'startDateFrom',
				type: 'dateTime',
				default: '',
				description: 'Filter events starting from this date',
			},
			{
				displayName: 'Start Date To',
				name: 'startDateTo',
				type: 'dateTime',
				default: '',
				description: 'Filter events starting before this date',
			},
		],
	},
	// Update
	{
		displayName: 'Event ID',
		name: 'eventId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['event'],
				operation: ['update'],
			},
		},
		default: '',
		description: 'The ID of the event',
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['event'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				typeOptions: {
					rows: 4,
				},
				default: '',
				description: 'Description of the event',
			},
			{
				displayName: 'End Date',
				name: 'endDate',
				type: 'dateTime',
				default: '',
				description: 'The end date and time of the event',
			},
			{
				displayName: 'Location',
				name: 'location',
				type: 'string',
				default: '',
				description: 'Location of the event',
			},
			{
				displayName: 'Start Date',
				name: 'startDate',
				type: 'dateTime',
				default: '',
				description: 'The start date and time of the event',
			},
			{
				displayName: 'Title',
				name: 'title',
				type: 'string',
				default: '',
				description: 'The title of the event',
			},
		],
	},
];
