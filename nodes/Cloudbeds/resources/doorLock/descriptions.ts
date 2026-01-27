import type { INodeProperties } from 'n8n-workflow';

export const doorLockOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['doorLock'],
			},
		},
		options: [
			{
				name: 'Create Key',
				value: 'createKey',
				description: 'Create a new door lock key',
				action: 'Create a door lock key',
			},
			{
				name: 'Delete Key',
				value: 'deleteKey',
				description: 'Delete a door lock key',
				action: 'Delete a door lock key',
			},
			{
				name: 'Delete Keys (Batch)',
				value: 'deleteKeysBatch',
				description: 'Delete multiple door lock keys',
				action: 'Delete multiple door lock keys',
			},
			{
				name: 'Delete Settings',
				value: 'deleteSettings',
				description: 'Delete door lock settings for a property',
				action: 'Delete door lock settings',
			},
			{
				name: 'Get Keys',
				value: 'getKeys',
				description: 'Get door lock keys for a property',
				action: 'Get door lock keys',
			},
			{
				name: 'Get Settings',
				value: 'getSettings',
				description: 'Get door lock settings for a property',
				action: 'Get door lock settings',
			},
			{
				name: 'Update Key',
				value: 'updateKey',
				description: 'Update a door lock key',
				action: 'Update a door lock key',
			},
			{
				name: 'Upsert Settings',
				value: 'upsertSettings',
				description: 'Create or update door lock settings',
				action: 'Upsert door lock settings',
			},
		],
		default: 'getKeys',
	},
];

export const doorLockFields: INodeProperties[] = [
	// Get Keys
	{
		displayName: 'Property ID',
		name: 'propertyId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['doorLock'],
				operation: ['getKeys', 'getSettings', 'deleteSettings', 'upsertSettings'],
			},
		},
		default: '',
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['doorLock'],
				operation: ['getKeys'],
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
				resource: ['doorLock'],
				operation: ['getKeys'],
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
	// Create Key
	{
		displayName: 'Room ID',
		name: 'roomId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['doorLock'],
				operation: ['createKey'],
			},
		},
		default: '',
		description: 'The room ID for the key',
	},
	{
		displayName: 'Reservation ID',
		name: 'reservationId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['doorLock'],
				operation: ['createKey'],
			},
		},
		default: '',
		description: 'The reservation ID associated with the key',
	},
	{
		displayName: 'Start Time',
		name: 'startTime',
		type: 'dateTime',
		required: true,
		displayOptions: {
			show: {
				resource: ['doorLock'],
				operation: ['createKey'],
			},
		},
		default: '',
		description: 'The start time for the key validity',
	},
	{
		displayName: 'End Time',
		name: 'endTime',
		type: 'dateTime',
		required: true,
		displayOptions: {
			show: {
				resource: ['doorLock'],
				operation: ['createKey'],
			},
		},
		default: '',
		description: 'The end time for the key validity',
	},
	// Delete/Update Key
	{
		displayName: 'Key ID',
		name: 'keyId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['doorLock'],
				operation: ['deleteKey', 'updateKey'],
			},
		},
		default: '',
		description: 'The door lock key ID',
	},
	// Delete Keys Batch
	{
		displayName: 'Key IDs',
		name: 'keyIds',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['doorLock'],
				operation: ['deleteKeysBatch'],
			},
		},
		default: '',
		description: 'Comma-separated list of key IDs to delete',
	},
	// Update Key
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['doorLock'],
				operation: ['updateKey'],
			},
		},
		options: [
			{
				displayName: 'Start Time',
				name: 'startTime',
				type: 'dateTime',
				default: '',
				description: 'The new start time for the key',
			},
			{
				displayName: 'End Time',
				name: 'endTime',
				type: 'dateTime',
				default: '',
				description: 'The new end time for the key',
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				options: [
					{ name: 'Active', value: 'active' },
					{ name: 'Inactive', value: 'inactive' },
				],
				default: 'active',
				description: 'The key status',
			},
		],
	},
	// Upsert Settings
	{
		displayName: 'Settings',
		name: 'settings',
		type: 'collection',
		placeholder: 'Add Setting',
		default: {},
		displayOptions: {
			show: {
				resource: ['doorLock'],
				operation: ['upsertSettings'],
			},
		},
		options: [
			{
				displayName: 'Provider',
				name: 'provider',
				type: 'string',
				default: '',
				description: 'The door lock provider name',
			},
			{
				displayName: 'API Key',
				name: 'apiKey',
				type: 'string',
				typeOptions: { password: true },
				default: '',
				description: 'The provider API key',
			},
			{
				displayName: 'Enabled',
				name: 'enabled',
				type: 'boolean',
				default: true,
				description: 'Whether the integration is enabled',
			},
		],
	},
];
