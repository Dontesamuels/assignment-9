// Example entries
await User.create({
  name: 'John Employee',
  email: 'john@company.com',
  password: hashedPassword, // make sure to hash with bcrypt
  role: 'employee'
});
await User.create({
  name: 'Sarah Manager',
  email: 'sarah@company.com',
  password: hashedPassword,
  role: 'manager'
});
await User.create({
  name: 'Mike Admin',
  email: 'mike@company.com',
  password: hashedPassword,
  role: 'admin'
});
