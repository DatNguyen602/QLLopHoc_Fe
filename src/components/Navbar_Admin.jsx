import React from 'react'

const Navbar_Admin = () => {
  return (
    <div id='admin--nav'>
        <ul>
          <li>
            <a href="/">DS Lớp Học</a>
          </li>
          <li>
            <a href="">Quản Lý</a>
            <ul>
              <li>
                <a href="/quanly::taikhoan">Tài Khoản</a>
              </li>
              <li>
                <a href="/quanly::baigiang">Bài Giảng</a>
              </li>
              <li>
                <a href="/quanly::baitap">Bài Tập</a>
              </li>
            </ul>
          </li>
        </ul>
    </div>
  )
}

export default Navbar_Admin