import type { IExecuteFunctions } from 'n8n-workflow';
import * as operations from './operations';
import { addonOperations, addonFields } from './descriptions';

export { addonOperations, addonFields };

export const descriptions = [...addonOperations, ...addonFields];

export async function execute(this: IExecuteFunctions, operation: string, index: number) {
	switch (operation) {
		case 'getAll':
			return await operations.getAll.call(this, index);
		case 'addToReservation':
			return await operations.addToReservation.call(this, index);
		default:
			throw new Error(`Unknown operation: ${operation}`);
	}
}
