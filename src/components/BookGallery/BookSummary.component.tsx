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
                <div className='image-container'>
                    <img className='imageBookSummary' src={props.imgUrl}/>
                </div>
                <div className='summary-details'>
                    <h2>{props.bookTitle}</h2>
                    <span className='bookSummaryDescription'>{props.description}</span>
                </div>
            </div>
        </div>
    );
}

const BookSummary = styled(BookSummaryComponent)/*css*/`
    .image-container {
        display: flex;
        float: left;
    }
    .bookSummaryContainer {
        max-width: 600px;
        max-height: 300px;
    }
    .imageBookSummary {
        max-width: 150px;
        max-height: 250px;
        width: auto;
        height: auto;
    }
    .summary-details {
        display: flex;
    }
`;

export default BookSummary;