import {map, Observable, OperatorFunction} from "rxjs";
import {JsonUtils} from "../utils";

export function deserializeArray<T extends object>(
  type: new() => T
): OperatorFunction<string | object[], T[]> {
  return (source: Observable<string | object[]>): Observable<T[]> =>
    source.pipe(
      map((input: string | object[]): T[] => {
        return JsonUtils.deserializeArray<T>(input, type);
      })
    );
}
