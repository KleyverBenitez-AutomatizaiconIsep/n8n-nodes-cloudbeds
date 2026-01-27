import type { INodeProperties } from 'n8n-workflow';

export const propertyOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['property'],
			},
		},
		options: [
			{
				name: 'Get System Info',
				value: 'getSystem',
				description: 'Retrieve property system component versions',
				action: 'Get property system info',
			},
		],
		default: 'getSystem',
	},
];

export const propertyFields: INodeProperties[] = [];
