import { ref, onMounted, onUnmounted, onActivated, onDeactivated } from 'vue'
import { throttle } from 'underscore'
export default function useScroll() {
  const isReachBottom = ref<boolean>(false)
  const clientHeight = ref<number>(0) // 平面高度
  const scrollTop = ref<number>(0) // 滚动距离
  const scrollHeight = ref<number>(0) // 视口高度
  const scrollListerHandler = throttle(() => {
    /**
     * @method 监听屏幕滚动加载更多数据
     */
    clientHeight.value = document.documentElement.clientHeight
    scrollTop.value = document.documentElement.scrollTop
    scrollHeight.value = document.documentElement.scrollHeight
    if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
      // 滚动到了底部
      // 第一种做法传入回掉函数，当要做的事情多了回掉函数太多不好管理
      // 第二种将变量改为true，告诉外界已经到达底部,外界自行写逻辑
      // cb()
      isReachBottom.value = true
    }
  }, 100)
  onMounted(() => {
    window.addEventListener('scroll', scrollListerHandler)
  })
  onActivated(() => {
    window.addEventListener('scroll', scrollListerHandler)
  })
  onUnmounted(() => {
    window.removeEventListener('scroll', scrollListerHandler)
  })
  onDeactivated(() => {
    window.removeEventListener('scroll', scrollListerHandler)
  })
  return { isReachBottom, clientHeight, scrollTop, scrollHeight }
}
