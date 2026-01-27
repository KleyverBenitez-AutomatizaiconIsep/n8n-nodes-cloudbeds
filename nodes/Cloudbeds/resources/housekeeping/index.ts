import type { IExecuteFunctions } from 'n8n-workflow';
import * as operations from './operations';
import { housekeepingOperations, housekeepingFields } from './descriptions';

export { housekeepingOperations, housekeepingFields };

export const descriptions = [...housekeepingOperations, ...housekeepingFields];

export async function execute(this: IExecuteFunctions, operation: string, index: number) {
	switch (operation) {
		case 'getStatus':
			return await operations.getStatus.call(this, index);
		case 'getAssignments':
			return await operations.getAssignments.call(this, index);
		case 'updateRoomCondition':
			return await operations.updateRoomCondition.call(this, index);
		default:
			throw new Error(`Unknown operation: ${operation}`);
	}
}
