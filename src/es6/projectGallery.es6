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
import Loading from "react-loading";
import React from "react";

import utils from "./utils.es6";

const mainTimeLapse = 200;
const itemsSetLoad = utils.is_mobile("phone") ? 5 : 10;

class ProjectGallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loadedAll: false,
      photos: [],
      videos: [],
      articles: [],
      items: [],
      itemsStore: [],
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.project) {
      const photos = _.get(nextProps, `project.images.all`)
        .concat(nextProps.lng ? _.get(nextProps, `project.images.${nextProps.lng}`) : [])
        .map((image) => _.pick(image, ["src", "srcset", "width", "height", "type"]));

      const videos = nextProps.lng
        ? nextProps.project.videos[nextProps.lng]
        : nextProps.project.videos;

      const articles = (nextProps.lng
        ? nextProps.project.articles[nextProps.lng]
        : nextProps.project.articles
      ).map((text) => {
        return {
          type: "article",
          content: text,
        };
      });

      const itemsStore = utils.merge(utils.merge(articles, videos), photos);

      this.setState({
        loadedAll: false,
        photos: photos,
        videos: videos,
        articles: articles,
        items: [],
        itemsStore: itemsStore,
        itemsLightbox: {
          type: "images",
          items: [],
        },
        cols: this.getCols(),
      });
      this.loadMoreItems();
    } else {
      this.setState({ loadedAll: false, photos: [], videos: [], itemsStore: [] });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    this.handleScroll();
  }

  componentDidMount() {
    this.componentWillReceiveProps(this.props);
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
      this.props.project &&
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
    let newItems = this.state.itemsStore.slice(0, itemsSetLoad);
    let newStore = this.state.itemsStore.slice(itemsSetLoad);
    let loadedAll = newStore.length ? false : true;

    this.setState({
      items: this.state.items.concat(newItems),
      itemsStore: newStore,
      loadedAll: loadedAll,
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
            ? this.state[typeItem]
            : this.state[typeItem].map((item) => item.content),
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
    if (!this.props.project) return <div />;

    return (
      <div className="App">
        <Gallery
          margin={4}
          items={this.state.items}
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
            <Loading ref="loadingElement" type="cylon" color="#d2d2d2" width="85" />
            <span className="loading-msg-text">Loading</span>
          </div>
        )}
      </div>
    );
  }
}
export default ProjectGallery;
