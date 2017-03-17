/*jshint quotmark: false */
/*jshint white: false */
/*jshint trailing: false */
/*jshint newcap: false */
/*global React */
import React from 'react';
import Gallery from 'react-photo-gallery';

class ProjectGallery extends React.Component {

	constructor(props, context) {
		super(props, context);
	}

    openLightbox() {
		console.log(arguments);
	}

	render() {

        /*let PHOTO_SET = [
            {
                src: 'http://example.com/example/img1.jpg',
                srcset: [
                    'http://example.com/example/img1_1024.jpg 1024w',
                    'http://example.com/example/img1_800.jpg 800w',
                    'http://example.com/example/img1_500.jpg 500w',
                    'http://example.com/example/img1_320.jpg 320w',
                ],
                sizes:[
                    '(min-width: 480px) 50vw',
                    '(min-width: 1024px) 33.3vw',
                    '100vw'
                ],
                width: 681,
                height: 1024,
                alt: 'image 1',
            },
            {
                src: 'http://example.com/example/img2.jpg',
                srcset: [
                    'http://example.com/example/img2_1024.jpg 1024w',
                    'http://example.com/example/img2_800.jpg 800w',
                    'http://example.com/example/img2_500.jpg 500w',
                    'http://example.com/example/img2_320.jpg 320w',
                ],
                sizes:[
                    '(min-width: 480px) 50vw',
                    '(min-width: 1024px) 33.3vw',
                    '100vw'
                ],
                width: 600,
                height: 600,
                alt: 'image 2',
            }
        ];*/

        const PHOTO_SET = this.props.project.images.map((image, key) => {
            return {
                src: image.path,
                width: image.width,
                height: image.height
            };
        });

		return <div>
					<Gallery photos={PHOTO_SET} onClickPhoto={this.openLightbox}/>
				</div>
	}
};

export default ProjectGallery;
