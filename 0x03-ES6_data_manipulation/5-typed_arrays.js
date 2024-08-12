export default function createInt8TypedArray(length, position, value) {
  let buffer = new ArrayBuffer(length);
  let int8View = new Int8Array(buffer);

  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  }

  int8View[position] = value;
  return buffer;
}
