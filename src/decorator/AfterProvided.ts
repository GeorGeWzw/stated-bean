import { getMetadataStorage } from '../metadata';

/**
 * The `AfterProvided` decorator is used on a method that needs to be executed after the StatedBean be instanced to perform any initialization.
 *
 * @export
 * @returns {MethodDecorator}
 */
export function AfterProvided(): MethodDecorator {
  return (
    prototype,
    propertyKey,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    descriptor?: TypedPropertyDescriptor<any>
  ) => {
    if (descriptor === undefined) {
      descriptor = Object.getOwnPropertyDescriptor(prototype, propertyKey)!;
    }
    getMetadataStorage().collectPostProvided({
      name: propertyKey,
      target: prototype.constructor,
      descriptor,
    });
    return descriptor;
  };
}
