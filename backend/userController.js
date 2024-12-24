const User = require('../models/user'); // Giả sử bạn có model User
const bcrypt = require('bcryptjs');

// Hàm cập nhật thông tin người dùng
exports.updateUserInfo = async (req, res) => {
  const { userId, name, email, phone, address } = req.body; // Dữ liệu gửi lên từ client

  try {
    // Tìm kiếm người dùng theo ID
    let user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    // Cập nhật thông tin
    user.name = name || user.name;
    user.email = email || user.email;
    user.phone = phone || user.phone;
    user.address = address || user.address;

    // Lưu lại thông tin đã cập nhật
    await user.save();

    return res.json({ msg: 'User information updated successfully', user });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
