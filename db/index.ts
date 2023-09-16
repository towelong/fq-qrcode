import mysql from 'serverless-mysql'

export const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    port: Number.parseInt(process.env.MYSQL_PORT!),
    database: process.env.MYSQL_DB,
    insecureAuth: true,
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  library: require('mysql2'),
})
