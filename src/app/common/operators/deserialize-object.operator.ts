import {map, Observable, OperatorFunction} from "rxjs";
import {JsonUtils} from "../utils";

export function deserializeObject<T extends object>(
  type: new() => T
): OperatorFunction<string | object, T> {
  return (source: Observable<string | object>): Observable<T> =>
    source.pipe(
      map((input: string | object): T => {
        return JsonUtils.deserializeObject<T>(input, type);
      })
    );
}
