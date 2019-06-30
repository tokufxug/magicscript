import React from '../node_modules/react/index.js';
import CustomListView from './components/custom-listview.js';

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.items = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'];
  }

  render() {
    return React.createElement("view", {
      name: "main-view"
    }, React.createElement(CustomListView, {
      items: this.items
    }));
  }

}

export { MyApp };
