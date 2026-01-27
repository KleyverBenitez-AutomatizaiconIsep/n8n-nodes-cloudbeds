import type { IExecuteFunctions } from 'n8n-workflow';
import * as operations from './operations';
import { itemOperations, itemFields } from './descriptions';

export { itemOperations, itemFields };

export const descriptions = [...itemOperations, ...itemFields];

export async function execute(this: IExecuteFunctions, operation: string, index: number) {
	switch (operation) {
		case 'get':
			return await operations.get.call(this, index);
		case 'getAll':
			return await operations.getAll.call(this, index);
		case 'getCategories':
			return await operations.getCategories.call(this, index);
		case 'addToReservation':
			return await operations.addToReservation.call(this, index);
		default:
			throw new Error(`Unknown operation: ${operation}`);
	}
}
