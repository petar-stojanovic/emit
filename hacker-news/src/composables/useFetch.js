import {ref, watchEffect, toValue} from 'vue'

export function useFetch(url, config = {}) {
  const data = ref(null)
  const error = ref(null)
  const loading = ref(false)

  watchEffect(async () => {
    data.value = null
    error.value = null
    loading.value = true

    const urlValue = toValue(url)

    try {
      const res = await fetch(urlValue, config)
      data.value = await res.json()
    } catch (e) {
      error.value = e
    } finally {
      loading.value = false
    }
  })

  return {data, error, loading}
}
