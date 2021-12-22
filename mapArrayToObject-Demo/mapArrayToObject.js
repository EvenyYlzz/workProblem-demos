export default function mapArrayToObject(arr = [], key) {
  return arr.reduce((pre, next) => {
    pre[next[key]] = next;
    return pre;
  }, {});
}