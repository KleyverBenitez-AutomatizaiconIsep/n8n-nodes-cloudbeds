import type { INodeProperties } from 'n8n-workflow';

export const marketSegmentationOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['marketSegmentation'],
			},
		},
		options: [
			{
				name: 'Create Group',
				value: 'createGroup',
				description: 'Create a new market segmentation group',
				action: 'Create a group',
			},
			{
				name: 'Create Segment',
				value: 'createSegment',
				description: 'Create a new market segmentation segment',
				action: 'Create a segment',
			},
			{
				name: 'Delete Group',
				value: 'deleteGroup',
				description: 'Delete a market segmentation group',
				action: 'Delete a group',
			},
			{
				name: 'Delete Segment',
				value: 'deleteSegment',
				description: 'Delete a market segmentation segment',
				action: 'Delete a segment',
			},
			{
				name: 'Disable Group',
				value: 'disableGroup',
				description: 'Disable a market segmentation group',
				action: 'Disable a group',
			},
			{
				name: 'Disable Segment',
				value: 'disableSegment',
				description: 'Disable a market segmentation segment',
				action: 'Disable a segment',
			},
			{
				name: 'Enable Group',
				value: 'enableGroup',
				description: 'Enable a market segmentation group',
				action: 'Enable a group',
			},
			{
				name: 'Enable Segment',
				value: 'enableSegment',
				description: 'Enable a market segmentation segment',
				action: 'Enable a segment',
			},
			{
				name: 'Get Group',
				value: 'getGroup',
				description: 'Get a market segmentation group',
				action: 'Get a group',
			},
			{
				name: 'Get Groups',
				value: 'getGroups',
				description: 'Get all market segmentation groups',
				action: 'Get all groups',
			},
			{
				name: 'Get Segment',
				value: 'getSegment',
				description: 'Get a market segmentation segment',
				action: 'Get a segment',
			},
			{
				name: 'Get Segment Reservations',
				value: 'getSegmentReservations',
				description: 'Get reservations linked to a segment',
				action: 'Get segment reservations',
			},
			{
				name: 'Get Segments',
				value: 'getSegments',
				description: 'Get all market segmentation segments',
				action: 'Get all segments',
			},
			{
				name: 'Set Default Segment',
				value: 'setDefaultSegment',
				description: 'Set a segment as default',
				action: 'Set default segment',
			},
			{
				name: 'Update Group',
				value: 'updateGroup',
				description: 'Update a market segmentation group',
				action: 'Update a group',
			},
			{
				name: 'Update Segment',
				value: 'updateSegment',
				description: 'Update a market segmentation segment',
				action: 'Update a segment',
			},
		],
		default: 'getGroups',
	},
];

export const marketSegmentationFields: INodeProperties[] = [
	// Group fields
	{
		displayName: 'Group ID',
		name: 'groupId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['marketSegmentation'],
				operation: ['getGroup', 'deleteGroup', 'disableGroup', 'enableGroup', 'updateGroup'],
			},
		},
		default: '',
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['marketSegmentation'],
				operation: ['createGroup'],
			},
		},
		default: '',
		description: 'The group name',
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['marketSegmentation'],
				operation: ['updateGroup'],
			},
		},
		options: [
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'The group name',
			},
		],
	},
	// Segment fields
	{
		displayName: 'Segment ID',
		name: 'segmentId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['marketSegmentation'],
				operation: ['getSegment', 'deleteSegment', 'disableSegment', 'enableSegment', 'updateSegment', 'setDefaultSegment', 'getSegmentReservations'],
			},
		},
		default: '',
	},
	{
		displayName: 'Segment Name',
		name: 'segmentName',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['marketSegmentation'],
				operation: ['createSegment'],
			},
		},
		default: '',
	},
	{
		displayName: 'Group ID',
		name: 'groupIdForSegment',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['marketSegmentation'],
				operation: ['createSegment'],
			},
		},
		default: '',
		description: 'The group ID for the segment',
	},
	{
		displayName: 'Segment Update Fields',
		name: 'segmentUpdateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['marketSegmentation'],
				operation: ['updateSegment'],
			},
		},
		options: [
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'The segment name',
			},
		],
	},
	// Get Segments
	{
		displayName: 'Enabled Only',
		name: 'enabledOnly',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['marketSegmentation'],
				operation: ['getSegments'],
			},
		},
		default: true,
		description: 'Whether to return only enabled segments',
	},
	// Get Segment Reservations
	{
		displayName: 'Active Only',
		name: 'activeOnly',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['marketSegmentation'],
				operation: ['getSegmentReservations'],
			},
		},
		default: true,
		description: 'Whether to return only active reservations',
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['marketSegmentation'],
				operation: ['getGroups', 'getSegments', 'getSegmentReservations'],
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
				resource: ['marketSegmentation'],
				operation: ['getGroups', 'getSegments', 'getSegmentReservations'],
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
];
