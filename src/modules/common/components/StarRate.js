import React from 'react';
import styles from '../styles/starRate.css';

export const MAX_RATE = 5;

class StarRate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rate: props.rate };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ rate: nextProps.rate });
  }

  onClick = (index) => () => {
    this.setState({ rate: index });
    this.props.onStarClick(index);
  }

  render() {
    const stars = [];
    for (let i = 1; i <= MAX_RATE; i++) {
      const classNames = (i <= this.state.rate) ? ['fa-star', styles.active] : ['fa-star-o', styles.empty];

      stars.push(
        <i className={['fa', styles.star, ...classNames].join(' ')} onClick={this.onClick(i)}></i>
      );
    }

    return (
      <div>
        {[stars]}
      </div>
    );
  }

}

export default StarRate;
