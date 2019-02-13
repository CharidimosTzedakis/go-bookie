import React, { SFC } from 'react'
import styled from 'styled-components'

interface BookSummaryProps {
  className?: string,
  bookTitle: string,
  imgUrl: string,
  description: string,
}

const BookSummaryComponent: SFC<BookSummaryProps> = (props) => {
    return (
        <div className={props.className}>
            <div className='bookSummaryContainer'>
                <h2>{props.bookTitle}</h2>
                <div>
                <img className='imageBookSummary' src={props.imgUrl}/>
                <span className='bookSummaryDescription'>{props.description}</span>
                </div>
            </div>
        </div>
    );
}

const BookSummary = styled(BookSummaryComponent)/*css*/`
    .bookSummaryContainer {
        max-width: 600px;
        max-height: 300px;
    }
    .imageBookSummary {
        display: inline-block;
        max-width: 150px;
        max-height: 250px;
        width: auto;
        height: auto;
    }
    .bookSummaryDescription {
        display: inline-block;
    }
`;

export default BookSummary;