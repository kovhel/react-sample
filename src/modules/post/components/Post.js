import React from 'react';
import { Row, Col } from 'react-bootstrap';

import PostPreview from './PostPreview';
import PostDescription from './PostDescription';

const Post = ({
  config,
  setIsLiked,
  setRate,
}) => (
  <Row style={{ margin: '20px 0' }} >
    <Col md={6} mdOffset={2} style={{ backgroundColor: '#fff' }}>
      <PostPreview url={config.url} image={config.image} />
      <PostDescription
        config={config}
        setIsLiked={setIsLiked}
        setRate={setRate}
      />
    </Col>
  </Row>
);

export default Post;
