function getFirstElement<T>(arr: T[]): T{
  return arr[0];
}
getFirstElement<number>([1, 2, 3]);           // number
getFirstElement<string>(["a", "b", "c"]);     // string
getFirstElement<boolean>([true, false]);      // bool
