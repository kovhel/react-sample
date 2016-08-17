import { connect } from 'react-redux';

import PostList from '../components/PostList';
import { setIsLiked, setRate } from '../actionCreators';

const mapStateToProps = (state) => ({
  postsUserRating: state.userRate,
});

const PostListContainer = connect(
  mapStateToProps,
  { setIsLiked, setRate }
)(PostList);

export default PostListContainer;
