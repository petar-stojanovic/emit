import {ref, watch} from "vue";

export default function useLocalStorage(initialValue, key) {
  const val = ref(initialValue);

  const storageVal = localStorage.getItem(key);

  if (storageVal) {
    val.value = JSON.parse(storageVal);
  }

  watch(val, val => {
      localStorage.setItem(key, JSON.stringify(val));
    },
    {deep: true});

  return val;
}