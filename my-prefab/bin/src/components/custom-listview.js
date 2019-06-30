import React from '../../node_modules/react/index.js';

class CustomListView extends React.Component {
  constructor(props) {
    super(props);
    this.items = props.items;
  }

  render() {
    let i = 0;
    let viewItems = [];

    for (; i < this.items.length; i++) {
      viewItems.push(React.createElement("listViewItem", null, React.createElement("text", {
        textSize: 0.10,
        textColor: [0.1, 1, 0.1, 0.84]
      }, this.items[i])));
    }

    return React.createElement("listView", {
      width: 0.5,
      height: 0.5
    }, viewItems);
  }

}

export default CustomListView;
