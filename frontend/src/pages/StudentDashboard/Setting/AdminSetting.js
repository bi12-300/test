import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminSetting = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  // Lấy thông tin người dùng từ API khi trang được load
  useEffect(() => {
    // Giả sử bạn đã có API để lấy thông tin người dùng
    axios.get('/api/user/info') // API lấy thông tin người dùng
      .then(res => setUserInfo(res.data))
      .catch(err => console.log(err));
  }, []);

  // Hàm cập nhật thông tin người dùng
  const handleUpdate = () => {
    const updatedUser = {
      userId: 123, // Giả sử bạn lấy ID từ thông tin người dùng đã login
      ...userInfo
    };

    axios.post('/api/user/update', updatedUser) // Gọi API cập nhật
      .then(res => alert('Cập nhật thành công!'))
      .catch(err => alert('Có lỗi xảy ra'));
  };

  return (
    <div className="admin-setting">
      <h2>Cập nhật thông tin người dùng</h2>
      <input 
        type="text" 
        value={userInfo.name} 
        onChange={e => setUserInfo({ ...userInfo, name: e.target.value })} 
        placeholder="Tên"
      />
      <input 
        type="email" 
        value={userInfo.email} 
        onChange={e => setUserInfo({ ...userInfo, email: e.target.value })} 
        placeholder="Email"
      />
      <input 
        type="text" 
        value={userInfo.phone} 
        onChange={e => setUserInfo({ ...userInfo, phone: e.target.value })} 
        placeholder="Số điện thoại"
      />
      <input 
        type="text" 
        value={userInfo.address} 
        onChange={e => setUserInfo({ ...userInfo, address: e.target.value })} 
        placeholder="Địa chỉ"
      />
      <button onClick={handleUpdate}>Cập nhật</button>
    </div>
  );
};

export default AdminSetting;
