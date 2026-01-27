import type { INodeProperties } from 'n8n-workflow';

export const guestOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['guest'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new guest',
				action: 'Create a guest',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get a guest by ID',
				action: 'Get a guest',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get many guests',
				action: 'Get many guests',
			},
			{
				name: 'Search',
				value: 'search',
				description: 'Search for guests',
				action: 'Search guests',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a guest',
				action: 'Update a guest',
			},
		],
		default: 'getAll',
	},
];

export const guestFields: INodeProperties[] = [
	// ----------------------------------
	//         guest: create
	// ----------------------------------
	{
		displayName: 'First Name',
		name: 'firstName',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['guest'],
				operation: ['create'],
			},
		},
		description: 'The first name of the guest',
	},
	{
		displayName: 'Last Name',
		name: 'lastName',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['guest'],
				operation: ['create'],
			},
		},
		description: 'The last name of the guest',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['guest'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Address',
				name: 'address',
				type: 'string',
				default: '',
				description: 'The address of the guest',
			},
			{
				displayName: 'City',
				name: 'city',
				type: 'string',
				default: '',
				description: 'The city of the guest',
			},
			{
				displayName: 'Country',
				name: 'country',
				type: 'string',
				default: '',
				description: 'The country code of the guest (ISO 3166-1 alpha-2)',
			},
			{
				displayName: 'Date of Birth',
				name: 'dateOfBirth',
				type: 'dateTime',
				default: '',
				description: 'The date of birth of the guest',
			},
			{
				displayName: 'Email',
				name: 'email',
				type: 'string',
				placeholder: 'name@email.com',
				default: '',
				description: 'The email address of the guest',
			},
			{
				displayName: 'Gender',
				name: 'gender',
				type: 'options',
				options: [
					{ name: 'Male', value: 'male' },
					{ name: 'Female', value: 'female' },
					{ name: 'Other', value: 'other' },
				],
				default: 'other',
				description: 'The gender of the guest',
			},
			{
				displayName: 'ID Number',
				name: 'idNumber',
				type: 'string',
				default: '',
				description: 'The ID/passport number of the guest',
			},
			{
				displayName: 'ID Type',
				name: 'idType',
				type: 'options',
				options: [
					{ name: 'Passport', value: 'passport' },
					{ name: 'National ID', value: 'nationalId' },
					{ name: 'Driver License', value: 'driverLicense' },
					{ name: 'Other', value: 'other' },
				],
				default: 'passport',
				description: 'The type of ID document',
			},
			{
				displayName: 'Nationality',
				name: 'nationality',
				type: 'string',
				default: '',
				description: 'The nationality of the guest (ISO 3166-1 alpha-2)',
			},
			{
				displayName: 'Notes',
				name: 'notes',
				type: 'string',
				typeOptions: {
					rows: 4,
				},
				default: '',
				description: 'Internal notes about the guest',
			},
			{
				displayName: 'Phone',
				name: 'phone',
				type: 'string',
				default: '',
				description: 'The phone number of the guest',
			},
			{
				displayName: 'Postal Code',
				name: 'postalCode',
				type: 'string',
				default: '',
				description: 'The postal/ZIP code of the guest',
			},
			{
				displayName: 'State',
				name: 'state',
				type: 'string',
				default: '',
				description: 'The state/province of the guest',
			},
			{
				displayName: 'VIP',
				name: 'vip',
				type: 'boolean',
				default: false,
				description: 'Whether the guest is a VIP',
			},
		],
	},

	// ----------------------------------
	//         guest: get
	// ----------------------------------
	{
		displayName: 'Guest ID',
		name: 'guestId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['guest'],
				operation: ['get'],
			},
		},
		description: 'The ID of the guest to retrieve',
	},

	// ----------------------------------
	//         guest: getAll
	// ----------------------------------
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['guest'],
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
				resource: ['guest'],
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
				resource: ['guest'],
				operation: ['getAll'],
			},
		},
		options: [
			{
				displayName: 'Country',
				name: 'country',
				type: 'string',
				default: '',
				description: 'Filter by country code',
			},
			{
				displayName: 'Email',
				name: 'email',
				type: 'string',
				placeholder: 'name@email.com',
				default: '',
				description: 'Filter by email address',
			},
			{
				displayName: 'VIP Only',
				name: 'vipOnly',
				type: 'boolean',
				default: false,
				description: 'Whether to return only VIP guests',
			},
		],
	},

	// ----------------------------------
	//         guest: search
	// ----------------------------------
	{
		displayName: 'Search Query',
		name: 'query',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['guest'],
				operation: ['search'],
			},
		},
		description: 'The search query (name, email, phone, etc.)',
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['guest'],
				operation: ['search'],
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
				resource: ['guest'],
				operation: ['search'],
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

	// ----------------------------------
	//         guest: update
	// ----------------------------------
	{
		displayName: 'Guest ID',
		name: 'guestId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['guest'],
				operation: ['update'],
			},
		},
		description: 'The ID of the guest to update',
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['guest'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Address',
				name: 'address',
				type: 'string',
				default: '',
				description: 'The address of the guest',
			},
			{
				displayName: 'City',
				name: 'city',
				type: 'string',
				default: '',
				description: 'The city of the guest',
			},
			{
				displayName: 'Country',
				name: 'country',
				type: 'string',
				default: '',
				description: 'The country code of the guest (ISO 3166-1 alpha-2)',
			},
			{
				displayName: 'Date of Birth',
				name: 'dateOfBirth',
				type: 'dateTime',
				default: '',
				description: 'The date of birth of the guest',
			},
			{
				displayName: 'Email',
				name: 'email',
				type: 'string',
				placeholder: 'name@email.com',
				default: '',
				description: 'The email address of the guest',
			},
			{
				displayName: 'First Name',
				name: 'firstName',
				type: 'string',
				default: '',
				description: 'The first name of the guest',
			},
			{
				displayName: 'Gender',
				name: 'gender',
				type: 'options',
				options: [
					{ name: 'Male', value: 'male' },
					{ name: 'Female', value: 'female' },
					{ name: 'Other', value: 'other' },
				],
				default: 'other',
				description: 'The gender of the guest',
			},
			{
				displayName: 'ID Number',
				name: 'idNumber',
				type: 'string',
				default: '',
				description: 'The ID/passport number of the guest',
			},
			{
				displayName: 'ID Type',
				name: 'idType',
				type: 'options',
				options: [
					{ name: 'Passport', value: 'passport' },
					{ name: 'National ID', value: 'nationalId' },
					{ name: 'Driver License', value: 'driverLicense' },
					{ name: 'Other', value: 'other' },
				],
				default: 'passport',
				description: 'The type of ID document',
			},
			{
				displayName: 'Last Name',
				name: 'lastName',
				type: 'string',
				default: '',
				description: 'The last name of the guest',
			},
			{
				displayName: 'Nationality',
				name: 'nationality',
				type: 'string',
				default: '',
				description: 'The nationality of the guest (ISO 3166-1 alpha-2)',
			},
			{
				displayName: 'Notes',
				name: 'notes',
				type: 'string',
				typeOptions: {
					rows: 4,
				},
				default: '',
				description: 'Internal notes about the guest',
			},
			{
				displayName: 'Phone',
				name: 'phone',
				type: 'string',
				default: '',
				description: 'The phone number of the guest',
			},
			{
				displayName: 'Postal Code',
				name: 'postalCode',
				type: 'string',
				default: '',
				description: 'The postal/ZIP code of the guest',
			},
			{
				displayName: 'State',
				name: 'state',
				type: 'string',
				default: '',
				description: 'The state/province of the guest',
			},
			{
				displayName: 'VIP',
				name: 'vip',
				type: 'boolean',
				default: false,
				description: 'Whether the guest is a VIP',
			},
		],
	},
];
