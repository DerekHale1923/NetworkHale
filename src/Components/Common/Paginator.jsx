import React, {useState} from 'react';
import style from './Paginator.module.css'

const Paginator = ({onPageChanged, currentPage, totalUsersCount, pageSize}) => {
    const [portionNumber, setPortionNumber] = useState(1)
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let portionCount = Math.ceil(pagesCount / pageSize)
    let leftPortionPageNumber = (portionNumber - 1) * pageSize + 1 //крайний слева будет 1
    let rightPortionPageNumber = portionNumber * pageSize //крайний справа будет 10
/* высчитав левый край и правый край вот и будет порция с 1го до 10го с 11го до 21го и тд...*/
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <>
            {
                portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>Prev</button>
            }
            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(i => <button
                    onClick={(e) => {
                        onPageChanged(i)
                    }}
                    className={currentPage === i ? style.selected : ''} key={i}>{i}</button>)}

            {
                portionCount > portionNumber &&
                <button onClick={() => setPortionNumber(portionNumber + 1)}>Next</button>
            }
        </>
    );
};

export default Paginator;