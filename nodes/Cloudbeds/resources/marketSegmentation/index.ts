import type { IExecuteFunctions } from 'n8n-workflow';
import * as operations from './operations';
import { marketSegmentationOperations, marketSegmentationFields } from './descriptions';

export { marketSegmentationOperations, marketSegmentationFields };

export const descriptions = [...marketSegmentationOperations, ...marketSegmentationFields];

export async function execute(this: IExecuteFunctions, operation: string, index: number) {
	switch (operation) {
		// Group operations
		case 'createGroup':
			return await operations.createGroup.call(this, index);
		case 'getGroup':
			return await operations.getGroup.call(this, index);
		case 'getGroups':
			return await operations.getGroups.call(this, index);
		case 'updateGroup':
			return await operations.updateGroup.call(this, index);
		case 'deleteGroup':
			return await operations.deleteGroup.call(this, index);
		case 'enableGroup':
			return await operations.enableGroup.call(this, index);
		case 'disableGroup':
			return await operations.disableGroup.call(this, index);
		// Segment operations
		case 'createSegment':
			return await operations.createSegment.call(this, index);
		case 'getSegment':
			return await operations.getSegment.call(this, index);
		case 'getSegments':
			return await operations.getSegments.call(this, index);
		case 'updateSegment':
			return await operations.updateSegment.call(this, index);
		case 'deleteSegment':
			return await operations.deleteSegment.call(this, index);
		case 'enableSegment':
			return await operations.enableSegment.call(this, index);
		case 'disableSegment':
			return await operations.disableSegment.call(this, index);
		case 'setDefaultSegment':
			return await operations.setDefaultSegment.call(this, index);
		case 'getSegmentReservations':
			return await operations.getSegmentReservations.call(this, index);
		default:
			throw new Error(`Unknown operation: ${operation}`);
	}
}
