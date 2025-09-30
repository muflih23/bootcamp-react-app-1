import React from "react";
import style from "./pagination.module.css";

const Pagination = ({
  totalPages,
  currentPage,
  onPageChange,
  visiblePages = 5,
}) => {
  if (totalPages <= 1) return null; // Tidak tampil jika hanya 1 halaman

  const generatePages = () => {
    const pages = [];
    const half = Math.floor(visiblePages / 2);

    let start = Math.max(1, currentPage - half);
    let end = Math.min(totalPages, currentPage + half);

    // Jika halaman di awal
    if (currentPage <= half) {
      end = Math.min(totalPages, visiblePages);
    }

    // Jika halaman di akhir
    if (currentPage + half >= totalPages) {
      start = Math.max(1, totalPages - visiblePages + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  const pages = generatePages();

  return (
    <div className={style.pagination}>
      {/* Tombol Previous */}
      <button
        className={style["pagination-btn"]}
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Prev
      </button>

      {/* Jika halaman pertama tidak muncul */}
      {pages[0] > 1 && (
        <>
          <button
            className={style["pagination-btn"]}
            onClick={() => onPageChange(1)}
          >
            1
          </button>
          <span className={style["pagination-ellipsis"]}>...</span>
        </>
      )}

      {/* Tombol halaman */}
      {pages.map((page) => (
        <button
          key={page}
          className={`${style["pagination-btn"]} ${
            page === currentPage ? style["active"] : ""
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      {/* Jika halaman terakhir tidak muncul */}
      {pages[pages.length - 1] < totalPages && (
        <>
          <span className={style["pagination-ellipsis"]}>...</span>
          <button
            className={style["pagination-btn"]}
            onClick={() => onPageChange(totalPages)}
          >
            {totalPages}
          </button>
        </>
      )}

      {/* Tombol Next */}
      <button
        className={style["pagination-btn"]}
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
