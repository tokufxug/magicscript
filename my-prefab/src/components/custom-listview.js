import React from 'react';

export default class CustomListView extends React.Component {
    constructor(props) {
        super(props);
        this.items = props.items;
    }

    render() {
        let i = 0;
        let viewItems = [];
        for (; i < this.items.length; i++)
        {
            viewItems.push(
                <listViewItem>
                    <text textSize={0.10} textColor={[0.1, 1, 0.1, 0.84]}>{this.items[i]}</text>
                </listViewItem>
            );
        }
        return (
            <listView width={0.5} height={0.5}>
                {viewItems}
            </listView>
        );
    }
}