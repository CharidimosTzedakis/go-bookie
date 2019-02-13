import React, { Component } from 'react'
import BookSummary from './BookSummary.component'

interface BookGalleryProps {
    className?: string,
}

interface BookGallerySate {
    loggedIn: boolean;
}

class BookGallery extends Component <BookGalleryProps, BookGallerySate> {

    constructor(props: BookGalleryProps){
        super(props);
        this.state = {
            loggedIn: true
        };
    }

    render() {
        const testUrl = 'https://prodimage.images-bn.com/pimages/9781481845700_p0_v2_s550x406.jpg';
        const description = 'The year is 2033. The world has been reduced to rubble. Humanity is nearly extinct. The half-destroyed cities have become uninhabitable through radiation. Beyond their boundaries, they say, lie endless burned-out deserts and the remains of splintered forests. Survivors still remember the past greatness of humankind. But the last remains of civilisation have already become a distant memory, the stuff of myth and legend. '
        return (
            <BookSummary bookTitle='Metro 2033' imgUrl={testUrl} description={description}/>
        );
    }
}

export default BookGallery;