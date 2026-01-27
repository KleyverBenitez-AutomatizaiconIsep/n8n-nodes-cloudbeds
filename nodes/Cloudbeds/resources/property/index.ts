import type { IExecuteFunctions } from 'n8n-workflow';
import * as operations from './operations';
import { propertyOperations, propertyFields } from './descriptions';

export { propertyOperations, propertyFields };

export const descriptions = [...propertyOperations, ...propertyFields];

export async function execute(this: IExecuteFunctions, operation: string, index: number) {
	switch (operation) {
		case 'getSystem':
			return await operations.getSystem.call(this, index);
		default:
			throw new Error(`Unknown operation: ${operation}`);
	}
}
