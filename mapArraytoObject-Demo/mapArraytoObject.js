export default function mapArraytoObject(arr = [], key) {
  return arr.reduce((pre, next) => {
    pre[next[key]] = next;
    return pre;
  }, {});
}