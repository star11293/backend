const path = require('path');
const fs = require('fs');

exports.submitApplication = (req, res) => {
  const data = req.body;
  const file = req.file;

  console.log("Received application:", data);

  const savePath = path.join(__dirname, '../uploads/applications.json');
  const savedData = fs.existsSync(savePath) ? JSON.parse(fs.readFileSync(savePath)) : [];
  savedData.push({ ...data, resume: file?.filename || null });
  fs.writeFileSync(savePath, JSON.stringify(savedData, null, 2));

  res.json({ message: "Application submitted successfully!" });
};

exports.submitContact = (req, res) => {
  const { name, email, message } = req.body;
  console.log("Contact form:", { name, email, message });

  res.json({ message: "Thank you for contacting us!" });
};