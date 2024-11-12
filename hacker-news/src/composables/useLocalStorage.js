import {ref, watch} from "vue";

export default function useLocalStorage(initialValue, key, expireTime = 1000 * 60 * 60 * 24) {
  const val = ref(initialValue);

  const storageVal = localStorage.getItem(key);

  if (storageVal) {
    const {expireTime, ...parsedVal} = JSON.parse(storageVal);
    if (expireTime < new Date().getTime()) {
      localStorage.removeItem(key);
    } else {
      val.value = parsedVal;
    }
  }

  watch(val, val => {
      const objWithExpireTime = {
        ...val,
        expireTime: new Date().getTime() + expireTime
      }
      localStorage.setItem(key, JSON.stringify(objWithExpireTime));
    },
    {deep: true});

  return val;
}