export const makeAction = (type: string, props?: object) => ({ type, ...props });