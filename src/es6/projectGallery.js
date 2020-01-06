/*jshint quotmark: false */
/*jshint white: false */
/*jshint trailing: false */
/*jshint newcap: false */
/*global React */
import _ from "lodash";
import "core-js/es6/map";
import "core-js/es6/set";
import "raf/polyfill";
import Gallery from "react-multimedia-gallery";
import Lightbox from "react-images-texts-videos";
import React, { useEffect, useState, useContext } from "react";

import { AppState } from "./contexts";
import utils from "./utils.js";

const mainTimeLapse = 200;
const itemsSetLoad = utils.is_mobile("phone") ? 5 : 10;

const ProjectGallery = () => {
  const context = useContext(AppState);
  const [state, setState] = useState({
    lastIndex: itemsSetLoad,
    itemsLightbox: {
      type: "images",
      items: [],
    },
  });

  const getCols = () => {
    var cols = 1;
    if (window.innerWidth >= 480) {
      cols = 2;
    }
    if (window.innerWidth >= 1024) {
      cols = 3;
    }
    return cols;
  };

  const handleResize = _.debounce(() => {
    var cols = getCols();
    setState({ ...state, cols });
  }, mainTimeLapse);

  const loadMoreItems = _.debounce(() => {
    const lastIndex = state.lastIndex + itemsSetLoad;
    const loadedAll = context.storeLength <= lastIndex;

    setState({
      ...state,
      lastIndex,
      loadedAll,
    });
  }, mainTimeLapse);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    state.lastIndex = itemsSetLoad;
    state.loadedAll = false;
  });

  const handleScroll = () => {
    let scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    if (
      context.project &&
      !state.loadedAll &&
      window.innerHeight + scrollY >=
        Math.min(
          document.body.offsetHeight - 50,
          document.getElementById("msg-loading-more").getBoundingClientRect().height,
        )
    ) {
      loadMoreItems();
    }
  };

  const openLightbox = (index, event, typeItem) => {
    event.preventDefault();

    setState({
      itemsLightbox: {
        type: typeItem == "photos" ? "images" : typeItem == "articles" ? "texts" : "videos",
        items:
          typeItem == "photos" ? context[typeItem] : context[typeItem].map((item) => item.content),
      },
      currentItem: index,
      lightboxIsOpen: true,
    });
  };

  const closeLightbox = () => {
    setState({
      currentItem: 0,
      lightboxIsOpen: false,
    });
  };

  const gotoPrevious = () => {
    setState({
      currentItem: state.currentItem - 1,
    });
  };

  const gotoNext = () => {
    setState({
      currentItem: state.currentItem + 1,
    });
  };

  if (!context.project) return null;
  const items = utils.merge(utils.merge(context.articles, context.videos), context.photos);
  return (
    <div className="App galleryContainer">
      <Gallery
        margin={4}
        items={items.slice(0, state.lastIndex)}
        cols={state.cols}
        onClickItem={openLightbox}
      />
      <Lightbox
        items={state.itemsLightbox}
        backdropClosesModal={true}
        onClose={closeLightbox}
        onClickPrev={gotoPrevious}
        onClickNext={gotoNext}
        currentItem={state.currentItem}
        isOpen={state.lightboxIsOpen}
        width={1600}
      />
      {!state.loadedAll && (
        <div className="loading-msg" id="msg-loading-more">
          <span className="see-more-button" onClick={loadMoreItems}>
            {context.lng === "en" ? "See more" : "Ver más"}
          </span>
        </div>
      )}
    </div>
  );
};
export default ProjectGallery;
