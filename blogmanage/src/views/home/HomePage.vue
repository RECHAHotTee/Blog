<template>
  <div>
    <div style="background-color: #ececec; padding: 20px">
      <a-row :gutter="12">
        <a-col :span="8">
          <a-card :bordered="false" style="height: 60vh" class="center">
            <p style="text-align: center;">今年已经过去了</p>
            <a-progress :percent="yearTime" />
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card :bordered="false" style="height: 60vh;" class="center">
            <p>网站已经被访问了{{clickTimes}}次</p>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card :bordered="false" style="height: 60vh;" class="center">
            <p>已经发表文章{{pageCounts}}篇</p>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive } from 'vue';

// 是否为闰年
function isLeapYear(year) {
  return (year % 4 == 0 && year % 100 != 0 || year % 400 == 0);
}

const getNow = function () {
  let date = new Date();
  const Y = date.getFullYear();
  const M = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
  const D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let days = D, yearDays = 365;
  //传进来的月份,对应的下标是-1的
  for (let i = 0; i < M - 1; i++) {
    days += monthDays[i];
  }
  //如果是闰年,天数加一
  if (isLeapYear(Y) && M > 2) {
    days++;
    yearDays++;
  }
  let bi = Math.floor(days / yearDays * 100);
  return bi;
}

export default {
  name: 'HomePage',
  setup() {
    const state = reactive({
      yearTime: 0,
      clickTimes: 0,
      pageCounts: 0
    })

    state.yearTime = getNow();

    return {
      ...state
    }
  }
}
</script>

<style lang="less" scoped>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>