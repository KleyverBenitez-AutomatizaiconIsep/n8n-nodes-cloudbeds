import type { INodeProperties } from 'n8n-workflow';

export const itemOperations: INodeProperties[] = [
{
displayName: 'Operation',
name: 'operation',
type: 'options',
noDataExpression: true,
displayOptions: {
show: {
resource: ['item'],
},
},
options: [
{
name: 'Add to Reservation',
value: 'addToReservation',
description: 'Add an item to a reservation',
action: 'Add item to reservation',
},
{
name: 'Get',
value: 'get',
description: 'Get a single item by ID',
action: 'Get an item',
},
{
name: 'Get Categories',
value: 'getCategories',
description: 'Get item categories',
action: 'Get item categories',
},
{
name: 'Get Many',
value: 'getAll',
description: 'Get many items in the property',
action: 'Get many items',
},
],
default: 'getAll',
},
];

export const itemFields: INodeProperties[] = [
// Get
{
displayName: 'Item ID',
name: 'itemId',
type: 'string',
required: true,
displayOptions: {
show: {
resource: ['item'],
operation: ['get'],
},
},
default: '',
description: 'The ID of the item',
},
// Add to Reservation
{
displayName: 'Reservation ID',
name: 'reservationId',
type: 'string',
required: true,
displayOptions: {
show: {
resource: ['item'],
operation: ['addToReservation'],
},
},
default: '',
description: 'The reservation ID to add the item to',
},
{
displayName: 'Item ID',
name: 'itemId',
type: 'string',
required: true,
displayOptions: {
show: {
resource: ['item'],
operation: ['addToReservation'],
},
},
default: '',
description: 'The ID of the item to add',
},
{
displayName: 'Quantity',
name: 'quantity',
type: 'number',
required: true,
displayOptions: {
show: {
resource: ['item'],
operation: ['addToReservation'],
},
},
default: 1,
description: 'Quantity of items to add',
},
];
