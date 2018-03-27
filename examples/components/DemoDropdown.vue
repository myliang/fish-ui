<template>
  <main-layout menuActiveIndex="dropdown">
    <h3>Dropdown</h3>
    <fish-card fluid>
      <fish-dropdown>
        <a slot="title">Link<i class="fa fa-arrow-circle-down" style="margin-left: 10px;"></i></a>
        <fish-option index="0" content="Jack"></fish-option>
        <fish-option index="1" content="Lucy"></fish-option>
        <fish-option index="2" content="Active"></fish-option>
        <fish-option index="3" disabled content="disabled"></fish-option>
      </fish-dropdown>
      <fish-dropdown>
        <fish-button slot="title">BL<i class="fa fa-angle-down" style="margin-left: 10px;"></i></fish-button>
        <fish-option index="0" content="<a href='http://www.baidu.com' target='_blank'>Jack</a>"></fish-option>
        <fish-option index="1" content="Lucy"></fish-option>
        <fish-option index="2" content="Active"></fish-option>
        <fish-option index="3" disabled content="disabled"></fish-option>
      </fish-dropdown>
      <fish-dropdown align="bottom-right">
        <fish-button slot="title">BR<i class="fa fa-angle-down" style="margin-left: 10px;"></i></fish-button>
        <fish-option index="1" content="Lucy"></fish-option>
        <fish-option index="2" content="Active"></fish-option>
      </fish-dropdown>
      <fish-dropdown align="top-left">
        <fish-button slot="title">TL<i class="fa fa-angle-down" style="margin-left: 10px;"></i></fish-button>
        <fish-option index="1" content="Lucy"></fish-option>
        <fish-option index="2" content="Active"></fish-option>
      </fish-dropdown>
      <fish-dropdown align="top-right">
        <fish-button slot="title">TR<i class="fa fa-angle-down" style="margin-left: 10px;"></i></fish-button>
        <fish-option index="1" content="Lucy"></fish-option>
        <fish-option index="2" content="Active"></fish-option>
      </fish-dropdown>
      <footer slot="footer">
        <pre v-highlightjs><code class="html">&lt;fish-dropdown&gt;
        &lt;a slot=&quot;title&quot;&gt;Link&lt;i class=&quot;fa fa-arrow-circle-down&quot; style=&quot;margin-left: 10px;&quot;&gt;&lt;/i&gt;&lt;/a&gt;
        &lt;fish-option index=&quot;0&quot; content=&quot;Jack&quot;&gt;&lt;/fish-option&gt;
        &lt;fish-option index=&quot;1&quot; content=&quot;Lucy&quot;&gt;&lt;/fish-option&gt;
        &lt;fish-option index=&quot;2&quot; content=&quot;Active&quot;&gt;&lt;/fish-option&gt;
        &lt;fish-option index=&quot;3&quot; disabled content=&quot;disabled&quot;&gt;&lt;/fish-option&gt;
      &lt;/fish-dropdown&gt;
      &lt;fish-dropdown&gt;
        &lt;fish-button slot=&quot;title&quot;&gt;Bl&lt;i class=&quot;fa fa-arrow-circle-down&quot; style=&quot;margin-left: 10px;&quot;&gt;&lt;/i&gt;&lt;/fish-button&gt;
        &lt;fish-option index=&quot;0&quot; content=&quot;&lt;a href=&#x27;http://www.baidu.com&#x27; target=&#x27;_blank&#x27;&gt;Jack&lt;/a&gt;&quot;&gt;&lt;/fish-option&gt;
        &lt;fish-option index=&quot;1&quot; content=&quot;Lucy&quot;&gt;&lt;/fish-option&gt;
        &lt;fish-option index=&quot;2&quot; content=&quot;Active&quot;&gt;&lt;/fish-option&gt;
        &lt;fish-option index=&quot;3&quot; disabled content=&quot;disabled&quot;&gt;&lt;/fish-option&gt;
      &lt;/fish-dropdown&gt;
      &lt;fish-dropdown align=&quot;bottom-right&quot;&gt;
        &lt;fish-button slot=&quot;title&quot;&gt;BR&lt;i class=&quot;fa fa-angle-down&quot; style=&quot;margin-left: 10px;&quot;&gt;&lt;/i&gt;&lt;/fish-button&gt;
        &lt;fish-option index=&quot;1&quot; content=&quot;Lucy&quot;&gt;&lt;/fish-option&gt;
        &lt;fish-option index=&quot;2&quot; content=&quot;Active&quot;&gt;&lt;/fish-option&gt;
      &lt;/fish-dropdown&gt;
      &lt;fish-dropdown align=&quot;top-left&quot;&gt;
        &lt;fish-button slot=&quot;title&quot;&gt;TL&lt;i class=&quot;fa fa-angle-down&quot; style=&quot;margin-left: 10px;&quot;&gt;&lt;/i&gt;&lt;/fish-button&gt;
        &lt;fish-option index=&quot;1&quot; content=&quot;Lucy&quot;&gt;&lt;/fish-option&gt;
        &lt;fish-option index=&quot;2&quot; content=&quot;Active&quot;&gt;&lt;/fish-option&gt;
      &lt;/fish-dropdown&gt;
      &lt;fish-dropdown align=&quot;top-right&quot;&gt;
        &lt;fish-button slot=&quot;title&quot;&gt;TR&lt;i class=&quot;fa fa-angle-down&quot; style=&quot;margin-left: 10px;&quot;&gt;&lt;/i&gt;&lt;/fish-button&gt;
        &lt;fish-option index=&quot;1&quot; content=&quot;Lucy&quot;&gt;&lt;/fish-option&gt;
        &lt;fish-option index=&quot;2&quot; content=&quot;Active&quot;&gt;&lt;/fish-option&gt;
      &lt;/fish-dropdown&gt;</code></pre>
      </footer>
    </fish-card>
  </main-layout>
</template>
<script>
  import MainLayout from './MainLayout.vue'

  export default {
    components: {
      MainLayout
    }
  }
</script>
