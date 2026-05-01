const authHeader = req.headers.authorization;

if (!authHeader) {
  return res.status(401).json({ message: "No token" });
}

const token = authHeader.split(" ")[1]; // 🔥 THIS LINE FIXES IT

try {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = decoded;
  next();
} catch {
  res.status(401).json({ message: "Invalid token" });
}