import type { IExecuteFunctions } from 'n8n-workflow';
import * as operations from './operations';
import { doorLockOperations, doorLockFields } from './descriptions';

export { doorLockOperations, doorLockFields };

export const descriptions = [...doorLockOperations, ...doorLockFields];

export async function execute(this: IExecuteFunctions, operation: string, index: number) {
	switch (operation) {
		case 'getKeys':
			return await operations.getKeys.call(this, index);
		case 'createKey':
			return await operations.createKey.call(this, index);
		case 'deleteKey':
			return await operations.deleteKey.call(this, index);
		case 'deleteKeysBatch':
			return await operations.deleteKeysBatch.call(this, index);
		case 'updateKey':
			return await operations.updateKey.call(this, index);
		case 'getSettings':
			return await operations.getSettings.call(this, index);
		case 'deleteSettings':
			return await operations.deleteSettings.call(this, index);
		case 'upsertSettings':
			return await operations.upsertSettings.call(this, index);
		default:
			throw new Error(`Unknown operation: ${operation}`);
	}
}
