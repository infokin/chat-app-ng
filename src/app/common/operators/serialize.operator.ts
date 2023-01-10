import { map, Observable, OperatorFunction } from "rxjs";
import { JsonUtils } from "../utils";

export function serialize<T extends object>(
  type: new() => T
): OperatorFunction<T | T[], string> {
  return (source: Observable<T | T[]>): Observable<string> =>
    source.pipe(
      map((input: T | T[]): string => JsonUtils.serialize<T>(input, type))
    );
}
