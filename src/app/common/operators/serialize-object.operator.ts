import {map, Observable, OperatorFunction} from "rxjs";
import {JsonUtils} from "../utils";

export function serializeObject<T extends object>(
  type: new() => T
): OperatorFunction<T, string> {
  return (source: Observable<T>): Observable<string> =>
    source.pipe(
      map((input: T): string => {
        return JsonUtils.serializeObject<T>(input, type);
      })
    );
}
