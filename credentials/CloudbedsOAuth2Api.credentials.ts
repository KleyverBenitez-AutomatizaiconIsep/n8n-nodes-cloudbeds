import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class CloudbedsOAuth2Api implements ICredentialType {
	name = 'cloudbedsOAuth2Api';
	extends = ['oAuth2Api'];
	displayName = 'Cloudbeds OAuth2 API';
	documentationUrl = 'https://integrations.cloudbeds.com/hc/en-us';
	icon = { light: 'file:../nodes/Cloudbeds/cloudbeds.svg', dark: 'file:../nodes/Cloudbeds/cloudbeds.svg' } as const;
	properties: INodeProperties[] = [
		{
			displayName: 'Grant Type',
			name: 'grantType',
			type: 'hidden',
			default: 'authorizationCode',
		},
		{
			displayName: 'Authorization URL',
			name: 'authUrl',
			type: 'hidden',
			default: 'https://hotels.cloudbeds.com/api/v1.1/oauth',
		},
		{
			displayName: 'Access Token URL',
			name: 'accessTokenUrl',
			type: 'hidden',
			default: 'https://hotels.cloudbeds.com/api/v1.1/access_token',
		},
		{
			displayName: 'Scope',
			name: 'scope',
			type: 'hidden',
			default: '',
		},
		{
			displayName: 'Auth URI Query Parameters',
			name: 'authQueryParameters',
			type: 'hidden',
			default: '',
		},
		{
			displayName: 'Authentication',
			name: 'authentication',
			type: 'hidden',
			default: 'body',
		},
		{
			displayName: 'Property ID',
			name: 'propertyId',
			type: 'string',
			default: '',
			required: true,
			description: 'Your Cloudbeds Property ID. Required for some API endpoints like addons and events.',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.accessToken}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.cloudbeds.com',
			url: '/property/v1/system',
			headers: {
				'X-Property-ID': '={{$credentials.propertyId}}',
			},
		},
	};
}
