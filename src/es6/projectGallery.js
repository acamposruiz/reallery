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
import React from "react";

import { AppState } from "./contexts";
import utils from "./utils.js";

const mainTimeLapse = 200;
const itemsSetLoad = utils.is_mobile("phone") ? 5 : 10;

class ProjectGallery extends React.Component {
  static contextType = AppState;
  constructor(props) {
    super(props);

    this.state = {
      lastIndex: itemsSetLoad,
      itemsLightbox: {
        type: "images",
        items: [],
      },
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.loadMoreItems = _.debounce(this.loadMoreItems.bind(this), mainTimeLapse);
    this.handleResize = _.debounce(this.handleResize.bind(this), mainTimeLapse);
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }

  componentWillUpdate() {
    this.state.lastIndex = itemsSetLoad;
    this.state.loadedAll = false;
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleResize);
  }

  handleResize() {
    var cols = this.getCols();

    this.setState({ cols });
  }

  handleScroll() {
    let scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    if (
      this.context.project &&
      !this.state.loadedAll &&
      window.innerHeight + scrollY >=
        Math.min(
          document.body.offsetHeight - 50,
          document.getElementById("msg-loading-more").getBoundingClientRect().height,
        )
    ) {
      this.loadMoreItems();
    }
  }

  getCols() {
    var cols = 1;
    if (window.innerWidth >= 480) {
      cols = 2;
    }
    if (window.innerWidth >= 1024) {
      cols = 3;
    }
    return cols;
  }

  loadMoreItems() {
    const lastIndex = this.state.lastIndex + itemsSetLoad;
    const loadedAll = this.context.storeLength <= lastIndex;

    this.setState({
      lastIndex,
      loadedAll,
    });

    //if (!loadedAll) utils.preload.gallery(newStore);
  }

  openLightbox(index, event, typeItem) {
    event.preventDefault();

    this.setState({
      itemsLightbox: {
        type: typeItem == "photos" ? "images" : typeItem == "articles" ? "texts" : "videos",
        items:
          typeItem == "photos"
            ? this.context[typeItem]
            : this.context[typeItem].map((item) => item.content),
      },
      currentItem: index,
      lightboxIsOpen: true,
    });
  }

  closeLightbox() {
    this.setState({
      currentItem: 0,
      lightboxIsOpen: false,
    });
  }

  gotoPrevious() {
    this.setState({
      currentItem: this.state.currentItem - 1,
    });
  }

  gotoNext() {
    this.setState({
      currentItem: this.state.currentItem + 1,
    });
  }

  render() {
    if (!this.context.project) return null;
    const items = utils.merge(
      utils.merge(this.context.articles, this.context.videos),
      this.context.photos,
    );
    return (
      <div className="App galleryContainer">
        <Gallery
          margin={4}
          items={items.slice(0, this.state.lastIndex)}
          cols={this.state.cols}
          onClickItem={this.openLightbox}
        />
        <Lightbox
          items={this.state.itemsLightbox}
          backdropClosesModal={true}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentItem={this.state.currentItem}
          isOpen={this.state.lightboxIsOpen}
          width={1600}
        />
        {!this.state.loadedAll && (
          <div className="loading-msg" id="msg-loading-more">
            <span className="see-more-button" onClick={this.loadMoreItems}>
              {this.context.lng === "en" ? "See more" : "Ver más"}
            </span>
          </div>
        )}
      </div>
    );
  }
}
export default ProjectGallery;
