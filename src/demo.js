import React from 'react';
// import { createRoot } from 'react-dom/client';

export class Demo extends React.PureComponent {
  static defaultProps = {
    title: 'This is a Demo',
    value: 0,
  };

  constructor(props) {
    super(props);
    const { title, value } = props;
    this.state = {
      title,
      value,
    };
  }

  add = () => {
    this.setState({
      value: this.state.value++,
    });
  };

  change = (evt) => {
    this.setState({
      value: evt.target.value,
    });
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(this.props, 'did update');
    this.setState({
      title: this.props.title,
    });
  }

  render() {
    return (
      <div className="container">
        <h2>{this.state.title}</h2>
        <div className="comp">
          this is demo.
        </div>
        <div className="counter">
          {this.state.value}
        </div>
        <input type="number" value={this.state.value} onChange={this.change}/>
        <button onClick={this.add}>value++</button>
      </div>
    );
  }
}

// const root = createRoot(document.getElementById('root'));
// root.render(<Demo />);
