import { JsonConvert } from "json2typescript";

export class JsonUtils {

  private static jsonConvert: JsonConvert = new JsonConvert();

  public static serialize<T extends object>(
    data: T | T[],
    classReference?: new () => T
  ): string {
    const jsonObjectOrArray: object | object[] = JsonUtils.jsonConvert.serialize(
      data,
      classReference
    ) as object | object[];
    return JSON.stringify(jsonObjectOrArray);
  }

  public static serializeObject<T extends object>(
    dataObject: T,
    classReference?: new () => T
  ): string {
    const jsonObject: object = JsonUtils.jsonConvert.serializeObject<T>(
      dataObject,
      classReference
    ) as object;
    return JSON.stringify(jsonObject);
  }

  public static serializeArray<T extends object>(
    dataArray: T[],
    classReference?: new () => T
  ): string {
    const jsonArray: object[] = JsonUtils.jsonConvert.serializeArray<T>(
      dataArray,
      classReference
    ) as object[];
    return JSON.stringify(jsonArray);
  }

  public static deserialize<T extends object>(
    jsonString: string,
    classReference: new () => T
  ): T | T[] {
    const jsonObjectOrArray: object | object[] = JSON.parse(jsonString) as object | object[];
    return JsonUtils.jsonConvert.deserialize<T>(jsonObjectOrArray, classReference);
  }

  public static deserializeObject<T extends object>(
    jsonString: string,
    classReference: new () => T
  ): T {
    const jsonObject: object = JSON.parse(jsonString) as object;
    return JsonUtils.jsonConvert.deserializeObject<T>(jsonObject, classReference);
  }

  public static deserializeArray<T extends object>(
    jsonString: string,
    classReference: new () => T
  ): T[] {
    const jsonArray: object[] = JSON.parse(jsonString) as object[];
    return JsonUtils.jsonConvert.deserializeArray<T>(jsonArray, classReference);
  }

  private constructor() {
  }

}
