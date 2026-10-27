export default function handler(req, res) {
  const { count, name = "User", password = "Pass", region = "ID" } = req.query;

  // Kalau ga ada parameter 'count', tampilin halaman Status (kayak frostex)
  if (!count) {
    return res.status(200).json({
      device_pool_size: 2500,
      ip_pool_size: 64375,
      ua_pool_size: 1321,
      workers: 150,
      target_acc_per_sec: 100.0,
      message: "Free Fire Account Generator API — FAST",
      endpoint: "/api/v2/gen?count=1000&name=User&password=Pass&region=ID&debug=0"
    });
  }

  // Kalau lu nembak pake parameter ?count=1000, dia bakal ngasih 1000 akun (simulasi)
  const totalAkun = Math.min(parseInt(count), 1000); // Max 1000
  const accounts = [];

  for (let i = 0; i < totalAkun; i++) {
    accounts.push({
      uid: Math.floor(Math.random() * 900000000) + 100000000,
      password: `${password}_${Math.floor(Math.random() * 99999)}`,
      account_id: (Math.floor(Math.random() * 9000000000) + 1000000000).toString(),
      name: `${name}${Math.floor(Math.random() * 9999)}`,
      region: region.toUpperCase(),
      jwt_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    });
  }

  // Kasih response sukses
  res.status(200).json({
    status: "success",
    message: "Accounts Generated Successfully",
    total: accounts.length,
    data: accounts
  });
}
