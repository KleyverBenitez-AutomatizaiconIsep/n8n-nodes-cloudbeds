import type { IExecuteFunctions } from 'n8n-workflow';
import * as operations from './operations';
import { paymentOperations, paymentFields } from './descriptions';

export { paymentOperations, paymentFields };

export const descriptions = [...paymentOperations, ...paymentFields];

export async function execute(this: IExecuteFunctions, operation: string, index: number) {
	switch (operation) {
		case 'createPayByLink':
			return await operations.createPayByLink.call(this, index);
		case 'getPayByLink':
			return await operations.getPayByLink.call(this, index);
		default:
			throw new Error(`Unknown operation: ${operation}`);
	}
}
