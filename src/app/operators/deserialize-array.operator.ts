import {map, MonoTypeOperatorFunction, Observable} from 'rxjs';
import {JsonUtils} from '../utils/json-utils';

export function deserializeArray<T extends object>(type: new() => T): MonoTypeOperatorFunction<T[]> {
  return (source: Observable<object[]>): Observable<T[]> =>
    source.pipe(
      map((input: object[]): T[] => JsonUtils.deserialize<T>(input, type) as T[])
    );
}
