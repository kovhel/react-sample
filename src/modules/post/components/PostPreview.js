import React from 'react';
import { Col, Image } from 'react-bootstrap';

const PostPreview = ({
  image,
  url,
}) => (
  <Col md={4} style={{ marginTop: '20px' }}>
    <a href={url}>
      <Image responsive rounded src={image} alt="reference preview" title={url} style={{ margin: 'auto' }} />
    </a>
  </Col>
);

export default PostPreview;
