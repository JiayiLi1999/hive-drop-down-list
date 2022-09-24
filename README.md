drop-down-list
==============


### Objective

* Using React or vanilla (plain) Javascript, build a reusable dropdown menu component. Please do not use a pre-built dropdown from a component library. We expect you to build this from scratch.


### Usage

This is the basic usage of react-dropdown

```Javascript
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = [
  'one', 'two', 'three'
];
const defaultOption = options[0];
<Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />;
```

**Options**

Single Choice

```JavaScript
    const choices = ["male", "female", "nonbinary"]
    return (
        <Dropdown options={choices}/>
);
```

Multiple Choices
```JavaScript
    const choices2 = ["CA", "WA", "NY", "HA", "UI", "TX"]
    return (
        <Dropdown options={choices2} multiselect={true}/>
    );
```

**Run example**

```
$ open dist/index.html to check a simple demo
```

### License
 Copyright @ Jiayi Li