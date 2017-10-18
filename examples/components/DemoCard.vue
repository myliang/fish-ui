<template>
  <main-layout menuActiveIndex="card">
    <h3>Card 卡片</h3>
    <fish-row gutter="1">
      <fish-col span="8">
        <code-card title="典型卡片" desc="包含标题、内容、操作区域。">
          <template slot="demo">
            <fish-card>
              <div slot="header">卡片标题</div>
              Kristy is an art director living in New York.<br/>
              Veronika Ossi是一名居住在纽约的舞美师，她喜爱小猫、音乐和派对。<br/>
              萌萌狗有各种形状和大小。有的小狗因为呆萌的表情惹人疼爱，有的则因为五短身材令人怜惜。甚至还有一些会因为巨大的体型也会显得傻缺。
              <br/>
              Many people also have their own barometers for what makes a cute dog.
              <div slot="footer">
                <fish-button>GO-Back</fish-button>
              </div>
            </fish-card>
          </template>
          <template slot="codeHtml">
            <pre v-highlightjs><code class="xml">&lt;fish-card&gt;
  &lt;div slot=&quot;header&quot;&gt;卡片标题&lt;/div&gt;
  Kristy is an art director living in New York.&lt;br/&gt;
  Veronika Ossi是一名居住在纽约的舞美师，她喜爱小猫、音乐和派对。&lt;br/&gt;
  萌萌狗有各种形状和大小。有的小狗因为呆萌的表情惹人疼爱，有的则因为五短身材令人怜惜。甚至还有一些会因为巨大的体型也会显得傻缺。
  &lt;br/&gt;
  Many people also have their own barometers for what makes a cute dog.
  &lt;div slot=&quot;footer&quot;&gt;
    &lt;fish-button&gt;GO-Back&lt;/fish-button&gt;
  &lt;/div&gt;
&lt;/fish-card&gt;</code></pre>
          </template>
        </code-card>
      </fish-col>
      <fish-col span="4">
        <code-card title="标题-图片卡片" desc="标题-图片卡片">
          <template slot="demo">
            <fish-card>
              <strong slot="header">Elliot requested permission</strong>
              <img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" slot="image" width="100%"/>
            </fish-card>
          </template>
          <template slot="codeHtml">
            <pre v-highlightjs><code class="xml">&lt;fish-card&gt;
  &lt;strong slot=&quot;header&quot;&gt;Elliot requested permission&lt;/strong&gt;
  &lt;img src=&quot;https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png&quot; slot=&quot;image&quot; width=&quot;100%&quot;/&gt;
&lt;/fish-card&gt;</code></pre>
          </template>
        </code-card>
      </fish-col>
      <fish-col span="4">
        <code-card title="图片-内容卡片" desc="包含图片、内容。">
          <template slot="demo">
            <fish-card>
              <img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" slot="image" width="100%"/>
              Elliot requested permission to view your contact details
            </fish-card>
          </template>
          <template slot="codeHtml">
            <pre v-highlightjs><code class="xml">&lt;fish-card&gt;
  &lt;img src=&quot;https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png&quot; slot=&quot;image&quot; width=&quot;100%&quot;/&gt;
  Elliot requested permission to view your contact details
&lt;/fish-card&gt;</code></pre>
          </template>
        </code-card>
      </fish-col>
      <fish-col span="8">
        <code-card title="内容卡片" desc="只有内容。">
          <template slot="demo">
            <fish-card>
              <h4>Elliot Fu</h4>
              <p>好友</p>
              Kristy is an art director living in New York.<br/>
              Veronika Ossi是一名居住在纽约的舞美师，她喜爱小猫、音乐和派对。<br/>
              萌萌狗有各种形状和大小。有的小狗因为呆萌的表情惹人疼爱，有的则因为五短身材令人怜惜。甚至还有一些会因为巨大的体型也会显得傻缺。
              <br/>
              Many people also have their own barometers for what makes a cute dog.
            </fish-card>
          </template>
          <template slot="codeHtml">
            <pre v-highlightjs><code class="xml">&lt;fish-card&gt;
  &lt;h4&gt;Elliot Fu&lt;/h4&gt;
  &lt;p&gt;好友&lt;/p&gt;
  Kristy is an art director living in New York.&lt;br/&gt;
  Veronika Ossi是一名居住在纽约的舞美师，她喜爱小猫、音乐和派对。&lt;br/&gt;
  萌萌狗有各种形状和大小。有的小狗因为呆萌的表情惹人疼爱，有的则因为五短身材令人怜惜。甚至还有一些会因为巨大的体型也会显得傻缺。
  &lt;br/&gt;
  Many people also have their own barometers for what makes a cute dog.
&lt;/fish-card&gt;</code></pre>
          </template>
        </code-card>
      </fish-col>
    </fish-row>
    <h3>Card Slots</h3>
    <div class="fish table attributes">
      <table style="table-layout: auto;">
        <thead>
        <tr>
          <th v-for="column in columns">{{column}}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in data">
          <td v-for="v in item" v-html="v"></td>
        </tr>
        </tbody>
      </table>
    </div>
  </main-layout>
</template>
<script>
  import MainLayout from './MainLayout.vue'
  import CodeCard from './CodeCard.vue'

  export default {
    components: {
      CodeCard,
      MainLayout
    },
    data () {
      return {
        columns: ['属性', '说明', '类型', '默认值'],
        data: [
          ['header', '标题', 'String', '-'],
          ['image', '图片', 'String', '-'],
          ['footer', '底部', 'String', '-']
        ]
      }
    }
  }
</script>
