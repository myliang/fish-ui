<template>
  <main-layout menuActiveIndex="dropdown">
    <h3>Dropdown 下拉菜单</h3>
    <vui-card>
      <vui-dropdown>
        <a slot="title">Dropdown<i class="fa fa-arrow-circle-down" style="margin-left: 10px;"></i></a>
        <vui-option index="0" content="Jack"></vui-option>
        <vui-option index="1" content="Lucy"></vui-option>
        <vui-option index="2" content="Active"></vui-option>
        <vui-option index="3" disabled content="disabled"></vui-option>
      </vui-dropdown>
      <vui-dropdown>
        <vui-button slot="title">Dropdown<i class="fa fa-arrow-circle-down" style="margin-left: 10px;"></i></vui-button>
        <vui-option index="0" content="<a href='http://www.baidu.com' target='_blank'>Jack</a>"></vui-option>
        <vui-option index="1" content="Lucy"></vui-option>
        <vui-option index="2" content="Active"></vui-option>
        <vui-option index="3" disabled content="disabled"></vui-option>
      </vui-dropdown>
      <footer slot="footer">
        <pre v-highlightjs><code class="html">&lt;vui-dropdown&gt;
  &lt;a slot=&quot;title&quot;&gt;Dropdown&lt;i class=&quot;fa fa-arrow-circle-down&quot; style=&quot;margin-left: 10px;&quot;&gt;&lt;/i&gt;&lt;/a&gt;
  &lt;vui-option index=&quot;0&quot; content=&quot;Jack&quot;&gt;&lt;/vui-option&gt;
  &lt;vui-option index=&quot;1&quot; content=&quot;Lucy&quot;&gt;&lt;/vui-option&gt;
  &lt;vui-option index=&quot;2&quot; content=&quot;Active&quot;&gt;&lt;/vui-option&gt;
  &lt;vui-option index=&quot;3&quot; disabled content=&quot;disabled&quot;&gt;&lt;/vui-option&gt;
&lt;/vui-dropdown&gt;
&lt;vui-dropdown&gt;
  &lt;vui-button slot=&quot;title&quot;&gt;Dropdown&lt;i class=&quot;fa fa-arrow-circle-down&quot; style=&quot;margin-left: 10px;&quot;&gt;&lt;/i&gt;&lt;/vui-button&gt;
  &lt;vui-option index=&quot;0&quot; content=&quot;&lt;a href=&#x27;http://www.baidu.com&#x27; target=&#x27;_blank&#x27;&gt;Jack&lt;/a&gt;&quot;&gt;&lt;/vui-option&gt;
  &lt;vui-option index=&quot;1&quot; content=&quot;Lucy&quot;&gt;&lt;/vui-option&gt;
  &lt;vui-option index=&quot;2&quot; content=&quot;Active&quot;&gt;&lt;/vui-option&gt;
  &lt;vui-option index=&quot;3&quot; disabled content=&quot;disabled&quot;&gt;&lt;/vui-option&gt;
&lt;/vui-dropdown&gt;</code></pre>
      </footer>
    </vui-card>
  </main-layout>
</template>
<script>
  import MainLayout from './MainLayout.vue'
  import VuiCard from '../components/Card.vue'
  import VuiDropdown from '../components/Dropdown.vue'
  import VuiOption from '../components/Option.vue'
  import VuiButton from '../components/Button.vue'

  export default {
    components: {
      VuiButton,
      VuiOption,
      VuiDropdown,
      VuiCard,
      MainLayout
    }
  }
</script>
