# guide-component
基于react+antd的引导组件


## 想要实现的效果

```js
import {Guide} from 'guide-component';
import React from 'react';
import {Input} from 'antd';

const Demo = () => {
  return (
    <div>
      <Guide>
        <div>这是</div>
        <Guide.Item step={1}>
          <Input />
        </Guide.Item>
        <Guide.Item step={1}>
          <Input />
        </Guide.Item>
      </Guide>
    </div>
  );
}
```