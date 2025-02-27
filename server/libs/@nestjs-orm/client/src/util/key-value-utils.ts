export class KeyValuePair<K, V> {
  key: K;
  value: V;

  constructor(key: K, value: V) {
    this.key = key;
    this.value = value;
  }
}

export class KeyValueUtils {
  static stringEnumToKeyValuePairArray(enumObject: any, withEmpty = false, sorted = false): KeyValuePair<string, string>[] {
    const arr: KeyValuePair<string, string>[] = [];

    for (const n in enumObject) {
      if (typeof enumObject[n] === 'string') {
        const key = n;
        const value: string = enumObject[n];
        arr.push(new KeyValuePair<string, string>(key, value));
      }
    }

    if (sorted) {
      arr.sort((a, b) => a.value.toLocaleLowerCase().localeCompare(b.value.toLocaleLowerCase()));
    }

    if (withEmpty) {
      arr.unshift(new KeyValuePair<string, string>('', ''));
    }

    return arr;
  }

  static numberEnumToKeyValuePairArray(enumObject: any, withEmpty = false): KeyValuePair<string, number | null>[] {
    const arr: KeyValuePair<string, number | null>[] = [];

    if (withEmpty) {
      arr.push(new KeyValuePair<string, number | null>('', null));
    }

    for (const n in enumObject) {
      if (typeof enumObject[n] === 'number') {
        const key = n;
        const value: number = enumObject[n];
        arr.push(new KeyValuePair<string, number>(key, value));
      }
    }
    return arr;
  }
}
