import {JsonConvert} from 'json2typescript';

export class JsonUtils {

  private static jsonConvert: JsonConvert = new JsonConvert();

  private constructor() {
  }

  public static serialize<T extends object| object[]>(data: T | T[], classReference?: new() => T): string {
    const serializedData: unknown | unknown[] = JsonUtils.jsonConvert.serialize(data, classReference);
    return JSON.stringify(serializedData);
  }
}
