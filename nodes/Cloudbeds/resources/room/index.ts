import type { IExecuteFunctions } from 'n8n-workflow';
import * as operations from './operations';
import { roomOperations, roomFields } from './descriptions';

export { roomOperations, roomFields };

export const descriptions = [...roomOperations, ...roomFields];

export async function execute(this: IExecuteFunctions, operation: string, index: number) {
	switch (operation) {
		case 'getAll':
			return await operations.getAll.call(this, index);
		case 'getRoomTypes':
			return await operations.getRoomTypes.call(this, index);
		case 'getUnassigned':
			return await operations.getUnassigned.call(this, index);
		case 'getAvailable':
			return await operations.getAvailable.call(this, index);
		case 'blockRoom':
			return await operations.blockRoom.call(this, index);
		case 'unblockRoom':
			return await operations.unblockRoom.call(this, index);
		default:
			throw new Error(`Unknown operation: ${operation}`);
	}
}
