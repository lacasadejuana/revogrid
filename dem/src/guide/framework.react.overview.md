# Quick start

RevoGrid provide special wrapper for React based on [stenciljs react adapter](https://www.npmjs.com/package/@stencil/react-output-target). 
<br>Just import it to your project and it can be used as part of react system.

:::tip
If you are using npm modules don't forget to import and define custom component `defineCustomElements` as part of environment
:::


With NPM:
```bash
npm i @revolist/revogrid-react --save;
```

With Yarn:

```bash
yarn add @revolist/revogrid-react;
```



```jsx
import React from "react";
import { defineCustomElements } from "@revolist/revogrid/loader"; // webcomponent definition loader 
import { RevoGrid } from "@revolist/revogrid-react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    // you have to define webcomponent before you can use the wrapper
    defineCustomElements();
    this.state = {
      columns: [{ prop: "name" }],
      source: [{ name: "1" }, { name: "2" }]
    };
  }

  afterEdit({ detail }) {}

  render() {
    return (
      <div>
        <RevoGrid
          theme="compact"
          columns={this.state.columns}
          source={this.state.source}
          onAfterEdit={(e) => this.afterEdit(e)}
        />
      </div>
    );
  }
}
```


Check [Sandbox](https://codesandbox.io/s/revogrid-react-g3ygo?file=/src/App.js) for real live sample.
<demo-react/>

<ClientOnly>
  <div class="tile">
    <iframe src="https://codesandbox.io/embed/revogrid-react-g3ygo?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;"
     title="RevoGrid-React"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>
  </div>
</ClientOnly>