export const statuses={awaiting_review:['E re','New'],reviewed:['E shqyrtuar','Reviewed'],in_production:['Në prodhim','In production'],completed:['E përfunduar','Completed'],cancelled:['E anuluar','Cancelled']} as const;
export type OrderStatus=keyof typeof statuses;
