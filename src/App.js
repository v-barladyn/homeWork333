import React from "react";
import { render } from "react-dom";
import articles from './components/data.js';
import Posts from './components/Posts.js';
import Button from './components/Button.js';
import PostCount from './components/PostCount.js';

class App extends React.Component {
    constructor() {
        super();
        this.state = { limit: 10, show: true };
        this.showMore = this.showMore.bind(this);
    }
    showMore() {
        this.setState({
            show: this.state.limit >= 90 ? false : true,
            limit: this.state.limit + 10,
        });

    }

    render() {

        return (
            <div>
                <PostCount show={this.state.limit} />
                <Posts titles = {articles} lim = {this.state.limit}/>
                {this.state.show && <Button button = {this.showMore} />}
            </div>
        );
    }
}

render(<App />,
    document.getElementById("root"));

export default App;