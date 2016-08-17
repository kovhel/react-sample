import React from 'react';
import { Col } from 'react-bootstrap';

import StarRate from '../../common/components/StarRate';
import LikeButton from '../../common/components/LikeButton';

const PostDescription = ({
  config,
  setIsLiked,
  setRate,
}) => (
  <Col md={8} >
    <h3>{config.title}</h3>
    <p>{config.description}</p>
    <div style={{ margin: '10px 0' }} >
      <LikeButton isLiked={config.isLiked} likesCount={0} handleLike={() => { setIsLiked(config.id, !config.isLiked); }} />
    </div>
    <div style={{ float: 'left' }} >
      <p>Was this information helpful?</p>
      <StarRate onStarClick={(rate) => { setRate(config.id, rate); }} rate={config.rate} />
    </div>
  </Col>
);

export default PostDescription;
