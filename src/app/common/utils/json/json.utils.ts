import {JsonConvert} from "json2typescript";

export class JsonUtils {

  private static jsonConvert: JsonConvert = new JsonConvert();

  private constructor() {
  }

  public static serializeObject<T extends object>(
    data: T,
    classReference?: new () => T
  ): string {
    const jsonObject: object = JsonUtils.jsonConvert.serializeObject<T>(
      data,
      classReference
    ) as object;
    return JSON.stringify(jsonObject);
  }

  public static serializeArray<T extends object>(
    data: T[],
    classReference?: new () => T
  ): string {
    const jsonArray: object[] = JsonUtils.jsonConvert.serializeArray<T>(
      data,
      classReference
    ) as object[];
    return JSON.stringify(jsonArray);
  }

  public static deserializeObject<T extends object>(
    json: string | object,
    classReference: new () => T
  ): T {
    const jsonObject: object = typeof json === "string"
      ? JSON.parse(json) as object
      : json;
    return JsonUtils.jsonConvert.deserializeObject<T>(jsonObject, classReference);
  }

  public static deserializeArray<T extends object>(
    json: string | object[],
    classReference: new () => T
  ): T[] {
    const jsonArray: object[] = typeof json === "string"
      ? JSON.parse(json) as object[]
      : json;
    return JsonUtils.jsonConvert.deserializeArray<T>(jsonArray, classReference);
  }

}
