/* @flow */
import React from 'react';
import styles from '../styles/likeButton.css';

type Status = 'default' | 'waiting' | 'liked';

type Props = {
  isLiked: boolean,
  likesCount: number,
  handleLike: () => Promise<?Object>,
};

type State = {
  status: Status,
}

const getStatus = (isLiked: boolean): Status => (isLiked ? 'liked' : 'default');

class LikeButton extends React.Component {
  props: Props; // eslint-disable-line react/sort-comp
  state: State; // eslint-disable-line react/sort-comp

  constructor(props: Props) {
    super(props);
    this.state = { status: getStatus(props.isLiked) };
  }

  componentWillReceiveProps(nextProps: Props) {
    this.setState({ status: getStatus(nextProps.isLiked) });
  }

  onClick: Function = (): void => {
    this.setState({ status: 'waiting' });
    this.props.handleLike();
  };

  render() {
    const likesCount = <div className={styles.likesCount}>{this.props.likesCount} people like this</div>;

    if (this.state.status === 'waiting') {
      return (
        <div className={styles.container}>
          <div className={styles.button}>
            Waiting...
          </div>
          {likesCount}
        </div>
      );
    }

    const buttonClasses = [styles.button, this.state.status === 'liked' ? styles.liked : ''].join(' ');
    const thumbsUpClasses = ['fa', 'fa-thumbs-o-up', styles.thumbsUp, this.state.status === 'liked' ? styles.liked : ''].join(' ');
    const labelClasses = [styles.label, this.state.status === 'liked' ? styles.liked : ''].join(' ');

    return (
      <div className={styles.container}>
        <div className={buttonClasses} onClick={this.onClick}>
          <i className={thumbsUpClasses}></i>
          <span className={labelClasses}>Like</span>
        </div>
        {likesCount}
      </div>
    );
  }

}

export default LikeButton;
