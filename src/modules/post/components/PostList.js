import React from 'react';
import Post from './Post';

const mockedPostConfig = {
  url: 'Lorem ipsum URL',
  title: 'Lorem ipsum',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  image: 'https://avatars0.githubusercontent.com/u/6853419?v=3&s=400',
};

const mockedPosts = [mockedPostConfig, mockedPostConfig, mockedPostConfig, mockedPostConfig, mockedPostConfig];

const PostList = ({
  postsUserRating,
  setIsLiked,
  setRate,
}) => (
  <div>
    {
      mockedPosts.map((postConfig, index) => (
        <Post
          key={index}
          config={{ ...postConfig, title: `${postConfig.title} ${index + 1}`, ...postsUserRating[index], id: index }}
          setIsLiked={setIsLiked}
          setRate={setRate}
        />
      ))
    }
  </div>
);

export default PostList;
