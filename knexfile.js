module.exports = {
  development: {
    client: "pg",
    connection: "postgres://localhost/gameknight01"
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL
  }
};