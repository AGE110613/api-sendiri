export default function handler(req, res) {
  const { count = 1, name = "User", region = "ID" } = req.query;
  const totalAkun = Math.min(parseInt(count), 1000);
  
  const accounts = [];
  for (let i = 0; i < totalAkun; i++) {
    accounts.push({
      uid: Math.floor(Math.random() * 900000000) + 100000000,
      password: `Pass_${Math.floor(Math.random() * 99999)}`,
      account_id: (Math.floor(Math.random() * 9000000000) + 1000000000).toString(),
      name: `${name}${Math.floor(Math.random() * 9999)}`,
      region: region.toUpperCase(),
      jwt_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    });
  }

  res.status(200).json({
    status: "success",
    message: "Free Fire Account Generator API — FAST",
    total: accounts.length,
    data: accounts
  });
}
