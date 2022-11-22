import {map, MonoTypeOperatorFunction, Observable} from 'rxjs';
import {JsonUtils} from '../utils/json-utils';

export function deserializeArray<T extends object>(type: new() => T): MonoTypeOperatorFunction<T[]> {
  return (source: Observable<any[]>): Observable<T[]> =>
    source.pipe(
      map((input: any[]): T[] => JsonUtils.deserializeArray<T>(input, type))
    );
}
