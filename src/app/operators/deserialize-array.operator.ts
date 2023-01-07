import { map, Observable, OperatorFunction } from "rxjs";
import { JsonUtils } from "../common/utils";

export function deserializeArray<T extends object>(
  type: new() => T
): OperatorFunction<string, T[]> {
  return (source: Observable<string>): Observable<T[]> =>
    source.pipe(
      map((input: string): T[] => JsonUtils.deserializeArray<T>(input, type))
    );
}
