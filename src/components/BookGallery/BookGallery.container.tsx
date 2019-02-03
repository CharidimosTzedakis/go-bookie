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
        const description = 'This is the best sci-fi book ever.'
        return (
            <BookSummary bookTitle='Metro 2033' imgUrl={testUrl} description={description}/>
        );
    }
}

export default BookGallery;