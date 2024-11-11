import { useState } from 'react'
import { FaSave, FaTimes, FaListAlt } from 'react-icons/fa'

const Tabs = ({ activeTab, setActiveTab }) => (
  <div className="flex space-x-2 mb-4">
    <button
      onClick={() => setActiveTab('update')}
      className={`flex items-center space-x-2 px-3 py-2 ${
        activeTab === 'update'
          ? 'text-blue-500 border-b-2 border-blue-500'
          : 'text-gray-500'
      }`}
    >
      <FaSave aria-label="Cập nhật" /> <span>CẬP NHẬT</span>
    </button>
    <button
      onClick={() => setActiveTab('list')}
      className={`flex items-center space-x-2 px-3 py-2 ${
        activeTab === 'list'
          ? 'text-blue-500 border-b-2 border-blue-500'
          : 'text-gray-500'
      }`}
    >
      <FaListAlt aria-label="Danh sách" /> <span>DANH SÁCH</span>
    </button>
  </div>
)

const SalaryForm = () => {
  const [activeTab, setActiveTab] = useState('update')

  return (
    <div className="p-4">
      {/* Tabs */}
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === 'update' ? (
        /* Update Form Section */
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">NHẬP LƯƠNG THÁNG 12</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label>Mã nhân viên</label>
                <input
                  type="text"
                  className="w-full border px-3 py-2 rounded-md"
                  placeholder="Nhập mã nhân viên"
                />
              </div>
              <div>
                <label>Họ và tên</label>
                <input
                  type="text"
                  className="w-full border px-3 py-2 rounded-md"
                  placeholder="Nhập họ và tên"
                />
              </div>
              <div>
                <label>Câu lạc bộ</label>
                <input
                  type="text"
                  className="w-full border px-3 py-2 rounded-md"
                  placeholder="Đà Nẵng"
                />
              </div>
              <div>
                <label>Lương</label>
                <input
                  type="number"
                  className="w-full border px-3 py-2 rounded-md"
                  placeholder="Nhập lương"
                />
              </div>
              <div>
                <label>Thưởng</label>
                <input
                  type="number"
                  className="w-full border px-3 py-2 rounded-md"
                  placeholder="Nhập thưởng"
                />
              </div>
              <div>
                <label>Phụ cấp</label>
                <input
                  type="number"
                  className="w-full border px-3 py-2 rounded-md"
                  placeholder="Nhập phụ cấp"
                />
              </div>
            </div>
            <div>
              <label>Ghi chú</label>
              <textarea
                className="w-full border px-3 py-2 rounded-md"
                placeholder="Ghi chú thêm"
              ></textarea>
            </div>
            <div className="flex space-x-2">
              <button
                type="submit"
                className="flex items-center space-x-1 bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                <FaSave aria-label="Lưu" /> <span>Lưu</span>
              </button>
              <button
                type="button"
                className="flex items-center space-x-1 bg-gray-500 text-white px-4 py-2 rounded-md"
              >
                <FaTimes aria-label="Hủy" /> <span>Hủy</span>
              </button>
            </div>
          </form>
        </div>
      ) : (
        /* List Table Section */
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">BẢNG LƯƠNG THÁNG 12</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2">MÃ NV</th>
                <th className="border px-4 py-2">HỌ VÀ TÊN</th>
                {/* <th className="border px-4 py-2">THU NHẬP</th> */}
                <th className="border px-4 py-2">LƯƠNG</th>
                <th className="border px-4 py-2">THƯỞNG</th>
                <th className="border px-4 py-2">PHỤ CẤP</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  id: 'NV101',
                  name: 'Nguyễn Công Phượng',
                  salary: 5000000,
                  bonus: 500000,
                  allowance: 0,
                },
                {
                  id: 'NV102',
                  name: 'Phan Văn Tài Em',
                  salary: 9000000,
                  bonus: 600000,
                  allowance: 100000,
                },
                {
                  id: 'NV103',
                  name: 'Lê Huỳnh Đức',
                  salary: 7000000,
                  bonus: 300000,
                  allowance: 200000,
                },
              ].map((row, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{row.id}</td>
                  <td className="border px-4 py-2">{row.name}</td>
                  <td className="border px-4 py-2">{row.salary}</td>
                  <td className="border px-4 py-2">{row.bonus}</td>
                  <td className="border px-4 py-2">{row.allowance}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-4 text-sm">
            Lương của cầu thủ và huấn luyện viên chuyên nghiệp
          </p>
        </div>
      )}
    </div>
  )
}

export default SalaryForm
