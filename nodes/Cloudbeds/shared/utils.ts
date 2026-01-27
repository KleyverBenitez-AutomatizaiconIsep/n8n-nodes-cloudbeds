import type { IDataObject } from 'n8n-workflow';

export function toOptions(items: Array<{ id: string; name: string }>) {
	return items.map((item) => ({ name: item.name, value: item.id }));
}

export function simplifyResponse(response: IDataObject): IDataObject | IDataObject[] {
	if (response.data) {
		return response.data as IDataObject | IDataObject[];
	}
	return response;
}
