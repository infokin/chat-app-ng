import { map, Observable, OperatorFunction } from "rxjs";
import { JsonUtils } from "../common/utils";

export function deserializeObject<T extends object>(
  type: new() => T
): OperatorFunction<string, T> {
  return (source: Observable<string>): Observable<T> =>
    source.pipe(
      map((input: string): T => JsonUtils.deserializeObject<T>(input, type))
    );
}
