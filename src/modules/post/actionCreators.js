export const setIsLiked = (id, isLiked) => ({
  type: 'LIKE_SET',
  payload: {
    id,
    isLiked,
  },
});

export const setRate = (id, rate) => ({
  type: 'RATE_SET',
  payload: {
    id,
    rate,
  },
});
