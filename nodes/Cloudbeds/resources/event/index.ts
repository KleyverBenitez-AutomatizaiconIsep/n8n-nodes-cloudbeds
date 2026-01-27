import type { IExecuteFunctions } from 'n8n-workflow';
import * as operations from './operations';
import { eventOperations, eventFields } from './descriptions';

export { eventOperations, eventFields };

export const descriptions = [...eventOperations, ...eventFields];

export async function execute(this: IExecuteFunctions, operation: string, index: number) {
	switch (operation) {
		case 'create':
			return await operations.create.call(this, index);
		case 'delete':
			return await operations.deleteEvent.call(this, index);
		case 'get':
			return await operations.get.call(this, index);
		case 'getAll':
			return await operations.getAll.call(this, index);
		case 'update':
			return await operations.update.call(this, index);
		default:
			throw new Error(`Unknown operation: ${operation}`);
	}
}
