import './App.css';
import React  from 'react';
import ReactPlayer from 'react-player';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function App() {

    function handleDuration(duration) {
        console.log('onDuration', duration)
    }

    const YoutubeSlide = ({ url, isSelected }) => (
      <ReactPlayer width="100%" height={"100%"} url={url} playing={true} loop muted controls onDuration={(e)=>handleDuration(e)}/>
  );

  const customRenderItem = (item, props) => <item.type {...item.props} {...props} />;

  const getVideoThumb = (videoId) => `https://img.youtube.com/vi/${videoId}/default.jpg`;

  const getVideoId = (url) => url.substr('https://www.youtube.com/embed/'.length, url.length);

    const customRenderThumb = (children) =>
        children.map((item) => {
            const videoId = getVideoId(item.props.url);

            return <img src={getVideoThumb(videoId)} />;
        });

  return (
      <Carousel
           autoPlay={true} interval={15000} stopOnHover={false}
          infiniteLoop={true} renderItem={customRenderItem} renderThumbs={customRenderThumb}>
        <YoutubeSlide key="youtube-1" url="https://firebasestorage.googleapis.com/v0/b/display-client.appspot.com/o/10%20Second%20Video_%20Stuffed%20Grilled%20Sandwiches.mp4a0d91532-aeaa-4b74-9c9c-96d87757d6e7?alt=media&token=bf269397-6d22-4e93-bfb8-796eedaad3ab"/>
        <YoutubeSlide key="youtube-2" url="https://www.youtube.com/embed/mOdmi9SVeWY" />
          {/*<img src={"https://img.youtube.com/vi/n0F6hSpxaFc/default.jpg"} alt={"sdf"}/>*/}
        <YoutubeSlide key="youtube-3" url="https://www.youtube.com/embed/n0F6hSpxaFc" />
        <YoutubeSlide key="youtube-4" url="https://www.youtube.com/embed/0uGETVnkujA" />
      </Carousel>
  );
}

export default App;
