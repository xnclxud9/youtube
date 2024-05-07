import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';
import VideoCard from '../components/VideoCard';

function PlayList({ id }) {
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ['palylist', id],
    queryFn: () => {
      return youtube.playList(id);
    },
  });
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong 😖</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} type='list' />
          ))}
        </ul>
      )}
    </>
  );
}

export default PlayList;
