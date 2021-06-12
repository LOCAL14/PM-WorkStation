/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string | null}
 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0 || !time) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string')) {
      if ((/^[0-9]+$/.test(time))) {
        // support "1548221490638"
        time = parseInt(time)
      } else {
        // support safari
        // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
        time = time.replace(new RegExp(/-/gm), '/')
      }
    }

    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value ] }
    return value.toString().padStart(2, '0')
  })
  return time_str
}

/**
 * @param {number} time
 * @param {string} option
 * @returns {string}
 */
export function formatTime(time, option) {
  if (('' + time).length === 10) {
    time = parseInt(time) * 1000
  } else {
    time = +time
  }
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return (
      d.getMonth() +
      1 +
      '月' +
      d.getDate() +
      '日' +
      d.getHours() +
      '时' +
      d.getMinutes() +
      '分'
    )
  }
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url) {
  const search = decodeURIComponent(url.split('?')[1]).replace(/\+/g, ' ')
  if (!search) {
    return {}
  }
  const obj = {}
  const searchArr = search.split('&')
  searchArr.forEach(v => {
    const index = v.indexOf('=')
    if (index !== -1) {
      const name = v.substring(0, index)
      const val = v.substring(index + 1, v.length)
      obj[name] = val
    }
  })
  return obj
}

export function getTimeString(){
  // 获取当前时间
  let timeNow = new Date();
  // 获取当前小时
  let hours = timeNow.getHours();
  // 设置默认文字
  let text = '你好';
  // 判断当前时间段
  if (hours > 5 && hours <= 10) {
    text = '早上好☀️';
  } else if (hours > 10 && hours <= 14) {
    text = '中午好🏞';
  } else if (hours > 14 && hours <= 18) {
    text = '下午好🌆';
  } else if (hours > 18 && hours <= 24) {
    text = '晚上好🌙';
  } else if (hours >= 0 && hours <= 5) {
    text = '夜深了🌃';
  }
  return text;
}

export function getEncourageCopywriting(){
  const list = [
    "既然上了生活这条贼船,就努力做一个快乐的海盗",
    "路的尽头终会是温柔和月光",
    "美好的事情即将发生",
    "宇宙山河浪漫，生活点滴温暖",
    "月亮会慢慢变圆，事情也会慢慢变好",
    "你们对我的百般注解和识读，并不构成万分之一的我，却是一览无遗的你们",
    "半山腰太挤了，要去山顶看看",
    "愿你相对辛苦，但绝对优秀",
    "跨过星河迈过月亮去迎接更好的自己",
    "接受普通，努力出众",
    "人生没有白走的路，每一步都算数",
    "我们现在正在走的这条路，总是从求而不得开始的",
    "不要因为梦想太美而不敢追求， 也不要因为现实太平凡而放弃改变",
    "每个整装待发的重新开始，在这个年少的岁月都是为时不晚",
    "少年最好的地方就是：虽然嘴上说着放弃，心底却总会憋着一口气",
    "自能生羽翼，何必仰云梯",
    "日子有些沉闷，还好跑起来有风",
    "努力让自己变得优秀，然后骄傲地生活",
    "人就在不断的选择的矛盾中，戴上面具，焚烧过去，武装自己",
    "心怀浪漫宇宙，也珍惜人间日常",
    "人生没有白走的路，每一步都算数。",
    "伟大的反义词不是失败，而是不去拼。",
    "你未必出类拔萃，但肯定与众不同。",
    "态度本身也是答案的一部分",
    "将军赶路，不追小兔",
    "如果你瞄准月亮，即使迷失，也是落在璀璨星辰之间",
    "这是个第一人称的世界。现在开始由我，来论证这一切",
    "对未来的真正慷慨，是把一切都献给现在",
    "既然今天，没人识得星星一颗；那么明日，何妨做皓月一轮",
    "你既是狂澜，也是没人能扑灭的火花"
  ]

  let timeNow = new Date()
  let month = timeNow.getMonth()
  let day = timeNow.getDay()
  let hours = timeNow.getHours()
  let i = (hours+day+month) % list.length

  return list[i]
}
