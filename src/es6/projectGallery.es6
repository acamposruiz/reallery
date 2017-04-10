/*jshint quotmark: false */
/*jshint white: false */
/*jshint trailing: false */
/*jshint newcap: false */
/*global React */
import React from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import Loading from 'react-loading';
import utils from './utils.es6';
import Videos from './videos.es6';
import _ from 'lodash';

const mainTimeLapse = 200;
const photosSetLoad = utils.is_mobile('phone')? 5: 10;

class ProjectGallery extends React.Component {

	constructor(props) {
		super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.handleResize = this.handleResize.bind(this);
        this.loadMorePhotos = this.loadMorePhotos.bind(this);
        this.closeLightbox = this.closeLightbox.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
	}

    componentWillReceiveProps(nextProps) {

        if(nextProps.project){
            this.setState({
                loadedAll: false,
                photos: [],
                cols: this.getCols(),
                videos: nextProps.project.videos,
                photosStore: nextProps.project.images.map(image => {
                    return {
                        src: image.path,
                        srcset: image.srcset,
                        width: image.width,
                        height: image.height
                    };
                })
            });
            this.loadMorePhotos();
        } else { this.setState({ loadedAll: false, photos: [], videos: [], photosStore: []}); }

    }

    componentDidMount() {
        this.loadMorePhotos = _.debounce(this.loadMorePhotos, mainTimeLapse);
        this.handleResize = _.debounce(this.handleResize, mainTimeLapse);
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener("resize", this.handleResize);
    }

    handleResize(){

        var cols = this.getCols();

        this.setState({cols});
    }

    handleScroll(){
        let scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
        if (this.props.project && !this.state.loadedAll
            && (window.innerHeight + scrollY) >= (document.body.offsetHeight - 50)) {
            this.loadMorePhotos();
        }
    }

    getCols() {
        var cols = 1;
        if (window.innerWidth >= 480){ cols = 2; }
        if (window.innerWidth >= 1024){ cols = 3; }
        return cols;
    }

    loadMorePhotos(){

        let newPhotos = this.state.photosStore.slice(0, photosSetLoad);
        let newStore = this.state.photosStore.slice(photosSetLoad);
        let loadedAll = newStore.length? false:true;

        this.setState({
            photos: this.state.photos.concat(newPhotos),
            photosStore: newStore,
            loadedAll: loadedAll
        });

        if (!loadedAll) utils.preload.gallery(newStore);
    }

    openLightbox(index, event){
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true
        });
    }

    closeLightbox(){
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }

    gotoPrevious(){
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }

    gotoNext(){
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }

    render() {

        if (!this.props.project) return <div/>;



        return (
            <div className="App">
                <Videos videos={this.state.videos}></Videos>
                <Gallery photos={this.state.photos} cols={this.state.cols} onClickPhoto={this.openLightbox} />
                <Lightbox
                    images={this.state.photos.concat(this.state.photosStore)}
                    backdropClosesModal={true}
                    onClose={this.closeLightbox}
                    onClickPrev={this.gotoPrevious}
                    onClickNext={this.gotoNext}
                    currentImage={this.state.currentImage}
                    isOpen={this.state.lightboxIsOpen}
                    width={1600}
                />
                {!this.state.loadedAll
                && <div className="loading-msg" id="msg-loading-more"><Loading type='cylon' color='#d2d2d2' width="85"/>
                    <span className="loading-msg-text">Loading</span></div>}
            </div>
        );

	}
};

export default ProjectGallery;
