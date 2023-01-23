import pkg from "pg";

const { Pool } = pkg;

const DATABASE_URL="postgres://postgres:29062007@localhost:5432/tarefas_da_republica"

const connection = new Pool({
  connectionString: DATABASE_URL,
  //ssl: true,
});

export default connection;