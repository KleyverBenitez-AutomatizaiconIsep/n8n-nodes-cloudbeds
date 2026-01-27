import type { IExecuteFunctions } from 'n8n-workflow';
import * as operations from './operations';
import { guestOperations, guestFields } from './descriptions';

export { guestOperations, guestFields };

export const descriptions = [...guestOperations, ...guestFields];

export async function execute(this: IExecuteFunctions, operation: string, index: number) {
	switch (operation) {
		case 'create':
			return await operations.create.call(this, index);
		case 'get':
			return await operations.get.call(this, index);
		case 'getAll':
			return await operations.getAll.call(this, index);
		case 'search':
			return await operations.search.call(this, index);
		case 'update':
			return await operations.update.call(this, index);
		default:
			throw new Error(`Unknown operation: ${operation}`);
	}
}
