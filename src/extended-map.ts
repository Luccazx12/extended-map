import { ExtendedMapException } from "./extended-map.exception";

/**
 * An extension of the native JavaScript Map with additional utility methods.
 * @template K - The type of keys.
 * @template V - The type of values.
 */
export class ExtendedMap<K, V> extends Map<K, V> {
  /**
   * Gets the value associated with the specified key, or a default value if the key does not exist in the map.
   * @param key - The key to look up.
   * @param defaultValue - The default value to return if the key is not found.
   * @returns The value associated with the key or the default value.
   */
  public getOrDefault(key: K, defaultValue: V): V {
    return this.get(key) ?? defaultValue;
  }

  /**
   * Gets the value associated with the specified key, or throws an error if the key is not found in the map.
   * @param key - The key to look up.
   * @param errorMessage - The error message to throw if the key is not found.
   * @returns The value associated with the key.
   * @throws {Error} - Throws an error with the specified error message if the key is not found.
   */
  public getOrThrow(key: K, errorMessage = "Try to get key not mapped"): V {
    const value = this.get(key);

    if (value === undefined) {
      throw new ExtendedMapException(errorMessage);
    }

    return value;
  }

  /**
   * Creates a new map where the keys and values are swapped compared to the original map.
   * @returns A new map with swapped keys and values.
   */
  public invert(): ExtendedMap<V, K> {
    const inverted = new ExtendedMap<V, K>();
    this.forEach((value, key) => inverted.set(value, key));

    return inverted;
  }
}
