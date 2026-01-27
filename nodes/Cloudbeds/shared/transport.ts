import type { IExecuteFunctions, IHttpRequestMethods, IDataObject, IHttpRequestOptions } from 'n8n-workflow';

export async function cloudbedsApiRequest(
	this: IExecuteFunctions,
	method: IHttpRequestMethods,
	endpoint: string,
	body: IDataObject = {},
	qs: IDataObject = {},
	option: IDataObject = {},
): Promise<IDataObject> {
	const options: IHttpRequestOptions = {
		method,
		body,
		qs,
		url: `https://api.cloudbeds.com/api/v1.3${endpoint}`,
		headers: {
			'Content-Type': 'application/json',
		},
		json: true,
	};

	if (Object.keys(body).length === 0) {
		delete options.body;
	}

	if (Object.keys(qs).length === 0) {
		delete options.qs;
	}

	Object.assign(options, option);

	return await this.helpers.httpRequestWithAuthentication.call(this, 'cloudbedsApi', options);
}

export async function cloudbedsApiRequestAllItems(
	this: IExecuteFunctions,
	method: IHttpRequestMethods,
	endpoint: string,
	body: IDataObject = {},
	qs: IDataObject = {},
): Promise<IDataObject[]> {
	const returnData: IDataObject[] = [];

	let responseData;
	qs.limit = 100;
	qs.offset = 0;

	do {
		responseData = await cloudbedsApiRequest.call(this, method, endpoint, body, qs);
		
		if (responseData.data) {
			returnData.push(...(responseData.data as IDataObject[]));
		}

		qs.offset = (qs.offset as number) + (qs.limit as number);
	} while (responseData.data && (responseData.data as IDataObject[]).length >= (qs.limit as number));

	return returnData;
}
