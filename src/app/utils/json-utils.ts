import {JsonConvert} from 'json2typescript';

export class JsonUtils {

  private static jsonConvert: JsonConvert = new JsonConvert();

  /**
   * Wraps the serializeObject method of JsonConvert.
   * Tries to serialize an object to a json object.
   * The return value is not a string. In case you need a string as result,
   * use JSON.stringify() after calling the serialize method.
   *
   * Throws an error if it fails.
   * @param data The data object
   * @param classRef The class reference
   */
  public static serializeObject<T extends object, U extends object>(data: T, classRef: new() => U): any {
    return this.jsonConvert.serializeObject(data, classRef);
  }

  /**
   * Wraps the serializeArray method of JsonConvert.
   * Tries to serialize an array of type to a json array using the mappings on the provided class.
   * @param dataArray
   * @param classRef
   */
  public static serializeArray<T extends object, U extends object>(dataArray: T[], classRef: new() => U): any[] {
    return this.jsonConvert.serializeArray(dataArray, classRef);
  }
}
