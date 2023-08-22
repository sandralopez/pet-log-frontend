const Pagination = ({ currentPage, pageCount, onPageChange }) => {
    return (
        <div className="w-full flex flex-row justify-end mt-5 items-center">
            <button
            	className="button-pagination"
                disabled={currentPage <= 1}
                onClick={() => onPageChange(currentPage - 1)}
            >
                &lt;&lt;
            </button>
            <span className="font-light text-sm">
                Página {currentPage} de {pageCount}
            </span>
            <button
            	className="button-pagination"
                disabled={currentPage >= pageCount}
                onClick={() => onPageChange(currentPage + 1)}
            >
                &gt;&gt;
            </button>
        </div>
    );
}

export { Pagination };
