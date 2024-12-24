const getStudentInfo = async (req, res) => {
    try {
      // Giả sử dữ liệu trả về từ database, nhưng tạm thời sẽ trả về dữ liệu cứng.
      const studentInfo = {
        company: "ABC Corp",
        supervisor: "Mr. John Doe",
        externalSupervisor: "Mr. Mike",
        companyDetails: "Company address and details",
        externalSupervisorDetails: "Supervisor contact info"
      };
      res.json(studentInfo);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  };
  