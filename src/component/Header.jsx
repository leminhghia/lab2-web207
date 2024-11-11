import { Link } from 'react-router-dom'
import { FaUserAlt } from 'react-icons/fa'

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-2xl">Hệ thống Trắc nghiệm</h1>
      <nav>
        <Link to="/login" className="btn btn-primary">
          <FaUserAlt className="mr-2" /> Đăng nhập
        </Link>
      </nav>
    </header>
  )
}

export default Header
