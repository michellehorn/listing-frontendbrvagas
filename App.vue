<template>
  <view class="container">
    <text class="page-title">@frontendbrvagas</text>
    <scroll-view :content-container-style="{contentContainer: {
        paddingVertical: 10
    }}">
      <view
        class="card"
        v-for="(item, index) of list"
        :key="index"
        :style="{
          shadowOpacity: 0.2,
          shadowRadius: 20,
          elevation:2,
          shadowColor: 'grey',
          shadowOffset: { 'width': 2, 'height': 5 }
        }"
        
      >
        <text class="text-title" >{{item.title}}</text>
        <text>
          <image
            :style="{width: 20, height: 20, display: 'flex'}"
            :source="require('./assets/place.png')"
          />
          {{item.place}}
        </text>
        <view>
          <text>{{ item.body }}</text>
        </view>
      </view>
    </scroll-view>
  </view>
</template>
 
<script>
import IssuesApi from "./services/IssuesApi";

export default {
  name: "App",
  data: () => ({
    list: []
  }),
  methods: {
    async getData() {
      let response = await IssuesApi.listIssues();
      this.list = response.data;
      this.list.forEach(element => {
        element.place = element.title.slice(1, element.title.indexOf("]"));
        element.title = element.title.split("] ")[1];
      });
    },
  },
  mounted() {
    this.getData();
  }
};
</script>

<style lang='scss'>
.container {
  background-color: #eee;
  flex: 1;
  padding-top: 20px;
}

.text-color-primary {
  color: blue;
}

.page-title {
  font-weight: bold;
  letter-spacing: 2;
  padding: 20px;
  font-size: 20px;
  width: 100%;
  text-align: center;
  background-color: #151515;
  color: #d3d3d3;
}
.card {
  width: 100%;
  padding: 20px 0px;
  margin: 2px 0px;
  border-left-width: 5px;
  border-style: solid;
  border-color: orange;
}
.text-title {
  font-weight: bold;
}
</style>
