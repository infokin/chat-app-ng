import {JsonConvert} from 'json2typescript';

export class JsonUtils {

  private static jsonConvert: JsonConvert = new JsonConvert();

  private constructor() {
  }

  public static serialize<T extends object>(data: T | T[]): string {
    const serializedData: unknown | unknown[] = JsonUtils.jsonConvert.serializeObject(data);
    return JSON.stringify(serializedData);
  }
}
