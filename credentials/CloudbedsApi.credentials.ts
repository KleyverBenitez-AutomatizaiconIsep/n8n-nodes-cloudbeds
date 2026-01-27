import type {
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class CloudbedsApi implements ICredentialType {
	name = 'cloudbedsApi';
	displayName = 'Cloudbeds API';
	documentationUrl = 'https://integrations.cloudbeds.com/hc/en-us';
	icon = { light: 'file:../nodes/Cloudbeds/cloudbeds.svg', dark: 'file:../nodes/Cloudbeds/cloudbeds.svg' } as const;
	properties: INodeProperties[] = [
		{
			displayName: 'Access Token',
			name: 'accessToken',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
		},
		{
			displayName: 'Property ID',
			name: 'propertyId',
			type: 'string',
			default: '',
			required: true,
			description: 'Your Cloudbeds Property ID',
		},
	];

	authenticate = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.accessToken}}',
			},
		},
	} as const;

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.cloudbeds.com',
			url: '/api/v1.3/getHotels',
		},
	};
}
