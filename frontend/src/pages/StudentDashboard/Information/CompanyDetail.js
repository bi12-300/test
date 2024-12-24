import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Settings = () => {
  // State lưu trữ thông tin người dùng từ backend
  const [userInfo, setUserInfo] = useState({
    fullName: '',
    birthDate: '',
    studentId: '',
    faculty: '',
    major: '',
    email: '',
    phone: ''
  });

  // State lưu trữ thông tin mà người dùng nhập vào
  const [newFullName, setNewFullName] = useState('');
  const [newBirthDate, setNewBirthDate] = useState('');
  const [newStudentId, setNewStudentId] = useState('');
  const [newFaculty, setNewFaculty] = useState('');
  const [newMajor, setNewMajor] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPhone, setNewPhone] = useState('');

  // Lấy thông tin người dùng từ API khi component render lần đầu
  useEffect(() => {
    axios.get('/api/student/info')
      .then(res => {
        setUserInfo(res.data); // Cập nhật thông tin người dùng từ API
        // Đặt các giá trị mặc định trong các trường nhập liệu
        setNewFullName(res.data.fullName);
        setNewBirthDate(res.data.birthDate);
        setNewStudentId(res.data.studentId);
        setNewFaculty(res.data.faculty);
        setNewMajor(res.data.major);
        setNewEmail(res.data.email);
        setNewPhone(res.data.phone);
      })
      .catch(err => console.log(err));
  }, []);

  // Hàm xử lý khi người dùng nhấn nút "Cập nhật thông tin"
  const handleUpdate = () => {
    // Gửi dữ liệu đã thay đổi đến API backend
    axios.post('/api/student/updateInfo', {
      fullName: newFullName,
      birthDate: newBirthDate,
      studentId: newStudentId,
      faculty: newFaculty,
      major: newMajor,
      email: newEmail,
      phone: newPhone
    })
    .then(res => {
      alert('Cập nhật thành công!');
      // Cập nhật lại state của thông tin người dùng sau khi cập nhật
      setUserInfo({
        fullName: newFullName,
        birthDate: newBirthDate,
        studentId: newStudentId,
        faculty: newFaculty,
        major: newMajor,
        email: newEmail,
        phone: newPhone
      });
    })
    .catch(err => {
      alert('Có lỗi xảy ra');
      console.log(err);
    });
  };

  return (
    <div className="settings">
      <h3>Thông tin cá nhân</h3>

      {/* Trường nhập liệu cho tên đầy đủ */}
      <div>
        <label><strong>Họ và tên:</strong></label>
        <input
          type="text"
          value={newFullName} // Lấy giá trị từ state
          onChange={(e) => setNewFullName(e.target.value)} // Cập nhật state khi người dùng nhập
        />
      </div>

      {/* Trường nhập liệu cho ngày sinh */}
      <div>
        <label><strong>Ngày sinh:</strong></label>
        <input
          type="date"
          value={newBirthDate} // Lấy giá trị từ state
          onChange={(e) => setNewBirthDate(e.target.value)} // Cập nhật state khi người dùng nhập
        />
      </div>

      {/* Trường nhập liệu cho mã sinh viên */}
      <div>
        <label><strong>Mã sinh viên:</strong></label>
        <input
          type="text"
          value={newStudentId} // Lấy giá trị từ state
          onChange={(e) => setNewStudentId(e.target.value)} // Cập nhật state khi người dùng nhập
        />
      </div>

      {/* Trường nhập liệu cho khoa */}
      <div>
        <label><strong>Khoa:</strong></label>
        <input
          type="text"
          value={newFaculty} // Lấy giá trị từ state
          onChange={(e) => setNewFaculty(e.target.value)} // Cập nhật state khi người dùng nhập
        />
      </div>

      {/* Trường nhập liệu cho ngành */}
      <div>
        <label><strong>Ngành:</strong></label>
        <input
          type="text"
          value={newMajor} // Lấy giá trị từ state
          onChange={(e) => setNewMajor(e.target.value)} // Cập nhật state khi người dùng nhập
        />
      </div>

      {/* Trường nhập liệu cho email */}
      <div>
        <label><strong>Email:</strong></label>
        <input
          type="email"
          value={newEmail} // Lấy giá trị từ state
          onChange={(e) => setNewEmail(e.target.value)} // Cập nhật state khi người dùng nhập
        />
      </div>

      {/* Trường nhập liệu cho số điện thoại */}
      <div>
        <label><strong>Số điện thoại:</strong></label>
        <input
          type="text"
          value={newPhone} // Lấy giá trị từ state
          onChange={(e) => setNewPhone(e.target.value)} // Cập nhật state khi người dùng nhập
        />
      </div>

      {/* Hiển thị thông tin hiện tại */}
      <div>
        <h4>Thông tin hiện tại</h4>
        <p><strong>Họ và tên:</strong> {userInfo.fullName}</p>
        <p><strong>Ngày sinh:</strong> {userInfo.birthDate}</p>
        <p><strong>Mã sinh viên:</strong> {userInfo.studentId}</p>
        <p><strong>Khoa:</strong> {userInfo.faculty}</p>
        <p><strong>Ngành:</strong> {userInfo.major}</p>
        <p><strong>Email:</strong> {userInfo.email}</p>
        <p><strong>Số điện thoại:</strong> {userInfo.phone}</p>
      </div>

      {/* Nút Cập nhật thông tin */}
      <button onClick={handleUpdate}>Cập nhật thông tin</button>
    </div>
  );
};

export default Settings;
