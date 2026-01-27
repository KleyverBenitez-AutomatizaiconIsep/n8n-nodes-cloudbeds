import type { INodeProperties } from 'n8n-workflow';

export const housekeepingOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['housekeeping'],
			},
		},
		options: [
			{
				name: 'Get Status',
				value: 'getStatus',
				description: 'Get current housekeeping status for all rooms',
				action: 'Get housekeeping status',
			},
			{
				name: 'Get Assignments',
				value: 'getAssignments',
				description: 'Get housekeeping assignments',
				action: 'Get housekeeping assignments',
			},
			{
				name: 'Update Room Condition',
				value: 'updateRoomCondition',
				description: 'Update the condition of a room',
				action: 'Update room condition',
			},
		],
		default: 'getStatus',
	},
];

export const housekeepingFields: INodeProperties[] = [
	// Get Assignments filters
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		default: {},
		displayOptions: {
			show: {
				resource: ['housekeeping'],
				operation: ['getAssignments'],
			},
		},
		options: [
			{
				displayName: 'Date',
				name: 'date',
				type: 'dateTime',
				default: '',
				description: 'Filter assignments by date',
			},
		],
	},
	// Update Room Condition
	{
		displayName: 'Room ID',
		name: 'roomId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['housekeeping'],
				operation: ['updateRoomCondition'],
			},
		},
		default: '',
		description: 'The ID of the room',
	},
	{
		displayName: 'Room Condition',
		name: 'roomCondition',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				resource: ['housekeeping'],
				operation: ['updateRoomCondition'],
			},
		},
		options: [
			{ name: 'Clean', value: 'clean' },
			{ name: 'Dirty', value: 'dirty' },
			{ name: 'Inspected', value: 'inspected' },
		],
		default: 'clean',
		description: 'The new condition of the room',
	},
];
