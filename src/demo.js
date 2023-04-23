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
      value: this.state.value + 1,
    });
  };

  change = (evt) => {
    console.log('Input value: ', Number(evt.target.value));
    this.setState({
      value: Number(evt.target.value),
    });
  };

  componentDidMount() {
    if (typeof this.props.onMount === 'function') {
      this.props.onMount();
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (typeof this.props.onUpdate === 'function') {
      this.props.onUpdate();
    }
    this.setState({
      title: this.props.title,
    }, () => {
      console.log(this.props, 'componentDidUpdate', this.state);
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
        <form>
          <label htmlFor="my-input">Input:</label>
          <input className="my-input"
                 id="my-input"
                 name="counter-input"
                 type="number"
                 value={this.state.value}
                 onChange={this.change}
          />
        </form>
        <button onClick={this.add}>value++</button>
      </div>
    );
  }
}

// const root = createRoot(document.getElementById('root'));
// root.render(<Demo />);
