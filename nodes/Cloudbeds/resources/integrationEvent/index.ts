import type { IExecuteFunctions } from 'n8n-workflow';
import * as operations from './operations';
import { integrationEventOperations, integrationEventFields } from './descriptions';

export { integrationEventOperations, integrationEventFields };

export const descriptions = [...integrationEventOperations, ...integrationEventFields];

export async function execute(this: IExecuteFunctions, operation: string, index: number) {
	switch (operation) {
		case 'create':
			return await operations.create.call(this, index);
		case 'getAll':
			return await operations.getAll.call(this, index);
		case 'retry':
			return await operations.retry.call(this, index);
		case 'update':
			return await operations.update.call(this, index);
		default:
			throw new Error(`Unknown operation: ${operation}`);
	}
}
