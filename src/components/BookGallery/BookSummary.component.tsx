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
            <div>
                <h2>{props.bookTitle}</h2>
                <img src={props.imgUrl}/>
                <span>{props.description}</span>
            </div>
        </div>
    );
}

const BookSummary = styled(BookSummaryComponent)/*css*/`
    div {
        width: 100px;
        height: 200px;
    }
`;

export default BookSummary;