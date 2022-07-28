import {PageButton, PageButtonActive, PageList} from '../styles/components/Pagination'

interface PaginationProps{
    limit: number
    total: number
    offset: number
    setOffset: (...params) => void
}

const MAX_ITEMS = 9
const MAX_LEFT = (MAX_ITEMS - 1)/2

export default function Pagination(props: PaginationProps){
    const current = props.offset ? (props.offset/props.limit) + 1 : 1
    const pages = Math.ceil(props.total/props.limit)
    const maxFirst = Math.max(pages - (MAX_ITEMS - 1), 1)
    const first = Math.min(Math.max(current - MAX_LEFT, 1), maxFirst)

    const handleClick = (index: number) => {
        props.setOffset(index)
    }

    return (
        <PageList>
            {Array.from({length: Math.min(MAX_ITEMS, pages)})
            .map((_, index) => index + first)
            .map((page) => (
                <li key={page}>
                    {page === current ?
                        <PageButtonActive onClick={() => handleClick((page - 1) * props.limit)}>{page}</PageButtonActive>
                    :
                        <PageButton onClick={() => handleClick((page - 1) * props.limit)}>{page}</PageButton>
                    }
                </li>
            ))}
        </PageList>
    )
}